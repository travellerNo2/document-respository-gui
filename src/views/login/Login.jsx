import React, { useEffect, useRef, useState } from 'react';
import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';
import { login } from 'src/server/api/login';
import './Login.css';

const NIGHT_TIME = 22;

const Time = () => {
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [second, setSecond] = useState('');
  const timer = useRef(null);

  const getTime = () => {
    const time = new Date();
    return [time.getHours(), time.getMinutes(), time.getSeconds()];
  };

  const updateTime = () => {
    const [newHour, newMin, newSecond] = getTime();
    setHour(newHour < 10 ? `0${newHour}` : newHour + '');
    setMin(newMin < 10 ? `0${newMin}` : newMin + '');
    setSecond(newSecond < 10 ? `0${newSecond}` : newSecond + '');
  };

  useEffect(() => {
    updateTime();
    timer.current = setInterval(() => {
      updateTime();
    }, 1000);

    return () => timer.current && clearInterval(timer.current);
  }, []);

  return (
    <article className={`time ${hour > NIGHT_TIME ? 'night' : ''}`}>
      {hour}:{min}:{second}
    </article>
  );
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nowHour, setNowHour] = useState('');

  useEffect(() => {
    setNowHour(new Date().getHours());
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await login(username, password);
    console.log(response);
  };

  return (
    <div className={`login-container ${nowHour > NIGHT_TIME ? 'night' : ''}`}>
      <Time />
      <form className={`login-form ${nowHour > NIGHT_TIME ? 'night' : ''}`}>
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
