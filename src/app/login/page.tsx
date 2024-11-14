import React from 'react';

const LoginPage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <section style={{ flex: 1, backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover' }}>
        {/* Left column with image */}
      </section>
      <section style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Right column with login form */}
        <form>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
