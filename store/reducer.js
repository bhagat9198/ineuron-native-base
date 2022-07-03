import { ALL_ITEMS, ALL_ORDERS, USER_LOGOUT, USER_SETUP } from "./actions";

const initialState = {
  auth: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SETUP:
      return {
        ...state,
        auth: true,
        userData: action.data
      }
    case USER_LOGOUT:
      return {
        ...state,
        auth: false,
        userData: {}
      }
    case ALL_ITEMS:
      return {
        ...state,
        allItems: action.data
      }
    case ALL_ORDERS:
      return {
        ...state,
        allOrders: action.data
      }
    default:
      return state;
  }
};
export default reducer;