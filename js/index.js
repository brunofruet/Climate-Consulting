// Obtener los datos del localStorage
let citiesInLocalStorage = {};
function updateStorage(){
    let sizeLocalStorage = Object.keys(localStorage).length;
    citiesInLocalStorage = {};
    for (let i = 1; i < (sizeLocalStorage + 1); i++){
        citiesInLocalStorage[i] = localStorage.getItem(i);
    }
}

updateStorage();
let inputCity = document.getElementById("cityAdd");
let selectOption = document.getElementById("citySelected");

var citiesSaved = {
    1: "rosario",
    2: "cordoba",
    3: "corrientes"
};

initDataCities();

// Inicializa los datos de ciudades guardadas en el input option
let size = Object.keys(citiesSaved).length;

function initDataCities(){
    if (localStorage.length == 0){
        for (var [key, value] of Object.entries(citiesSaved)){
            localStorage.setItem(key, value);
            var option = document.createElement('option');
            option.value = key;
            option.innerHTML = value;
            selectOption.appendChild(option);
        }
    }
}

// Validacion no repetir ciudades
function validateCity(){
    let validate = true;

    for (var [key, value] of Object.entries(citiesSaved)){
        if (value.toString() == inputCity.value.toLowerCase()){
            alert("La ciudad ingresada ya existe");
            validate = false;
        }
    }

    if (validate){
        addCity(inputCity.value.toLowerCase());
        size = Object.keys(citiesSaved).length;
    }
}

// Agrega la ciudad
function addCity(newCity){
    let sizeLocalStorage = Object.keys(localStorage).length;
    let newCityKey = sizeLocalStorage + 1;
    citiesSaved[newCityKey] = newCity;
    localStorage.setItem(newCityKey, newCity);
    var option = document.createElement('option');
    option.value = newCityKey;
    option.innerHTML = newCity;
    selectOption.appendChild(option);
    document.getElementById('form-add').reset(); //limpia el formulario
}

updateDataCities();

// Actualiza los datos de las ciudades agregadas en el input option
function updateDataCities(){
    if (localStorage.length != 0){
        for (var [key, value] of Object.entries(citiesInLocalStorage)){
            var option = document.createElement('option');
            option.value = key;
            option.innerHTML = value;
            selectOption.appendChild(option); 
        }
    }
}

let btnConsultClimate = document.getElementById("btn-consult-city");
let loadingElement = document.getElementById('loading');
let climateContainerElement = document.getElementById('climate-container');
loadingElement.style.display = "none";
function consultCity() {
    let selectedCityKey = Number(document.querySelector(".citySelected").value);
    let selectedCity = localStorage.getItem(selectedCityKey);
    loadingElement.style.display = "block";
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es`)
    .then((response) => response.json())
        .then((object) => {
             
            climateContainerElement.innerHTML = `
                <article>
                    <h3>${object.name}</h3>
                    <p>La temperatura es: ${object.main.temp}ºC y ${object.weather[0].description}</p>
                </article>`;
            climateContainerElement.style.display = "block";
            loadingElement.style.display = "none";
            console.log(object);

            
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            loadingElement.style.display = "none";
        });

    
}

var btnCiudad = document.getElementById('ciudad');
btnCiudad.style.display = "none";

function showAdd() {
    btnCiudad.style.display = "block";
    btnConsulta.style.display = "none";

}

var btnConsulta = document.getElementById('consulta');
btnConsulta.style.display = "none";

function showConsult() {
    btnConsulta.style.display = "block";
    btnCiudad.style.display = "none";
}

