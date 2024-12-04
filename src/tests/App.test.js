import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import fetchProjects from "../api/projects";
import projectsViewModel from "../helpers/projectsViewModel";

// Mock the fetchProjects API and the projectsViewModel helper
jest.mock("../api/projects");
jest.mock("../helpers/projectsViewModel");

describe("App Component", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks after each test
  });

  test("renders loading state", () => {
    // Simulating a pending state
    fetchProjects.mockImplementation(() => new Promise(() => {})); // Never resolves

    render(<App />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("renders error state", async () => {
    // Simulating an error fetch
    fetchProjects.mockRejectedValue(new Error("Failed to fetch projects"));

    render(<App />);

    await waitFor(() =>
      expect(
        screen.getByText(/We encountered an error while retrieving the data./i),
      ).toBeInTheDocument(),
    );
  });

  test("renders data state", async () => {
    // Simulating a successful fetch
    const mockData = [
      { id: 1, title: "Project 1", description: "Description 1" },
      { id: 2, title: "Project 2", description: "Description 2" },
    ];
    fetchProjects.mockResolvedValue(mockData);
    projectsViewModel.mockReturnValue(mockData); // Mock transformed data

    render(<App />);

    await waitFor(() =>
      expect(screen.getByTestId("cards-container")).toBeInTheDocument(),
    );

    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards.length).toBe(mockData.length);
  });
});
