const getAssetDataReducer = (state=[] , action)=>{
    switch (action.type) {
        case 'SET_ALL_ASSET_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default getAssetDataReducer;


