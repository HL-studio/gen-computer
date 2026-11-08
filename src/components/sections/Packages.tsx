
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { packages, wa } from '@/data/website';

export default function Packages() {
  return (
    <section className="section packages-section" id="paket">
      <div className="container">
        <div className="section-heading centered">
          <span className="section-label">
            PROGRAM KURSUS SINGKAT
          </span>

          <h2>Mulai Belajar dari Program yang Tepat</h2>

          <p>
            Pilihan kursus dengan materi praktis untuk meningkatkan
            keterampilan komputer dan kemampuan profesional.
          </p>
        </div>

        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <div className="package-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="package-body">
                <span className="package-duration">
                  <Clock size={14} />
                  {item.duration}
                </span>

                <h3>{item.name}</h3>

                <div className="package-price">
                  {item.price}
                </div>

                <div className="package-divider" />

                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className="package-button"
                  href={`${wa}?text=${encodeURIComponent(
                    'Halo Gen Computer, saya ingin bertanya tentang ' +
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tanya Paket <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="price-note">
          *Harga dan ketersediaan program dapat dikonfirmasi
          kembali melalui admin Gen Computer.
        </p>
      </div>
    </section>
  );
}
