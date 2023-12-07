import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { InputName } from "../Input/Input";

export const PrimaryButton = (props) => {

  const { title, color, bg, onClick } = props;
  return (
    <Button
      w={{base: "268px", md: "718px" }}
      h={{ base: "35px", md:"60px" }}
      mb="32px"
      color={color}
      bg={bg}
      fontSize={{ base: "15px", md: "20px" }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
