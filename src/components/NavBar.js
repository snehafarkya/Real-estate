import React from "react";
import {Link, Box, Flex, Text,Button,Stack,ButtonGroup,} from "@chakra-ui/react";
import logo from "../logo.png"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} background="white"  className="nav">
      <h1 style={{ color: "white", fontWeight: "bold", letterSpacing: "2px" }}>
      <img src={logo} alt="" />

      </h1>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" 
  style={{margin:"1em"}}
  >
    <title>Close</title>
    <path
      fill="#7065ee"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="#7065ee"
    style={{margin:"1em"}}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon  /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      // w={"full"}
      // background={"white"}
      // padding="6"
    >
      <Stack
        spacing={4}
        align="center"
        justify={["center", "space-between", "flex-start", "flex-start"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        color={"black"}
      >
     
        <MenuItem to="/" padding={"2"} paddingX="4" 
        _hover={{background: 'rgba(114, 104, 237, 0.3)',borderRadius: "6px"}}>Rent</MenuItem>
        <MenuItem to="/how" padding={"2"} paddingX="4"
        _hover={{background: 'rgba(114, 104, 237, 0.3)',borderRadius: "6px"}}> Buy </MenuItem>
        <MenuItem to="/faetures" padding={"2"} paddingX="4"
        _hover={{background: 'rgba(114, 104, 237, 0.3)',borderRadius: "6px"}}> Sell </MenuItem>
        <MenuItem to="/pricing" padding={"2"} paddingX="4"
        _hover={{background: 'rgba(114, 104, 237, 0.3)',borderRadius: "6px"}}> Manage Property </MenuItem>
        <MenuItem to="/pricing" padding={"2"} paddingX="4" isLast
        _hover={{background: 'rgba(114, 104, 237, 0.3)',borderRadius: "6px"}}> Resources </MenuItem>

        
          <ButtonGroup>
          <Button borderColor={"#7065ee"} color={"#7065ee"} variant="outline" 
            _hover={{background:"#e3d8fa"}}>
              Login
            </Button>
            <Button
              color={"white"}
              background={"#7065ee"}
              variant="solid"
              _hover={{ color: "black", background: "#e3d8fa" }}
            >
              Signup
            </Button>
            
          </ButtonGroup>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["white", "white", "white", "white"]}
      color={["white", "black", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

