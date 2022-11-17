//Libraries
import menuListItems from '../../data/menuListItems';

//Components
import NavItem from './NavItem';

//Styles
import style from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={style.NavBar}>
      {menuListItems.map((menu) => (
        <div key={menu.text}>
          <NavItem {...menu} />
        </div>
      ))}
    </nav>
  );
}
