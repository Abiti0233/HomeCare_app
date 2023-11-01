import {
  Box,
  Flex,
  FormControl,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { SInput } from "../atoms/Input/Input";
import { SLabel } from "../atoms/Label/Label";
import { PrimaryButton } from "../atoms/Button/PrimaryButton";

export const InputForm = () => {
  return (
    <Flex bg="white" w="750px" h="660px" pt="16px" pl="16px" mx="auto">
      <Box>
        <Heading fontSize="20px" mb="24px">
          お問い合わせ
        </Heading>
        <FormControl>
          <SLabel labelTitle="お名前" />
          <SInput title="田中太郎" />
        </FormControl>
        <FormControl>
          <SLabel labelTitle="返信用メールアドレス" />
          <SInput title="homecarenavi@mail.com" />
        </FormControl>
        <FormControl>
          <SLabel labelTitle="お問い合わせ内容" />
          <Textarea
            placeholder="入力してください"
            h="261px"
            pl="20px"
            pt="10px"
            _placeholder={{ color: "#D9DEDE" }}
            mb="24px"
          />
        </FormControl>
        <PrimaryButton
          bg="#F06364"
          color="white"
          title="この内容で問い合わせる"
        />
      </Box>
    </Flex>
  );
};
