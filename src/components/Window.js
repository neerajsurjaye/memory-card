import React, { useState, useEffect } from "react";
import Cards from "./Cards";

let Window = (props) => {
    let [selected, setSelected] = useState([]);
    let [nCards, setCards] = useState(10);
    let [lost, setLost] = useState(0);
    let [upd, setUpd] = useState(0);
    // let [currCards, setCurrCards] = useState([]);


    // useEffect(() => {
    //     let intev = setInterval(() => { setUpd(upd + 1) }, 1000);
    //     return () => { clearInterval(intev) };
    // }, [upd]);


    let genNum = () => {
        let val = -1;
        let cards = [];

        let iter = nCards;


        //sets iter 
        if (selected.length <= 2) {
            iter = iter - selected.length;
        }
        else {
            iter = iter - 2;
        }

        // Generates random number
        for (let i = 0; i < iter; i++) {
            cards.push(Math.floor(Math.random() * 30));
        }

        //pushes selected cards
        for (let i = 0; i < 2; i++) {
            if (selected.length >= 1) {
                cards.push(selected[Math.floor(Math.random() * selected.length)]);
            }
        }

        return cards;
    }

    let updateSelected = (val) => {
        console.log(val);
        if (selected.includes(val)) {
            setLost(1);
        }

        // console.log(props.score.score, "score");
        let score = props.score;
        score.setScore(score.score + 1);

        if (score.score >= score.maxScore) {
            score.setMaxScore(score.score + 1);
        }


        setSelected([...selected, val]);

        // console.log("selected", selected, val);
    }


    let reset = () => {
        setSelected([]);
        props.score.setScore(0);
        setLost(0);
    }


    let genCards = () => {
        if (lost == 1) {
            return <div className="lostScreen">
                <h1 className="lost">Lost</h1>
                <button className="button" onClick={() => { reset() }}>Reset</button>
            </div>;
        }



        let numbers = genNum();
        // setCurrCards([...numbers]);

        let comp = [];
        console.log("Gen Cards");

        for (let i = 0; i < nCards; i++) {

            comp.push(<Cards val={numbers[i]} key={i} upd={updateSelected} ></Cards>)

        }

        let flex = [];

        for (let i = 0; i < 3; i++) {
            flex.push(<div key={i} className="row">{comp[i * 3]}{comp[1 + i * 3]}{comp[2 + i * 3]}</div>)
        }

        return flex;
    }




    return (
        <div className="container"> { genCards()}</div >
    )
}

export default Window;