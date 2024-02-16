

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

        document.getElementById('totalPrice').innerText = totalPrice

        //* check is coupon are available for user

        if( totalPrice >= 200){
            isCouponValid("input-field")
        }
    })
}

// discount validation

function isCouponValid(elementId){

    const target = document.getElementById(elementId)

    target.removeAttribute('disabled')
}

const discountButton = document.getElementById("apply-btn")

discountButton.addEventListener('click', function(){

    const inputField = document.getElementById('input-field')

    const userCode = inputField.value.toUpperCase();

    if( userCode === "SALE20"){

        const discountNumber = (totalPrice / 100) * 20

        const yourDiscount = discountNumber.toFixed(2)

        const parent = document.getElementById('discountPrice')

        parent.innerText = yourDiscount

        const finalAmount = document.getElementById('total')

        finalAmount.innerText = totalPrice - yourDiscount

    }

    inputField.value = ""

})