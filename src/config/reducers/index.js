import {
  UPDATE_HUMAN_POSITION,
  UPDATE_FRUIT_POSITION,
  UPDATE_KEYBOARD_ACTION,
  UPDATE_TILES,
  UPDATE_SELECTED_FRUIT,
  UPDATE_FRUIT_COLLECTION,
  ADD_POINTS_TO_TOTAL,
  REMOVE_FRUIT_POSITION,
  UPDATE_GAME_STATUS,
  RESTART_GAME,
  UPDATE_TIMER,
  UPDATE_MATRIX,
} from "../constants/action-types";
const initialState = {
  human: { position: { row: 0, col: 2 } },
  fruit: { position: { row: 2, col: 0 } },
  humanFacing: "",
  keyBoardAction: "",
  tiles: [],
  fruitsCollection: [],
  total: 0,
  status: "",
  timer: { time: {}, seconds: 90 },
  isTimerRunning: true,
  rowCount: 3,
  colCount: 3,
};
function rootReducer(state = initialState, action = {}) {
  if (action.type === UPDATE_HUMAN_POSITION) {
    return Object.assign({}, state, {
      human: { position: action.payload },
    });
  } else if (action.type === UPDATE_FRUIT_POSITION) {
    return Object.assign({}, state, {
      fruit: { position: action.payload },
    });
  } else if (action.type === UPDATE_SELECTED_FRUIT) {
    return Object.assign({}, state, {
      fruit: Object.assign({}, state.fruit, { selectedFruit: action.payload }),
    });
  } else if (action.type == UPDATE_MATRIX) {
    return Object.assign({}, state, {
      rowCount: action.payload.rowCount,
      colCount: action.payload.colCount,
    });
  } else if (action.type === UPDATE_FRUIT_COLLECTION) {
    return Object.assign({}, state, {
      fruitsCollection: action.payload,
    });
  } else if (action.type == ADD_POINTS_TO_TOTAL) {
    return Object.assign({}, state, {
      total: state.total + action.payload,
    });
  } else if (action.type == UPDATE_KEYBOARD_ACTION) {
    const humanFacing = action.payload === "left" || action.payload === "right";
    if (humanFacing)
      return Object.assign({}, state, {
        keyBoardAction: action.payload,
        humanFacing: action.payload,
      });
    return Object.assign({}, state, { keyBoardAction: action.payload });
  } else if (action.type == UPDATE_TILES) {
    return Object.assign({}, state, { tiles: action.payload });
  } else if (action.type == REMOVE_FRUIT_POSITION) {
    let fruit = Object.assign({}, state);
    delete fruit.position;
    delete fruit.selectedFruit;
    return fruit;
  } else if (action.type == UPDATE_GAME_STATUS) {
    return Object.assign({}, state, {
      status: action.payload,
      isTimerRunning: false,
    });
  } else if (action.type == UPDATE_TIMER) {
    return Object.assign({}, state, {
      timer: Object.assign({}, state.timer, action.payload),
    });
  } else if (action.type == RESTART_GAME) {
    return Object.assign({}, state, {
      status: "",
      total: 0,
      human: { position: { row: 0, col: 2 } },
      fruit: { position: { row: 2, col: 0 } },
      keyBoardAction: "",
      timer: { time: {}, seconds: 90 },
      isTimerRunning: true,
    });
  }
  return state;
}
export default rootReducer;
