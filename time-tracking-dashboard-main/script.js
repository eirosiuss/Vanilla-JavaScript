const timeframe = document.getElementById('timeframe')
// console.log(timeframe);

const appendItem = (item) => {
    // console.log(item);

    const list = document.getElementById('timeframe')
    const newItem = document.createElement('li')
    newItem.textContent = item;
    list.appendChild(newItem);
}

const populateDOM = (data) => {
    // console.log(data);

    data.forEach((item) => {
        // console.log(item);

        appendItem(item.timeframes);

        Object.entries(item).forEach(element => {
            console.log(element);

        });

    })
}






const cards = document.getElementById('cards')
console.log(cards);

const title = document.querySelector('.header h2')
// console.log(title);



fetch('/Vanilla-JavaScript/time-tracking-dashboard-main/data.json')
    .then(response => {
        if (!response.ok) throw new Error('error');
        return response.json();
    })
    .then(data => {
        data.forEach(activity => {
            const card = document.createElement('div')
            card.innerHTML = `
            <h2>${activity.title}</h2>`
            // console.log(card.innerHTML);

            cards.appendChild(card)

            console.log(activity.timeframes.daily);
            
            




        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
