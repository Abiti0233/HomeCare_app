import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ContactComplete = () => {
  const navigate = useNavigate();

  const onClickContactForm = () => navigate("/contactform");
  return (
    <Flex bg="white" w="750px" h="251px" pt="32px" mx="auto">
      <Box textAlign="center" mx="auto">
        <Heading fontSize="20px" mb="48px" color="#2E3331">
          Web予約完了
        </Heading>
        <Box fontSize="14px" color="#2E3331">ご予約が完了しました</Box>
        <Box fontSize="14px" mb="16px" color="#2E3331">事業所からの連絡をお待ちください。</Box>
        <Link onClick={onClickContactForm} color="#F06364" fontSize="14px">お問い合わせフォームへ戻る</Link>
      </Box>
    </Flex>
  );
};
