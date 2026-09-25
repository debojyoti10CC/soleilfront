const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Options', href: '#options' },
  { label: 'Protection', href: '#protection' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Details', href: '#details' },
];

export default function Footer16() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top" aria-label="Soleil home">
          <img className="footer-mark" src="/assets/soleil-logo.png" alt="" />
          <span>soleil</span>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <a className="footer-back-top" href="#top" aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="footer-rule" aria-hidden="true" />
        <p className="footer-copyright">© {new Date().getFullYear()} Soleil. SOL options on Solana.</p>
        <p className="footer-risk">Options carry risk. Review contract terms and potential loss before trading.</p>
      </div>
    </footer>
  );
}
