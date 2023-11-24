var cardCounter = 0;
async function getPokeAPI(){
  for (let i = 1; i <= 100; i++) {

    let url = "https://pokeapi.co/api/v2/pokemon/" + i;

    const ggs = await fetch(url);
  
      ggs.json()
      .then( resp => {
        console.log(resp);
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

        //Get Moves (limited to 2 moves only);
        var moveSet = [];
        var moves = resp.moves;
        moves.forEach(move => {
          var specificMove = move["move"]["name"];
          moveSet.push(specificMove);

        })
        // console.log(moveSet.length);
        var selected = [];
        var randomSelect1 = Math.floor(Math.random() * moveSet.length);
        selected.push(moveSet[randomSelect1]);
        // moveSet.splice(moveSet[randomSelect1], 1);
        var randomSelect2 = Math.floor(Math.random() * moveSet.length);
        selected.push(moveSet[randomSelect2]);
        // moveSet.splice(moveSet[randomSelect2], 1);

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
              <button class="button shine-btn" id="shiny-btn-`+i+`">
                <img src="/assets/img/shiny_symbol_pokemon_tdxjdc.webp" class="shiny-logo">
              </button>
              <button class="button shine-btn-2">
                <img src="/assets/img/shiny_symbol_pokemon_tdxjdc.webp" class="shiny-logo">
              </button>
              <div class="poke-image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`+ i + `.png" alt="" class="pokemon-image" id="pokemon-image-`+ i +`">
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
                <p class="ability-name">`+ selected[0] + `</p>
              </div>
              <div class="ability">
                <p class="ability-name">`+ selected[1] + `</p>
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


        cardCounter++

        if (cardCounter == 100) {
         
          var pokemonImage = document.querySelectorAll('.middle-top');
          var shineBtn = document.querySelectorAll('.shine-btn');
          var shineBtn2 = document.querySelectorAll('.shine-btn-2');
          var portrait = document.querySelectorAll('.pokemon-image');
          let shiny = false;
          console.log('shiny check: ', shiny);

          for (let z = 0; z < cardCounter; z++) {
            let y = z + 1;
            // console.log(pokemonImage[z])
            
            if(shiny == false){
              pokemonImage[z].addEventListener("mouseover", function(){
              shineBtn[z].style.display = "flex";
              shineBtn[z].style.zIndex = "5";
              // console.log('shiny :', shiny);
              
              })
              pokemonImage[z].addEventListener("mouseout", function () {
              shineBtn[z].style.display = "none";
                // console.log('shiny :', shiny);
              })
            }

            shineBtn[z].addEventListener("click", ()=>{
        
              if(shiny == false) {
             
                // console.log("test", portrait[z]);
                portrait[z].setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/"+y+".png")
           
                shineBtn2[z].classList.add('toggle-shiny');
                shineBtn2[z].style.display = "flex"
                console.log(shineBtn[z]);  
                shiny = true;
                // console.log('shiny 1:', shiny);            
              }
              else {
           
                portrait[z].setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+y+".png")
                
                shineBtn2[z].classList.remove('toggle-shiny');
                shineBtn2[z].style.display="none"
                console.log(shineBtn[z]);
                shiny = false;
                // console.log('shiny 1:', shiny);
              }

            })
          }
          // console.log(shiny);
        }

      });
  }

} 


getPokeAPI()

