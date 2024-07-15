import React, { useState } from 'react';
import './App.css'; // App.css 파일을 생성하여 스타일링을 추가할 수 있습니다.

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // 간단하게 하드코딩된 값으로 로그인 시뮬레이션
    if (username === 'admin' && password === 'password') {
      alert(`Welcome, ${username}!`); // 실제로는 이 부분을 로그인 처리 로직으로 대체해야 합니다.
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label>아이디</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginForm;