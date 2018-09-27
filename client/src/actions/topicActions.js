import axios from 'axios';
import {GET_TOPICS, ADD_TOPIC, DELETE_TOPIC, VIEW_TOPIC, LOADING} from './types';

export const getTopics = () => dispatch => {
    console.log("topics get")
    axios.get('/api/topics/').then(res => dispatch({
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

export const viewTopic = (id) => dispatch => {
    console.log("made it to viewTopic front end", id)
    return axios.get(`/api/topics/${id}`).then(res => {
        console.log("viewTopic res", res.data);
        return dispatch({
            type: VIEW_TOPIC,
            payload: res.data
        });
    });
}

// hit endpoints for all our routes in actions. and the payload is the response from the routes

export const setTaskLoading = () => {
    return {
        type: LOADING
    }
}

