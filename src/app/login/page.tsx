import React from 'react';
import { AuthForm as LoginForm } from '@/components/forms/auth-form';

const LoginPage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <section style={{ flex: 1, backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover' }}>
        {/* Left column with image */}
      </section>
      <section style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
