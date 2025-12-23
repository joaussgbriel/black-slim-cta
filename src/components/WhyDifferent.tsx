import { Check } from "lucide-react";
const WhyDifferent = () => {
  const benefits = ["Adeus à falta de organização e aos erros constantes.", "Chega de cair no efeito sanfona e perder toda a motivação.", "Diga adeus à monotonia de dietas que cansam e não sustentam.", "Ganhe confiança para monitorar seu progresso e celebrar suas conquistas dia a dia.", "Economize tempo e dinheiro com estratégias práticas, acessíveis e possíveis para seu dia a dia."];
  return <section className="py-12 md:py-20 px-4 bg-beige">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
          Por que o Combo do Emagrecimento é diferente
          <br className="hidden md:block" />
          de tudo o que você já tentou
        </h2>

        <div className="space-y-4">
          {benefits.map((benefit, index) => <div key={index} className="flex gap-3 items-start bg-card p-5 rounded-lg shadow-sm">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
              </div>
              <p className="text-card-foreground leading-relaxed text-sm md:text-base">{benefit}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyDifferent;