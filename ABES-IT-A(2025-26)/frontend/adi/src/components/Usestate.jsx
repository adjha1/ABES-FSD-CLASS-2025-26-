import React from 'react'

function Usestate() {

    function change() {
        console.log("hello");
    }
    return (
        <div>
            <button onClick={change} >Click </button>

        </div>
    )
}

export default Usestate