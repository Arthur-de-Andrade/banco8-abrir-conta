import { CreditCard, Send, MessageCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Cartão de crédito sem anuidade",
      description: "Use seu cartão sem se preocupar com taxas anuais. Liberdade total para suas compras."
    },
    {
      icon: Send,
      title: "Transferências e TEDs gratuitas",
      description: "Envie dinheiro para qualquer banco sem custo adicional. Rapidez e economia."
    },
    {
      icon: MessageCircle,
      title: "Suporte rápido no app 24/7",
      description: "Atendimento humanizado disponível a qualquer hora. Sempre prontos para ajudar."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que o Banco 8?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra os diferenciais que fazem do Banco 8 a melhor escolha para sua vida financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-bank-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-bank-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;