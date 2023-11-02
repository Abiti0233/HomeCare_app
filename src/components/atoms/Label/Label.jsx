import { FormLabel } from "@chakra-ui/react";

export const SLabel = (props) => {
  const { labelTitle } = props;
  return (
    <FormLabel fontSize={{ base: "10px", md: "13px" }} fontWeight="bold">
      {labelTitle}
    </FormLabel>
  );
};
