
import {
  Laptop,
  Palette,
  BriefcaseBusiness,
  Monitor,
} from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-inner">
        <div>
          <Laptop />
          <span>Pelatihan Komputer</span>
        </div>

        <div>
          <Palette />
          <span>Desain Kreatif</span>
        </div>

        <div>
          <BriefcaseBusiness />
          <span>Administrasi Bisnis</span>
        </div>

        <div>
          <Monitor />
          <span>Teknologi & Digital</span>
        </div>
      </div>
    </section>
  );
}
