import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, firestore } from '../firebase';
import { setUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const userId = userCredential.user.uid;

        try {
          const userDoc = await firestore.collection('users').doc(userId).get();

          if (userDoc.exists) {
            const user = userDoc.data();

            if (user.role === 'admin') {
              console.log('Admin olarak giriş yapıldı');
              dispatch(setUser(user));
              navigate('/admin'); // AdminPanel sayfasına yönlendir
            } else {
              console.log('Admin olmayan kullanıcı');
              // Hata mesajı göster veya diğer işlemleri yap
            }
          } else {
            console.log('Kullanıcı bulunamadı');
            // Hata mesajı göster veya diğer işlemleri yap
          }
        } catch (error) {
          console.error('Veritabanı hatası:', error);
        }
      })
      .catch((error) => {
        console.error('Giriş hatası:', error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;