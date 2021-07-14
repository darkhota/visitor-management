import React, { useReducer } from 'react';
import EmployeeContext from './employeeContext';
import { v4 as uuid } from "uuid";
import employeeReducer from './employeeReducer';
import {
    NEW_EMPLOYEE,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const EmployeeState = props => {
    const initialState = {
        employees: [
            {
                id: 1,
                empName: 'Joseph Tioluwani',
                accountType: 'visitor',
                gender: 'Male',
                company: 'Techbarn',
                email: 'tioluwanijoseph@gmail.com',
                status: 'Active',
            },
        ]
    };


    const [state, dispatch] = useReducer(employeeReducer, initialState);

    // New Employee
    const newEmployee = employee => {
        employee.id = uuid();
        dispatch({ type: NEW_EMPLOYEE, payload: employee });
      };

    //Delete Contact

    //Set current Contact

    //Clear current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <EmployeeContext.Provider
        value={{
            employees: state.employees,
            newEmployee
        }}>
            { props.children }
        </EmployeeContext.Provider>
    )
};

export default EmployeeState;