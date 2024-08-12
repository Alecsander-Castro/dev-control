import { Header } from "./Header";
import { render, screen } from "@testing-library/react";

describe("<Header/>", () => {
  it("should render <Header/> component", () => {
    render(<Header />);
    const page = screen.getByTestId("header");
    const logo = screen.getByTestId("logo");
    expect(page).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent("DEVCONTROLE");
  });
});
