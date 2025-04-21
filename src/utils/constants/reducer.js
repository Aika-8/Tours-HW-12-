import { TOUR_APP_TYPES } from "./generals";

export const reducer = (state, action) => {
  switch (action.type) {
    case TOUR_APP_TYPES.TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case TOUR_APP_TYPES.URL:
      return {
        ...state,
        url: action.payload,
      };
    case TOUR_APP_TYPES.PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case TOUR_APP_TYPES.DATE:
      return {
        ...state,
        date: action.payload,
      };
    case TOUR_APP_TYPES.DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case TOUR_APP_TYPES.RESET:
      return {
        ...state,
        title: "",
        url: "",
        price: "",
        date: "",
        description: "",
      };
    default:
      return state;
  }
};
