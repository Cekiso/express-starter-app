module.exports = function(pizzaList) {

    const pizzas = pizzaList || [];

    function listAll() {
        return pizzas;
    }

    function addPizza(pizza) {

    }

    function deletePizza(pizzaId) {

    }

    function updatePizza(pizzaId) {

    }

    return {
        addPizza,
        deletePizza,
        updatePizza,
        listAll,
    }

}