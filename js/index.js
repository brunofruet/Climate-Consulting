// let citySaved = localStorage.getItem('cities');
let inputCity = document.getElementById("cityAdd");

function validateCity(){

}

function addCity(newcity){
    localStorage.setItem("cities", newcity)
}