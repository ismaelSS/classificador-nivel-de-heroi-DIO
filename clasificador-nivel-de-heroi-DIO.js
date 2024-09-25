const readline = require('readline');

const userInteration = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

userInteration.question("Digite o nome do herói: ", (heroName) => {
  function getXp() {
    userInteration.question("Digite a quantidade de experiência do herói: ", (xp) => {
      const heroXP = parseInt(xp, 10);

      if (isNaN(heroXP) || heroXP <= 0) {
        console.log("Quantidade de experiência inválida, tente novamente.");
        return getXp();
      }

      let heroLevel;

      if (heroXP < 1000) {
        heroLevel = "Ferro";
      } else if (heroXP >= 1001 && heroXP <= 2000) {
        heroLevel = "Bronze";
      } else if (heroXP >= 2001 && heroXP <= 5000) {
        heroLevel = "Prata";
      } else if (heroXP >= 5001 && heroXP <= 7000) {
        heroLevel = "Ouro";
      } else if (heroXP >= 7001 && heroXP <= 8000) {
        heroLevel = "Platina";
      } else if (heroXP >= 8001 && heroXP <= 9000) {
        heroLevel = "Ascendente";
      } else if (heroXP >= 9001 && heroXP <= 10000) {
        heroLevel = "Imortal";
      } else {
        heroLevel = "Radiante";
      }

      console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
      userInteration.close();
    });
  }

  getXp();
});
