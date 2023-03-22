import { Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ListCard from '../components/ListCard';
import Pagination from '../components/Pagination';
import { getAllAssetToShow } from '../redux/action';






const ShowData = () => {

  const dispatch =  useDispatch()
  const data = useSelector((store)=>store.getDataReducer);


  const [page,setPage] = useState(1)

  console.log(data)

  const params ={
    page:page,
    limit:9
  }

  useEffect(() => {
    dispatch(getAllAssetToShow(params))
  }, [page])

   const callHandleValue = (value)=>{
      setPage(value)
   }  
  return (
    <>
    <SimpleGrid columns={[1, 2, 3]} gap="40px" p={"20px"} >

        {
          data?.docs?.map((e)=>{
            return <ListCard data ={e}/>
          })
        }
      </SimpleGrid>
      <Pagination callHandleValue={callHandleValue} page={page}/>
    </>
  );
};

export default ShowData;