import { Button } from "@/components/ui/button";

const WhatToExpect = () => {
  const cards = [
    { number: "1", text: "Grupo VIP no WhatsApp com conteúdos e avisos." },
    { number: "2", text: "Oferta especial do Combo do Emagrecimento." },
    { number: "3", text: "Plano para começar e manter o emagrecimento." },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          O QUE VOCÊ PODE ESPERAR
          <br />
          NA BLACK DO EMAGRECIMENTO – COMBO DO EMAGRECIMENTO
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <div key={card.number} className="bg-card p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6">{card.number}</div>
              <p className="text-card-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground" onClick={() => window.open("https://chat.whatsapp.com/Fiet7pYEksmGStoV5AdlzQ?mode=hqrt2", "_blank")}>
            QUERO PARTICIPAR DO GRUPO VIP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
