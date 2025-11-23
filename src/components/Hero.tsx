import { Button } from "@/components/ui/button";
import { Calendar, Gem } from "lucide-react";
import logo from "@/assets/logo.png";
import comboMockup from "@/assets/combo-mockup.png";

const Hero = () => {
  return (
    <section className="py-8 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img src={logo} alt="VC + MAGRA" className="h-24 md:h-32 w-auto mx-auto md:mx-0" />

            <div className="flex flex-wrap gap-3 text-xs md:text-sm justify-center md:justify-start">
              <div className="flex items-center gap-1.5 text-muted-foreground bg-background/50 px-3 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">28 de Novembro</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground bg-background/50 px-3 py-1.5 rounded-full">
                <Gem className="w-3.5 h-3.5 text-accent" />
                <span className="font-medium">Evento exclusivo para o Grupo VIP</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight text-center md:text-left">
              A Black Friday mais desejada para quem quer
              <span className="text-primary block mt-1">emagrecer com leveza e sem efeito sanfona.</span>
            </h1>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-center md:text-left">
              <p className="text-sm md:text-base">
                Participe do nosso <strong className="text-primary">Grupo VIP no WhatsApp</strong> para entrar na oferta especial do combo com <strong>5 materiais completos</strong> que ajudam na rotina alimentar.
              </p>
              <p className="text-sm md:text-base">
                Pensado para <strong>mulheres de 30 a 55 anos</strong> que vivem na correria.
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full md:w-auto bg-primary text-white px-6 py-3 text-base md:text-lg"
              onClick={() => window.open("https://chat.whatsapp.com/Fiet7pYEksmGStoV5AdlzQ?mode=hqrt2","_blank")}
            >
              QUERO PARTICIPAR DO GRUPO VIP
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={comboMockup} 
                alt="Mockup Combo do Emagrecimento - Produtos" 
                className="w-full h-auto object-contain max-w-xs mx-auto md:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;