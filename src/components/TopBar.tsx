import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
const TopBar = () => {
  return <div className="bg-accent text-accent-foreground py-3 px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="font-semibold text-sm">
            Últimos dias para entrar no Grupo VIP do Combo do Emagrecimento.
          </span>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Faltam apenas</span>
            <CountdownTimer />
          </div>
        </div>
        <Button size="sm" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap px-3 text-sm" onClick={() => window.open("https://chat.whatsapp.com/Fiet7pYEksmGStoV5AdlzQ?mode=hqrt2", "_blank")}>
          ​GARANTIR DESCONTO 
        </Button>
      </div>
    </div>;
};
export default TopBar;