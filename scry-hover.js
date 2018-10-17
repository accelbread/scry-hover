for(const card of [...document.body.getElementsByTagName("card")]) {
    const replacement = document.createElement("a");
    replacement.classList.add("mtg-card");
    replacement.innerText = card.innerText;
    replacement.href = 'http://scryfall.com/search?q=!"' + card.innerText + '"';

    const tooltip = document.createElement("div");
    tooltip.classList.add("mtg-card__tooltip");
    const image = document.createElement("img");
    image.classList.add("mtg-card__tooltip-image");
    image.src =
        'http://api.scryfall.com/cards/named?format=image&version=normal&fuzzy='
        + card.innerText;
    tooltip.appendChild(image);
    replacement.appendChild(tooltip);

    card.parentNode.replaceChild(replacement, card);
}
