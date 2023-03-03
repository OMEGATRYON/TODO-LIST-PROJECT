import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Header from "./comps/Header";
import Todolist from "./comps/Todolist";
import './app.css'

function App() {
    return (
        <div id="hi" className="App text-center">
            <Header />
            <Todolist />
        </div>
    );
}
export default App;