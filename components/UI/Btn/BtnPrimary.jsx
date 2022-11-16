//Style
import style from './BtnPrimary.module.scss';

export default function BtnPrimary({ BtnName, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={style.BtnPrimary}
      type='primary'
      shape='round'
      icon={icon}
    >
      {BtnName}
    </button>
  );
}
