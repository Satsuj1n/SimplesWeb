interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 149,
        title: "Pacote Básico",
        benefits: [
            "Design responsivo",
            "Hospedagem confiável",
            "Suporte por e-mail",
            "Modelos de site personalizáveis",
        ],
        id: 1,
        oneliner: "Obtenha design responsivo, hospedagem confiável e suporte por e-mail. Modelos personalizáveis para um site prático"
    },
    {
        price: 299,
        title: "Pacote Premium",
        benefits: [
            "Todos os recursos do Pacote Básico",
            "Domínio personalizado incluído",
            "Suporte prioritário por chat",
            "Estatísticas avançadas de tráfego do site",
        ],
        id: 2,
        oneliner: "Oferece domínio personalizado, suporte por chat e estatísticas avançadas. Destaque-se online com nosso pacote premium."
    },
]

export default pricingCards