//Libraries
import { useState } from 'react';

//Components
import NavItem from './NavItem';

//Styles
import style from './NavBar.module.scss';

//Data
const MENU_LIST = [
  { text: 'Accueil', href: '/' },
  { text: 'item2', href: '/item2' },
  { text: 'item3', href: '/item3' },
  { text: 'item4', href: '/item4' },
  { text: 'slug', href: '/slug' },
];

export default function NavBar() {
  return (
    <nav className={style.NavBar}>
      {MENU_LIST.map((menu) => (
        <div key={menu.text}>
          <NavItem {...menu} />
        </div>
      ))}
    </nav>
  );
}
