//Librairies
import Link from 'next/link';

//Styles
import style from './Card.module.scss';

export default function Card(article) {
  console.log(article);
  //Variable
  const { titre, description, categorie, slug } = article.data;

  return (
    <Link href={`/articles/${titre}`} className={style.Card}>
      <h2>{titre}</h2>
      <p>{description}</p>
      <p>{categorie}</p>
      <p>{slug}</p>
    </Link>
  );
}
