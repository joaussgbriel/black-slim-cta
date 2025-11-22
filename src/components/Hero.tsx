import { Button } from "@/components/ui/button";
import { Calendar, Gem } from "lucide-react";
import logo from "@/assets/logo.png";
import comboMockup from "@/assets/combo-mockup.png";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img src={logo} alt="VC + MAGRA" className="h-32 md:h-40 w-auto" />

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">28 de Novembro</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gem className="w-4 h-4 text-accent" />
                <span className="font-medium">Evento exclusivo para o Grupo VIP</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              A Black Friday mais desejada para quem quer
              <span className="text-primary"> emagrecer com leveza e sem efeito sanfona.</span>
            </h1>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Participe do nosso <strong className="text-primary">Grupo VIP no WhatsApp</strong> para entrar na oferta especial do combo com <strong>5 materiais completos</strong> que ajudam na rotina alimentar.
              </p>
              <p>
                Pensado para <strong>mulheres de 30 a 55 anos</strong> que vivem na correria.
              </p>
            </div>

            <Button size="lg" className="w-full md:w-auto bg-primary text-white px-6 py-3" onClick={() => window.open("https://chat.whatsapp.com/Fiet7pYEksmGStoV5AdlzQ?mode=hqrt2","_blank")}>
              QUERO PARTICIPAR DO GRUPO VIP
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img src={comboMockup} alt="Mockup Combo Slim - Produtos" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


