//Librairies
import { useRouter } from 'next/router';
import Link from 'next/link';

//Styles
import style from './CardSlug.module.scss';

export default function CardSlug(props) {
  console.log(props);
  //Variable
  const { titre, slug, description, categorie, annee } = props.projet;

  return (
    <Link href={`/blog/${titre}`} className={style.cardSlug}>
      <h2>Card</h2>
      <h2>Title{titre}</h2>
      <p>Description{description}</p>
      <p>Category{categorie}</p>
    </Link>
  );
}
