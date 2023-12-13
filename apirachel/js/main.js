//const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
//section_name:"Movies" AND type_of_material:"Review"
//https://api.nytimes.com/svc/archive/v1/2019/1.json?api_key=9uvWWArbW6ve7PmoNDNg4Uk0gb7eRKKb
///articlesearch.json?q={query}&fq={filter}

 async function getData(){
    let res = await fetch(
        "https://data.cityofnewyork.us/resource/sejx-2gn3.json?calendar_year=2023" //???
    );
    let data = await res.json();

    data.multimedia.forEach((multimedia) => console.log(multimedia.rank));
        
}
getData();

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
