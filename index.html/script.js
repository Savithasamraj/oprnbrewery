function createBrewerylist(element){
    let contain = document.createElement("div");
    contain.setAttribute("class","brewery");
    contain.innerHTML = `
    <h3 id="name">Name: ${element.name}</h3>
    <div class="explain">
    <p id="type"><span>Brewery Type:</span> ${element.brewery_type}</p>
    <p id="address"><span>Address:</span> ${element.address_2}</p>
    <p class="author com">Author: ${element.authors}</p>
    <p id="urls">Website Url: ${element.website_url}</p>
    <p id="phone">Contact No: ${element.phone}</p></div>`
    document.querySelector("#contain1").append(contain);      
}
async function createContainer () {
    var inp = document.getElementById("inp2").value;
    console.log("inp:",inp);
    if(inp){
        document.querySelector("#contain1").innerHTML = "";
        let inputUrl = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${inp}&per_page=20`);
        //for search by name
        //let inputUrl = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${unique_name}&per_page=3`);
        let result = await inputUrl.json();
        console.log(result);
        result.forEach(element => {
            createBrewerylist(element);
        });
    }
    else{
        let inputUrl = await fetch(`https://api.openbrewerydb.org/breweries`);
        let result = await inputUrl.json();
        console.log(result);
        result.forEach(element => {
            createBrewerylist(element);
        });
    }
}

createContainer();
