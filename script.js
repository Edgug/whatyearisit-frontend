fetch('https://whatyearisit-backend-cyan.vercel.app/year')
    .then(response => response.json())
    .then(data => {
    document.querySelector('#year').textContent = data.year;
});