import AppAxios from "../../utils/app-axios";

import * as appActionTypes from "./AppActionTypes";
import { ORDERS } from "../../utils/app-constants";

export const fetchOrdersInit = () => {
  return {
    type: appActionTypes.FETCH_ORDERS_INIT,
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersInit());
    const queryParams = `?auth=${token}$orderBy="userId"&equalTo="'${userId}'"`;
    console.log("queryParams: ", queryParams);

    AppAxios.get(`/${ORDERS}.json${queryParams}`)
      .then((res) => {
        console.log("response -- ", res);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        console.log("fetchedOrders -- ", fetchedOrders);

        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFailed(err));
      });
  };
};

export const fetchOrdersSuccess = (payload) => {
  return {
    type: appActionTypes.FETCH_ORDERS_SUCCESS,
    [ORDERS]: payload,
  };
};

export const fetchOrdersFailed = (payload) => {
  return {
    type: appActionTypes.FETCH_ORDERS_FAILED,
    error: payload,
  };
};

export const deleteOrdersInit = () => {
  return {
    type: appActionTypes.DELETE_ORDERS_INIT,
  };
};

export const deleteOrders = (orderID, token, userId) => {
  return (dispatch) => {
    dispatch(deleteOrdersInit());

    AppAxios.delete(`/${ORDERS}/${orderID}.json?auth=${token}`)
      .then((response) => {
        console.log("response --- ", response);
        dispatch(fetchOrders(token, userId));
      })
      .catch((error) => {
        console.log("err -- ", error);
        dispatch(deleteOrdersFailed(error));
      });
  };
};

export const deleteOrdersSuccess = () => {
  return {
    type: appActionTypes.DELETE_ORDERS_SUCCESS,
  };
};

export const deleteOrdersFailed = (payload) => {
  return {
    type: appActionTypes.DELETE_ORDERS_FAILED,
    error: payload,
  };
};

export const burgerOrderInit = () => {
  return {
    type: appActionTypes.ORDER_INITATE,
  };
};

export const burgerOrder = (orderData, token) => {
  return (dispatch) => {
    dispatch(burgerOrderInit());

    AppAxios.post(`/${ORDERS}.json?auth=${token}`, orderData)
      .then((response) => {
        console.log("response -- ", response);
        dispatch(burgerOrderSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        console.log("error -- ", error);
        dispatch(burgerOrderFailed(error));
      });
  };
};

export const burgerOrderSuccess = (ID, orderData) => {
  return {
    type: appActionTypes.ORDER_SUCCESS,
    orderID: ID,
    orderData: orderData,
  };
};

export const burgerOrderFailed = (payload) => {
  return {
    type: appActionTypes.ORDER_FAILED,
    error: payload,
  };
};
