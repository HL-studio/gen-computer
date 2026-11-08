
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

import { contact, wa } from '@/data/website';

export default function Contact() {
  return (
    <section className="section contact-section" id="kontak">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-label">HUBUNGI KAMI</span>

            <h2>Kunjungi Gen Computer</h2>

            <p>
              Kami siap membantu menjawab pertanyaan mengenai
              program dan pendaftaran kursus.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span><MapPin /></span>

              <div>
                <strong>Alamat</strong>
                <p>{contact.address}</p>
              </div>
            </div>

            <div className="contact-item">
              <span><Phone /></span>

              <div>
                <strong>Telepon / WhatsApp</strong>
                <p>{contact.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <span><Mail /></span>

              <div>
                <strong>Email</strong>
                <p>{contact.email}</p>
              </div>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary contact-button"
            >
              Chat WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="map-container">
            <iframe
              title="Lokasi Gen Computer Sampit"
              src="https://www.google.com/maps?q=Jl.%20Taman%20Siswa%201%20No.4%2C%20Sampit&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
