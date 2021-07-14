import React, { useReducer } from 'react';
import RequestContext from './requestContext';
import { v4 as uuid } from "uuid";
import requestReducer from './requestReducer';
import {
    NEW_REQUEST,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const RequestState = props => {
    const initialState = {
        requests: [
            {
                id: 1,
                description: 'Bad Projector',
                room: 'Conference Room',
                submittedBy: 'Niyi Adisa',
                assignedTo: 'Kamsi Kodi',
                status: 'Active',
                time: '10:00am'
            },
           
        ],
        assets: [
            {
                id: 1,
                title: 'Test',
                room: 'Conference Room',
                date: '28 Jan, 2020',
                duration: '8:00am-10:00am',
            }
        ]
    };


    const [state, dispatch] = useReducer(requestReducer, initialState);

    // New Request
    const newRequest = request => {
        request.id = uuid();
        dispatch({ type: NEW_REQUEST, payload: request });
      };

    //Delete Contact

    //Set current Contact

    //Clear current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <RequestContext.Provider
        value={{
            requests: state.requests,
            assets: state.assets,
            newRequest
        }}>
            { props.children }
        </RequestContext.Provider>
    )
};

export default RequestState;