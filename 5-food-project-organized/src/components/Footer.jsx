//Doesn't matter most of the time - jsx or js

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Raviraj</strong>
      </p>
    </footer>
  );
};

export default Footer;