import axios from 'axios'

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,

    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,

    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,

    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    CLEAR_ERRORS,
    SAVE_PERSONAL_INFO,
    SAVE_CONTACT_INFO,
    CREATE_NEW_EVENT_REQUEST,
    CREATE_NEW_EVENT_FAIL,
    CREATE_NEW_EVENT_SUCCESS
} from '../constants/userConstants'

import {BASE_URI} from '../App'

// Login
export const login = (email, password) => async (dispatch) =>{
    try {
        dispatch({ type: LOGIN_REQUEST})

        const config = {
            headers: { 'Content-Type': 'application/json' }
        }

        // const { data } = await fetch("/.netlify/functions/middleware", {email, password} ,config);
        const { data } = await axios.post(`${BASE_URI}/auth/authenticate`, {email, password}, config)

        localStorage.setItem('token', data.token)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}

// Register User
export const register = (userData) => async (dispatch) =>{
    try {

        dispatch({ type: REGISTER_USER_REQUEST})

        const config = {
            headers: {'Content-Type': 'application/json'}
        }

        const { data } = await axios.post(`${BASE_URI}/auth/register`, userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            // payload: error.response.data.message
            payload: error.message
        })
    }
}

export const newEvent = ({details, logo}) => async (dispatch) =>{
    try {
        dispatch({type: CREATE_NEW_EVENT_REQUEST})

        const config = {
            headers: {
                'Content-Type':'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        const fileName  = await axios.post(`${BASE_URI}/api/uploadEventLogo`, logo, config);
        
        console.log(fileName);

        //Add the event logo path to the data and create the event
        // details.eventLogoUrl = fileName
        // config.headers['Content-Type'] = 'application/json'

        const { data } = await axios.post(`${BASE_URI}/event/eventdetails`, details, config)

        dispatch({
            type: CREATE_NEW_EVENT_SUCCESS,
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: CREATE_NEW_EVENT_FAIL,
            payload: error.response.data.message
        })
        
    }
}

export const savePersonalInfo = (data) => async (dispatch, getState) =>{
    
    dispatch({
        type: SAVE_PERSONAL_INFO,
        payload: data
    })
    // if(!data.firstName.length === 0)
    localStorage.setItem('personalInfo', JSON.stringify(data))
}

export const saveContactInfo = (data) => async (dispatch, getState) =>{
    
    dispatch({
        type: SAVE_CONTACT_INFO,
        payload: data
    })

    // if(!data.city.length === 0)
    localStorage.setItem('contactInfo', JSON.stringify(data))
}

// Update Profile
export const updateProfile = (userData) => async (dispatch) =>{
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST})

        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }

        const { data } = await axios.put('/api/v1/me/update', userData, config)

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Password
export const updatePassword = (passwords) => async (dispatch) =>{
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST})

        const config = {
            headers: {'Content-Type': 'application/json'}
        }

        const { data } = await axios.put('/api/v1/password/update', passwords, config)

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Forgot Password
export const forgotPassword = (email) => async (dispatch) =>{
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST})

        const config = {
            headers: {'Content-Type': 'application/json'}
        }

        const { data } = await axios.post('/api/v1/password/forgot', email, config)

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) =>{
    try {
        dispatch({ type: NEW_PASSWORD_REQUEST})

        const config = {
            headers: {'Content-Type': 'application/json'}
        }

        const { data } = await axios.put(`/api/v1/password/reset/${token}`, passwords, config)

        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Load User
export const loadUser = () => async (dispatch) =>{
    try {
        dispatch({ type: LOAD_USER_REQUEST})

        const { data } = await axios.get('/api/v1/me')

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Logout User
export const logout = () => async (dispatch) =>{
    try {

        await axios.get('/api/v1/logout')

        dispatch({
            type: LOGOUT_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get All Users (Admin)
export const allUsers = () => async (dispatch) =>{
    try {
        dispatch({ type: ALL_USERS_REQUEST})

        const { data } = await axios.get('/api/v1/admin/users')

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.users
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update user (Admin)
export const updateUser = (id, userData) => async (dispatch) =>{
    try {
        dispatch({ type: UPDATE_USER_REQUEST})

        const config = {
            headers: {'Content-Type': 'application/json'}
        }

        const { data } = await axios.put(`/api/v1/admin/user/${id}`, userData, config)

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get user details (Admin)
export const getUserDetails = (id) => async (dispatch) =>{
    try {
        dispatch({ type: USER_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/v1/admin/user/${id}`)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete user (Admin)
export const deleteUser = (id) => async (dispatch) =>{
    try {
        dispatch({ type: DELETE_USER_REQUEST})

        const { data } = await axios.delete(`/api/v1/admin/user/${id}`)

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}