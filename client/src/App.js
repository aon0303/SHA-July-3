import React from 'react';
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';

function App() {
  // state
  const [data, setData] = useState([{}])

  useEffect(() => 
    {
    	fetch("/users").then(
          response => response.json()
        ).then(
          data => {
            // 받아온 데이터를 data 변수에 update
            setData(data);
          }
        ).catch(
          (err) => console.log(err)
        )
    }, [])

  return (
    <div>
      {/* LoginForm 컴포넌트를 렌더링 */}
      <LoginForm />

      {/* 가져온 데이터를 출력 */}
      <div>
        <h2>사용자 목록</h2>
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
