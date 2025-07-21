import { Button } from "@/components/ui/button";
import { Check, Gift, DollarSign } from "lucide-react";

export const OfferSection = () => {
  const offerFeatures = [
    "Plano mensal a partir de R$397",
    "Setup único com implantação personalizada",
    "Suporte real. Sem enrolação.",
    "Sem período de teste. Sem enrolação.",
    "Você entra pra resolver."
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Você quer mais <span className="text-primary">agenda</span>, mais <span className="text-accent">tempo</span> e mais <span className="text-primary">resultado</span>?
          </h2>
        </div>
        
        <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-2xl relative">
          <div className="absolute top-4 right-4 bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full font-bold">
            OFERTA LIMITADA
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-8 h-8 text-primary" />
                Investimento
              </h3>
              <ul className="space-y-3">
                {offerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Gift className="w-8 h-8 text-accent" />
                Bônus Exclusivo
              </h3>
              <div className="bg-gradient-accent/10 p-6 rounded-xl border border-accent/20">
                <p className="text-lg font-semibold mb-2">
                  Ajuste profissional do seu fluxo de atendimento atual
                </p>
                <p className="text-accent font-bold text-xl">
                  (vale R$300)
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="xl" className="w-full md:w-auto animate-pulse-glow">
              QUERO ATIVAR MEU ATENDIMENTO INTELIGENTE
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};