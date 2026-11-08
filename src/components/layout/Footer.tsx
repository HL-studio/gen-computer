
import { GraduationCap } from 'lucide-react';
import { contact } from '@/data/website';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#beranda" className="brand footer-logo">
            <span className="brand-icon">
              <GraduationCap size={26} />
            </span>

            <span>
              <strong>GEN COMPUTER</strong>
              <small>LEMBAGA KURSUS & PELATIHAN</small>
            </span>
          </a>

          <p>
            Mengembangkan keterampilan dan potensi melalui
            pendidikan dan pelatihan komputer di Sampit.
          </p>
        </div>

        <div>
          <h4>Navigasi</h4>
          <a href="#tentang">Tentang Kami</a>
          <a href="#program">Program D1</a>
          <a href="#paket">Paket Kursus</a>
          <a href="#kontak">Kontak</a>
        </div>

        <div>
          <h4>Informasi</h4>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={contact.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>

        <div>
          <h4>Kontak</h4>
          <p>Jl. Taman Siswa 1 No.4, Sampit</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </div>

      <div className="container footer-bottom">
  <span>
    Copyright 2026 Gen Computer. All rights reserved.
  </span>

  <span>Website Company Profile</span>


        <span>Website Company Profile</span>
      </div>
    </footer>
  );
}
