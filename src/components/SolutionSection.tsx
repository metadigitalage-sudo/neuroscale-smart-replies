import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Calendar, BarChart3, Shield } from "lucide-react";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Identifica o tipo de atendimento",
      description: "Consulta, causa, procedimento... A IA entende automaticamente"
    },
    {
      icon: MessageSquare,
      title: "Responde com naturalidade",
      description: "No seu estilo, como se fosse você mesmo respondendo"
    },
    {
      icon: Calendar,
      title: "Faz as perguntas certas",
      description: "Qualifica o lead e coleta informações importantes"
    },
    {
      icon: BarChart3,
      title: "Agenda direto na sua agenda",
      description: "Integração com seu sistema ou agenda atual"
    },
    {
      icon: Shield,
      title: "Mostra resultados em números",
      description: "Não promessas. Dados reais de conversão e vendas"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Um <span className="text-primary">agente inteligente</span> direto no seu WhatsApp atual
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-card p-8 rounded-xl border border-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Observação importante:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-lg">
            <div>
              <p className="font-semibold text-accent">Sem sistema novo.</p>
            </div>
            <div>
              <p className="font-semibold text-accent">Sem curva de aprendizado.</p>
            </div>
            <div>
              <p className="font-semibold text-accent">Sem mais leads perdidos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};