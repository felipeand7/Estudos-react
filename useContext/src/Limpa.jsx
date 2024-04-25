import React from "react";
import { GlobalContext } from "./UserContext";

const Limpa = () => {
  const { linpaDados } = React.useContext(GlobalContext);

  return <button onClick={linpaDados}>Limpa</button>;
};

export default Limpa;
