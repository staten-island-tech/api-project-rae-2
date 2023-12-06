/* function greet(name){
    const greetPromise = new Promise(function(resolve, rejected){
        resolve(`HELLO ${name}`);
    });
    return greetPromise;
}
//promises must be handled after we receive them
const nuggies = greet("Nuggies");
nuggies.then((result) =>{
    console.log(result);
});
 */
//REST API

/* const URL = `https://api.quotable.io/random`;

async function getData(URL){
    try{
        const response = await fetch(URL);
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        //take resposne from server and convert it to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch(error){
        document.querySelector("h1").textContent = error;
        document.querySelector("h2").textContent = 
        "Please search for something else";
    }

}
getData(URL); */
