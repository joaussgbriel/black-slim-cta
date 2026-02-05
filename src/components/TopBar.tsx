import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
const TopBar = () => {
  return <div className="bg-accent text-accent-foreground py-3 px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
          <span className="font-semibold text-sm">
            Seu desconto acaba em:
          </span>
          <CountdownTimer />
        </div>
        <Button size="sm" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap px-3 text-sm" onClick={() => window.open("https://pay.hotmart.com/K103127855R", "_blank")}>
          ​GARANTIR DESCONTO 
        </Button>
      </div>
    </div>;
};
export default TopBar;