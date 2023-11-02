import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const PrimaryButton = (props) => {
  const navigate = useNavigate();

  const onClickContactComplete = () => navigate("/contactcomplete");
  const { title, color, bg } = props;
  return (
    <Button
      onClick={onClickContactComplete}
      w={{base: "268px", md: "718px" }}
      h="60px"
      mb="32px"
      color={color}
      bg={bg}
      fontSize={{ base: "10px", md: "20px" }}
    >
      {title}
    </Button>
  );
};
