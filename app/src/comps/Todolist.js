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
          event.target.style.setProperty('text-decoration', 'line-through');
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
        <div className=' text-center mt-5 border rounded-left border-dark' style={{marginLeft: '755px', width: "400px", overflowWrap: 'break-word', fontSize: "2rem" }}>
            <input style={{backgroundColor: '#61dafb', color: 'white'}} type="text" placeholder="whats on the list!?" onChange={handleInputChange}/>
            <button onClick={handleClick} style={{ paddingVertical: 12,  paddingHorizontal: 32, borderRadius: 4, elevation: 3, backgroundColor: 'black', color: 'white' }}>Add to list!</button>
            <ul style={{ listStyleType: "none" }} onClick={lineClick} >
                {items.map(items => {
                    return <li key={items}>{items}</li>
                })}   
            </ul>
            <button  style={{ marginRight: '5px',fontSize: ".9rem", paddingVertical: 12,  paddingHorizontal: 32, borderRadius: 4, elevation: 3, backgroundColor: 'black', color: 'white' }}>Incomplete</button>
            <button style={{marginRight: '5px', fontSize: ".9rem", paddingVertical: 12,  paddingHorizontal: 32, borderRadius: 4, elevation: 3, backgroundColor: 'black', color: 'white' }}>Completed</button>
            <button style={{marginRight: '5px', fontSize: ".9rem", paddingVertical: 12,  paddingHorizontal: 32, borderRadius: 4, elevation: 3, backgroundColor: 'black', color: 'white' }}>Delete All</button>
        </div>
    )
}
export default Todolist;