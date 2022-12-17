const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const RESET = "counter/RESET";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const reset = () => ({ type: RESET });

const initialState = {
  quantity: 1,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case DECREASE:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case RESET:
      return {
        ...state,
        quantity: (state.quantity = 1),
      };
    default:
      return state;
  }
}
