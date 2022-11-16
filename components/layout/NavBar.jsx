//Libraries
import { useState } from 'react';

//Components
import NavItem from './NavItem';

//Styles
import style from './NavBar.module.scss';

//Data
const MENU_LIST = [
  { text: 'Accueil', href: '/' },
  { text: 'articles', href: '/articles' },
  { text: 'item', href: '/item-1' },
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
