import {render, screen, cleanup} from "@testing-library/react";
import HeroSection from "../components/HeroSection";

test("should render component", () => {
    render(<HeroSection></HeroSection>);
    const HeroSectionElement = screen.getByTestId({hover});
    expect(HeroSectionElement).toBeInTheDocument();
    expect(HeroSectionElement).toHaveTextContent("Software Engineering Training")
})

