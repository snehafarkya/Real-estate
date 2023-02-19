import React from 'react'
import person from './person'
import { MdBathroom , MdOutlineBedroomParent} from 'react-icons/md';
import {BiBed} from "react-icons/bi"
import { Card,Grid,CardBody, Image, Flex, CardFooter} from '@chakra-ui/react';

export default function FlatFilter() {
  const data = person.filter((info) => info.gender === "Flats").map((item) => {
    return (
      <>
      <Flex flexDirection={"row"}>
        <Card w={"fit"}  background={"white"} m={"5"} justify={"center"} borderRadius={"12"} color={"black"}>
        <Image src={item.image} w={"xs"} p={"0"} borderTopRadius={"inherit"}/>

          <CardBody color="GrayText" fontSize={"0.8em"}>
            <p style={{color:"GrayText"}}><b style={{color:"#7065ee",fontSize:"1.6em"}}>${item.price}</b>/month</p>
            <p><b style={{color:"black",fontSize:"1.4em"}}>{item.name}</b></p>
            <p>{item.address}</p>
         
            </CardBody>

            <CardFooter borderTop={"2px solid #f6f6f6"} mx={"6"} justifyContent={"space-evenly"}>
            <p>{item.facility.map((fac)=>{
              return <>
              <Grid templateColumns={"auto auto auto"} color="GrayText" fontSize={"0.8em"} justifyContent={"space-between"} >
              <span style={{display:"flex", justifyContent:"center",margin:"0 7px "}}><BiBed style={{margin:"4px 1px",color:"#7065ee"}} /><span style={{}}>  {fac.bed}</span></span>
              <span style={{display:"flex", justifyContent:"center",margin:"0 7px "}}><MdOutlineBedroomParent style={{margin:"4px 1px",color:"#7065ee"}} /><span style={{}}>  {fac.room}</span></span>
              <span style={{display:"flex", justifyContent:"center",margin:"0 7px "}}><MdBathroom style={{margin:"4px 1px",color:"#7065ee"}} /><span style={{}}>  {fac.bed}</span></span>
              
              </Grid>
              </>
            })}</p>
            </CardFooter>
        </Card>
        </Flex>
      </>
    );
  });
  return (
    <div className='defaultCards'>
      {data}
    </div>
  )
}
