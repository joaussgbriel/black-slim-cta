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
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
            O COMBO MAIS COMPLETO PARA SEU EMAGRECIMENTO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            COMBO DO EMAGRECIMENTO – SLIM
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            5 materiais completos para emagrecer com organização e sem efeito sanfona
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={comboMockup} 
                alt="Combo do Emagrecimento - Produtos" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              {materials.map((material, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{material.title}</h3>
                    <p className="text-foreground/80 text-sm">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
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

export default ComboSlim;