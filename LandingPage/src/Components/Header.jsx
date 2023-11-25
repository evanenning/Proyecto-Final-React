import React from 'react';
import './Header.css';

export default function Header() {
  const menuList = [
    {
      id: 1,
      title: 'Nosotros',
      section: 'nosotros', 
    },
 
    {
      id: 3,
      title: 'Contacto',
      section: 'contacto', 
    },
  ];

  const handleMenuClick = (section) => {
       const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  

  return (
    <div className="menu">
      <div className="icon">
        <h2 className="title1">Soporte <span className="title2">PSI</span></h2>
      </div>
      <div className="menuList">
        {menuList.map((item) => (
          <div className="item" key={item.id}>
            <p
              className="hover-underline-animation"
              onClick={() => handleMenuClick(item.section)}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

