import React, { useReducer } from "react";
import DeliveriesContext from "./deliveriesContext";
import { v4 as uuid } from "uuid";
import deliveriesReducer from "./deliveriesReducer";
import {
  NEW_INVITE,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const DeliveriesState = props => {
  const initialState = {
    deliveries: [
      {
        id: 1,
        visitor: "Joseph Tioluwani",
        purpose: "deliveries",
        item: "dhl package",
        recipient: "Niyi Adisa",
        deliveryDate: "Mar 6, 2020",
        signedIn: "2:06pm"
      }
    ]
  };

  const [state, dispatch] = useReducer(deliveriesReducer, initialState);

  // New Delivery

  //Delete Contact

  //Set current Contact

  //Clear current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <DeliveriesContext.Provider
      value={{
        deliveries: state.deliveries
      }}
    >
      {props.children}
    </DeliveriesContext.Provider>
  );
};

export default DeliveriesState;
