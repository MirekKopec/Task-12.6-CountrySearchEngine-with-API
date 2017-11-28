// scripts.js

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

// on click
$('#search').click(searchCountries);

//on enter key
$('#country-name').keypress(function (event) {

  if (event.keyCode == 10 || event.keyCode == 13) {

	event.preventDefault();
		searchCountries();
  }
});

function searchCountries() {
 	var countryName = $('#country-name').val();

  if(!countryName.length) countryName = 'Poland';

  $.ajax({
    		url: url + countryName,
    		method: 'GET',
    		success: showCountriesList
    	});

      $('#country-name').val('');

}

function showCountriesList(resp) {
    countriesList.empty();

    resp.forEach(function(item){
   	  $('<li>').text(item.name + ', capital: ' + item.capital + ', region: ' + item.region).appendTo(countriesList);
    });
}
