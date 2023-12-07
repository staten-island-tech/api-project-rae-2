//const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
//section_name:"Movies" AND type_of_material:"Review"
///articlesearch.json?q={query}&fq={filter}

 async function getData(){
    let res = await fetch(
        "https://api.nytimes.com/svc/search/v2/articlesearch?api_key=IlDTyL1asczST3qrMjc8G0hfcxqVnIDm.json"
    );
    let data = await res.json();

    data.results.forEach((article) => console.log(article));
        
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
