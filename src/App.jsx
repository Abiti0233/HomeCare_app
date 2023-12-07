import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { DefaultTemplate } from "./components/templates/DefaultTemplate";
import { Footer } from "./components/organisms/layout/Footer";
import { Header } from "./components/organisms/layout/Header";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ChakraBaseProvider>
  );
}

export default App;
