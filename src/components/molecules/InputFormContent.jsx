import { Box, Flex, FormControl, Heading } from "@chakra-ui/react";
import { InputMailaddress, InputName } from "../atoms/Input/Input";
import { SLabel } from "../atoms/Label/Label";
import { PrimaryButton } from "../atoms/Button/PrimaryButton";
import { InputDescription } from "../atoms/Input/Textarea";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const InputForm = () => {
  const [inputName, setInputName] = useState("");
  const onChangeInputName = (e) => setInputName(e.target.value);

  const [inputMailaddress, setInputMailaddress] = useState("");
  const onChangeInputMailaddress = (e) => setInputMailaddress(e.target.value);

  const [inputDescription, setInputDescription] = useState("");
  const onChangeInputDescription = (e) => setInputDescription(e.target.value);

  const navigate = useNavigate();

  const sendFormData = async () => {
    navigate("/contactcomplete")

    const url = "http://localhost:3000/api/v1/contacts";
    const data = {
      contact: {
        name: inputName,
        mailaddress: inputMailaddress,
        description: inputDescription,
      },
    };
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <Flex
      bg="white"
      w={{ base: "300px", md: "750px" }}
      h={{ base: "500px", md: "660px" }}
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
          <InputName
            title="田中太郎"
            onChange={onChangeInputName}
            value={inputName}
          />
        </FormControl>
        <FormControl>
          <SLabel labelTitle="返信用メールアドレス" />
          <InputMailaddress
            title="homecarenavi@mail.com"
            onChange={onChangeInputMailaddress}
            value={inputMailaddress}
          />
        </FormControl>
        <FormControl>
          <SLabel labelTitle="お問い合わせ内容" />
          <InputDescription
            title="入力してください"
            onChange={onChangeInputDescription}
            value={inputDescription}
          />
        </FormControl>
        <PrimaryButton
          onClick={sendFormData}
          bg="#F06364"
          color="white"
          title="この内容で問い合わせる"
        />
      </Box>
    </Flex>
  );
};
