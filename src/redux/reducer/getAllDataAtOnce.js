const getAllDataAtAonce = (state=[] , action)=>{
    switch (action.type) {
        case 'SET_ALL_ASSET_DATA_ONCE':
            return action.payload;
        default:
            return state;
    }
}

export default getAllDataAtAonce;