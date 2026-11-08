
import { ArrowRight, ArrowUpRight, CheckCircle2, GraduationCap } from 'lucide-react';
import { wa } from '@/data/website';

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            LEMBAGA KURSUS & PELATIHAN DI SAMPIT
          </div>

          <h1>
            Tingkatkan Skill.
            <br />
            <span>Bangun Masa Depan.</span>
          </h1>

          <p>
            Wujudkan potensi terbaikmu bersama Gen Computer.
            Belajar keterampilan komputer, administrasi, desain,
            hingga bisnis digital untuk menghadapi dunia kerja.
          </p>

          <div className="hero-actions">
            <a href="#paket" className="btn-primary">
              Jelajahi Program <ArrowRight size={18} />
            </a>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Konsultasi Gratis
            </a>
          </div>

          <div className="hero-note">
            <CheckCircle2 size={17} />
            Pilihan program D1 dan kursus singkat
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000"
              alt="Suasana pembelajaran dan pelatihan"
            />
          </div>

          <div className="floating-card">
            <div className="floating-icon">
              <GraduationCap />
            </div>
            <div>
              <strong>Belajar & Berkembang</strong>
              <small>Mulai perjalananmu hari ini</small>
            </div>
          </div>

          <div className="hero-decoration" />
        </div>
      </div>
    </section>
  );
}
