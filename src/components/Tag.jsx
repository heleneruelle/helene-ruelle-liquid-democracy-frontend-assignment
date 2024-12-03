import "../styles/Tag.css";

const Tag = ({ tagName }) => {
  return (
    <div
      className="flex-row-centered tag"
      role="status"
      aria-label={`Tag: ${tagName}`}
    >
      <p>{tagName}</p>
    </div>
  );
};

export default Tag;
