//Librairie
import { useRouter } from 'next/router';

export default function SlugFilter() {
  //Variable
  const router = useRouter();
  const annee = router.query.annee;
  return (
    <div>
      <h1>Date: {annee}</h1>
    </div>
  );
}
