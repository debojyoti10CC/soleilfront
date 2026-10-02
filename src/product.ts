const configured = import.meta.env.VITE_WORKSPACE_URL?.trim();
const local = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
function validWorkspace(value: string | undefined): string | null {
  if (!value) return null;
  try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.href.replace(/\/$/, '') : null; }
  catch { return null; }
}
export const workspaceUrl = validWorkspace(configured) ?? (local ? 'http://localhost:3001' : null);
export const openWorkspace = workspaceUrl ? `${workspaceUrl}/login` : '/how-it-works';
export const workspaceLabel = workspaceUrl ? 'Open workspace' : 'Explore the workflow';
export const verifierUrl = workspaceUrl ? `${workspaceUrl}/verify` : '/proof#independent-verification';
export const recordedVault = '0xc2b4fc5f41dcc2f3924fb41ae64b604626a934b9';
export const recordedPayment = '0x866f76f690e4edf50b539cd23eba4b6c0f64b3a769c21dd0d7e67a5183212ea2';
export const recordedCommit = 'https://explore.testnet.tempo.xyz/tx/0x15265a409ba78d526e4abb785e37ec1c523142668d54ceaa8d15e58fb6f7eb94';
export const recordedVerifier = workspaceUrl ? `${workspaceUrl}/verify?vault=${recordedVault}&paymentId=${recordedPayment}` : verifierUrl;
