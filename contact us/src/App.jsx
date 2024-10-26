import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/Contact Header/contactHeader";
import ContactForm from "./components/Contact Form/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
