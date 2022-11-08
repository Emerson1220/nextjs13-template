//Librairies
import { useRouter } from 'next/router';
import Link from 'next/link';

//Styles
import style from './CardSlug.module.scss';

export default function CardSlug() {
  //Variable
  const slug = 'test';

  return (
    <Link href={`/slug/${slug}`} a className={style.cardSlug}>
      <h2>Title</h2>
      <p>Description</p>
      <p>Category</p>
    </Link>
  );
}
