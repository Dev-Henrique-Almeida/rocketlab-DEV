const Footer = () => {
  return (
    <footer className="bg-gray text-white w-full mt-auto py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados a{" "}
          <a
            href="https://github.com/Dev-Henrique-Almeida"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Henrique de Almeida Silva
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
