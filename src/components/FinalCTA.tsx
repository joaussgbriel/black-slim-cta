import { Button } from "@/components/ui/button";
const FinalCTA = () => {
  return <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
          Garanta já o seu Combo do Emagrecimento e dê o primeiro passo para a sua mudança.       
        </h2>

        <p className="text-base text-foreground/80 leading-relaxed">
          Oferta exclusiva   <strong className="text-primary">apenas para os 100 primeiros compradores.    </strong>. Não haverá repetição desse valor nem dos bônus.
        </p>

        <div className="pt-4">
          <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-4 py-6 shadow-xl hover:shadow-2xl transition-all" onClick={() => window.open("https://chat.whatsapp.com/Fiet7pYEksmGStoV5AdlzQ?mode=hqrt2", "_blank")}>
            GARANTIR COMBO
          </Button>
        </div>

        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          Os resultados podem variar de pessoa para pessoa. Este material não substitui consulta 
          com profissional de saúde. Cada corpo responde de forma única ao processo de emagrecimento.
        </p>
      </div>
    </section>;
};
export default FinalCTA;