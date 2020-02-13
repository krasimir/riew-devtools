export default function(what: string): string {
  const parts = what.split('_');
  return parts
    .slice(1)
    .map(str => str.toLowerCase())
    .join(' ');
}
