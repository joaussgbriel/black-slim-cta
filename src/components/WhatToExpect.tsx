import { Button } from "@/components/ui/button";

const WhatToExpect = () => {
  const cards = [
    { number: "1", text: "Emagrecimento fácil com alimentos acessíveis." },
    { number: "2", text: "Passo a passo completo para chegar no seu peso desejado." },
    { number: "3", text: "Tudo que apliquei em 25 anos de atendimento em consultório." },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
          O QUE VOCÊ PODE ESPERAR
          <br />
          NO COMBO DO EMAGRECIMENTO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {cards.map((card) => (
            <div key={card.number} className="bg-card p-6 rounded-xl shadow-lg">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">{card.number}</div>
              <p className="text-card-foreground leading-relaxed text-sm md:text-base">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary text-primary-foreground text-base px-6 py-6"
            onClick={() => window.open("https://pay.hotmart.com/K103127855R", "_blank")}
          >
            GARANTIR MEU COMBO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;