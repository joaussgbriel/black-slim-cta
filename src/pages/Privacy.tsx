const Privacy = () => {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-4">Política de Privacidade</h1>
      <p className="text-foreground/80 leading-relaxed">
        Esta é uma página de exemplo para a Política de Privacidade. Aqui você pode
        descrever como os dados dos usuários são coletados, usados e protegidos.
      </p>
      <p className="mt-6 text-sm text-foreground/70">&copy; {new Date().getFullYear()} Combo do Emagrecimento</p>
    </main>
  );
};

export default Privacy;