//Librairies

import { useRouter } from 'next/router';

export default function dateFilter() {
  //Variable
  const router = useRouter();
  console.log(router.query);

  //Création de conditions pour affichages
  return (
    <div>
      <h1>Date Filters</h1>
    </div>
  );
}
