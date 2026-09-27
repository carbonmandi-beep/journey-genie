import { redirect } from "next/navigation";

export const metadata = {
  title: "Journey Genie Agent Portal",
  description:
    "Connect with Journey Genie for travel partnership and agent support.",
};

export default function AccountLoginPage() {
  const whatsappNumber = "919876260822";

  const message =
    "Hi Abhinav, I am interested in becoming a Journey Genie Travel Partner. Please share the details.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  redirect(whatsappUrl);
}
