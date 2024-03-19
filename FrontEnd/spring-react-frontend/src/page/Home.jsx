import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const {id} = useParams(); 

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        loadEmployee();
    }, [])

    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/api/main/employee");
        setEmployee(result.data);
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/api/main/employee/${id}`);
        loadEmployee()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {
                            employee.map((emp) => (
                                <tr key={emp.id}>
                                    <th scope="row">{emp.id}</th>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>
                                        <Link to={`/viewEmployee/${emp.id}`} className='btn btn-primary mx-2'>View</Link>
                                        <Link to={`/editEmployee/${emp.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteEmployee(emp.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
