export function requestColor(method) {
  const lowerMethod = method.toLowerCase();
  return `text-${lowerMethod}`;
}