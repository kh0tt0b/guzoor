export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  if (/^https?:\/\//.test(path)) return path
  // Images uploaded through the admin are saved with the base already on them
  // (e.g. "/guzoor/heroes/x.jpg"); older content uses "/heroes/x.jpg".
  if (base !== '/' && path.startsWith(base)) return path
  return `${base}${path.replace(/^\//, '')}`
}
