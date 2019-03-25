// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
    pepperonni: { name: "Pepperonni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
    renderPepperonni();
    renderMushrooms();
    renderGreenPeppers();
    renderWhiteSauce();
    renderGlutenFreeCrust();

    renderButtons();
    renderPrice();
}

function renderPepperonni() {
    document.querySelectorAll(".pep").forEach(function($pep) {
        if (state.pepperonni) {
            $pep.style.visibility = "visible";
        } else {
            $pep.style.visibility = "hidden";
        }
    });
}

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
    document.querySelectorAll(".mushroom").forEach(function($mushroom) {
        if (state.mushrooms) {
            $mushroom.style.visibility = "visible";
        } else {
            $mushroom.style.visibility = "hidden";
        }
    });
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll(".green-pepper").forEach(function($greenPeppers) {
        if (state.greenPeppers) {
            $greenPeppers.style.visibility = "visible";
        } else {
            $greenPeppers.style.visibility = "hidden";
        }
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if (state.whiteSauce) {
        document.querySelector(".sauce").classList.add("sauce-white");
    } else {
        document.querySelector(".sauce").classList.remove("sauce-white");
    }
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    if (state.glutenFreeCrust) {
        document.querySelector(".crust").classList.add("crust-gluten-free");
    } else {
        document.querySelector(".crust").classList.remove("crust-gluten-free");
    }
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

document.querySelectorAll(".btn").forEach(function(button) {
    button.addEventListener("click", evt => {
        console.log(evt.target.innerHTML);
        evt.target.classList.toggle("active");
    });
});

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    const pricePanel = document.querySelector(".panel.price");
    pricePanel.innerHTML = "";

    const heading = document.createElement("h2");
    heading.innerHTML = "Your pizza's price";
    pricePanel.appendChild(heading);

    const basePriceElement = document.createElement("b");
    basePriceElement.innerHTML = "$" + basePrice + " cheese pizza";
    pricePanel.appendChild(basePriceElement);

    const addOns = document.createElement("ul");
    pricePanel.appendChild(addOns);

    if (state.pepperonni === true) {
        const pepperoni = document.createElement("li");
        pepperoni.innerHTML = "$1 pepperonni";
        addOns.appendChild(pepperoni);
    }

    if (state.mushrooms === true) {
        const mushroom = document.createElement("li");
        mushroom.innerHTML = "$1 mushrooms";
        addOns.appendChild(mushroom);
    }

    if (state.greenPeppers === true) {
        const gPepper = document.createElement("li");
        gPepper.innerHTML = "$1 green peppers";
        addOns.appendChild(gPepper);
    }

    if (state.whiteSauce === true) {
        const whiteSauce = document.createElement("li");
        whiteSauce.innerHTML = "$3 white sauce";
        addOns.appendChild(whiteSauce);
    }

    if (state.glutenFreeCrust === true) {
        const glutenFreeCrust = document.createElement("li");
        glutenFreeCrust.innerHTML = "$5 gluten-free crust";
        addOns.appendChild(glutenFreeCrust);
    }

    const finalPrice = document.createElement("strong");
    finalPrice.innerHTML = "$" + calculatePrice();
    addOns.appendChild(finalPrice);
}

function calculatePrice() {
    const keysOfIngredients = Object.keys(ingredients);

    const sum = keysOfIngredients.reduce((acc, val) => {
        const priceOfVal = ingredients[val].price;
        if (state[val] === true) {
            return acc + priceOfVal;
        } else {
            return acc;
        }
    }, basePrice);

    return sum;
}

/*
const keysOfIngredients =[pepperonni,mushrooms,]
var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
};

var ingredients = {
    pepperonni: { name: "Pepperonni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};
*/

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
    state.pepperonni = !state.pepperonni;
    renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = function() {
    state.mushrooms = !state.mushrooms;
    renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = function() {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = function() {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = function() {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
};
