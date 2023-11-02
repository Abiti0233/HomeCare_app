import { Input } from "@chakra-ui/react";

export const SInput = (props) => {
  const { title } = props;
  return (
    <Input w={{base: "268px", md: "718px" }} h={{ base: "35px", md: "44px" }} mb="24px" pl="20px" placeholder={title} _placeholder={{color: "#D9DEDE"}} />
  )
}


