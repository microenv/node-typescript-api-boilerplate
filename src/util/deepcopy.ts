export default function deepcopy(value: any) {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (err) {
    // silent is gold
  }

  if (typeof value === 'number') {
    return value - 0;
  }

  if (typeof value === 'string') {
    return `${value}`;
  }

  return value;
}
