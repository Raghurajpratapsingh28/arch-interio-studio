import { getContactPage } from "@/libs/data";
import ContactPageClient from "@/components/ContactPageClient";

export default async function ContactPage() {
  const data = await getContactPage();
  return <ContactPageClient data={data} />;
} 