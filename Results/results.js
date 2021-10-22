const homepage = document.getElementById('homepage');

homepage.addEventListener('click', () => {
    localStorage.removeItem('POKEDEX');
});