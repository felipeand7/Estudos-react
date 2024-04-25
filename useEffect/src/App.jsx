import React from "react"
import Produto from "./Produto";

function App() {
const [produto, setProduto]=React.useState(null);

React.useEffect(()=>{
const produtoLocal = window.localStorage.getItem("produto");
if (produtoLocal !== null) setProduto(produtoLocal)
},[])

React.useEffect(()=>{
if(produto !== null) window.localStorage.setItem("Produto", produto);
},[produto])


  function handleClick({target}){
    setProduto(target.innerText);
  }

  return (
   <div>
    <h1>Preferencia: {produto}</h1>
   <button  onClick={handleClick} style={{marginRight: "1rem"}}>
    Notebook
    </button>
   <button onClick={handleClick}> Smartphone</button>
   <Produto produto = {produto} />
   </div>
  )
}

export default App
