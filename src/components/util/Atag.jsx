export default function Atag({ link, Icon }) {
  return (
    <a href={link} target="_blank" className="mx-2 text-3xl text-blue-500">
      <Icon className="inline" />
    </a>
  );
}
