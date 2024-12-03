import { CARD_LAYOUT_GRID, CARD_LAYOUT_LIST } from "../config";
import "../styles/CardLayoutToggle.css";
import GridIcon from "./GridIcon";
import ListIcon from "./ListIcon";

const CardLayoutToggle = ({ view, onToggle }) => {
  const isGridView = view === CARD_LAYOUT_GRID;

  return (
    <div
      className="toggle-button-container"
      role="group"
      aria-label="Card Layout Toggle"
    >
      <button
        className={`toggle-button ${!isGridView ? "active" : ""}`}
        onClick={() => onToggle(CARD_LAYOUT_LIST)}
        aria-pressed={!isGridView}
      >
        <div className="icon" aria-hidden="true">
          <ListIcon />
        </div>
        <span className="label">List</span>
      </button>
      <button
        className={`toggle-button ${isGridView ? "active" : ""}`}
        onClick={() => onToggle(CARD_LAYOUT_GRID)}
        aria-pressed={isGridView}
      >
        <div className="icon" aria-hidden="true">
          <GridIcon />
        </div>
        <span className="label">Grid</span>
      </button>
    </div>
  );
};

export default CardLayoutToggle;
