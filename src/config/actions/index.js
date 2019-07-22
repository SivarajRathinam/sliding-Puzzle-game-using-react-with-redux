import { UPDATE_KEYBOARD_ACTION,UPDATE_TILES,UPDATE_HUMAN_POSITION,UPDATE_FRUIT_POSITION,UPDATE_SELECTED_FRUIT,UPDATE_FRUIT_COLLECTION,ADD_POINTS_TO_TOTAL,REMOVE_FRUIT_POSITION,UPDATE_GAME_STATUS,RESTART_GAME,UPDATE_TIMER,UPDATE_MATRIX} from "../constants/action-types";
export function updateKeyboardAction(payload) {
  return { type: UPDATE_KEYBOARD_ACTION, payload };
}
export function updateTiles(payload) {
  return { type: UPDATE_TILES, payload };
}
export function updateHumanPosition(payload) {
  return { type: UPDATE_HUMAN_POSITION, payload };
}
export function updateFruitPosition(payload) {
  return { type: UPDATE_FRUIT_POSITION, payload };
}
export function updateSelectedFruit(payload) {
  return { type: UPDATE_SELECTED_FRUIT, payload };
}
export function updateFruitCollection(payload){
	return {type : UPDATE_FRUIT_COLLECTION,payload}
}
export function addPointsToTotal(payload){
	return {type:ADD_POINTS_TO_TOTAL,payload}
}
export function removeFruitPosition(payload){
	return {type:REMOVE_FRUIT_POSITION,payload}	
}
export function updateGameStatus(payload){
	return {type:UPDATE_GAME_STATUS,payload}
}
export function restartGame(payload){
	return {type:RESTART_GAME,payload}
}
export function updateTimer(payload){
	return {type:UPDATE_TIMER,payload}
}
export function updateMatrix(payload){
	return {type:UPDATE_MATRIX,payload}	
}