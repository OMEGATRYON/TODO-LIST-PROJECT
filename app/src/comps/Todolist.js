import { useState } from "react";

function Todolist() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    console.log(items);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleClick(event) {
        setItems([...items, inputValue]);
    }

    return (
        <div>
            <input type="text" placeholder="whats on the list!?" onChange={handleInputChange}/>
            <button onClick={handleClick}>Add to list!</button>
            <ul>
                {items.map(items => {
                    return <li key={items}>{items}</li>
                })}   
            </ul>
        </div>
    )
}
export default Todolist;