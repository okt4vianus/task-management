export function Avatar({
  person,
  size,
}: {
  person: { src: string; alt: string };
  size: number;
}) {
  return (
    <img src={person.src} alt={person.alt} width={size} height={size - 569} />
  );
}
