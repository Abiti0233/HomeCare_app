import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const DrawerButton = (props) => {
  const navigate = useNavigate();

  const onClickContactComplete = () => navigate({nav});
  const { title, color, bg, nav } = props;
  return (
    <Button
      onClick={onClickContactComplete}
      w="100%"
      h="60px"
      mb="20px"
      color="black"
      bg="white"
    >
      {title}
    </Button>
  );
};
