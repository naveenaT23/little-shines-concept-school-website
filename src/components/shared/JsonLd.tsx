export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Little Shines Concept School",
    "url": "https://littleshinesconceptschool.com",
    "logo": "https://littleshinesconceptschool.com/logo.jpg",
    "description": "A premium CBSE English Medium School from Play Group to 6th Class.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Knowledge Lane, Education City",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "telephone": "+91 98431 97080",
    "openingHours": "Mo-Fr 08:00-16:00, Sa 09:00-13:00",
    "sameAs": [
      "https://facebook.com/littleshines",
      "https://instagram.com/littleshines",
      "https://twitter.com/littleshines"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
