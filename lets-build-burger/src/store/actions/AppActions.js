import * as appActionTypes from "./AppActionTypes";

export const resetAppState = () => {
  return {
    type: appActionTypes.RESET_APP_STATE,
  };
};
