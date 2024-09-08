import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(users => setUsers(users))
    }, []);
    return (
        <div>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users
