import { Textarea } from "@chakra-ui/react";
import { useState } from "react";

export const InputDescription = (props) => {
  const { title, onChange } = props;

  return (
    <Textarea
      w={{ base: "268px", md: "718px" }}
      h={{ base: "185px", md: "261px" }}
      pl="20px"
      pt="10px"
      mb={{ base: "15px", md: "24px" }}
      placeholder={title}
      _placeholder={{ color: "#D9DEDE" }}
      onChange={onChange}
    />
  );
};
