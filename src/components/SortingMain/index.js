import React, { useState, useEffect } from "react";

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

    return (
        <div className="w-100 justify-content-center">
            <h1 className="text-center my-3">Sorter</h1>
            <div className="row w-100 pb-4 justify-content-center">
                <button className="col-3 btn btn-primary mx-5" onClick={newArray}>Generate New Array</button>
                <button className="col-2 btn btn-info mx-1">Merge Sort</button>
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