// async function fetchData() {
//   const pokemonDataArray = [];

//   for (let i = 1; i <= 100; i++) {
//     let url = `https://pokeapi.co/api/v2/pokemon/${i}`;

//     try {
//       let response = await fetch(url);

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       let data = await response.json();

//       // Process or store the data as needed
//       pokemonDataArray.push(data);
//     } catch (error) {
//       console.error(`Error fetching data for Pokemon ${i}:`, error);
//     }
//   }

//   // Now, pokemonDataArray contains the data for all 100 Pokémon in the correct order
//   console.log(pokemonDataArray);
//   console.log(pokemonDataArray[1].name)
// }

// // Call the function to start the asynchronous operation
// fetchData();



for (let i = 1; i <= 100; i++) {

  let url = "https://pokeapi.co/api/v2/pokemon/" + i;

  fetch(url)
    .then(resp => resp.json())
    .then(resp => {

      //Capital First Letter
      var name = resp.name;

      //Get Pokemon Type
      var typeHTML = "";
      var types = resp.types;
      var eachTypeHTML = "";

      types.forEach(type => {
        var pokemonType = type["type"]["name"];
        var getBackground = document.querySelectorAll('.poke-card');
        if (pokemonType == "fire") {
          // console.log("Fire")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Fire type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
          `+ pokemonType + `
          `
        }
        else if (pokemonType == "grass") {
          console.log("Grass")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Grass type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
          ` + pokemonType + `
          `
        }
        else if (pokemonType == "water") {
          console.log("Water")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Water type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
          `+ pokemonType + `
          `
        }
        else if (pokemonType == "flying") {
          // console.log("Flying")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Flying type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
          ` + pokemonType + `
          `
        }
        else if (pokemonType == "ghost") {
          // console.log("Ghost")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Ghost type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
          ` + pokemonType + `
          `
        }
        else if (pokemonType == "psychic") {
          // console.log("Psychic")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Psychic type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "poison") {
          // console.log("Poison")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Poison type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "electric") {
          // console.log("Electric")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Electric type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "bug") {
          // console.log("Bug")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Bug type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "rock") {
          // console.log("Rock")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Rock type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "ground") {
          // console.log("Ground")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Ground type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "steel") {
          // console.log("Steel")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Steel type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "fighting") {
          // console.log("Fighting")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Fighting type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "normal") {
          // console.log("Normal")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Normal type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }
        else if (pokemonType == "fairy") {
          // console.log("Fairy")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Fairy type.ico" alt="">
            </div>
          `
          eachTypeHTML += `
            `+ pokemonType + `
          `
        }

      });

      //Get Abilities
      var abilityHTML = "";
      var abilities = resp.abilities;
      abilities.forEach(ability => {
        abilityHTML += `<div class="ability">
        <p class="ability-text">` + ability["ability"]["name"]; +`</p>
        </div>`
      })

      //Get Height and Weight
      var heights = resp.height;
      var weights = resp.weight;
      var id = resp.id;
      var order = resp.order;

      //Get Species
      var species = resp.species;
      var specie = species.name;

      var wrapper = document.querySelector('.wrapper');
      wrapper.innerHTML += `
        <main class="poke-card `+ eachTypeHTML + `">
          <section class="section-1">
            <main class="top">
              <div class="poke-name">
                <p class="pokemon-class">Basic Pokemon</p>
                <p class="pokemon-name">`+ name + `</p>
              </div>
              <div class="type-hp">
                `+ typeHTML + `
              </div>
            </main>
            <main class="middle-top">
              <div class="poke-image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+ i + `.png" alt="" class="pokemon-image">
              </div>
              <div class="stats">
                <p class="species unit">`+ specie + ` Pokemon</p>
                <p class="length unit"> Length: `+ heights + ` dm,</p>
                <p class="weight unit">Weight: `+ weights + ` lbs.</p>
              </div>
            </main>
          </section>
          <section class="section-2">
            <main class="middle-bottom">
              <div class="ability">
                <p class="ability-name">Scratch</p>
              </div>
              <div class="ability">
                <p class="ability-name">Ember</p>
              </div>
            </main>
            <main class="bottom">
              <div class="id">
                <p class="value">ID: `+ id + `</p>
              </div>
              <div class="order">
                <p class="value">ORDER NO. `+ order + `</p>
              </div>
            </main>
          </section>
        </main>
      `;
    });
}

window.onscroll = function () { myFunction() };

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;