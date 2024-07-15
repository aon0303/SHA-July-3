import React from 'react';
import { useState, useEffect } from 'react';

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
      <div>
        { (typeof data.users === 'undefined') ? (
          <p>loding...</p>
        ) : (
          data.users.map((u) => <p>{u.name}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
