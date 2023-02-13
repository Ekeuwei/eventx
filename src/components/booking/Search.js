import React from 'react'
import { useState } from 'react'

const Search = ({history, match}) => {
    const [keyword, setKeyword] = useState(match)

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(keyword.trim()){
            history.push(`/booking/search/${keyword}`)
        }else{
            history.push('/')
        }
    }
  return (
    <form className='full-width' onSubmit={handleSubmit}>
        <div className="input">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input 
            type="text" 
            placeholder="What event are you looking for..." 
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            />
          <i class="fa fa-sliders" aria-hidden="true"></i>
        </div>
    </form>
  )
}

export default Search