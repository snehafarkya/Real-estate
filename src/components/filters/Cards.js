import React from 'react'
import person from './person'
import { Card,Grid,CardBody, Image, Flex, CardFooter} from '@chakra-ui/react';
export default function Cards() {
  const data = person.map((item) => {
    return (
      <>
      <Flex flexDirection={"row"}>
        <Card w={"fit"}  background={"white"} m={"5"} justify={"center"} borderRadius={"12"} color={"black"}>
        <Image src={item.image} w={"xs"} p={"0"} borderTopRadius={"inherit"}/>

          <CardBody color="GrayText" fontSize={"0.8em"}>
            <p style={{color:"GrayText"}}><b style={{color:"#7065ee",fontSize:"1.6em"}}>${item.price}</b>/month</p>
            <p><b style={{color:"black",fontSize:"1.2em"}}>{item.name}</b></p>
            <p>{item.address}</p>
            
            </CardBody>

            <CardFooter borderTop={"2px solid #f6f6f6"} mx={"6"} justifyContent={"space-evenly"}>
            <p>{item.facility.map((fac)=>{
              return <>
              <Grid templateColumns={"auto auto auto"} color="GrayText" fontSize={"0.8em"} justifyContent={"space-between"} >
              <p style={{margin:"0 12px"}}>{fac.bed}</p>
              <p style={{margin:"0 12px"}}>{fac.room}</p>
              <p style={{margin:"0 12px"}}>{fac.bath}</p>
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
