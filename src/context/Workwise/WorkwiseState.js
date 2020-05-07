import React, { useReducer } from "react";
import WorkwiseContext from "./workwiseContext";
import WorkwiseReducer from "./workwiseReducer";
import {
    SET_CHECKED,
    TOGGLE_MENU,
    DISPLAY_COLOR_PICKER,
    CLOSE_COLOR_PICKER,
    CHANGE_COLOR,
    CONVERT_TO_HEX
} from "../types";

const WorkwiseState = props => {
    const initialState = {
     checked: false,
     ddOpen: false,
     displayColorPicker: false,
     color: {r: '0',g: '145',b: '74',a: '1'}
    };

    const [state, dispatch] = useReducer(WorkwiseReducer, initialState);

    //set checked
    const handleChange = () => {
        dispatch({ type: SET_CHECKED});
      };

    // Toggle menu
    const toggle = () => {
        dispatch({ type: TOGGLE_MENU});
    }

    // display color picker
    const handleClick = () => {
        dispatch({ type: DISPLAY_COLOR_PICKER});
      };

      // Close color picker
      const  handleClose = () => {
        dispatch({ type: CLOSE_COLOR_PICKER});
      };

      //change color
      const changeColor= (color) => {
        dispatch({type : CHANGE_COLOR});
        
      };

      //conver to hex
      const convertToHex = (result) => {
        const r = result[0];
         const g = result[1];
         const b = result[2];
         const rgbVal = 'rgb('+ r + ',' + g + ',' + b + ')';
         dispatch ({type: CONVERT_TO_HEX})
         //this.setState({rState:r})
           // console.log(color.r);
           // console.log(rgbToHex(r, g, b));
      };
    

    return (
        <WorkwiseContext.Provider
          value={{
           checked: state.checked,
           ddOpen: state.ddOpen,
           displayColorPicker: state.displayColorPicker,
           color: state.color,
           handleClick,
           handleClose,
           handleChange,
           toggle,
           changeColor,
           convertToHex
          }}
        >
          {props.children}
        </WorkwiseContext.Provider>
      );
    };

    export default WorkwiseState;