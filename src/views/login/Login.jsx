import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';
import { login } from 'src/server/api/user';
import { setUser } from 'src/store/user';
import './Login.css';

const NIGHT_TIME = 22;
const MORNING_TIME = 6;
const isNightMode = (nowHour) =>
  nowHour >= NIGHT_TIME || nowHour < MORNING_TIME ? 'night' : '';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [second, setSecond] = useState('');
  const timer = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getTime() {
    const time = new Date();
    return [time.getHours(), time.getMinutes(), time.getSeconds()];
  }

  function updateTime() {
    const [newHour, newMin, newSecond] = getTime();
    setHour(newHour < 10 ? `0${newHour}` : newHour + '');
    setMin(newMin < 10 ? `0${newMin}` : newMin + '');
    setSecond(newSecond < 10 ? `0${newSecond}` : newSecond + '');
  }

  useEffect(() => {
    updateTime();
    timer.current = setInterval(() => {
      updateTime();
    }, 1000);
    return () => timer.current && clearInterval(timer.current);
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const { data } = await login(username, password);
      dispatch(
        setUser({
          userId: data.user_id,
          username: data.username,
          role: data.role,
        })
      );
      alert('login successfully');
      navigate('/file');
    } catch (err) {
      alert(err.details);
    }
  }

  return (
    <div className={`login-container ${isNightMode(hour)}`}>
      <article className={`time ${isNightMode(hour)}`}>
        {hour}:{min}:{second}
      </article>
      <form className={`login-form ${isNightMode(hour)}`}>
        <div>
          <Input
            name="username"
            value={username}
            setValue={setUsername}
            verticalLayout
          />
          <Input
            name="password"
            value={password}
            setValue={setPassword}
            inputProps={{ type: 'password' }}
            verticalLayout
          />
        </div>
        <div className="login-btn-wrapper">
          <Button onClick={(e) => handleClick(e)} fullWidth>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
