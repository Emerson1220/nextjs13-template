//Style
import style from './BtnAnimated.module.scss';

export default function BtnAnimated({ BtnName, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={style.BtnAnimated}
      type='primary'
      shape='round'
      icon={icon}
    >
      <span className={style.circle} aria-hidden='true'>
        <span className={`${style.icon} || ${style.arrow}`}></span>
      </span>
      <span className={style.buttonText}>{BtnName}</span>
    </button>
  );
}
