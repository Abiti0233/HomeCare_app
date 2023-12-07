import { Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export const InputName = (props) => {
  const { title, onChange } = props;
  return (
    <Input
      w={{ base: "268px", md: "718px" }}
      h={{ base: "35px", md: "44px" }}
      mb="24px"
      pl="20px"
      placeholder={title}
      _placeholder={{ color: "#D9DEDE" }}
      onChange={onChange}
    />
  );
};

export const InputMailaddress = (props) => {
  const { title, onChange } = props;
  return (
    <Input
      w={{ base: "268px", md: "718px" }}
      h={{ base: "35px", md: "44px" }}
      mb="24px"
      pl="20px"
      placeholder={title}
      _placeholder={{ color: "#D9DEDE" }}
      onChange={onChange}
    />
  );
};

