import { filter } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./components/Pagination";
import { getAllAssetToShow , getAllDataAtOne} from "./redux/action";
import Banner from "./sections/Banner";
import Form from "./sections/Form";
import Showdata from "./sections/Showdata";

function App() {


  const dispatch =  useDispatch()
  const data = useSelector((store)=>store.getDataReducer);
  const allData = useSelector((store)=>store.getDataAtOnce)

  const [page,setPage] = useState(1)
  const [asset , setAsset] = useState([])


  const params ={
    page:page,
    limit:9
  }

  useEffect(() => {
    dispatch(getAllAssetToShow(params))
    dispatch(getAllDataAtOne())
  }, [page])


   useEffect(()=>{
    setAsset(data?.docs)
   },[data])


    const callHandleValue = (value)=>{
      setPage(value)
    } 

    const handlevaluesChange =(type,value)=>{
        let filtered = allData?.docs?.filter((e)=>{
          if(type=="type"){
            return e.type==value
          }
          if(type=="status"){
            return e.status==value
          }
        })
        setAsset(filtered)
    }


  
  return (
      <>
        <Banner/>
        <Form handlevaluesChange={handlevaluesChange}/>
        <Showdata asset={asset}/>
        <Pagination callHandleValue={callHandleValue} page={page}/>
      </>
  );
}

export default App;
