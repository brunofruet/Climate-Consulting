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
	updateStorage();
    }
}

function addCity(newCity){
    let sizeLocalStorage = Object.keys(localStorage).length;
    let newCityKey = sizeLocalStorage + 1;
    citiesSaved[newCityKey] = newCity;
    localStorage.setItem(newCityKey, newCity);
    var option = document.createElement('option');
    option.value = newCityKey;
    option.innerHTML = newCity;
    selectOption.appendChild(option);
}


updateDataCities();
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
