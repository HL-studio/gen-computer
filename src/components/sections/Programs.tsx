
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { courses, wa } from '@/data/website';

export default function Programs() {
  return (
    <section className="section programs-section" id="program">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-label">
              PENDIDIKAN D1 GEN COMPUTER
            </span>

            <h2>Pilih Bidang yang Ingin Kamu Kuasai</h2>

            <p>
              Jelajahi pilihan program pendidikan untuk
              mengembangkan kompetensi dan keterampilan profesional.
            </p>
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Tanya program <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="program-grid">
          {courses.map((course, index) => (
            <article className="program-card" key={course.name}>
              <div className="program-image">
                <img src={course.image} alt={course.name} />
                <span className="program-number">
                  0{index + 1}
                </span>
              </div>

              <div className="program-info">
                <h3>{course.name}</h3>
                <p>{course.desc}</p>

                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi program <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
