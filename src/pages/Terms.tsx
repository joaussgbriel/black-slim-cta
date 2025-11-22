const Terms = () => {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-4">Termos de Uso</h1>
      <p className="text-foreground/80 leading-relaxed">
        Esta é uma página de exemplo para os Termos de Uso. Aqui você pode descrever
        regras, responsabilidades e condições de uso do serviço.
      </p>
      <p className="mt-6 text-sm text-foreground/70">&copy; {new Date().getFullYear()} Black do Emagrecimento</p>
    </main>
  );
};

export default Terms;
