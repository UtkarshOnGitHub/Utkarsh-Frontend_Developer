import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';



const ShowData = ({asset}) => {
  if(asset?.length==0){
    return(
      <Box textAlign={"center"}>
          <Text fontSize={"4xl"} as="em" color={"grey"}>"No data"</Text>
      </Box>
      
    )
  }  


  return (
    <>
    <SimpleGrid columns={[1, 2, 3]} gap="40px" p={"20px"} >

        {
          asset?.map((e)=>{
            return <ListCard key={e.id} data ={e}/>
          })
        }
      </SimpleGrid>
      
    </>
  );
};

export default ShowData;