// Connect to your backend by setting VITE_REGISTRATION_ENDPOINT. Nothing is saved or emailed until you do.
// Errors carry a `code` ('not-connected' | 'failed'); the form shows the matching bilingual message.
export async function submitRegistration(data) {
  const url = import.meta.env.VITE_REGISTRATION_ENDPOINT
  if (!url) throw Object.assign(new Error('not-connected'), { code: 'not-connected' })
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  if (!res.ok) throw Object.assign(new Error('failed'), { code: 'failed' })
  return res.json().catch(() => ({}))
}
