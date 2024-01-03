let newArr = []

const DOMSelectors = {
    every: document.querySelector(".all"),  //every public computer, should include computer.operating_status, computer.oversight_agency, computer.wheelchair_accessible, computer.full_location_address
    yes: document.querySelector(".open"),  //when this button is clicked, should show only computers that are open to the public
    no: document.querySelector(".close"),  //when this button is clicked, should show only computers that are closed
    hm: document.querySelector(".chair"),  //when this button is clicked, should show only computers that are wheelchair accessible
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

  DOMSelectors.yes.addEventListener('click', function() {
    filterComputersByOperatingStatus('Open'); // Filtering for computers that are in operation
  });
  
  async function filterComputersByOperatingStatus(Open) {
    const api = "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023";
    
    try {
      const response = await fetch(api);
      
      if (!response.ok) {
        throw new Error('didnt work, lil bro. fetch data problem');
      }
      
      const data = await response.json();
      
      // Filter the data based on wheelchair accessibility
      const filteredData = data.filter(computer => computer.operating_status === Open);
      
      // Display the filtered data
      displayData(filteredData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  DOMSelectors.hm.addEventListener('click', function() {
    filterComputersByAccessibility('Yes'); // Filtering for computers w/ wheelchair access
  });
  
  async function filterComputersByAccessibility(wheelchair) {
    const api = "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023";
    
    try {
      const response = await fetch(api);
      
      if (!response.ok) {
        throw new Error('didnt work, lil bro. fetch data problem');
      }
      
      const data = await response.json();
      
      // Filter the data based on wheelchair accessibility
      const filteredData = data.filter(computer => computer.wheelchair_accessible === wheelchair);
      
      // Display the filtered data
      displayData(filteredData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  DOMSelectors.no.addEventListener('click', function() {
    filterComputersByClosed(['Not Operating', 'Temporarily Closed']); // Filtering for computers that r closed
  });
  
  async function filterComputersByClosed(closed) {
    const api = "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023";
    
    try {
      const response = await fetch(api);
      
      if (!response.ok) {
        throw new Error('didnt work, lil bro. fetch data problem');
      }
      
      const data = await response.json();
      
      // Filter the data based on wheelchair accessibility
      const filteredData = data.filter(computer => closed.includes(computer.operating_status));
      
      // Display the filtered data
      displayData(filteredData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();
