import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function List() {
    const [list, setList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/person/");
            setList(response.data); // Assuming the response.data is an array
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = async(id) =>{
        try{
            await axios.delete(`http://127.0.0.1:8000/person/${id}/`)
            const newList = list.filter(list => list.id !== id)
            setList(newList)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.full_name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.address}</td>
                        <td>
                            <Link to={`/update/${item.id}`} className='btn btn-info mr-2'>
                                Update
                            </Link>
                            <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default List;
