import React, { useState, useEffect } from "react";
import {mergeSortAnimations} from "../../algorithms";

function SortingMain() {
    const [state, setState] = useState([]);

    useEffect(() => {
        newArray();
    }, []);

    const newArray = () => {
        const array = [];
        for (let i = 0; i <= 200; i++) {
            array.push(Math.floor(Math.random() * 500) + 10);
        }
        setState(array);
    }

    const mergeSort = () => {
        const animations = mergeSortAnimations(state);

        for(let i = 0; i < animations.length; i++){
            const values = document.getElementsByClassName('array-value');
            const isColorChange = i % 3 !== 2;

            if(isColorChange){
                const [v1, v2] = animations[i];
                const v1Style = values[v1].style;
                const v2Style = values[v2].style;
                const color = i % 3 === 0 ? 'red' : 'aquamarine';

                setTimeout(() => {
                    v1Style.backgroundColor = color;
                    v2Style.backgroundColor = color;
                }, i * 5)
            } else {
                setTimeout(() => {
                    const [v1, height] = animations[i];
                    const v1Style = values[v1].style;
                    v1Style.height = `${height}px`;
                }, i * 5);
            }
        }
    }

    return (
        <div className="w-100 justify-content-center">
            <h1 className="text-center my-3">Sorter</h1>
            <div className="row w-100 pb-4 justify-content-center">
                <button className="col-3 btn btn-primary mx-5" onClick={newArray}>Generate New Array</button>
                <button className="col-2 btn btn-info mx-1" onClick={mergeSort}>Merge Sort</button>
                <button className="col-2 btn btn-info mx-1">Heap Sort</button>
                <button className="col-2 btn btn-info mx-1">Quick Sort</button>
                <button className="col-2 btn btn-info mx-1">Bubble Sort</button>
            </div>
            <div className="array-container py-2 w-100 justify-content-center d-flex align-items-end">
                {state.map((value, i) => (
                    <div className="array-value" key={i} style={{ height: `${value}px` }}></div>
                ))}
            </div>
        </div>
    )
}

export default SortingMain;