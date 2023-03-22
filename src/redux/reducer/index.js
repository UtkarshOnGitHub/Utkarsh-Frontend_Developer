import { combineReducers } from 'redux';
import getAssetDataReducer from './getassetData';



const reducers = combineReducers({
    getDataReducer:getAssetDataReducer
})


export default reducers;