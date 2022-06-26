import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';


function First() {
    useEffect(() => {
        axios.get('http://localhost:3000/customer').then((res) => {
            console.log(res.data)
        })
    })

    const [state, setState] = React.useState({
        name: '',
        age: '',
        gender: '',

    })

    const [details, setDetails] = useState();


    function handleName(e) {
        const value = (e.target.value)
        console.log({ ...state });
        setState({ ...state, [e.target.name]: value })
    }



    return (
        <div>
            <h1>Main Form</h1>
            <div className='mainForm'>
                <label>Name</label>
                <input type='text' placeholder='Fill Name' name='name' onChange={handleName} />
                <label>Age</label>
                <input type='number' placeholder='Fill number' name='age' onChange={handleName} />
                <label>Gender</label>
                <input type='text' placeholder='Fill Gender' name='gender' onChange={handleName} />

            </div>

        </div>
    )
}

export default First;