// let citySaved = localStorage.getItem('cities');
let inputCity = document.getElementById("cityAdd");
var citiesSaved = {
    1: "rosario",
    2: "buenos aires",
    3: "corrientes"
};
function initDataCities(){
    for (var [key, value] of Object.entries(citiesSaved)){
        localStorage.setItem(key, value)
    }
}
initDataCities();
let size = Object.keys(citiesSaved).length;

function validateCity(){
let validate = true;
    for (var [key, value] of Object.entries(citiesSaved)){
        if (value.toString() == inputCity.value.toLowerCase()){
            console.log("ya existe");
            validate = false;
        }
    }
    if (validate){
        addCity(inputCity.value.toLowerCase());
        size = Object.keys(citiesSaved).length;
    }
}

function addCity(newCity){
    let newCityKey = size + 1; 
    citiesSaved[newCityKey] = newCity;
    localStorage.setItem(newCityKey, newCity)
}