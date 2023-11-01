import { Box, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      className="footer"
      bg="white"
      h="50px"
      w="100%"
      display="flex"
      lineHeight="50px"
      position="fixed"
      bottom="0"
      width="100%"
    >
      <Box className="footer-left" display="flex">
        <Box
          className="footer-title"
          pl="145px"
          fontSize="14px"
          color="#3B4043"
          fontWeight="bold"
        >
          ホームケアナビ
        </Box>
        <Box pl="24px" fontSize="10px" color="#98A6B5">
          @hogehoge
        </Box>
      </Box>
      <Box className="footer-left" ml="auto" pr="145px" fontSize="11px">
        <Link to={"#"} mr="20px">
          プライバシーポリシー
        </Link>
        <Link to={"#"} mr="20px">
          利用規約
        </Link>
        <Link to={"#"} mr="20px">
          お問い合わせ
        </Link>
      </Box>
    </Box>
  );
};
