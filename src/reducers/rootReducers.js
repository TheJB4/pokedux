import { combineReducers } from "redux";
import dataSlice from "../slices/dataSlice";
import uiSlice from "../slices/uiSlice";

const rootReducer = combineReducers({
    data: dataSlice,
    ui:uiSlice
})

export {rootReducer}