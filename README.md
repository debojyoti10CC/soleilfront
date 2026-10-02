# Soleil frontend

The Soleil marketing frontend now describes the contractor-payment project in `soleil2`, with its original lavender artwork, logo, typography and editorial layout preserved. It contains four routes:

- `/`: product introduction, commitments, treasury, workflow, FAQs and entry to the workspace.
- `/how-it-works`: invoice approval, funded commitment, maturity, claim, receipt and the two presentation roles.
- `/treasury`: reserve rules and an interactive, explicitly illustrative principal/buffer/surplus model.
- `/proof`: independent verification, a recorded Tempo commitment and honest implementation boundaries.

## Run

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:8765. Run `npm run build` for strict TypeScript checking and a production bundle. `npm run preview` serves the build at the same port. The payment workspace runs separately at http://localhost:3001.

## Connect the payment workspace

Local marketing pages automatically link to localhost:3001. For deployment, set `VITE_WORKSPACE_URL` to the HTTPS origin of the deployed Soleil payment app before building; see `.env.example`. The workspace and public verifier links use this origin. Without a valid deployed origin, the public site offers workflow/source links instead of sending visitors to an unrelated old options app or their own localhost.

`vercel.json` and `public/_redirects` provide SPA fallbacks for Vercel and compatible static hosts. Other hosts must serve `index.html` for `/how-it-works`, `/treasury` and `/proof` while serving static assets normally.

## Content and boundaries

The live implementation described here is Tempo Moderato testnet with pathUSD test assets and locally generated, app-managed test wallets. Solana has local-validator execution proof and adapter checks; its public payment workspace is not deployed. Live yield, fiat cash-out, banking approval and audited production readiness are not claimed. The treasury slider is a teaching example and never reads or submits wallet transactions.

The historical 300 pathUSD commitment links to the actual recorded transaction; the public verifier reads current state separately. Historical records are not labeled as live balances or guaranteed unpaid claims.

Main content is in `src/App.tsx`, workspace targets in `src/product.ts`, footer in `src/components/ui/footer-16.tsx`, styles in `src/styles.css`, and artwork in `public/assets`. No new frontend dependencies are required.
