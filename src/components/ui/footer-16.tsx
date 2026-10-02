import { openWorkspace, workspaceLabel } from '../../product';
const navLinks = [
  { label: 'Platform', href: '/#platform' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Treasury', href: '/treasury' },
  { label: 'Proof', href: '/proof' },
  { label: 'Open source', href: 'https://github.com/debojyoti10CC/soleil2' },
];
export default function Footer16() {
  return <footer className="site-footer"><div className="footer-inner">
    <a className="footer-brand" href="/" aria-label="Soleil home"><img className="footer-mark" src="/assets/soleil-logo.png" alt="" /><span>soleil</span></a>
    <nav className="footer-nav" aria-label="Footer navigation">{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <a className="footer-workspace" href={openWorkspace}>{workspaceLabel} <span aria-hidden="true">↗</span></a>
    <a className="footer-back-top" href="#top" aria-label="Back to top"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
    <div className="footer-rule" aria-hidden="true" />
    <p className="footer-copyright">© {new Date().getFullYear()} Soleil. Good work. Clear commitments.</p>
    <p className="footer-risk">Working Tempo testnet prototype. Test assets have no economic value.</p>
  </div></footer>;
}
