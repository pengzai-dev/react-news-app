import React from "react";
import loading from "../Images/loading.gif";
import { Center } from "./index";

function Spinner() {
  return (
    <Center>
      <img src={loading} alt="loading" />
    </Center>
  );
}

export default Spinner;
