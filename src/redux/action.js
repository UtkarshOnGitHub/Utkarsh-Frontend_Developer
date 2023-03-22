import axios from "axios"
export const getAllAssetToShow = (params)=> async (dispatch)=>{
    try{
        const API = "https://api.spacexdata.com/v4";
        let res = await axios.post(`${API}/capsules/query` , {options:params});
        dispatch({type:"SET_ALL_ASSET_DATA" ,payload:res.data})
        return res.data
    }catch(e){
        console.log(e)
    }
}