import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Presença",
        bodyText: " Imagine ter o seu site, do conceito à realidade, em tempo recorde. Nossos serviços de desenvolvimento sob demanda garantem eficiência e comunicação ágil, assegurando que sua presença online esteja ativa quando você mais precisa.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Tempo",
        bodyText: "Acreditamos que cada segundo conta. Nosso site é intuitivo, transmitindo clareza sobre nossos serviços desde o primeiro clique. Simplificamos o processo de pedido para que você gaste menos tempo configurando seu site e mais tempo focando no que realmente importa: o crescimento do seu negócio.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Experiência",
        bodyText: " Em relação às vendas, destacamos não apenas a estética visual, mas a experiência do usuário. Nosso design atrativo e otimizado para motores de busca aumenta não apenas a visibilidade, mas também a conversão de visitantes em clientes. Integramos ferramentas de vendas estratégicas para impulsionar seu sucesso comercial.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards