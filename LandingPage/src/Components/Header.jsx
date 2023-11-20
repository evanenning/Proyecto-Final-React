import React from 'react';
import './Header.css';

export default function Header() {
    const menuList=[
        {
            id:1,
            title: 'Inicio'
        },
        {
            id:1,
            title: 'Nosotros'
        },
        {
            id:1,
            title: 'Sedes'
        },
        {
            id:1,
            title: 'Contacto'
        },
    ]

  return (
    <div class="menu">
        <div class="icon">
            <h2 class="title1">Soporte <span class="title2">PSI</span></h2>
        </div>
        <div class="menuList">
            {menuList.map((item)=>(
                <div>
                    <p class="hover-underline-animation">{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
