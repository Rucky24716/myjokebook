const btnEL = document.getElementById("btn")
const JokeEL = document.getElementById("Joke")


const apiKey = "CkDUIWI/FoxfPopVsOlKuQ==9fG0BEqRp3xCR4CY"; 
const options = {
    method: "GET",
    headers: {
        "X-Api-KEY": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {

    try {
    JokeEL.innerText ="updating...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading...";
   const response = await fetch(apiURL, options);
   const data = await response.json();

   btnEL.disabled = false;
   btnEL.innerText = "Tell me a joke";

   JokeEL.innerText = data[0].joke;
   } catch (error){
  JokeEL.innerText = "An error happened, try again later";
  btnEL.disabled = false;
   btnEL.innerText = "Tell me a joke";
        console.log(Error); 
    }
}

btnEL.addEventListener("click", getJoke);
