//Doesn't matter most of the time - jsx or js

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full p-4 my-4 bg-indigo-100">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Raviraj</strong>
      </p>
    </footer>
  );
};

export default Footer;