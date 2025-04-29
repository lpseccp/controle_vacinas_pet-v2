const petsKey = 'petsData';
const params = new URLSearchParams(window.location.search);
const petId = params.get('id');
const petTitle = document.getElementById('petTitle');
const vaccineList = document.getElementById('vaccineList');
const medicineList = document.getElementById('medicineList');
const appointmentList = document.getElementById('appointmentList');

const vaccineInput = document.getElementById('vaccineInput');
const medicineInput = document.getElementById('medicineInput');
const appointmentInput = document.getElementById('appointmentInput');

const saveVaccineBtn = document.getElementById('saveVaccine');
const saveMedicineBtn = document.getElementById('saveMedicine');
const saveAppointmentBtn = document.getElementById('saveAppointment');

function getPets() {
  return JSON.parse(localStorage.getItem(petsKey)) || [];
}

function savePets(pets) {
  localStorage.setItem(petsKey, JSON.stringify(pets));
}

function findPetById(id) {
  return getPets().find(p => p.id === id);
}

function renderData() {
  const pet = findPetById(petId);
  if (!pet) {
    petTitle.textContent = 'Pet não encontrado';
    return;
  }

  petTitle.textContent = `Informações de ${pet.nome}`;

  // Renderiza listas
  vaccineList.innerHTML = pet.vacinas.map(item => `<li>${item}</li>`).join('');
  medicineList.innerHTML = pet.remedios.map(item => `<li>${item}</li>`).join('');
  appointmentList.innerHTML = pet.consultas.map(item => `<li>${item}</li>`).join('');
}

saveVaccineBtn.addEventListener('click', () => {
  const pets = getPets();
  const pet = pets.find(p => p.id === petId);
  if (vaccineInput.value.trim()) {
    pet.vacinas.push(vaccineInput.value.trim());
    savePets(pets);
    vaccineInput.value = '';
    renderData();
  }
});

saveMedicineBtn.addEventListener('click', () => {
  const pets = getPets();
  const pet = pets.find(p => p.id === petId);
  if (medicineInput.value.trim()) {
    pet.remedios.push(medicineInput.value.trim());
    savePets(pets);
    medicineInput.value = '';
    renderData();
  }
});

saveAppointmentBtn.addEventListener('click', () => {
  const pets = getPets();
  const pet = pets.find(p => p.id === petId);
  if (appointmentInput.value.trim()) {
    pet.consultas.push(appointmentInput.value.trim());
    savePets(pets);
    appointmentInput.value = '';
    renderData();
  }
});

renderData();
