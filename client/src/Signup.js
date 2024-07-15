import React, { useState } from 'react';

function Signup() {
  const [nickname, setNickname] = useState('');
  const [grade, setGrade] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // 입력 값 검증
    if (!nickname || !grade || !password || !passwordConfirm) {
      setError('모든 필드를 입력해야 합니다.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname, grade, password, password_confirm: passwordConfirm }),
      });
      if (response.ok) {
        alert('회원가입 성공');
        setNickname('');
        setGrade('');
        setPassword('');
        setPasswordConfirm('');
        setError('');
      } else {
        const result = await response.json();
        setError(result.error);
      }
    } catch (err) {
      console.error(err);
      setError('서버 오류');
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <label>
          닉네임:
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </label>
        <br />
        <label>
          학년:
          <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
        </label>
        <br />
        <label>
          비밀번호:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          비밀번호 재확인:
          <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        </label>
        <br />
        <button type="submit">회원가입</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Signup;