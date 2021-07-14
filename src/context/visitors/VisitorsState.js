import React, { useReducer } from 'react';
import VisitorContext from './visitorsContext';
import visitorReducer from './visitorsReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const VisitorsState = props => {
    const initialState = {
        visitors: [
            {
                id: 1,
                image: <img src="img/user/02.jpg"></img>,
                visitor: 'Joseph Tioluwani',
                purpose: 'visitor',
                host: 'Niyi Adisa',
                privateNotes: 'come early',
                date: 'Mar 6, 2020',
                signedIn: '2:06 pm',
                signedOut: '2:35pm',
                checkedOutBy: 'Ilyas'
            },
            {
                id: 2,
                image: <img src="img/user/02.jpg"></img>,
                visitor: 'Kamsi Kodi',
                purpose: 'visitor',
                host: 'Niyi Adisa',
                privateNotes: 'come early',
                date: 'Mar 6, 2020',
                signedIn: '2:06 pm',
                signedOut: '2:35pm',
                checkedOutBy: 'Ilyas'
            },
            {
                id: 3,
                image: <img src="img/user/02.jpg"></img>,
                visitor: 'John Terri',
                purpose: 'visitor',
                host: 'Niyi Adisa',
                privateNotes: 'come early',
                date: 'Mar 6, 2020',
                signedIn: '2:06 pm',
                signedOut: '2:35pm',
                checkedOutBy: 'Ilyas'
            }
        ],

        devices: [
            {
                deviceName: 'ipad',
                deviceStatus: 'operational',
                deviceType: 'iPad (9.7-inch)',
                deviceOS: 'iOS - 13.3.1',
                deviceIP: '192.168.1.17'
            },
            {
                deviceName: 'Samsung',
                deviceStatus: 'disabled',
                deviceType: 'Samsung (11-inch)',
                deviceOS: 'android - 8.3.1',
                deviceIP: '192.168.8.1'
            }



        ]
    };


    const [state, dispatch] = useReducer(visitorReducer, initialState);

    // Add Contact

    //Delete Contact

    //Set current Contact

    //Clear current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <VisitorContext.Provider
        value={{
            visitors: state.visitors,
            devices: state.devices
        }}>
            { props.children }
        </VisitorContext.Provider>
    )
};

export default VisitorsState;