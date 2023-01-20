fetch('https://vercel.com/edgug/whatyearisit-backend/HhrRizvB9EqHCsTrX8qitA3n9Lbf')
    .then(response => response.json())
    .then(data => {
    document.querySelector('#year').textContent = data.year;
});