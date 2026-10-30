// Connect to your backend by setting VITE_REGISTRATION_ENDPOINT. Nothing is saved or emailed until you do.
export async function submitRegistration(data) {
  const url = import.meta.env.VITE_REGISTRATION_ENDPOINT
  if (!url) throw new Error('Registration service is not connected yet. Please contact the organisers directly.')
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  if (!res.ok) throw new Error('Submission failed. Please try again.')
  return res.json().catch(() => ({}))
}
