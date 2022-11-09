//Librairies
import Link from 'next/link';

//Style
import style from './FilterCategories.module.scss';

export default function FilterCategories(props) {
  return (
    <div className={style.Filters}>
      <Link href={`/${props.category}`}>Tout</Link>
      <Link href={`/${props.category}/categorie1`}>catogorie 1</Link>
      <Link href={`/${props.category}/categorie2`}>catogorie 2</Link>
      <Link href={`/${props.category}/categorie3`}>catogorie 3</Link>
    </div>
  );
}
