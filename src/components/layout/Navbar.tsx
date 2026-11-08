
'use client';

import { useState } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import { wa } from '@/data/website';

const nav = [
  ['Beranda', '#beranda'],
  ['Tentang Kami', '#tentang'],
  ['Program D1', '#program'],
  ['Paket Kursus', '#paket'],
  ['Kontak', '#kontak'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#beranda" className="brand">
          <span className="brand-icon">
            <GraduationCap size={27} />
          </span>
          <span>
            <strong>GEN COMPUTER</strong>
            <small>LEMBAGA KURSUS & PELATIHAN</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, link]) => (
            <a
              key={label}
              href={link}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar Sekarang <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
