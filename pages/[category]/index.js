//Librairies
import { useRouter } from 'next/router';
import Link from 'next/link';

//Styles
import style from './category.module.scss';

export default function index() {
  const router = useRouter();
  let category = router.query.category;
  // if (category === 'slugPerso') {
  //   category = 'ma catégorie';
  // } else category = `Projet de ${category}`;
  return (
    <div className={style.Category}>
      <h1>{category}</h1>
      <p>Filtre</p>
      <div>
        <Link href={`/${router.query.category}/categorie1`}>
          catogorie 1
        </Link>
        <Link href={`/${router.query.category}/categorie1`}>
          catogorie 2
        </Link>
        <Link href={`/${router.query.category}/categorie1`}>
          catogorie 3
        </Link>
      </div>
    </div>
  );
}
