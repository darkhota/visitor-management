import React, { useReducer } from 'react';
import InviteContext from './inviteContext';
import { v4 as uuid } from "uuid";
import inviteReducer from './inviteReducer';
import {
    NEW_INVITE,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const InviteState = props => {
    const initialState = {
        invites: [
            {
                id: 1,
                visitor: 'Joseph Tioluwani',
                purpose: 'visitor',
                invitedBy: 'Niyi Adisa',
                privateNotes: 'come early',
                dueAt: 'Mar 6, 2020',
            },
            {
                id: 2,
                visitor: 'Joseph Tioluwani',
                purpose: 'visitor',
                invitedBy: 'Niyi Adisa',
                privateNotes: 'come early',
                dueAt: 'Mar 6, 2020',
            },
            {
                id: 3,
                visitor: 'Joseph Tioluwani',
                purpose: 'visitor',
                invitedBy: 'Niyi Adisa',
                privateNotes: 'come early',
                dueAt: 'Mar 6, 2020',
            },
        ]
    };


    const [state, dispatch] = useReducer(inviteReducer, initialState);

    // New Invite
    const newInvite = invite => {
        invite.id = uuid();
        dispatch({ type: NEW_INVITE, payload: invite });
      };

    //Delete Contact

    //Set current Contact

    //Clear current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <InviteContext.Provider
        value={{
            invites: state.invites,
            newInvite
        }}>
            { props.children }
        </InviteContext.Provider>
    )
};

export default InviteState;