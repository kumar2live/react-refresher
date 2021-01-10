import AppAxios from "../../utils/app-axios";

import * as appActionTypes from "./AppActionTypes";
import { INGREDIENT_NAME, INGREDIENTS } from "../../utils/app-constants";

export const addIngredient = (payload) => {
  return { type: appActionTypes.ADD_INGREDIANT, [INGREDIENT_NAME]: payload };
};

export const removeIngredient = (payload) => {
  return { type: appActionTypes.REMOVE_INGREDIANT, [INGREDIENT_NAME]: payload };
};

export const fetchIngredients = () => {
  return (dispatch) => {
    AppAxios.get(`/${INGREDIENTS}.json`)
      .then((res) => {
        console.log(res);

        dispatch(fetchIngredientsSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchIngredientsFailed());
      });
  };
};

export const fetchIngredientsFailed = () => {
  return { type: appActionTypes.FETCH_INGREDIANTS_FAILED };
};

export const fetchIngredientsSuccess = (payload) => {
  return { type: appActionTypes.SET_INGREDIANTS, [INGREDIENTS]: payload };
};

export const resetIngredient = () => {
  return { type: appActionTypes.RESET_INGREDIANTS };
};
