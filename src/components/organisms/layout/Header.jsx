import { Link as ChakraLink, IconButton } from "@chakra-ui/react";
import LogoImg from "../../../images/LogoImg.png";
import { Box, Img } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <Box
      className="header"
      bg="white"
      h="60px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="44vw"
      borderTop="2px solid #F06364"
      mb="40px"
      w="100vw"
    >
      <Box className="header-left" >
        <Img
          className="header-img"
          src={LogoImg}
          alt="ホームケアナビアイコン"
        />
      </Box>
      <Box className="header-right" fontSize="13px">
        <Box className="header-list" display={{ base: "none", lg: "flex" }}>
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
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", lg: "none" }}
          color="black"
          position="absolute"
          right="20px"
          top="15px"
        />
      </Box>
    </Box>
  );
};
