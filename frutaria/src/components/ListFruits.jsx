import React from "react";
import Fruit from "./fruits";
import AddFruit from "./AddFruit";

const ListFruits = () => {

    const fruits = [
        { id: 1, name: 'Abacaxi', quantity: 5 },
        { id: 2, name: 'Maça', quantity: 12 }
    ]

    return <>
        <h1> Fruit List</h1>

        <AddFruit />

        {fruits.map(fruit => (
            <Fruit key={fruit.id} fruit={fruit}></Fruit>
        ))}
    </>

}

export default ListFruits;