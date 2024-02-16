

//* add title on card

const cards = document.querySelectorAll(".card")

let titleCount = 1

let totalPrice = 0;

for ( let i = 0; i < cards.length; i++){

    const card = cards[i]

    

    card.addEventListener('click', function(){

        const title =card.querySelector("h3").innerText
        const price =parseFloat((card.querySelector("span").innerText.split(" ")[1]))

        const p = document.createElement('p')

        p.innerText = `${titleCount}. ${title}`

        const parent = document.getElementById("title-container")

        parent.appendChild(p)

        titleCount++

        //* calculate total price

        totalPrice += price

        console.log(totalPrice);

        document.getElementById('totalPrice').innerText = totalPrice
    })
}