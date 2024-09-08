import {useEffect, useState} from 'react'

function FetchData() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setUsers(users)
        )
    }, [])

  return (
    <div>
        <div>
            <h2>Fetch Users Data</h2>

            <div>
                <ul>
                    {users.map(user =>  
                        <div key={user.id}>
                            Kullanıcı Adı : {user.name}
                        
                        </div>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FetchData
