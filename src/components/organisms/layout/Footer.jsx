import { Box, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      className="footer"
      bg="white"
      h="50px"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="55vw"
      position="fixed"
      bottom="0"
    >
      <Box className="footer-left" display="flex">
        <Box
          className="footer-title"
          fontSize="14px"
          color="#3B4043"
          fontWeight="bold"
        >
          ホームケアナビ
        </Box>
        <Box ml="24px" fontSize="10px" color="#98A6B5">
          @hogehoge
        </Box>
      </Box>
      <Box className="footer-left"  fontSize="11px" display={{ base: "none", lg:"flex"}}>
        <Link to={"#"} mr="20px">
          プライバシーポリシー
        </Link>
        <Link to={"#"} mr="20px">
          利用規約
        </Link>
        <Link to={"#"}>
          お問い合わせ
        </Link>
      </Box>
    </Box>
  );
};
