import * as appActionTypes from "../actions/AppActionTypes";

const initialState = {
  ordersData: [],
  isLoading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case appActionTypes.ORDER_INIT:
      return {
        ...state,
        purchased: false,
        isLoading: true,
      };
    case appActionTypes.ORDER_INITATE:
      return {
        ...state,
        isLoading: true,
      };
    case appActionTypes.ORDER_SUCCESS:
      const orderInfo = { ...action.orderData, id: action.orderID };
      return {
        ...state,
        isLoading: false,
        ordersData: state.ordersData.concat(orderInfo),
        purchased: true,
      };
    case appActionTypes.ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case appActionTypes.FETCH_ORDERS_INIT:
    case appActionTypes.DELETE_ORDERS_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case appActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        ordersData: action.ordersData,
        isLoading: false,
      };
    case appActionTypes.FETCH_ORDERS_FAILED:
    case appActionTypes.DELETE_ORDERS_FAILED:
    case appActionTypes.DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case appActionTypes.RESET_APP_STATE:
      return initialState;
    default:
      return { ...state };
  }
};

export default reducer;
