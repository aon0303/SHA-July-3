import React from 'react';
import { useState, useEffect } from 'react';
import Signup from './Signup';

function App() {
  // state
  const [data, setData] = useState({ users: [] });

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
    <div className='App'>
      <h1>test 하는 중...</h1>
      <Signup />
      <div>
        <h2>사용자 목록</h2>
        {data.users.length === 0 ? (
          // 데이터가 아직 로딩되지 않았거나 빈 배열일 경우
          <p>비어있음</p>
        ) : (
          data.users.map((user, index) => <p key={index}>{user.nickname}</p>)
        )}
      </div>
    </div>
  )
}

export default App;
