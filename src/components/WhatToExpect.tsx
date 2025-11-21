import { Button } from "@/components/ui/button";

const WhatToExpect = () => {
  const cards = [
    {
      number: "1",
      text: "Um GRUPO VIP no WhatsApp onde você vai receber conteúdos de aquecimento, lembretes importantes, orientações sobre rotina alimentar e todos os avisos da Black em primeira mão, direto comigo e com a equipe.",
    },
    {
      number: "2",
      text: "Uma oferta especial de Black Friday para o Combo Slim, com 5 materiais completos para organizar sua alimentação, facilitar suas escolhas no dia a dia e acelerar o seu emagrecimento, por um preço que não vai se repetir.",
    },
    {
      number: "3",
      text: "Uma oportunidade única para quem está cansada de começar e parar toda semana e quer virar o ano mais leve, com um plano claro para emagrecer e manter o peso, sem dietas malucas.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          O QUE VOCÊ PODE ESPERAR<br />
          NA BLACK DO EMAGRECIMENTO – COMBO SLIM?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.number}
              className="bg-card p-8 rounded-xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                {card.number}
              </div>
              <p className="text-card-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.location.href = "#"}
          >
            QUERO PARTICIPAR DO GRUPO VIP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
