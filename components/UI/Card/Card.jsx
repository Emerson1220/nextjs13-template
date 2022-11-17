//Librairies
import Link from 'next/link';

//Styles
import style from './Card.module.scss';

export default function Card(article) {
  console.log(article);
  //Variable
  const { titre, description, categorie } = article.data;

  return (
    <Link href={`/articles/${titre}`} className={style.Card}>
      <h2>Card</h2>
      <h2>Title{titre}</h2>
      <p>Description{description}</p>
      <p>Category{categorie}</p>
    </Link>
  );
}
