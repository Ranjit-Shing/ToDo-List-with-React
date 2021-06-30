import React, { useState } from 'react'
import ToDolist from './ToDolist'
const App = () => {
    const [additem, newitem] = useState()
    const [items, setitems] = useState([])
    const itemEvent = (event) => {
        newitem(event.target.value)
    }
    const listofitem = () => {
        setitems((olditems) => {
            return [...olditems, additem]
        })
        newitem("")
    }
    const deleteItems = (id) => {
        setitems((olditems) => {
            return olditems.filter((arrElement, index) => {
                return index !== id

            })
        })

    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>ToDo list</h1>
                    <br />
                    <input type="text"
                        placeholder="Add a items"
                        value={additem}
                        onChange={itemEvent} />
                    <button onClick={listofitem}>+</button>
                    <ol>
                        {/* <li>{additem}</li> */}
                        {items.map((itemval, index) => {
                            return <ToDolist key={index}
                                id={index} text={itemval}
                                onSelect={deleteItems} />
                        })}
                    </ol>

                </div>

            </div>

        </>
    )
}
export default App