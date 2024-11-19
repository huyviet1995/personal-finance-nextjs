import React from 'react';

const Header: React.FC = () => {
  const handleMenuClick = () => {
    console.log('Hamburger menu clicked');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="cursor-pointer text-2xl" onClick={handleMenuClick}>
        &#9776;
      </div>
      <div className="flex-1 text-center">
        <h1>Logo</h1>
      </div>
      <div className="flex justify-end">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Header;
