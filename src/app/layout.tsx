import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sadiq Clinic — General Physician & Gynae Specialist | Scheme No. 2, Lahore",
  description:
    "Evening clinic in Scheme No. 2, Lahore. General checkup, drip/injection, and gynae consultation. Mon–Sat 7:30–11:30 PM. Call 0300 4393220.",
  keywords: [
    "Sadiq Clinic",
    "clinic Lahore",
    "Scheme No 2 Lahore clinic",
    "general physician Lahore",
    "gynae specialist Lahore",
    "evening clinic Lahore",
    "Dr Rizwan Sadiq",
    "Dr Ayesha Rizwan",
  ],
  openGraph: {
    title: "Sadiq Clinic — General Physician & Gynae Specialist",
    description:
      "Trusted evening clinic in Scheme No. 2, Lahore. General checkup, drip/injection, and gynae consultation. Mon–Sat 7:30–11:30 PM.",
    type: "website",
    locale: "en_PK",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Sadiq Medical & Gynae Clinic",
              alternateName: "Sadiq Clinic",
              url: "https://sadiqclinic.com",
              telephone: "+923004393220",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Scheme No. 2",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "31.52",
                longitude: "74.35",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "19:30",
                closes: "23:30",
              },
              medicalSpecialty: [
                "GeneralPractice",
                "Gynecology",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
