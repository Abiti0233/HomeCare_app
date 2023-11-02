import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "源ノ角ゴシック JP, Medium",
        backgroundColor: "gray.100",
        color: "#707F89",
        width:"100%"
      },
    },
  },
});
export default theme;