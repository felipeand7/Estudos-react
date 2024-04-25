import React from "react";
import { GlobalContext } from "./UserContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  if (!global || !global.dados) return <p>Loading...</p>;

  return (
    <div>
      Produtos:{" "}
      {global.dados.map((produto) => (
        // eslint-disable-next-line react/jsx-key
        <ul>
          <li key={produto.id}>{produto.nome}</li>
        </ul>
      ))}
    </div>
  );
};

export default Produto;
