import { Chassis, PartsState } from "../PartTypes";

export type PartsAction = { type: "LOAD_CHASSIS"; payload: Chassis[] };

export const inititalState: PartsState = {
  chassis: [],
};

export const partsReducer = (
  state: PartsState = inititalState,
  action: PartsAction
): PartsState => {
  switch (action.type) {
    case "LOAD_CHASSIS":
      return {
        ...state,
        chassis: action.payload,
      };
    default:
      return state;
  }
};
