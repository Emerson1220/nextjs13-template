//Librairies
import Link from 'next/link';

//Style
import style from './FilterCategories.module.scss';

export default function FilterCategories(props) {
  return (
    <div className={style.Filters}>
      <Link href={`/${props.slug}`}>Tout</Link>
      <Link href={`/${props.slug}/categorie1`}>catogorie 1</Link>
      <Link href={`/${props.slug}/categorie2`}>catogorie 2</Link>
      <Link href={`/${props.slug}/categorie3`}>catogorie 3</Link>
    </div>
  );
}
