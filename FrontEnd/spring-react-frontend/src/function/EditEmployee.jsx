import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditEmployee() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const {firstName, lastName, email} = employee;

    const onInputChange = (e) => {
        setEmployee({...employee,[e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadEmployee();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://employeesystem-c803af2aa6e5.herokuapp.com/api/main/employee/${id}`, employee);
        navigate("/")
    };

    const loadEmployee = async () => {
        const result = await axios.get(`https://employeesystem-c803af2aa6e5.herokuapp.com/api/main/employee/${id}`);
        setEmployee(result.data);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Employee</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="firstName" className='form-label'>First Name</label>
                            <input type="text" className='form-control' placeholder='Enter your first name' name='firstName' required value={firstName} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastName" className='form-label'>Last Name</label>
                            <input type="text" className='form-control' placeholder='Enter your last name' name='lastName' required value={lastName} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" className='form-control' placeholder='Enter your email' name='email' required value={email} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link to="/" className='btn btn-outline-danger m-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
