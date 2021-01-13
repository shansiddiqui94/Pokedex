const Pokemon = ({ name, url }) => (
  // we want it to be clickable
  <li className="collection-item">
    <a href={url}>{name}</a>
  </li>
);
export default Pokemon;
