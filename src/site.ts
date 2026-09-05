export const site = {
  person: "Arthur Bamberg",
  company: "A Bamberg Desenvolvimento de Software",
  place: "Canoas, RS",
  industry: "Tecnologia",
  cnpj: "63.801.318/0001-91",
  phone: "(51) 9978-4248",
  phoneTel: "+555199784248",
  email: "atendimento@bambergsoftware.com",
  url: "https://bambergsoftware.com",
  title: "Arthur Bamberg · A Bamberg Desenvolvimento de Software",
  description:
    "Arthur Bamberg e A Bamberg Desenvolvimento de Software — desenvolvimento e consultoria técnica em Canoas, RS. Entendemos o problema para entregar a melhor solução do seu momento.",
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
