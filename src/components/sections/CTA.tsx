
import { ArrowUpRight } from 'lucide-react';
import { wa } from '@/data/website';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="section-label light-label">
            WAKTUNYA BERKEMBANG
          </span>

          <h2>Siap Meningkatkan Keterampilanmu?</h2>

          <p>
            Konsultasikan program yang sesuai dengan kebutuhan
            dan tujuan belajarmu.
          </p>
        </div>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white"
        >
          Hubungi Kami <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
