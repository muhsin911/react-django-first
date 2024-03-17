import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Update() {
    const [updateList, setUpdateList] = useState({
        full_name: '',
        email: '',
        contact: '',
        address: ''     
    });


    const { id } = useParams();

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/person/${id}/`);
                setUpdateList(response.data); 
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateList(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        try {
            await axios.patch(`http://127.0.0.1:8000/person/${id}/`, updateList);
            alert('Update successful');
        } catch (error) {
            console.log(error);
            alert('Update failed');
        }
    };

    return (
        <div>
            <table className='table table-bordered' style={{ maxWidth: '800px', margin: 'auto' }}>
    <tbody>
        <tr>
            <th style={{ width: '20%', verticalAlign: 'middle' }}>Full Name</th>
            <td>
                <input type='text' name="full_name" value={updateList.full_name} className='form-control' onChange={handleChange} placeholder='Full Name' style={{ maxWidth: '100%' }} />
            </td>               
        </tr>
        
        <tr>
            <th style={{ verticalAlign: 'middle' }}>Email</th>
            <td>
                <input type='email' name="email" value={updateList.email} className='form-control' onChange={handleChange} placeholder='Email' style={{ maxWidth: '100%' }} />
            </td>               
        </tr>
        <tr>
            <th style={{ verticalAlign: 'middle' }}>Contact</th>
            <td>
                <input type='tel' name="contact" value={updateList.contact} className='form-control' onChange={handleChange} placeholder='Contact No' style={{ maxWidth: '100%' }} />
            </td>               
        </tr>
        <tr>
            <th style={{ verticalAlign: 'middle' }}>Address</th>
            <td>
                <input type='text' name="address" value={updateList.address} className='form-control' onChange={handleChange} placeholder='Address' style={{ maxWidth: '100%' }} />
            </td>               
        </tr>
        <tr>
            <td colSpan='2' style={{ textAlign: 'center' }}>
                <button onClick={handleUpdate} className='btn btn-dark' style={{ width: '100px' }}>Update</button>
            </td>               
        </tr>
    </tbody>
</table>


        </div>
    );
}

export default Update;
