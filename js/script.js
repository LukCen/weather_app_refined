'use strict';

// VARS

const mainUrl = 'https://danepubliczne.imgw.pl/api/data/synop/station';

let citySelector = document.querySelector('#citySelect');

const colTemp = document.querySelector('#col-temp');
const colPress = document.querySelector('#col-press');
const colHum = document.querySelector('#col-hum');

//---------------------------------------------------//



const getWeather = async station => {
    try{
        const response = await fetch(`${mainUrl}${station}`);
        const result = await response.json();

        return result;

    } catch(err){
        alert(`Something went wrong: ${err}`);
    }

}
getWeather('').then(result => {
    result.forEach((city) => {
        let newChoice = document.createElement('option');
        citySelector.add(newChoice);
        newChoice.innerHTML = `${city.stacja}`;

    })
    
    function injectData(){
        
        let currentlySelected = citySelector.selectedIndex -1;
        colTemp.innerHTML = result[currentlySelected].temperatura;
        colPress.innerHTML = result[currentlySelected].cisnienie;
        colHum.innerHTML = result[currentlySelected].wilgotnosc_wzgledna;
    }
    citySelector.addEventListener('change', injectData())
})