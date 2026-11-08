
import { ArrowUpRight } from 'lucide-react';
import {
  SiInstagram,
  SiYoutube,
  SiFacebook,
} from '@icons-pack/react-simple-icons';

import { contact } from '@/data/website';

export default function SocialMedia() {
  return (
    <section className="section social-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="section-label">TEMUKAN KAMI</span>

          <h2>Ikuti Aktivitas Gen Computer</h2>

          <p>
            Dapatkan informasi terbaru mengenai program,
            kegiatan, dan berbagai aktivitas Gen Computer
            melalui media sosial kami.
          </p>
        </div>

        <div className="social-grid">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <SiInstagram size={30} />

            <div>
              <strong>Instagram</strong>
              <span>@gen.computer</span>
            </div>

            <ArrowUpRight />
          </a>

          <a
            href={contact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <SiYoutube size={30} />

            <div>
              <strong>YouTube</strong>
              <span>Gen Computer</span>
            </div>

            <ArrowUpRight />
          </a>

          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <SiFacebook size={30} />

            <div>
              <strong>Facebook</strong>
              <span>Gen Computer</span>
            </div>

            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
