const petsKey = 'petsData';

// Elementos da interface
const container = document.getElementById('petList');
const petForm = document.getElementById('petForm');
const nameInput = document.getElementById('petName');
const speciesInput = document.getElementById('petSpecies');
const breedInput = document.getElementById('petBreed');
const birthInput = document.getElementById('petBirth');
const heightInput = document.getElementById('petHeight');
const cancelBtn = document.getElementById('cancelPetBtn');
const registerBtn = document.getElementById('registerPetBtn');
const newPetBtn = document.getElementById('newPetBtn');

// Função para buscar os pets do localStorage
function getPets() {
  try {
    const pets = JSON.parse(localStorage.getItem(petsKey));
    return Array.isArray(pets) ? pets : [];
  } catch (e) {
    console.error('Erro ao recuperar pets:', e);
    return [];
  }
}

// Função para salvar pets no localStorage
function savePets(pets) {
  localStorage.setItem(petsKey, JSON.stringify(pets));
}

// Renderiza a lista de pets cadastrados
function renderPetList() {
  container.innerHTML = '';
  const pets = getPets();

  if (pets.length === 0) {
    container.innerHTML = '<p>Nenhum pet cadastrado.</p>';
    return;
  }

  pets.forEach((pet) => {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.innerHTML = `
      <h2>${pet.nome}</h2>
      <p><strong>Espécie:</strong> ${pet.especie || '-'}</p>
      <p><strong>Raça:</strong> ${pet.raca || '-'}</p>
      <p><strong>Nascimento:</strong> ${pet.nascimento || '-'}</p>
      <p><strong>Altura:</strong> ${pet.altura || '-'}</p>
      <button class="btn" onclick="openPet('${pet.id}')">Adicionar Informações</button>
    `;
    container.appendChild(card);
  });
}

// Mostra o formulário de novo pet
newPetBtn?.addEventListener('click', () => {
  petForm.style.display = 'block';
});

// Cancela o cadastro e limpa o formulário
cancelBtn?.addEventListener('click', () => {
  petForm.reset();
  petForm.style.display = 'none';
});

// Cadastra um novo pet
registerBtn?.addEventListener('click', () => {
  const nome = nameInput.value.trim();
  const especie = speciesInput.value.trim();
  const raca = breedInput.value.trim();
  const nascimento = birthInput.value;
  const altura = heightInput.value.trim();

  if (!nome) {
    alert('Por favor, insira o nome do pet.');
    return;
  }

  const newPet = {
    id: crypto.randomUUID(),
    nome,
    especie,
    raca,
    nascimento,
    altura,
    vacinas: [],
    remedios: [],
    consultas: []
  };

  const pets = getPets();
  pets.push(newPet);
  savePets(pets);

  petForm.reset();
  petForm.style.display = 'none';
  renderPetList();
});

// Abre a página individual do pet
function openPet(id) {
  window.location.href = `pet.html?id=${id}`;
}

// Inicia a listagem ao carregar
renderPetList();
