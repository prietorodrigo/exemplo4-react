import { useState } from "react";

export default function App2() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const idadeNumeral = Number(idade);

  return (
    <>
      <label>
        Nome:
        <input name="nome" onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        Idade:
        <input
          type="number"
          value={idade}
          name="idade"
          onChange={(e) => setIdade(e.target.value)}
        />
      </label>
      <br />
      <button onClick={(e) => setIdade(idadeNumeral + 10)}>+10</button>
      {nome !== "" && <p>Nome: {nome} </p>}
      {idade !== 0 && <p>Idade: {idade} </p>}
    </>
  );
}
