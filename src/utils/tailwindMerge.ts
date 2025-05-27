export function twMerge(...classNames: (string | undefined)[]) {
  return classNames.filter(Boolean).join(' ');
}