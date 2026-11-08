
import { Phone } from 'lucide-react';
import { wa } from '@/data/website';

export default function FloatingWhatsApp() {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Hubungi Gen Computer melalui WhatsApp"
    >
      <Phone size={23} />
    </a>
  );
}
