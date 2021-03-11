import React, { useContext } from 'react'
import Createcontext from "./valueContext"

function Child(props) {
    let countervalue = useContext(Createcontext)

    return (
        <div>
            <h3>My name is {props.name}</h3>
            <h3>Using the usecontext</h3>


            <h3>Counter No:{countervalue[0]}</h3>


            <button onClick={() => {
                 countervalue[1] (++countervalue[0])
                 
            }}>Increase Number</button>

            <button onClick={() => {
                 countervalue[1](--countervalue[0]) 
            }}>Decrease Number</button>
        </div>


    )
}

export default Child