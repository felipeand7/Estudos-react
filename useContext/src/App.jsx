import Produto from "./Produto";
import GlobalStorage from "./UserContext";
import Limpa from "./Limpa";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpa />
    </GlobalStorage>
  );
};

export default App;
