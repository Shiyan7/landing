import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-block">
            <Link href="#" className="logo link-opacity">
              <img src="img/logo.svg" alt="Open Movie API" />
            </Link>
            <Link
              href="mdwit.t.me"
              className="link-opacity opacity-color section-body mobile-hidden"
            >
              @MDWIT
            </Link>
            <span className="opacity-color section-body mobile-hidden">
              design by isakon
            </span>
          </div>
          <nav className="footer-block footer-nav">
            <Link href="#" className="link-opacity footer-item section-body">
              Пример API
            </Link>
            <Link href="#" className="link-opacity footer-item section-body">
              Тарифы
            </Link>
            <Link href="#" className="link-opacity footer-item section-body">
              Поддержка
            </Link>
          </nav>
          <div className="footer-block">
            <Link href="#" className="link-opacity footer-item section-body">
              support@openmovie.api
            </Link>
            <Link href="#" className="link-opacity footer-item section-body">
              Github
            </Link>
          </div>
          <div className="footer-block footer-block__mobile">
            <Link
              href="mdwit.t.me"
              className="link-opacity opacity-color section-body"
            >
              @MDWIT
            </Link>
            <span className="opacity-color section-body">
              {' '}
              design by isakon{' '}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
