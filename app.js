

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan (Province of China)",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

// function getrelevancy(value, startterm){
//     if(value ==startterm){
//         return 2;
//     }
//     else if(value.startsWith(startterm)){
//         return 1;
//     }
//     else if(value.includes(startterm)){
//         return 0;
//     }

// }

let search = document.getElementById('searches');
const result = document.getElementById('res');
search.addEventListener('keyup',function(e){
    input= search.value;
     result.innerHTML='';
    const fil = countryList.filter(function(country){
        return country.toLowerCase().startsWith(input);
    })
    // .sort((countryA,countryB)=>{
    //     return getrelevancy(countryB, input) - getrelevancy(countryA,input);
    // });





   
    for(let i=0;i<fil.length;i++){
        
        //  if(input==fil[i].split(""))
        const div = document.createElement('div');
        div.innerHTML = `<div class="fil" id ="aad"><span id="ad">${fil[i]}</span></div>`;
        result.appendChild(div);
         
     
    
          
     
            }
        

    
     if(input==0){
        result.innerHTML=''; 
     }
   
    //  function reduct(){
    //       const div = document.createElement('div');
    //     div.innerHTML = `<div class="fil" id ="aad">No results</div>`;
    //     result.appendChild(div);
        
    //  }
     
    
     
result.style.display="block";

   
   


})



























// form.addEventListener('submit', function(e){
//     const search =document.getElementById('txt');
//   let xhr = new XMLHttpRequest();
    
//     xhr.open('GET', "https://api-football-v1.p.rapidapi.com/v2/leagues/search"  , true);
//     xhr.onload = function(){
//         if(this.status  == 200){
//             let data = JSON.parse(this.responseText);
//             console.log(data);

            // data.organic_results.forEach(res=>{
            //    let re=`<h1>${res.title}</h1><br><a href="${res.url}" target=_blank>${res.url}</a><br><p>${res.snippet}</p>`;
            //     document.getElementById('res').innerHTML+= re;
            //  });


            //   for(let i = 0;i<=data.organic_results.length;i++){

            //      let tittle =data.organic_results[i].title;
            //    let url = data.organic_results[i].url;
            //    let snippet = data.organic_results[i].snippet;
  
            //     let re= `<h1>${tittle}</h1><br><a href="${url}" target=_blank>${url}</a><br><p>${snippet}</p>`;
            //         document.getElementById('res').innerHTML+= re;



            //  }

            // data.related_searches.forEach(rel=>{
            //     let res=`<a href="${rel.url}" target=_blank>${rel.query}<br></a>`
                  
            //        document.getElementById('related').style.padding="20px";
                
            //       document.getElementById('related').innerHTML+= res;

            // })
           
            // document.getElementById('related').style.display="block"; 
           

           


//         }
//         xhr.onerror=()=>{
//             console.log("errorr");
//         }
//     }
//     xhr.send();

//     e.preventDefault();
//     e.stopPropagation;
// })