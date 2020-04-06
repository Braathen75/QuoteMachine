const quotes = [
{
  text: "Je pense donc je suis",
  author: "René Descartes" },

{
  text: "Le gouvernement du peuple, par le peuple, pour le peuple",
  author: "Abraham Lincoln" },

{
  text: "Je ne crois qu'aux statistiques que j'ai moi-mêmes trafiquées",
  author: "Winston Churchill" },

{
  text: "Connais toi toi-même",
  author: "Socrate" }];



let randomNumber = quotes[Math.floor(Math.random() * quotes.length)];

let firstText = randomNumber.text;
let firstAuthor = randomNumber.author;

function randomQuote() {
  let randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  $("#text").text("\"" + randomNumber.text + "\"");
  $("#author").text(randomNumber.author);
}

$(document).ready(function () {
  $("#text").text("\"" + firstText + "\"");
  $("#author").text(firstAuthor);
  $("#new-quote").on("click", randomQuote);
});