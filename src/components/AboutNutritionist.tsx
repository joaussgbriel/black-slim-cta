import { Check } from "lucide-react";
import anaPaula from "@/assets/ana-paula.jpg";

const AboutNutritionist = () => {
  const benefits = [
    "Alcançar o seu peso desejado, com um plano estruturado e possível de seguir no dia a dia.",
    "Aprender a manter o peso, saindo do ciclo de 'perde e ganha'.",
    "Melhorar sua relação com a comida, sem culpa a cada refeição.",
    "Fazer as pazes com a balança, voltando a se olhar com mais leveza, orgulho e segurança.",
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={anaPaula} 
                alt="Ana Paula F. Melo - Nutricionista" 
                className="w-full h-auto object-cover max-w-xs mx-auto md:max-w-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-xs uppercase tracking-wide mb-2 text-center md:text-left">
                A NUTRI QUE VAI SIMPLIFICAR O SEU EMAGRECIMENTO
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
                ANA PAULA F. MELO
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-sm md:text-base">
                Sou <strong className="text-primary">Ana Paula F. Melo</strong>, nutricionista e{" "}
                <strong>especialista em emagrecimento</strong>, e trabalho com uma abordagem{" "}
                <strong>simples, prática e alinhada à sua rotina</strong>, sem radicalismos e 
                sem terrorismo nutricional.
              </p>
              <p className="text-sm md:text-base">
                Meus acompanhamentos podem ser <strong>semanais, quinzenais ou diários</strong>, 
                de acordo com o programa que você escolher, para que você tenha o nível de suporte 
                que realmente precisa no seu momento.
              </p>
              <p className="font-semibold text-foreground text-sm md:text-base">
                Nos meus programas de emagrecimento, você vai:
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNutritionist;