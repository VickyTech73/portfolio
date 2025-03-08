import { Link } from 'react-scroll';

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const navbarTop = navbar.offsetTop;

  if (window.scrollY > navbarTop) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky"); // Remove sticky effect when back at the top
  }
});

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link smooth={true} to="home">Home</Link>
        <Link smooth={true} to="about">About</Link>
        <Link smooth={true} to="skills">Skills</Link>
        <Link smooth={true} to="contact">Contact</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;