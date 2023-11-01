import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import { Header } from "./components/organisms/layout/Header";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Footer } from "./components/organisms/layout/Footer";

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
