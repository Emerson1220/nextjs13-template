//Librairie
import { useRouter } from 'next/router';

//Components
import Filters from '../../components/UI/Filters/FilterCategories';

export default function Index() {
  //Variable
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <div>
      <h1>Catégorie: {slug}</h1>
      <Filters slug={slug} />
    </div>
  );
}
