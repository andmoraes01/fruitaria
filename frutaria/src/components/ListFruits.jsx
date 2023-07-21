import React from "react";
import Fruit from "./fruits";
import AddFruit from "./AddFruit";
import { useSelector } from "react-redux";


const ListFruits = () => {

    const fruits = useSelector(state => state.fruitReducers.fruits)

    return <>
        <h1> Fruit List</h1>

        <AddFruit />

        {fruits.map(fruit => (
            <Fruit key={fruit.id} fruit={fruit}></Fruit>
        ))}
    </>

}

export default ListFruits;