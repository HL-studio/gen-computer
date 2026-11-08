
import { ArrowRight, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="tentang">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000"
            alt="Peserta mengikuti kegiatan pembelajaran"
          />

          <div className="about-image-label">
            <BookOpen size={22} />
            <span>Belajar untuk masa depan</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">TENTANG GEN COMPUTER</span>

          <h2>
            Tempat Mengembangkan Keterampilan dan Potensi Diri
          </h2>

          <p>
            Gen Computer merupakan lembaga kursus dan pelatihan
            yang menyediakan program pembelajaran di bidang
            komputer, administrasi, desain grafis, dan bisnis digital.
          </p>

          <p>
            Kami menghadirkan pilihan program pendidikan dan
            kursus singkat untuk membantu peserta mengembangkan
            keterampilan yang relevan dengan kebutuhan dunia
            kerja dan usaha.
          </p>

          <a href="#program" className="text-link">
            Kenali program kami <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
