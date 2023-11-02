import { Box, Flex, FormControl, Heading, Textarea } from "@chakra-ui/react";
import { SInput } from "../atoms/Input/Input";
import { SLabel } from "../atoms/Label/Label";
import { PrimaryButton } from "../atoms/Button/PrimaryButton";

export const InputForm = () => {
  return (
    <Flex
      bg="white"
      w={{ base: "300px", md: "750px" }}
      h={{ base: "500px", md: "660px"}}
      pt="16px"
      pl="16px"
      mx="auto"
    >
      <Box>
        <Heading fontSize={{ base: "15px", md: "20px" }} mb="24px">
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
            w={{ base: "268px", md: "718px" }}
            h={{ base: "185px", md: "261px" }}
            pl="20px"
            pt="10px"
            _placeholder={{ color: "#D9DEDE" }}
            mb={{ base: "15px", md:"24px" }}
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
