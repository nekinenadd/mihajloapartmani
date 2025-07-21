function goToApartment(location) {
  const popup = document.getElementById('apartmentPopup');
  const mainContent = document.getElementById('mainContent');
  popup.style.display = 'none';
  mainContent.classList.remove('hidden');

  if (location === 'zlatibor') {
    loadZlatibor();
  } else if (location === 'novisad') {
    loadNoviSad();
  }
}

function loadZlatibor() {
  document.getElementById('mainContent').innerHTML = `
    <h1>Apartman Mihajlo - Zlatibor</h1>
    <p>Dobrodošli u naš prelep apartman u srcu Zlatibora. Idealno mesto za odmor!</p>
  `;
}

function loadNoviSad() {
  document.getElementById('mainContent').innerHTML = `
    <h1>Apartman Casablanca - Novi Sad</h1>
    <p>Iskusite čari Novog Sada iz našeg modernog i udobnog apartmana!</p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('apartmentPopup').style.display = 'flex';
});
