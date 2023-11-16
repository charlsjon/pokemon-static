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
      
      types.forEach(type => {
        var pokemonType = type["type"]["name"];
        console.log(pokemonType);
        if(pokemonType == "fire"){
          console.log("Fire")
          typeHTML +=`
            <div class="type-icon">
              <img src="/assets/img/Fire type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "grass"){
          console.log("Grass")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Grass type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "water") {
          console.log("Water")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Water type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "flying") {
          console.log("Flying")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Flying type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "ghost") {
          console.log("Ghost")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Ghost type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "psychic") {
          console.log("Psychic")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Psychic type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "poison") {
          console.log("Poison")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Poison type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "electric") {
          console.log("Electric")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Electric type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "bug") {
          console.log("Bug")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Bug type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "rock") {
          console.log("Rock")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Rock type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "ground") {
          console.log("Ground")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Ground type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "steel") {
          console.log("Steel")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Steel type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "fighting") {
          console.log("Fighting")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Fighting type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "normal") {
          console.log("Normal")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Normal type.ico" alt="">
            </div>
          `
        }
        else if (pokemonType == "fairy") {
          console.log("Fairy")
          typeHTML += `
            <div class="type-icon">
              <img src="/assets/img/Fairy type.ico" alt="">
            </div>
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
        <main class="poke-card fire">
          <section class="section-1">
            <main class="top">
              <div class="poke-name">
                <p class="pokemon-class">Basic Pokemon</p>
                <p class="pokemon-name">`+ name +`</p>
              </div>
              <div class="type-hp">
                `+ typeHTML +`
              </div>
            </main>
            <main class="middle-top">
              <div class="poke-image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+ i + `.png" alt="" class="pokemon-image">
              </div>
              <div class="stats">
                <p class="species unit">`+specie+` Pokemon</p>
                <p class="length unit"> Length: `+heights+` dm,</p>
                <p class="weight unit">Weight: `+weights+` lbs.</p>
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
                <p class="value">ID: `+id+`</p>
              </div>
              <div class="order">
                <p class="value">ORDER NO. `+order+`</p>
              </div>
            </main>
          </section>
        </main>
      `;
    });
}