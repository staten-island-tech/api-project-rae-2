 import { DOMSelectors } from "./dom";

 async function getData(){
    let res = await fetch(
        "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023" //???
    );
    let data = await res.json();

    data.forEach((computer) => console.log(computer.operating_status, computer.oversight_agency, computer.wheelchair_accessible, computer.full_location_address));

//this is for the all computers button
function makeCards(arr){
        DOMSelectors.results.innerHTML = "";
        arr.forEach((computer)=> {
        const newObject = document.createElement("div");
        newObject.innerHTML = 
        `
        <h2 class="place">${computer.full_location_address}</h2>
        <h3 class="agency">${computer.oversight_agency}</h3>
        `
        newObject.result.add("card")
        DOMSelectors.results.appendChild(newObject)
      })}; 
makeCards() 
        
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
