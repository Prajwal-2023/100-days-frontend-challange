const cardObj = [
    {
        eventDay: "Today",
        eventTime: "22:00",
        eventCardColor:"c7a566",
        eventTitle: "Swiftogeddon - The Taylor Swift Club Night",
        eventDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam! Aut fugit nam ipsa adipisci. Dicta distinctio ipsa voluptates ullam",
        ticketStatus: {
            text: "Sold Out!",
            available: "false"
        }
    },
    {
        eventDay: "17 December",
        eventTime: "22:00",
        eventCardColor:"b2c766",
        eventTitle: "Swiftogeddon - The Taylor Swift Club Night",
        eventDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam! Aut fugit nam ipsa adipisci. Dicta distinctio ipsa voluptates ullam",
        ticketStatus: {
            text: "Buy a Ticket",
            available: "true"
        }
    },
    {
        eventDay: "19 December",
        eventTime: "18:30",
        eventCardColor:"66c0c7",
        eventTitle: "Swiftogeddon - The Taylor Swift Club Night",
        eventDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam! Aut fugit nam ipsa adipisci. Dicta distinctio ipsa voluptates ullam",
        ticketStatus: {
            text: "Buy a Ticket",
            available: "true"
        }
    },
    {
        eventDay: "22 December",
        eventTime: "19:00",
        eventCardColor:"9b66c7",
        eventTitle: "Swiftogeddon - The Taylor Swift Club Night",
        eventDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam! Aut fugit nam ipsa adipisci. Dicta distinctio ipsa voluptates ullam",
        ticketStatus: {
            text: "Buy a Ticket",
            available: "true"
        }
    },
]

const containerElem = document.querySelector('#container');

cardObj.forEach((newCard) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =
        `<div class="div_day_time" style="background:#${newCard.eventCardColor}">
                <h5>${newCard.eventDay}</h5>
                <h2>${newCard.eventTime}</h2>
        </div>
        <div class="detail_div">
                <h2>${newCard.eventTitle}</h2>
                <h4>${newCard.eventDescription}</h4>
        </div>
        <div class="status_button_div ">
                <button class="${newCard.ticketStatus.available === "false" ? 'no_ticket' : ''}">
                   ${newCard.ticketStatus.text}
                </button
        </div>`

    containerElem.appendChild(card);

})


{/* <div class="card">
<div class="div_day_time">
    <h5>Today</h5>
    <h2>22:00</h2>
</div>
<div class="detail_div">
    <h2>Swiftogeddon - The Taylor Swift Club Night</h2>
    <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam! Aut fugit nam ipsa
        adipisci. Dicta distinctio ipsa voluptates ullam",
    </h4>
</div>
<div class="status_button_div ">
    <button class="">
        Buy a Ticket
    </button>
</div>
</div> */}