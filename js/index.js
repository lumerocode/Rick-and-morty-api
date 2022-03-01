//Scrool para cargar más personajes
let pagina = 1;
const btnSiguiente = document.getElementById("btnSiguiente");

btnCargarMas.addEventListener('click', () => {
    if (pagina < 42) {
        pagina += 1;
        getDataFromAPI();
    }
});

//Contenido y llamado
const cardsContent = document.getElementById('cards-content');
const API = 'https://rickandmortyapi.com/api/character/';
const maxPageForAPI = 1;
const apiPage = '?page=:page';
const characters = [];

const getDataFromAPI = async (page) => {
    try {
        const { results } = await fetchData(`${API}${apiPage.replace(':page',`${pagina}`)}`)
        results.map(character => {
            const card = cardGenerator(character);
            cardsContent.appendChild(card);
        });
    } catch (error){
        console.error(error);
    }
}

(function() {  
    for (let i=1; i<= maxPageForAPI; i++) {
        getDataFromAPI(i);
    }
})();


 




