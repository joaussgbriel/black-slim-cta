import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import comboMockup from "@/assets/combo-mockup.png";

const Combo = () => {
  const materials = [
    {
      title: "Organização Emagrecedora",
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
    <section className="py-12 md:py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-wide mb-2">
            O COMBO MAIS COMPLETO PARA SEU EMAGRECIMENTO
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            COMBO DO EMAGRECIMENTO
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base">
            5 materiais completos para emagrecer com organização e sem efeito sanfona
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={comboMockup} 
                alt="Combo do Emagrecimento - Produtos" 
                className="w-full h-auto object-cover max-w-xs mx-auto md:max-w-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {materials.map((material, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base">{material.title}</h3>
                    <p className="text-foreground/80 text-xs md:text-sm mt-1">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
                onClick={() => window.open("https://chat.whatsapp.com/Fiet7pYEksmGStoV5AdlzQ?mode=hqrt2","_blank")}
              >
                GARANTIR MEU ACESSO AO COMBO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Combo;