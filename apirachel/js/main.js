let API = `https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023`;

const newArr = []

const DOMSelectors = {
  every: document.querySelector(".all"),
  yes: document.querySelector(".open"),
  no: document.querySelector("close"),
  hm: document.querySelector(".chair"),
  idk: document.querySelector(".bar"),
  output: document.querySelector("#results"),
};

async function getData(API) {
    const api = "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023";
    
    try {
      const response = await fetch(api);
      
      if (!response.ok) {
        throw new Error('erm erorr !!');
      }
      
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  function displayData(data) {
    newArr.push(data);

    data.forEach((computer) => console.log(computer.operating_status, computer.oversight_agency, computer.wheelchair_accessible, computer.full_location_address)); 
  } 
  
  getData(); 



//wheelchair and open or not
//<h3 class="access">${computer.wheelchair_accessible}</h3>
//<h3 class="co">${computer.operating_status}</h3>

/* async function getData(URL){
    try{
        const response = await fetch(URL);
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        //take resposne from server and convert it to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.headline;
        document.querySelector("h2").textContent = data.content;
    } catch(error){
        document.querySelector("h1").textContent = error;
        document.querySelector("h2").textContent = 
        "Please search for something else";
    }

}
 */
