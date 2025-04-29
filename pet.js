// Função para carregar os dados salvos ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
  const petName = localStorage.getItem("petSelecionado");
  if (petName) {
    document.getElementById("petTitle").textContent = `Detalhes de ${petName}`;
    carregarDados("vacinas");
    carregarDados("remedios");
    carregarDados("consultas");
  } else {
    document.getElementById("petTitle").textContent = "Pet não encontrado";
  }
});

// Adiciona informação à lista (vacinas, remédios ou consultas)
function addInfo(tipo) {
  const inputId = {
    vacinas: "vaccineInput",
    remedios: "medicineInput",
    consultas: "consultationInput"
  }[tipo];

  const input = document.getElementById(inputId);
  const valor = input.value.trim();

  if (valor === "") {
    alert("Por favor, digite algo.");
    return;
  }

  const key = `${localStorage.getItem("petSelecionado")}_${tipo}`;
  const dados = JSON.parse(localStorage.getItem(key)) || [];

  dados.push(valor);
  localStorage.setItem(key, JSON.stringify(dados));

  input.value = "";
  carregarDados(tipo);
}

// Carrega os dados do tipo (vacinas, remédios ou consultas) e exibe na lista
function carregarDados(tipo) {
  const key = `${localStorage.getItem("petSelecionado")}_${tipo}`;
  const dados = JSON.parse(localStorage.getItem(key)) || [];
  const lista = document.getElementById(`${tipo}List`);

  lista.innerHTML = ""; // Limpa lista antes de exibir novamente

  dados.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    // Botão de remover item
    li.addEventListener("click", () => {
      if (confirm("Deseja remover este item?")) {
        dados.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(dados));
        carregarDados(tipo);
      }
    });

    lista.appendChild(li);
  });
}

// Função para voltar à tela inicial
function voltarInicio() {
  window.location.href = "index.html";
}
