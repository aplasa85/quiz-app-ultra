import { useState } from "react";
import React, { useState, useEffect } from "react";
import Card from "./Card.css"

function Card { Card } {

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards))
    }, [cards])

    return (
        <div className='card-container'>

            <h2>{Card.question}</h2>
            <p>{Card.answer}</p>
        </div>
    )
}

export default Card;