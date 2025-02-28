function randomizerBooth() {
    num1 = Math.ceil(Math.random() * 20);
    num2 = Math.ceil(Math.random() * 20);
    num3 = Math.ceil(Math.random() * 20);

    document.getElementById("foods").innerText = num1;
    document.getElementById("drinks").innerText = num2;
    document.getElementById("games").innerText = num3;

    biggest = Math.max(num1, num2, num3);

    if (biggest === num1) {
        maxBiggest = "Foods";
    } else if (biggest === num2) {
        maxBiggest = "Drinks";
    } else {
        maxBiggest = "Games";
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num3 <= 26) {
    nthLetter = alphabet[num3 - 1];
    } else {
    nthLetter = "N/A";
    }   

    totalMinutes = num2 * num3;
    hours = Math.floor(totalMinutes / 60);
    minutes = totalMinutes % 60;

    document.getElementById("maxB").innerHTML = `The booth that had the most visitors is: <b> ${maxBiggest} (${biggest}). </b>`;
    document.getElementById("name").innerHTML = `The name of the person who visited the most in the Games Booth starts with letter: <b> ${nthLetter} </b>`;
    document.getElementById("time").innerHTML = `The estimated time for the games to finish in the Games Booth is (${totalMinutes} mins): <b> ${hours}hr ${minutes}min. </b>`;
}
