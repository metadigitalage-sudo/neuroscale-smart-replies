import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar, UserX, Clock4 } from "lucide-react";

export const PainSection = () => {
  const pains = [
    {
      icon: Calendar,
      title: "Marcar consultas ou reuniões automaticamente",
      description: "Sem mais vai e vem de mensagens para agendar"
    },
    {
      icon: UserX,
      title: "Qualificar leads sem esforço",
      description: "IA identifica automaticamente o potencial do cliente"
    },
    {
      icon: Clock4,
      title: "Liberar a secretária de tarefas repetitivas",
      description: "Foco no que realmente importa para o negócio"
    },
    {
      icon: AlertTriangle,
      title: "Evitar o pior: o silêncio que custa vendas",
      description: "Resposta imediata, mesmo fora do horário comercial"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Você já sabe como é: <span className="text-destructive">mensagem chega</span>. 
            Você demora. <span className="text-destructive">O cliente vai embora</span>.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pains.map((pain, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <pain.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{pain.title}</h3>
              <p className="text-muted-foreground">{pain.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="accent" size="lg">
            ME MOSTRA COMO FUNCIONA
          </Button>
        </div>
      </div>
    </section>
  );
};