for (let i = 1; i <= 100; i++) {

  let url = "https://pokeapi.co/api/v2/pokemon/" + i;

  fetch(url)
    .then(resp => resp.json())
    .then(resp => {

      console.log(resp)
      //Capital First Letter
      var name = resp.name;

      //Get Pokemon Type
      var typeHTML = "";
      var types = resp.types;
      types.forEach(type => {
        typeHTML += `<div class="type">` + type["type"]["name"] + `</div>`
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

      var wrapper = document.querySelector('.wrapper');
      wrapper.innerHTML += `
      `;
    });
}