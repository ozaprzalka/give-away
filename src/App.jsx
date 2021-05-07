import React from "react";
import { Reset } from "styled-reset";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <>
      <Reset />
      <AuthProvider></AuthProvider>
    </>
  );
}

export default App;
