// document.getElementById("colorPicker"). addEventListener("input", function(){
//     console.log("test");
//     document.querySelector('#mySVG').setAttribute("fill" this.value);
// });



const baseURL = 'https://fdnd.directus.app/'
const endpointMe = 'items/person/200'

const myURL = baseURL + endpointMe;

async /*9*/ function getData(URL) {
    return ( //8
        fetch(myURL) //1
        .then( //2
            response /*3*/ => response.json() //4
        )
        .then( //5
            jsonData /*6*/ => {
                return jsonData
            } //7
        )
    );
}

// getData();


getData(myURL).then(data => {
    // haal de data van my URL op, pas het aan naar mijn data, 
    // de functie aanroepen die eronder staat en vervolgens vertellen wat ermee gaat gebeuren

    let jurkBox = document.querySelector(".Jurk .infoBox");
    // gaat in het document opzoek naar de h1 en geef je een naam om mee aan te spreken

    let myName = data.data.name;
    //je maakt een variabele aan, je haalt de naam uit de data die je gekregen hebt 
    console.log(jurkBox);
    jurkBox.textContent = myName;


    let tShirtBox = document.querySelector(".tShirt .infoBox");
    console.log(tShirtBox)
    let myBday = data.data.birthdate;
    tShirtBox.textContent = myBday;


    let TopjeBox = document.querySelector(".Topje .infoBox");
    let myfav_country = data.data.fav_country;
    TopjeBox.textContent = myfav_country;


    let ShirtBox = document.querySelector(".Shirt .infoBox");
    console.log(ShirtBox)
    let myfav_kitchen = data.data.fav_kitchen;
    ShirtBox.textContent = myfav_kitchen;

    let paarsShirtBox = document.querySelector(".paarsShirt .infoBox");
    // let mycustom = data.data.custom;

    // console.log(JSON.parse(data.data.custom).naam);

    // dit is een tekststring
    let myCustomData = data.data.custom
    // tekst omzetten naar JSON
    let myCustomJSON = JSON.parse(myCustomData);

    console.log(myCustomJSON);

    let myLeeftijd = myCustomJSON.age
    console.log(myLeeftijd)

    paarsShirtBox.textContent = myLeeftijd;

    // let shirtsHangerBox = document.querySelector(".shirtsHanger .infoBox");
    // let myfav_property = data.data.fav_property;
    // shirtsHangerBox.textContent = myfav_property;
    // je zoekt naar de H1 in het docuemtn en veranderd de content van de h1 met de data die je hebt gekregen van de APIŒ™``Í`Å„Q2
})




function openBox(obj) {
    obj.querySelector("p").classList.toggle("active");

    console.log("hoi")
}