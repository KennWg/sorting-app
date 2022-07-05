import React, {useState, useEffect} from "react";

function SortingMain() {
    const [state, setState] = useState([]);

    useEffect(() => {
        newArray();
    }, [] );

    const newArray = () => {
        const array = [];
        for(let i = 0; i <= 101; i++){
            array.push(Math.floor(Math.random()*500)+10);
        }
        setState(array);
    }
    
    return (
        <section>
            <h1>Sorter</h1>
        </section>
    )
}

export default SortingMain;