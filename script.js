//points to input form
var searchformEl = document.querySelector('#searchForm');
//points to the blue search button
var searchButton = document.querySelector('#searchBtn');
//points to weather container
var currentDay = document.querySelector('#weather-container');
//points to fivedayforecast container
var fiveDay = document.querySelector('#fiveDayForecast');
//points to area for search history
var historyEl = document.querySelector('.pastSearches');
//points to all dynamically created buttons under search button
var pastSearchButtons = document.querySelectorAll('.pastSearches button');

//function that takes items out of local storage to display on page
var loadHistory = function() {
    //puts previous city location into a variable
    var city = localStorage.getItem('city');
    //stop function execution if there wasnt anything in localstorage
    if (!city) {
        return false;
    }
    //creates a button element
    var cityEl = document.createElement('button');
    //assign data-city so we can pull the information later
    cityEl.setAttribute('data-city', city);
    //assigns the text inside of the button
    cityEl.textContent = city;
    //adds an event listener
    cityEl.addEventListener('click', prevSearchLoad); 
    //appends to history
    historyEl.appendChild(cityEl);
}