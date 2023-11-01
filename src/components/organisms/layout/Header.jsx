import { Link as ChakraLink } from "@chakra-ui/react";
import LogoImg from "../../../images/LogoImg.png";
import { Box, Img } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      className="header"
      bg="white"
      h="60px"
      w="100%"
      display="flex"
      lineHeight="60px"
      borderTop="2px solid #F06364"
      mb="40px"
    >
      <Box className="header-left" pl="145px" pt="15px">
        <Img
          className="header-img"
          src={LogoImg}
          alt="ホームケアナビアイコン"
        />
      </Box>
      <Box className="header-right" ml="auto" pr="145px" fontSize="13px">
        <Box className="header-list">
          <ChakraLink to={"#"} mr="20px">
            閲覧履歴
          </ChakraLink>
          <ChakraLink to={"#"} mr="20px">
            ブックマーク
          </ChakraLink>
          <ChakraLink to={"#"} mr="20px">
            予約履歴
          </ChakraLink>
          <ChakraLink to={"#"} mr="20px">
            お礼投稿履歴
          </ChakraLink>
          <ChakraLink to={"#"}>登録情報</ChakraLink>
        </Box>
      </Box>
    </Box>
  );
};
