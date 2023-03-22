import { combineReducers } from 'redux';
import getAllDataAtAonce from './getAllDataAtOnce';
import getAssetDataReducer from './getassetData';



const reducers = combineReducers({
    getDataReducer:getAssetDataReducer,
    getDataAtOnce:getAllDataAtAonce
})


export default reducers;