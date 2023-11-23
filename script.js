document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("student-info").innerText = "Student ID: 200536540  Name: Joviyal Joy";
});

function submitOrder() {
    const pizzaSize = document.getElementById("pizza-size").value;
    const pizzaToppings = document.getElementById("pizza-toppings").value;
    const pizzaCrust = document.getElementById("pizza-crust").value;

    const pizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust);

    document.getElementById("pizza-description").innerHTML = `<p>Your Pizza: ${pizza.getDescription()}</p>`;
}

class Pizza {
    constructor(size, toppings, crust) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
    }

    getDescription() {
        return `Size: ${this.size} | Toppings: ${this.toppings} | Crust: ${this.crust}`;
    }
}
