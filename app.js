const quotes = [
    {quote:"If you're going through hell, keep going.",author:"Winston Churchill"},
    {quote:"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",author:"Abraham Lincoln"},
    {quote:"A ship is safe in harbor, but that's not what ships are for.",author:"William Shedd"},
    {quote:"You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches.",author:"Dita Von Teese"},
    {quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",author:"Aristotle"},
    {quote:"Not all those who wander are lost.",author:"Tolkien"},
    {quote:"There are two rules to success: Never tell everyone everything you know.",author:"Roger H. Lincoln"},
    {quote:"It is better to remain silent and be thought a fool than to open one's mouth and remove all doubt.",author:"Mark Twain"},
    {quote:"We all make choices in life, but in the end our choices make us.",author:"Andrew Ryan"},
    {quote:"Somewhere, something incredible is waiting to be known.",author:"Carl Sagan"}
];

const btn = document.querySelector('#new-quote');
const para = document.querySelector('.quote');
const author = document.querySelector('.author');

function changeQuote() {
    let randNum = Math.floor(Math.random() * quotes.length);

    para.innerText = quotes[randNum].quote;
    author.innerText = quotes[randNum].author;
};

btn.addEventListener('click', changeQuote);