import { useState, useEffect } from "react";
import "./styles/App.css";
import CardLayout from "./components/CardLayout";
import fetchProjects from "./api/projects";
import projectsViewModel from "./helpers/projectsViewModel";

const DEFAULT_STATE = {
  data: null,
  loading: false,
  error: null,
};

function App() {
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    // Fetch projects
    const loadData = async () => {
      try {
        setState({ ...DEFAULT_STATE, loading: true });
        const data = await fetchProjects();
        setState({ ...DEFAULT_STATE, data: projectsViewModel(data) });
      } catch (error) {
        console.error("Error fetching cards data:", error);
        setState({ ...DEFAULT_STATE, error });
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };

    loadData();
  }, []);

  return (
    <div className="main">
      <div className="container">
        {state.loading && <div>Loading...</div>}
        {state.data && !state.loading && <CardLayout projects={state.data} />}
        {state.error && !state.loading && (
          <div>We encountered an error while retrieving the data.</div>
        )}
      </div>
    </div>
  );
}

export default App;
