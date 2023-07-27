//List of quotes
const listOfQuotes = ["Living is the art of getting used to what we didn't expect.", "Never fear shadows. They simply mean there's a light shining nearby.", "You can't turn back the clock. But you can wind it up again.", "Happiness makes up in height for what it lacks in length.", "The most important trip you may take in life is meeting people halfway.", "A problem is a chance for you to do your best.", "A person without regrets is a nincompoop.", "Try to be a rainbow in someone else's cloud.", "The greatest mistake you can make is to be continually fearing that you'll make one.", "The most sincere compliment we can pay is attention."];

//Random Number Generator
const randomNumGenerator = () => {
    let quotes = listOfQuotes.length;
    return Math.floor(Math.random() * quotes);
}

const indexNum = randomNumGenerator();

//printing the random quote from the list
const finalMessage = () => {
    console.log(listOfQuotes[indexNum]);
}





//Tester
finalMessage();