export const site = {
  name: "Mahavira Developers LLP",
  shortName: "Mahavira Developers",
  tagline: "Plots for sale in Bhubaneswar",
  web: "www.mahaviradevelopers.in",
  url: "https://www.mahaviradevelopers.in",
  phones: [
    { display: "99373 66406", tel: "+919937366406", wa: "919937366406" },
    { display: "63706 21085", tel: "+916370621085", wa: "916370621085" },
  ],
  address: {
    line1: "Laxmivilas, Plot no - 132/10109",
    line2: "Panchamukhi Vihar, Backside of Symphony Mall",
    line3: "Rudrapur, Bhubaneswar",
  },
  mapQuery: "Panchamukhi Vihar, Rudrapur, Bhubaneswar",
} as const;

export const addressOneLine = `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.phones[0].wa}?text=${encodeURIComponent(message)}`;
}
