  // Масив със вкусове 1
  var stings = [
    "| Holster Mr John + Holster Watermill Punch |",
    "| Holster Peery Punch + Holster Bloody Punch |",
    "| Holster Booster + Holster Quwi Punch |",
    "| Holster IceBomb + Holster Miss Joosy |",
    "| Ice Finger + Holster Unicorn|",
    "| Holster Unicorn + Holster Ice Kaktuz |",
    "| Holster Bono + Holster Grp Mint |",
    "| Holster Watermill Punch + Holster Grp Mint |",
    "| Holster Quwi Punch + Holster Ice Kaktuz |",
    "|  Holster Bono + Holster Ice Kaktuz |",
    "| African Queen + African King |",
    "| African Queen + Monster |",
    "| African King + CosaNostra |",
    "| Monster + CosaNostra |",
    "| Casanova + Bad Girl |",
    "| 54 + Unknown |",
    "| Lucifero + TNT |",
    "| Bonnie Clyde + AMA Girl |",
    "| Casanova + Unknown |",
    "| Bad Girl + Cleopatra |",
    "| 54 + TNT |",
    "| 54 + TNT |",
    "| Lucifero + Bonnie Clyde |",
    "| AMA Girl + African King |",
    "| CosaNostra + TNT |",
    "| Cleopatra + Monster |",
    "| Bad Girl + AMA Girl |",
    "| Casanova + 54 |",
    "| African King + Lucifero |",
    "| African Queen + TNT |",
    "| Cleopatra + Bonnie Clyde |",
    "| 54 + Monster |",
    "| Bad Girl + CosaNostra |",
    "| AMA Girl + TNT |",
    "| Casanova + Cleopatra |",
    "| African King + 54 |",
    "| African Queen + Bad Girl |",
    "| Monster + TNT |",
    "| Lucifero + Cleopatra |",
    "| Bonnie Clyde + CosaNostra |",
    "| Mongo Loco + Zenta Schox  |",
    "| Cherry Skittlez + Fellatio |",
    "| Laoz + Big Black Barries |",
    "| MellionAir + Punani |",
    "| MellionAir + Zenta Schox |",
    "| Laoz + Punani |",
    "| Big Black Barries + Cherry Skittlez |",
    "| MellionAir + Fellati |",
    "| Zenta Schox + Punani |",
    "| Cherry Skittlez + Laoz |",
    "| Mongo Loco + Big Black Barries |",
    "| MellionAir + Cherry Skittlez |",
    "| Fellatio + Zenta Schox |",
    "| Mongo Loco + Holster Ice Kaktuz|",
    "| African Queen + Cherry Skittlez |",
    "|Zenta Schox + Bad Girl |",
    "| Monster + MellionAir |",
    "| Laoz + CosaNostra |",
    "| Big Black Barries + Cleopatra |",
    "| Fellatio + African King |",
    "| Punani + Bonnie Clyde |",
  

    
  ];
  
  // Функция за генериране на случаен стинг
  function generateSting() {
    // Избира случаен индекс от масива със стингове
    const randomIndex = Math.floor(Math.random() * stings.length);
    
    // Връща стойността на стинга, свързан с избрания индекс
    return stings[randomIndex];
  }
  
  // Свързва бутона с функцията за генериране на случаен стинг
  var generateButton = document.getElementById("generate-button");
  var resultDiv = document.querySelector(".result");
  
  generateButton.addEventListener("click", function() {
    // Извиква функцията за генериране на случаен стинг
    const randomSting = generateSting();
    
    // Показва случайно избрания стинг в съответния елемент
    resultDiv.textContent = randomSting;
  });




