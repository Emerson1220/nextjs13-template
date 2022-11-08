//Librairie
import { useRouter } from 'next/router';
import Link from 'next/link';

function ActiveLink({ text, href, active, showResults }) {
  const router = useRouter();
  // console.log(`ici show result: ${showResults}`);

  const pushRef = (e) => {
    e.preventDefault();
    router.push(href);
    showResults;

    //Essai change state close menu
    // console.log('Le lien a été cliqué.');
  };

  return (
    <Link
      href={href}
      onClick={pushRef}
      className={router.pathname == `${href}` ? `${active}` : ''}
    >
      {text}
    </Link>
  );
}

export default ActiveLink;
