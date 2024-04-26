let produtos = [
    {
      nome: "Smartphone",
      preco: 3200.0,
      descricao: "Um smartphone top de linha | 500gb",
      detalhes: {
        fabricante: "Fabricante",
        modelo: "Modelo",
        peso: "150g",
      },
      tags: ["tecnologia", "celular", "smartphone"],
    },
    {
      nome: "Notebook",
      preco: 4200.0,
      descricao: "Um notebook top de linha | 1tb",
      detalhes: {
        fabricante: "Fabricante",
        modelo: "Modelo",
        peso: "1.5kg",
      },
      tags: ["tecnologia", "notebook"],
    },
    {
      nome: "Tablet",
      preco: 1200.0,
      descricao: "Um tablet top de linha | 250gb",
      detalhes: {
        fabricante: "Fabricante",
        modelo: "Modelo",
        peso: "500g",
      },
      tags: ["tecnologia", "tablet"],
    },
    {
      nome: "Smartwatch",
      preco: 800.0,
      descricao: "Um smartwatch top de linha | 32gb",
      detalhes: {
        fabricante: "Fabricante",
        modelo: "Modelo",
        peso: "50g",
      },
      tags: ["tecnologia", "smartwatch"],
    },
    {
      nome: "SmartTV",
      preco: 5200.0,
      descricao: "Uma smarttv top de linha | 4k",
      detalhes: {
        fabricante: "Fabricante",
        modelo: "Modelo",
        peso: "20kg",
      },
      tags: ["tecnologia", "smarttv"],
    },
  ];


  function criarElementoProduto() {
    let pratileira = document.querySelector("#pratileira");

    produtos.forEach(({ nome, preco, descricao, detalhes, tags }) => {
        let produtoHTML = `
            <div >
                <h2>${nome}</h2>
                <p>Preço: R$ ${preco.toFixed(2)}</p>
                <p>${descricao}</p>
                <p>Detalhes:</p>
                <ul>
                    <li>Fabricante: ${detalhes.fabricante}</li>
                    <li>Modelo: ${detalhes.modelo}</li>
                    <li>Peso: ${detalhes.peso}</li>
                </ul>
                <p>Tags: ${tags.join(", ")}</p>
            </div>
        `;
        pratileira.innerHTML += produtoHTML;
    });
}

criarElementoProduto();