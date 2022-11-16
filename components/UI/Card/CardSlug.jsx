//Librairies
import { useRouter } from 'next/router';
import Link from 'next/link';

//Styles
import style from './CardSlug.module.scss';

export default function CardSlug(article) {
  console.log(article);
  //Variable
  const { titre, description, categorie } = article.data;

  return (
    <Link href={`/blog/${titre}`} className={style.cardSlug}>
      <h2>Card</h2>
      <h2>Title{titre}</h2>
      <p>Description{description}</p>
      <p>Category{categorie}</p>
    </Link>
  );
}
