let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

bandNames.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

const ul = document.getElementById('bands');
bandNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
});
