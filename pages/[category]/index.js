//Librairies
import { useRouter } from 'next/router';
// import Link from 'next/link';

//components
import FiltersCategories from '../../components/utils/Filters/FilterCategories';

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
      <FiltersCategories category={router.query.category} />
    </div>
  );
}
