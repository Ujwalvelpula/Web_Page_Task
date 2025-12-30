
    document.getElementById("quote-text").classList.add("show");
    const quotes = [
        "Cancer is a word, not a sentence. — John Diamond",
        "Hope is stronger than fear.",
        "You are stronger than you think.",
        "Every day is a second chance.",
        "Strength grows in moments when you think you can’t go on."
    ];

    let index = 0;
    const quoteElement = document.getElementById("quote-text");

    setInterval(() => {
        quoteElement.classList.remove("show");

        setTimeout(() => {
            index = (index + 1) % quotes.length;
            quoteElement.textContent = quotes[index];
            quoteElement.classList.add("show");
        }, 500);
    }, 4000);
