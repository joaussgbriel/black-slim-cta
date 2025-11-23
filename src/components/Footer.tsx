import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-12 bg-secondary border-t border-foreground/5">
      <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4">
          <img src={logo} alt="Black do Emagrecimento" className="h-8 md:h-10 w-auto" />
          <span className="text-xs md:text-sm text-foreground/70 text-center md:text-left">&copy; {new Date().getFullYear()} Black do Emagrecimento</span>
        </div>

        <nav className="flex gap-4 md:gap-6">
          <a href="/privacy" className="text-xs md:text-sm text-foreground/80 hover:text-primary">Política de Privacidade</a>
          <a href="/terms" className="text-xs md:text-sm text-foreground/80 hover:text-primary">Termos de Uso</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;