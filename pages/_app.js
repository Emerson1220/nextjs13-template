//Style
import '../styles/main.scss';
//Components
import Container from '../components/layout/Container';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
