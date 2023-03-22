import { Button, Container } from "@chakra-ui/react";
import React, { useState } from "react";

const Pagination = ({ callHandleValue,page}) => {

  const handlePageChange =(value)=>{
    callHandleValue(page+value)
  }


  return (
    <>
      <Container
        w="100%"
        margin={"auto"}
        display={"flex"}
        justifyContent="center"
        gap="20px"
        data-testid="pagi-btn"
        marginTop={"20px" }
      >
        <Button isDisabled={page===1}  onClick={()=>{handlePageChange(-1)}}>Prev</Button>
        <Button>{page}</Button>
        <Button isDisabled={page===3} onClick={()=>{handlePageChange(1)}}>Next</Button>
      </Container>
    </>
  );
};

export default Pagination;
