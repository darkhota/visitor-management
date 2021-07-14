import React, { useReducer } from 'react';
import RoomContext from './roomContext';
import { v4 as uuid } from "uuid";
import roomReducer from './roomReducer';
import {
    NEW_ROOM,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const RoomState = props => {
    const initialState = {
        rooms: [
            {
                id: 1,
                title: 'Conference room',
                description: 'Good room',
                resources: 'HDMI, projector',
                manager: 'Kamsi Kodi',
            },
           
        ],
        bookings: [
            {
                id: 1,
                title: 'Test',
                room: 'Conference Room',
                date: '28 Jan, 2020',
                duration: '8:00am-10:00am',
            }
        ]
    };


    const [state, dispatch] = useReducer(roomReducer, initialState);

    // New Room
    const newRoom = room => {
        room.id = uuid();
        dispatch({ type: NEW_ROOM, payload: room });
      };

    //Delete Contact

    //Set current Contact

    //Clear current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <RoomContext.Provider
        value={{
            rooms: state.rooms,
            bookings: state.bookings,
            newRoom
        }}>
            { props.children }
        </RoomContext.Provider>
    )
};

export default RoomState;