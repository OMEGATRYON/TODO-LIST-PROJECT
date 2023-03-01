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
    const lineClick = event => {
        if (event.target.style.textDecoration) {
          event.target.style.removeProperty('text-decoration');
        } else {
          event.target.style.setProperty('text-decoration', 'line-through',);
        }
      };
      //click turns gray but NOT line-through. HOW TO FIX!
      const lineClickred = event => {
        if (event.target.style.textDecoration) {
          event.target.style.removeProperty('text-decoration');
        } else {
          event.target.style.setProperty('color', 'gray');
        }
      };

    return (
        <div>
            <input type="text" placeholder="whats on the list!?" onChange={handleInputChange}/>
            <button onClick={handleClick}>Add to list!</button>
            <ul onClick={lineClick} onClick={lineClickred}>
                {items.map(items => {
                    return <li key={items}>{items}</li>
                })}   
            </ul>
        </div>
    )
}
export default Todolist;