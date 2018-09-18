import axios from 'axios';
import {GET_TOPICS,ADD_TOPIC,DELETE_TOPIC, LOADING} from './types';

export const getTopics = () => dispatch => {
    axios.get('/api/topics').then(res => dispatch({
        type: GET_TOPICS,
        payload: res.data
    })// the .get router function in the backend returns a json promise which we then call .then getting the data and sending it as a payload to the dispatcher to reducer
    )
}

export const addTopic = (topic) => dispatch => {
    axios.post('api/topics', topic)
        .then(res => 
            dispatch({
                type: ADD_TOPIC, 
                payload: res.data
            }))
}

export const deleteTopic = (id) => dispatch => {
    axios.delete(`api/topics/${id}`).then(res =>
        dispatch({
            type: DELETE_TOPIC,
            payload: id
            })
    )
}

export const setTaskLoading = () => {
    return {
        type: LOADING
    }
}

