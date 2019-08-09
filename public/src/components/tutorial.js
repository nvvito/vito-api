import React from 'react'

let Tutorial = () => (
    <div className='tutorial'>
        <h2>Collections:</h2>
        <ul>
            <li>Book</li>
            <li>User</li>
        </ul>
        <h2>Schema:</h2>
        <ul>
            <li>{`book { name: '', keywords: [] }`}</li>
            <li>{`user {name: '', age: '', phones: [] }`}</li>
        </ul>
        <h2>Method:</h2>
        <h3>User</h3>
        <ul>
            <li>{`http://localhost:5000/api/user/ - get - getAll`}</li>
            <li>{`http://localhost:5000/api/user/:id - get - getOneByID`}</li>
            <li>{`http://localhost:5000/api/user/ - post - createOne`}</li>
            <li>{`http://localhost:5000/api/user/:id - put - updateOneByID`}</li>
            <li>{`http://localhost:5000/api/user/:id - delete - deleteOneByID`}</li>
            <li>{`http://localhost:5000/api/user/phone - post - findByPhoneNumber`}</li>
        </ul>
        <h3>Book</h3>
        <ul>
            <li>{`http://localhost:5000/api/book/ - get - getAll`}</li>
            <li>{`http://localhost:5000/api/book/:id - get - getOneByID`}</li>
            <li>{`http://localhost:5000/api/book/ - post - createOne`}</li>
            <li>{`http://localhost:5000/api/book/:id - put - updateOneByID`}</li>
            <li>{`http://localhost:5000/api/book/:id - delete - deleteOneByID`}</li>
        </ul>
    </div>
)
export default Tutorial