import React from "react";
export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function linpaDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, linpaDados }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;
