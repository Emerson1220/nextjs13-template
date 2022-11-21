// Librairies

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CarteDeProjet(props) {
  // Variables
  const router = useRouter();
  const { titre, description, annee, slug, client } = props.projet;

  return (
    <Link href={`/projets/${slug}`}>
      <h3>{titre}</h3>
      <p>{description}</p>
    </Link>
  );
}
