import  React,{useState } from 'react';

const App = () => {
const [ativo, setAtivo] = React.useState(0);

  return (
    <>
    <h1>Ola mundo</h1>
    <button onClick={() => setAtivo(ativo + 1)}>adicionar +{ativo + ativo * ativo}</button>
    </>  )
}


export default App;