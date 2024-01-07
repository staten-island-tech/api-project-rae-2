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
    // Clears previous data from the #results div
    DOMSelectors.output.innerHTML = '';
    
    data.forEach((computer) => {
      const computerInfo = document.createElement('div');
      
      computerInfo.innerHTML = `
        <h3>Is it Open?:</h3> ${computer.operating_status}<br>
        <h3>Library/Agency:</h3> ${computer.oversight_agency}<br>
        <h3>Wheelchair?:</h3> ${computer.wheelchair_accessible}<br>
        <h3>Full Location Address:</h3> ${computer.full_location_address}<br>
        <hr>
      `;

      DOMSelectors.output.appendChild(computerInfo);
    });
  }

  //SEARCH SEARCH SRAEACH SEARRRRCHHHH
  DOMSelectors.idk2.addEventListener('click', function() {
    //this is where the searching happens
    const meow = document.querySelector('.bar').value.trim().toLowerCase();
    haha(meow);
  });

  async function haha(meow) {
    const api = "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023";
    
    try {
        const response = await fetch(api);
        
        if (!response.ok) {
            throw new Error('HAHA ERRORRRRR (fetching data)');
        }
        
        const data = await response.json();
        const filteredData = data.filter(computer => 
          computer.full_location_address.toLowerCase().includes(meow)
      );
      displayData(filteredData);
    } catch (error) {
      console.error('Error:', error);
  }
}

//RESET RESET RESET
  DOMSelectors.every.addEventListener('click', function() {
   getData();
  });

  //OPEN OPEN OPEN
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

      const filteredData = data.filter(computer => computer.operating_status === Open);

      displayData(filteredData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //THERE ARE WHEELCHAIRSSSSS
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
      
      const filteredData = data.filter(computer => computer.wheelchair_accessible === wheelchair);
      
      displayData(filteredData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //not open lol
  DOMSelectors.no.addEventListener('click', function() {
    filterComputersByClosed(['Not Operating', 'Temporarily Closed']); //computers that r closed
  });
  
  async function filterComputersByClosed(closed) {
    const api = "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023";
    
    try {
      const response = await fetch(api);
      
      if (!response.ok) {
        throw new Error('didnt work, lil bro. fetch data problem');
      }
      
      const data = await response.json();
      
      const filteredData = data.filter(computer => closed.includes(computer.operating_status));

      displayData(filteredData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();
