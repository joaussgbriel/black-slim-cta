import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-12 bg-secondary border-t border-foreground/5">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Black do Emagrecimento" className="h-10 md:h-12 w-auto" />
          <span className="text-sm text-foreground/70">&copy; {new Date().getFullYear()} Black do Emagrecimento</span>
        </div>

        <nav className="flex gap-6">
          <a href="/privacy" className="text-sm text-foreground/80 hover:text-primary">Política de Privacidade</a>
          <a href="/terms" className="text-sm text-foreground/80 hover:text-primary">Termos de Uso</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
