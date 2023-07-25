// Login.js

import React from 'react';
import Button from './LoginButton/Button';
// import imgs from './imgs/login-image.png';

const Login = () => {
  const handleLogin = () => {
    // Add login logic here
    console.log('Login clicked!');
  };

  return (
    <div className="login-container">
        <div className="left-section">
            <div className='logintop'>請假登入</div>
            {/* Add login form here */}
            <Button label="登入" onClick={handleLogin} />
        </div>
        
        <div className="right-section">
             {/* Content for the right section */}
            <img src="https://assets.blog.engoo.com/wp-content/uploads/sites/3/2022/09/07094921/dayoff-1024x597.png.webp"
            width="700vmin" height="400vmin" alt='picture'/>

        </div>            
    </div>
  );
};

export default Login;
