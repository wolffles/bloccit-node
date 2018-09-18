import {GET_TOPICS, ADD_TOPIC, DELETE_TOPIC, LOADING} from '../actions/types.js';
const initialState = {
    topics: [],
    loading: false
};
        
export default function( state = initialState, action) {
    switch(action.type) {
        case GET_TOPICS: 
            return {
                ...state, // we use a spread operator cuz we can mutate the state we have to basically make a copy of it. data flow is  unidirectional.
                topics: action.payload
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.payload)
            }

        case ADD_TOPIC: 
            return {
                ...state,
                topics: [action.payload, ...state.topics]
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }
}