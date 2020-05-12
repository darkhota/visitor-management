import { SET_CHECKED, TOGGLE_MENU, DISPLAY_COLOR_PICKER, CLOSE_COLOR_PICKER, CHANGE_COLOR, CONVERT_TO_HEX } from "../types";

export default (state, action) => {
  switch (action.type) {
    
      case DISPLAY_COLOR_PICKER:
          return{
              ...state,
              displayColorPicker: !state.displayColorPicker
          }
          case CLOSE_COLOR_PICKER:
              return{
                  ...state,
                  displayColorPicker: false
              }
    case TOGGLE_MENU:
      return {
        ...state,
        ddOpen: !state.ddOpen
      };
    /*case SET_CHECKED:
      return {
        ...state,
        checked: !state.checked
      };
      */
    default:
      return state;
  }
};
