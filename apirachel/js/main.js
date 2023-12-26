const newArr = []

const DOMSelectors = {
    every: document.querySelector(".all"), //every public computer, should include computer.operating_status, computer.oversight_agency, computer.wheelchair_accessible, computer.full_location_address
    yes: document.querySelector(".open"), //when this button is clicked, should show only computers that are open to the public
    no: document.querySelector(".close"), //when this button is clicked, should show only computers that are closed
    hm: document.querySelector(".chair"), //when this button is clicked, should show only computers that are wheelchair accessible
    idk: document.querySelector(".bar"), //the search bar to manually search for a computer's location in one of the 5 boroughs
    output: document.querySelector("#results"), //the div that prints out all the above data
  };
  
  async function getData(API) {
    const api = "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023";
    
    try {
      const response = await fetch(api);
      
      if (!response.ok) {
        throw new Error('erm error !!');
      }
      
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  function displayData(data) {
    // Clear previous data from the #results div
    DOMSelectors.output.innerHTML = '';
  
    data.forEach((computer) => {
      const computerInfo = document.createElement('div');
      
      computerInfo.innerHTML = `
        <p><strong>Operating Status:</strong> ${computer.operating_status}</p>
        <p><strong>Oversight Agency:</strong> ${computer.oversight_agency}</p>
        <p><strong>Wheelchair Accessible:</strong> ${computer.wheelchair_accessible}</p>
        <p><strong>Full Location Address:</strong> ${computer.full_location_address}</p>
        <hr>
      `;
      
      // Append the computerInfo div to the #results div!!!
      DOMSelectors.output.appendChild(computerInfo);
    });
  }
  
  getData();


DOMSelectors.idk.addEventListener('input', function(event) {
  const keyword = event.target.value.toLowerCase(); 
  const filteredData = newArr[0].filter(computer => computer.full_location_address.toLowerCase().includes(keyword));

  displayFilteredData(filteredData);
});

function displayFilteredData(filteredData) {
  DOMSelectors.output.innerHTML = '';

  filteredData.forEach((computer) => {
    const computerInfo = document.createElement('div');
    computerInfo.innerHTML = `
      <p><strong>Operating Status:</strong> ${computer.operating_status}</p>
      <p><strong>Oversight Agency:</strong> ${computer.oversight_agency}</p>
      <p><strong>Wheelchair Accessible:</strong> ${computer.wheelchair_accessible}</p>
      <p><strong>Full Location Address:</strong> ${computer.full_location_address}</p>
      <hr>
    `;
    
    // Append the computerInfo div to the #results div
    DOMSelectors.output.appendChild(computerInfo);
  });
}


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
