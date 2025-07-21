import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Você já sabe que <span className="text-primary">precisa disso</span>.
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            A única pergunta que resta é:
          </p>
          
          <p className="text-2xl md:text-4xl font-bold mb-8 text-destructive leading-tight">
            Quantos clientes ainda vão te deixar no vácuo…<br />
            antes de você decidir agir?
          </p>
        </div>
        
        <div className="bg-card/10 backdrop-blur-sm p-8 rounded-2xl border border-border/20 mb-8">
          <p className="text-xl mb-6">
            Clique abaixo e ative sua IA agora.<br />
            E <span className="text-accent font-bold">nunca mais</span> perca venda por demora.
          </p>
          
          <Button variant="cta" size="xl" className="group">
            <Zap className="w-6 h-6 mr-2" />
            QUERO A IA NO MEU WHATSAPP
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p className="text-lg">
            NeuroScale.AI • Transformando atendimento em resultados
          </p>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};