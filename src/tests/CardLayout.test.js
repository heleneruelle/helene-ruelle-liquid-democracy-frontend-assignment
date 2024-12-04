import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardLayout from "../components/CardLayout";
import { CARD_LAYOUT_GRID, CARD_LAYOUT_LIST } from "../config";
import useIsMobile from "../hooks/useIsMobile";

// Mock the `useIsMobile` hook
jest.mock("../hooks/useIsMobile");

const mockProjects = [
  { id: 1, title: "Project 1", description: "Description 1" },
  { id: 2, title: "Project 2", description: "Description 2" },
  { id: 3, title: "Project 3", description: "Description 3" },
];

describe("CardLayout", () => {
  test("renders in grid view by default on desktop", () => {
    useIsMobile.mockReturnValue(false);

    render(<CardLayout projects={mockProjects} />);

    const container = screen.getByTestId("cards-container");
    expect(container).toHaveClass(CARD_LAYOUT_GRID);

    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards.length).toBe(mockProjects.length);
  });

  test("renders the toggle on desktop", () => {
    useIsMobile.mockReturnValue(false);

    render(<CardLayout projects={mockProjects} />);

    const toggle = screen.getByTestId("card-layout-toggle");
    expect(toggle).toBeInTheDocument();
  });

  test("renders in list view by default on mobile", () => {
    useIsMobile.mockReturnValue(true);

    render(<CardLayout projects={mockProjects} />);

    const container = screen.getByTestId("cards-container");
    expect(container).toHaveClass(CARD_LAYOUT_LIST);

    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards.length).toBe(mockProjects.length);
  });

  test("does not render the toggle on mobile", () => {
    useIsMobile.mockReturnValue(true);

    render(<CardLayout projects={mockProjects} />);

    const toggle = screen.queryByTestId("card-layout-toggle");
    expect(toggle).not.toBeInTheDocument();
  });
});
