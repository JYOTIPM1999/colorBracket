import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <Box
      w={"50%"}
      display={"flex"}
      margin={"auto"}
      justifyContent={"space-around"}
    >
      <Link to="/">Signup</Link>
      <Link to="login">Login</Link>
    </Box>
  );
};
