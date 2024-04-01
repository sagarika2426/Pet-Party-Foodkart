import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Loading of Contact component",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load the button component",()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
});

test("Should load input name inside Contact component",()=>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("Full Name");
    //Assertion
    expect(inputName).toBeInTheDocument();
});

