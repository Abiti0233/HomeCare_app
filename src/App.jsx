import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import { Header } from "./components/organisms/layout/Header";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
      <ChakraBaseProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ChakraBaseProvider>
  );
}

export default App;
