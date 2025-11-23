import { Button } from "@/components/ui/button";

const WhatToExpect = () => {
  const cards = [
    { number: "1", text: "Grupo VIP no WhatsApp com conteúdos e avisos." },
    { number: "2", text: "Oferta especial do Combo do Emagrecimento." },
    { number: "3", text: "Plano para começar e manter o emagrecimento." },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
          O QUE VOCÊ PODE ESPERAR
          <br />
          NA BLACK DO EMAGRECIMENTO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {cards.map((card) => (
            <div key={card.number} className="bg-card p-6 rounded-xl shadow-lg">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">{card.number}</div>
              <p className="text-card-foreground leading-relaxed text-sm md:text-base">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary text-primary-foreground text-base"
            onClick={() => window.open("https://chat.whatsapp.com/Fiet7pYEksmGStoV5AdlzQ?mode=hqrt2", "_blank")}
          >
            GARANTIR MINHA VAGA NO GRUPO VIP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;