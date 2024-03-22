    import React from 'react'
    import { Link } from 'react-router-dom'

    export default function navbar() {
        return (
            <>
                <div className="">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
                        <Link to="/" className="navbar-brand">FullStack CRUD</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link to="/addEmployee" className='btn btn-outline-light'>Add Employee</Link>
                    </nav>
                </div>
            </>
        )
    }
