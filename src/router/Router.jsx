import { Route, Routes } from "react-router-dom";
import { ContactForm } from "../components/pages/ContactForm";
import { ContactComplete } from "../components/pages/ContactComplete";

export const Router = () => {
  return (
    <Routes>
      <Route path="/contactform" element={<ContactForm />} />
      <Route path="/contactcomplete" element={<ContactComplete />} />
    </Routes>
  );
};
