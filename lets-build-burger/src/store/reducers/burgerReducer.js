import * as appActionTypes from "../actions/AppActionTypes";
import { updateObj } from "../../shared/obj-updator";
import { INGREDIENTS } from "../../utils/app-constants";

const initialState = {
  [INGREDIENTS]: null,
  totalPrice: 4,
  errorData: false,
  isBurgerBuilding: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.2,
  bacon: 2.0,
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObj(state.ingredients, updatedIngredient);
  const updatedState = {
    isBurgerBuilding: true,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    ingredients: updatedIngredients,
  };

  return updateObj(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngredients = updateObj(state.ingredients, updatedIngredient);
  const updatedState = {
    isBurgerBuilding: true,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    ingredients: updatedIngredients,
  };

  return updateObj(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case appActionTypes.ADD_INGREDIANT:
      return addIngredient(state, action);

    case appActionTypes.REMOVE_INGREDIANT:
      return removeIngredient(state, action);

    case appActionTypes.RESET_INGREDIANTS:
      return initialState;

    case appActionTypes.SET_INGREDIANTS:
      return {
        ...state,
        ingredients: action.ingredients,
        errorData: false,
        totalPrice: initialState.totalPrice,
        isBurgerBuilding: false,
      };

    case appActionTypes.FETCH_INGREDIANTS_FAILED:
      return updateObj(state, {errorData: true});

    default:
      return { ...state };
  }
};

export default reducer;
