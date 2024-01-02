let newArr = []

const DOMSelectors = {
    every: document.querySelector(".all"),  //every public computer, should include computer.operating_status, computer.oversight_agency, computer.wheelchair_accessible, computer.full_location_address
    idk: document.querySelector(".bar"),   //the search bar to manually search for a computer's location from a keyword
    idk2: document.querySelector(".click"),   //once clicked, should show each computer's location in the keyword inputted into the search bar
    output: document.querySelector("#results"),   //the div that prints out all the above data
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
        <h3>Operating Status:</h3> ${computer.operating_status}<br>
        <h3>Oversight Agency:</h3> ${computer.oversight_agency}<br>
        <h3>Wheelchair Accessible:</h3> ${computer.wheelchair_accessible}<br>
        <h3>Full Location Address:</h3> ${computer.full_location_address}<br>
        <hr>
      `;
      
      // Append the computerInfo div to the #results div
      DOMSelectors.output.appendChild(computerInfo);
    });
  }
  
  getData();

/*   DOMSelectors.idk2.addEventListener('click', function() {
    const keyword = DOMSelectors.idk.value.toLowerCase();
    
    // Filter the data based on the keyword
    const filteredData = newArr[0].filter(computer => computer.full_location_address.toLowerCase().includes(keyword));
  
    displayFilteredData(filteredData);
  });
  
  function displayFilteredData(filteredData) {
    DOMSelectors.output.innerHTML = '';
  
    filteredData.forEach((computer) => {
      const computerInfo = document.createElement('div');
      
      // Set the inner HTML for the computerInfo div
      computerInfo.innerHTML = `
        <p><strong>Operating Status:</strong> ${computer.operating_status}</p>
        <p><strong>Oversight Agency:</strong> ${computer.oversight_agency}</p>
        <p><strong>Wheelchair Accessible:</strong> ${computer.wheelchair_accessible}</p>
        <p><strong>Full Location Address:</strong> ${computer.full_location_address}</p>
        <hr>
      `;
      
      DOMSelectors.output.appendChild(computerInfo);
    });
  }
 */