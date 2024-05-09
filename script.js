const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector(".new-quote-btn");
const copyBtn = document.querySelector(".copy-btn");

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";

  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
      copyBtn.innerText = "Copy Quote";
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      quoteBtn.innerText = "Error. Try Again";
      quoteBtn.classList.remove("loading");
    });
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteText.innerText} - ${authorName.innerText}`);
  copyBtn.innerText = "Copied!";
  setTimeout(() => {
    copyBtn.innerText = "Copy Quote";
  }, 1000);
});

quoteBtn.addEventListener("click", randomQuote);


randomQuote();
