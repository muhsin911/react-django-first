import React, { useState } from 'react';
import axios from 'axios';

function Add() {
    const [newList, setNewList] = useState({
        full_name: '',
        email: '',
        contact: '',
        address: ''     
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewList(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const postList = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/person/', newList);
            setNewList({ full_name: '', email: '', contact: '', address: '' }); // Reset form fields
            alert('Submission successful'); // Providing user feedback
        } catch (error) {
            console.log(error);
            alert('Submission failed'); // Providing user feedback
        }
    };

    return (
        <div>
            <input type="text" name="full_name" value={newList.full_name} className="form-control" onChange={handleChange} placeholder='full name' style={{ marginBottom: '10px' }} />

            <input type="email" name="email" value={newList.email} className="form-control" onChange={handleChange} placeholder='email' style={{ marginBottom: '10px' }} />

            <input type="tel" name="contact" value={newList.contact} className="form-control" onChange={handleChange} placeholder='contact no:' style={{ marginBottom: '10px' }} /> 

            <input type="text" name="address" value={newList.address} className="form-control" onChange={handleChange} placeholder='address' style={{ marginBottom: '10px' }} />

            <button onClick={postList} className='btn btn-dark'>Submit</button>
        </div>
    );
}

export default Add;
