export const site = {
  brand: "Bamberg Desenvolvimento De Software",
  company: "A Bamberg Desenvolvimento de Software",
  place: "Canoas, RS",
  industry: "Tecnologia",
  cnpj: "63.801.318/0001-91",
  phone: "(51) 9978-4248",
  phoneTel: "+555199784248",
  email: "atendimento@bambergsoftware.com",
  url: "https://bambergsoftware.com",
  title: "Bamberg Desenvolvimento De Software",
  description:
    "Bamberg Desenvolvimento De Software: desenvolvimento e consultoria técnica em Canoas, RS. Entendemos o problema para entregar a melhor solução do seu momento.",
  mission:
    "Levar a pessoas e a empresas a tecnologia que melhor se adequa a elas, comprada ou construída, resolvendo problemas reais com inteligência, humana ou de IA.",
  vision:
    "Ser a parceira em que pessoas e empresas confiam para escolher e implantar a tecnologia certa para o seu contexto, com inteligência humana ou de IA, e com um jeito de trabalhar que preserva saúde, lazer e bem-estar.",
  values: [
    {
      name: "Pessoas para pessoas",
      detail:
        "Feita por pessoas, para outras pessoas: quem constrói e quem precisa.",
    },
    {
      name: "Saúde, lazer e bem-estar",
      detail: "Gente não é combustível. O ritmo tem de caber na vida.",
    },
    {
      name: "Problema real primeiro",
      detail: "A ferramenta vem depois. Sem theater e sem vaidade técnica.",
    },
    {
      name: "Clareza",
      detail: "O que vale, o que não vale, e o que o momento pede.",
    },
    {
      name: "Coragem com ofício",
      detail:
        "Quando ainda não há receita, avançamos com método e experiência, não com teatro.",
    },
  ],
} as const;

export type PostLang = "pt-BR" | "en";

export function formatDate(date: Date, lang: PostLang = "pt-BR") {
  return new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
