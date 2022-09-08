import axios from 'axios';

const countryList = document.getElementById('country-list')

async function getCountryInfo() {
    const uri = 'https://restcountries.com/v2/';
    const endPoint = 'all';

    try {
        const response = await axios.get(`${uri}${endPoint}`);
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {

            countryList.innerHTML += `
            <li class="${response.data[i].region}">${response.data[i].name} - ${response.data[i].capital}</li>
            <img src="${response.data[i].flag}" alt="flag">
            <div>Has a population of ${response.data[i].population} people</div>
            `


        }
    } catch(e) {
        console.error(e)
    }
}
getCountryInfo()
// const responsePop = response.data.population.sort((a, b) => a - b);