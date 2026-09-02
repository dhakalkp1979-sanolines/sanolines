import logo from './assets/image.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Sanolines Logo" style={{ width: '150px' }} />
    </header>
  );
}

export default Header;
