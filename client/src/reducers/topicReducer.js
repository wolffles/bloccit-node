import {GET_TOPICS, ADD_TOPIC, DELETE_TOPIC, VIEW_TOPIC, LOADING} from '../actions/types.js';
const initialState = {
    topic: {},
    topics: [],
    posts: [], 
    loading: false
};
        
export default function( state = initialState, action) {
    switch(action.type) {
        case GET_TOPICS: 
            return {
                ...state, // we use a spread operator cuz we cant mutate the state we have to basically make a copy of it. data flow is  unidirectional.
                topics: action.payload
            }
        case DELETE_TOPIC:
            return {
                ...state, // state here is just a blank array
                topics: state.topics.filter(topic => topic._id !== action.payload)
            }

        case ADD_TOPIC: 
            return {
                ...state,
                topics: [action.payload, ...state.topics]
            }

        //create VIEW_TOPIC which shows posts for that topic via payload: response
        case VIEW_TOPIC: 
            return { 
                topic: action.payload
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