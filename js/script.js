// select id==========================================
const container = document.querySelector("#container");
const base_url="https://restcountries.com/v3.1/name/";

var contry_array=["india","china","pakistan","america","canada","africa"];
const random = Math.floor(Math.random() * contry_array.length); // till the length of country array 
// http request=================================
const request = new XMLHttpRequest();
request.open("GET", base_url+contry_array[random]);
request.send();

request.addEventListener("load", function () {
  // coverted json fie to an object
  const [data] = JSON.parse(this.responseText);

  // inner htm data
  const htmlData = `
  <div class="wrapper">
    <div class="data">
      <h1> All Data Of ${data.name.common} Country</h1>
      <div class="dataHead">
        <img src="${data.flags.png}" alt="countryImg">
        <h2>${data.name.common}</h2>
        <p>CAPITAL : ${data.capital}</p>
      </div>
      <div class="dataFoot">
        <div>
          <h3>REGION</h3>
          <p>${data.region}</p>
        </div>
        <div>
        <h3>SUB REGION</h3>
        <p>${data.subregion}</p>
      </div>
        <div>
          <h3>AREA</h3>
          <p>${data.area}</p>
        </div>
        <div class="borders">
          <h3>BORDERS</h3>
          <p>${data.borders}</p>
        </div>
        <div>
          <h3>POPULATION</h3>
          <p>${data.population}</p>
        </div>
        <div>
          <h3>DEMONYM</h3>
          <p>${data.demonyms.eng.f}</p>
        </div>
      </div>
    </div>
  </div>
    `;

  container.insertAdjacentHTML("afterbegin", htmlData);
});
