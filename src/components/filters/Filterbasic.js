// we are going to use filter method here with array only
import React, { useState } from "react";
import Cards from "./Cards";

import {
  Button,
  Flex,
  Box,
  Grid,
  Center,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import HouseFilter from "./HouseFilter";
import FlatFilter from "./FlatFilter";
import LowHouseFilter from "./LowPriceFilter";
import HighPriceFilter from "./HighPriceFilter";
import HigherPriceFilter from "./HigherPriceFilter";

export default function Filterbasic() {
  const [selectdata, setSelectdata] = useState(Cards);

  const showDataonSelect = (e) => {
    // e.preventDefault();

    if (e.target.value === "gender") {
      <HouseFilter />;
      setSelectdata(HouseFilter);
    } else if (e.target.value === "flat") {
      <FlatFilter />;
      setSelectdata(FlatFilter);
    } else if (e.target.value === "low") {
      <LowHouseFilter />;
      setSelectdata(LowHouseFilter);
    } else if (e.target.value === "high") {
      <HighPriceFilter />;
      setSelectdata(HighPriceFilter);
    } else if (e.target.value === "higher") {
      <HigherPriceFilter />;
      setSelectdata(HigherPriceFilter);
    } else if (e.target.value == null) {
      return "No match Found";
    }
  };

  return (
    <div>
      <Grid templateColumns={"auto auto"} marginX={"28"} justifyContent={"space-around"}>
        <Heading as={"h2"}>Search Property to Rent </Heading>
          <Input pr="4.5rem" placeholder="Search here" w={"sm"} />
      </Grid>
      <Flex justify={"center"} display={"flex"} gap={"10"} flexWrap={"wrap"}>
        <Flex
          w={"5xl"}
          m={"auto"}
          background={"white"}
          margin={"6"}
          p={"4"}
          gap={"12"}
          mb={"0"}
          justify={"space-evenly"}
        >
          <Box
            border={"none"}
            borderRight={"2px solid #f6f6f6"}
            borderRadius={"0"}
          >
            <label htmlFor="">Location:</label>
            <Text pt={"2"} pr={"4"} fontWeight={"bold"}>New York</Text>
          </Box>
          <Box
            border={"none"}
            borderRight={"2px solid #f6f6f6"}
            borderRadius={"0"}
            pr={"4"}
          >
            <label htmlFor="">When To: </label>
            <Input
              placeholder="Select Move-in date"
              size="sm"
              border={"none"}
              type="datetime-local"
              mt={"1"}
              p={"0"}
              pr={"4"}
              outline={"none"}
              _hover={{ border:"none" , outline:"red" }}
            />
          </Box>
          <Box
            border={"none"}
            borderRight={"2px solid #f6f6f6"}
            borderRadius={"0"}
            pr={"4"}
          >
            <label htmlFor="">Property Type: </label>
            <Select onChange={showDataonSelect} id="select" border={"none"} mt={"1"} >
              <option value="default">--Select--</option>
              <option value="gender" id="gender">
                Houses
              </option>
              <option value="flat" id="flat">
                Flats
              </option>
            </Select>
          </Box>
          <Box
            border={"none"}
            borderRight={"2px solid #f6f6f6"}
            borderRadius={"0"}
            pr={"4"}
          >
            <label htmlFor="">Price Sort: </label>
            <Select
              onChange={showDataonSelect}
              id="selectPrice"
              border={"none"}
              mt={"1"}
            >
              <option value="default">--Select--</option>
              <option value="low" id="low">
                {"<$2,000 "}
              </option>
              <option value="high" id="high">
              {"$2,000 - $ 8,000"}
              </option>
              <option value="higher" id="higher">
              {">$8,000 "}
              </option>
            </Select>
          </Box>
          <Box
            border={"none"}
            borderRadius={"0"}
            justifyContent={"center"}
            pr={"4"}
          >
            <Center h={"full"}>
            <Button background={"#7065ee"}>
              Search 
            </Button></Center>
          </Box>
        </Flex>
        <Box justifyContent={"center"} mt={"0"} pt={"0"}>
          <Grid
            marginTop={"4"}
            templateColumns="repeat(3, 1fr)"
            placeItems={"center"}
            justifyContent={"center"}
          >
            {selectdata}
          </Grid>
        </Box>
      </Flex>
    </div>
  );
}
