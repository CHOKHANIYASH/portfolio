import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Atag({ link, icon }) {
  return (
    <a href={link} target="_blank">
      <FontAwesomeIcon className="mr-1 text-3xl text-blue-500" icon={icon} />
    </a>
  );
}
