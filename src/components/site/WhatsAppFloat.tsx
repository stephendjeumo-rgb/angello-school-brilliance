import { waLink } from "@/lib/site";

/** Bouton WhatsApp flottant présent sur toutes les pages. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Bonjour ANGELLO School, je souhaite obtenir des informations. Merci.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden="true" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.02 3C8.85 3 3.03 8.82 3.03 15.99c0 2.28.6 4.5 1.74 6.46L3 29l6.72-1.74a12.9 12.9 0 0 0 6.3 1.62h.01c7.16 0 12.98-5.82 12.99-12.99A12.9 12.9 0 0 0 25.2 6.8 12.88 12.88 0 0 0 16.02 3Zm0 23.66h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-4 1.05 1.07-3.89-.26-.4a10.72 10.72 0 0 1-1.64-5.7c0-5.95 4.85-10.79 10.8-10.79 2.88 0 5.6 1.13 7.63 3.16a10.71 10.71 0 0 1 3.16 7.64c0 5.96-4.85 10.8-10.85 10.8Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.22.32-.84 1.06-1.03 1.28-.19.21-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.76-.99-2.4-.26-.63-.53-.55-.72-.56h-.62c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.08 1.3 3.3c.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.92-.79 2.19-1.55.27-.76.27-1.41.19-1.55-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
