import Footer16 from './components/ui/footer-16';

export default function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Soleil home">
            <img className="brand-mark" src="/assets/soleil-logo.png" alt="" />
            <span>soleil</span>
          </a>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow">SOL OPTIONS ON SOLANA</p>
          <h1 id="hero-title">Trade SOL options.<br /><em>Manage the risk.</em></h1>
          <p className="subtitle">Trade calls and puts. Hedge downside exposure without selling the SOL you hold.</p>
        </div>

        <p className="hero-footnote">OPTIONS · PROTECTION · SOLANA</p>
      </section>

      <section className="platform" id="platform" aria-labelledby="platform-title">
        <div className="section-intro page-width">
          <p className="section-kicker">THE SOLEIL PLATFORM</p>
          <h2 id="platform-title">Trade the move.<br /><span>Manage the risk.</span></h2>
          <p>Soleil brings SOL options and practical risk management together in a clear, Solana-native experience.</p>
        </div>

        <div className="feature-grid page-width">
          <article className="feature-card" id="options">
            <div className="feature-copy">
              <span className="feature-index">01 / OPTIONS</span>
              <h3>Trade SOL calls<br />and puts.</h3>
              <p>Choose a strike and expiry, set your size, and review the premium before you sign.</p>
            </div>
            <img src="/assets/option-card.png" alt="Abstract iridescent crystal bars arranged in a radial pattern" loading="lazy" />
          </article>

          <article className="feature-card" id="protection">
            <div className="feature-copy">
              <span className="feature-index">02 / PROTECTION</span>
              <h3>Protect the SOL<br />you plan to keep.</h3>
              <p>Use puts to manage downside exposure without selling the SOL held by you or your treasury.</p>
            </div>
            <img src="/assets/protection-card.png" alt="Abstract iridescent purple and orange petals" loading="lazy" />
          </article>
        </div>
      </section>

      <section className="workflow" id="workflow" aria-labelledby="workflow-title">
        <div className="page-width">
          <div className="workflow-heading">
            <p className="section-kicker">A CLEARER WAY TO TRADE</p>
            <h2 id="workflow-title">From market view<br />to on-chain position.</h2>
            <p>Every decision has context, from finding a contract to following the position after you sign.</p>
          </div>

          <div className="workflow-steps">
            <article>
              <span>01</span>
              <h3>Explore the market</h3>
              <p>Compare SOL calls and puts across strikes and expiries.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Shape the trade</h3>
              <p>Set quantity and limit price, then review the quote and potential payout.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Track your position</h3>
              <p>Sign on-chain and follow your open positions in one portfolio view.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="details" id="details" aria-labelledby="details-title">
        <div className="page-width">
          <div className="details-heading">
            <p className="section-kicker">BEFORE THE TRADE</p>
            <h2 id="details-title">A clearer view of<br /><span>every contract.</span></h2>
            <p>See the market context, understand the payoff, and choose the risk that fits your view of SOL.</p>
          </div>

          <div className="details-layout">
            <a className="detail-panel" href="https://soleil-chi-three.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open the Soleil trading app">
              <span className="detail-label">MARKET + QUOTES</span>
              <span className="detail-arrow" aria-hidden="true">↗</span>
              <h3>Everything you need before you sign.</h3>
              <ul className="detail-list">
                <li>Live SOL/USD pricing and a strike ladder around spot.</li>
                <li>7, 10, and 14-day expiries for short-horizon views.</li>
                <li>Premium, collateral, implied volatility, Greeks, and payoff.</li>
              </ul>
            </a>

            <div className="detail-stack">
              <a className="detail-tile" href="https://soleil-chi-three.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open the Soleil trading app">
                <span className="detail-label">01 / EXECUTE</span>
                <span className="detail-arrow" aria-hidden="true">↗</span>
                <h3>Buy long or sell with collateral.</h3>
                <p>Review a quote, set your size, sign with your wallet, and keep the receipt for the position.</p>
              </a>
              <a className="detail-tile" href="https://soleilauto.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open Soleil automation">
                <span className="detail-label">02 / GUARD</span>
                <span className="detail-arrow" aria-hidden="true">↗</span>
                <h3>Protect the treasury you plan to keep.</h3>
                <p>Preview protective puts, collars, covered calls, and spreads before you decide what belongs on-chain.</p>
              </a>
            </div>
          </div>

          <div className="detail-stats" aria-label="Soleil product details">
            <span><strong>SOL</strong><small>ONE UNDERLYING</small></span>
            <span><strong>DEVNET</strong><small>REFERENCE BUILD</small></span>
            <span><strong>ON-CHAIN</strong><small>POSITION RECEIPTS</small></span>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="page-width closing-inner">
          <p className="section-kicker">BUILT FOR SOLANA</p>
          <h2 id="closing-title">More control over<br /><em>what comes next.</em></h2>
          <p>Directional exposure, downside protection, and a clearer picture of risk. All in one place.</p>
        </div>
      </section>

      <Footer16 />
    </main>
  );
}
