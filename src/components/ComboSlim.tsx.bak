import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import comboMockup from "@/assets/combo-mockup.png";

const ComboSlim = () => {
  const materials = [
    {
      title: "Organização Emagrecedora – Slim",
      description: "Guia para organizar sua rotina alimentar, montar sua estrutura e parar de depender do improviso.",
    },
    {
      title: "Planner de Emagrecimento",
      description: "Ferramenta para acompanhar progresso, registrar refeições, medidas e manter motivação.",
    },
    {
      title: "Ebook Sanduíches Saudáveis",
      description: "Opções práticas e baratas para dias corridos.",
    },
    {
      title: "Ebook Sopas Emagrecedoras",
      description: "Jantares leves que ajudam a perder peso sem passar fome.",
    },
    {
      title: "Cardápios + Estratégias Emagrecedoras",
      description: "Diferentes cardápios e estratégias para emagrecer e manter o peso sem efeito sanfona.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Tudo o que você precisa para emagrecer<br className="hidden md:block" />
          com organização e manter o resultado
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="order-2 md:order-1">
            <img 
              src={comboMockup} 
              alt="Combo Slim - 5 Materiais Digitais" 
              className="w-full h-auto"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            {materials.map((material, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{material.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.location.href = "#"}
          >
            QUERO SER AVISADA DA OFERTA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComboSlim;
