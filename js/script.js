'use strict';


// VARS

const mainUrl = 'https://danepubliczne.imgw.pl/api/data/synop/station';

let citySelector = document.querySelector('#citySelect');

const col3 = document.querySelectorAll('.col-3');
const colName = document.querySelector('#col-name');
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
    
        
    function test(){
        return (`${colName.offsetWidth} ${colName.offsetHeight}`);
        
    }
        
    citySelector.addEventListener('change', () => {
        

       
        let currentlySelected = citySelector.selectedIndex -1;

        colName.textContent = result[currentlySelected].stacja;
        colTemp.textContent = `${result[currentlySelected].temperatura}°C`;
        colPress.textContent = `${result[currentlySelected].cisnienie} hPA`;
        colHum.textContent = `${result[currentlySelected].wilgotnosc_wzgledna}%`;
        console.log(colTemp.innerHTML)
        console.log(typeof parseInt(colTemp.innerHTML))
    })
})




// console.log(test())
