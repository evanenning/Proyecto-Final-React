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
            title: 'Acerca de nosotros'
        },
        {
            id:1,
            title: 'Contactanos'
        },
    ]
  return (
    <div class="menu">
        <div>
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
