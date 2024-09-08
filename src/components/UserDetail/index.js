import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetailComponent() {
  const { id } = useParams();
  const [user, setUser] = useState(null); // Başlangıçta null

  useEffect(() => {
    // Veriyi fetch et
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error)); // Hata yönetimi
  }, [id]); // id değiştiğinde veri tekrar çekilir

  return (
    <div>
      <p>Kullanıcı Id : {id}</p>
      <div>
        {user ? (
          <div>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            {/* Diğer kullanıcı bilgileri */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default UserDetailComponent;
