import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { newEvent } from '../../actions/userActions'

import imgg from '../../images/event-prev.png'

const CreateEvent = ({handleClose}) => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        title: "",
        category: "",
        salesEndDate: "",
        fromDate: "",
        toDate: "",
        eventLogoUrl: imgg,
        eventType: 0,
        location:[],
        ticket: []
    })

    const [location, setLocation] = useState({
        id: Date.now(),
        state:"",
        lga:"",
        town:"",
        street:"",
        num_entries: 0,
        capacity: 0,
        alert_point: 0
    })

    const [ticket, setTicket] = useState({
        id: Date.now(),
        ticket_name:"",
        price:0,
        qty:0
    })

    const onChange = e => {
        if(e.target.name === 'event-logo'){
            // const reader = new FileReader();

            // reader.onload = () => {
            //     if(reader.readyState === 2){
            //         // setAvatarPreview(reader.result)
            //         // setAvatar(reader.result)
            //         setData((prevData)=> ({...prevData, eventLogoUrl:reader.result}))
            //     }
            // }

            // reader.readAsDataURL(e.target.files[0])

            setData((prevData)=> ({...prevData, eventLogoUrl:e.target.files[0]}))

        } else {
            setTicket((prev)=> ({...prev, [e.target.name]:e.target.value}))
            setLocation((prev)=>({...prev, [e.target.name]:e.target.value}))
            setData({ ...data, [e.target.name]: e.target.value })
        }
    }

    const adjust = (target, value)=> {
        setLocation((prev)=>({...prev, [target]:Math.max(0, parseInt(prev[target])+value)}))
    }

    const remove = (id, item)=>{
        setData(prev => {
            const newData = prev[item].filter(el => el.id !== id)

            return {...prev, [item]:newData}
        })
    }

    const addLocation = ()=>{
        setData(prev=> ({
            ...prev, location:[...prev.location, location]
        }))

        setLocation({
            id:Date.now(),
            state:"",
            lga:"",
            town:"",
            street:"",
            num_entries: 0,
            capacity: 0,
            alert_point: 0
        })
    }

    const addTicket = ()=>{
        setData(prev=> ({
            ...prev, ticket:[...prev.ticket, ticket]
        }))

        setTicket({
            id:Date.now(),
            ticket_name:"",
            price:0,
            qty:0
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        const formData = new FormData();

        formData.append("file", data.eventLogoUrl)


        dispatch(newEvent({details:data, logo:formData}));

    }


    return (
        <Fragment>
            <section class="rounded-corner bg-white p-2">
                <form class="container p-2" onSubmit={handleSubmit}>
                    <div class="d-flex align-items-center mb-3 justify-content-between">
                        <h4 class="fw-bold mb-0">NEW EVENT</h4>
                        <button
                        type="button"
                        class="btn-close ms-auto p-2"
                        onClick={handleClose}
                        ></button>
                    </div>
                    <div className="image-preview">
                        <img src={data.eventLogoUrl} alt="event-logo" />
                        <input 
                            name="event-logo"
                            type="file" 
                            class="form-control" 
                            id="event-logo"
                            onChange={onChange}
                        />
                    </div>
                    <div class="mb-3 bg-form ps-2">
                        <span class="badge ps-0 text-muted text-uppercase">
                        Event title
                        </span>
                        <input
                        type="text"
                        class="form-control shadow-none text-dark"
                        value={data.title}
                        name="title"
                        id="title"
                        onChange={onChange}
                        />
                    </div>
                    <div class="mb-3 bg-form ps-2">
                        <span class="badge ps-0 text-muted text-uppercase">Category</span>
                        <input
                        type="text"
                        class="form-control shadow-none text-dark"
                        value={data.category}
                        name="category"
                        id="category"
                        onChange={onChange}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <div class="bg-form ps-2 col-6">
                            <span class="badge ps-0 text-muted text-uppercase">From</span>
                            <input
                            type="date"
                            class="form-control shadow-none text-dark"
                            value={data.fromDate}
                            onChange={onChange}
                            name="fromDate"
                            id="fromDate"
                            />
                        </div>
                        <div class="bg-form ps-2 col-6">
                            <span class="badge ps-0 text-muted text-uppercase">To</span>
                            <input
                            type="date"
                            class="form-control shadow-none text-dark"
                            value={data.toDate}
                            onChange={onChange}
                            name="toDate"
                            id="toDate"
                            />
                        </div>
                    </div>
                    <div class="mb-3 bg-form ps-2">
                        <span class="badge ps-0 text-muted text-uppercase">Sales Ends</span>
                        <input
                        type="date"
                        class="form-control shadow-none text-dark"
                        value={data.salesEndDate}
                        name="salesEndDate"
                        id="salesEndDate"
                        onChange={onChange}
                        />
                    </div>
                    <h4>Location(s)</h4>
                    {data.location.map(entry => (
                        <div key={entry.id} className="mb-3 bg-primary p-1 rounded-3">
                            <div className="d-flex align-items-center">
                                <div className='w-100'>
                                    <h5>{`${entry.lga}, ${entry.state}`}</h5>
                                    <p className='m-1'>{`${entry.street}, ${entry.town}`}</p>
                                </div>
                                <i class="fa fa fa-times p-2" aria-hidden="true" onClick={()=>remove(entry.id, 'location')}></i>
                            </div>
                        </div>
                    ))
                    }
                    <div class="mb-3 bg-form ps-2">
                        <span class="badge ps-0 text-muted text-uppercase">Address</span>
                        <input
                        type="text"
                        class="form-control shadow-none text-dark"
                        value={location.street}
                        id="street"
                        name='street'
                        onChange={onChange}
                        />
                    </div>
                    <div class="mb-3 bg-form ps-2">
                        <span class="badge ps-0 text-muted text-uppercase">Town</span>
                        <input
                        type="text"
                        class="form-control shadow-none text-dark"
                        value={location.town}
                        id="town"
                        name='town'
                        onChange={onChange}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <div class="bg-form ps-2 col-6">
                            <span class="badge ps-0 text-muted text-uppercase">State</span>
                            <input
                            type="text"
                            class="form-control shadow-none text-dark"
                            value={location.state}
                            onChange={onChange}
                            name="state"
                            id="state"
                            />
                        </div>
                        <div class="bg-form ps-2 col-6">
                            <span class="badge ps-0 text-muted text-uppercase">LGA</span>
                            <input
                            type="text"
                            class="form-control shadow-none text-dark"
                            value={location.lga}
                            onChange={onChange}
                            name="lga"
                            id="lga"
                            />
                        </div>
                    </div>
                    <div class="d-flex mb-3 column">
                        <div class="col-8 my-auto">
                        <div class="bg-form">
                            <span class="badge ps-0 text-muted text-uppercase">
                            Max participants
                            </span>
                            <input
                            type="text"
                            class="form-control shadow-none text-dark"
                            value={location.capacity}
                            id="capacity"
                            name='capacity'
                            onChange={onChange}
                            />
                        </div>
                        </div>
                        <div class="col-2 my-auto text-center">
                            <button class="btn btn-circle" type="button" onClick={()=> adjust('capacity', -1)}>
                                -
                            </button>
                        </div>
                        <div class="col-2 my-auto text-center">
                            <button class="btn btn-circle" type="button" onClick={()=>adjust('capacity', 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <div class="d-flex mb-3 column">
                        <div class="col-8 my-auto">
                            <div class="bg-form">
                                <span class="badge ps-0 text-muted text-uppercase">
                                Alert point
                                </span>
                                <input
                                type="text"
                                class="form-control shadow-none text-dark"
                                value={location.alert_point}
                                id="alert_point"
                                name='alert_point'
                                onChange={onChange}
                                />
                            </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <button class="btn btn-circle" type="button" onClick={()=>adjust('alert_point', -1)}>
                                    -
                                </button>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <button class="btn btn-circle" type="button" onClick={()=>adjust('alert_point', 1)}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div class="d-flex mb-3 column">
                            <div class="col-8 my-auto">
                            <div class="bg-form">
                                <span class="badge ps-0 text-muted text-uppercase">
                                number of Entries
                                </span>
                                <input
                                type="text"
                                class="form-control shadow-none text-dark"
                                value={location.num_entries}
                                id="num_entries"
                                name='num_entries'
                                onChange={onChange}
                                />
                            </div>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <button class="btn btn-circle" type="button" onClick={()=>adjust('num_entries', -1)}>
                                    -
                                </button>
                            </div>
                            <div class="col-2 my-auto text-center">
                                <button class="btn btn-circle" type="button" onClick={()=>adjust('num_entries', 1)}>
                                    +
                                </button>
                            </div>
                        </div>

                    <div class="d-grid gap-2 my-4">
                        <button class="btn" type="button" onClick={addLocation}>
                        ADD LOCATION
                        </button>
                    </div>
                    <h4>Location(s)</h4>
                    {data.ticket.map(entry => (
                        <div key={entry.id} className="mb-3 bg-primary p-1 rounded-3">
                            <div className="d-flex align-items-center">
                                <h5 className='w-100'>{`${entry.ticket_name} @ ${entry.price} (${entry.qty})`}</h5>
                                <i class="fa fa-times p-2" aria-hidden="true" onClick={()=>remove(entry.id, 'ticket')}></i>
                            </div>
                        </div>
                    ))
                    }
                    <div class="mb-3 bg-form ps-2">
                        <span class="badge ps-0 text-muted text-uppercase">Ticket</span>
                        <input
                        type="text"
                        class="form-control shadow-none text-dark"
                        placeholder='Regular'
                        value={ticket.ticket_name}
                        id="ticket_name"
                        name='ticket_name'
                        onChange={onChange}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <div class="bg-form ps-2 col-6">
                            <span class="badge ps-0 text-muted text-uppercase">Price</span>
                            <input
                            type="text"
                            class="form-control shadow-none text-dark"
                            placeholder='$100'
                            value={ticket.price===0?'':ticket.price}
                            onChange={onChange}
                            name="price"
                            id="price"
                            />
                        </div>
                        <div class="bg-form ps-2 col-6">
                            <span class="badge ps-0 text-muted text-uppercase">Qty</span>
                            <input
                            type="text"
                            class="form-control shadow-none text-dark"
                            placeholder='0'
                            value={ticket.qty===0?'':ticket.qty}
                            onChange={onChange}
                            name="qty"
                            id="qty"
                            />
                        </div>
                    </div>
                    <div class="d-grid gap-2 my-4">
                        <button class="btn" type="button" onClick={addTicket}>
                        ADD TICKET
                        </button>
                    </div>
                    <div class="d-grid gap-2 my-4">
                        <button class="btn btn-success" type="submit">
                        CREATE EVENT
                        </button>
                    </div>
                </form>
            </section>
        </Fragment>
    );
}

export default CreateEvent