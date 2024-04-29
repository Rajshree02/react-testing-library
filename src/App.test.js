import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders Enter You Name text", () => {
  const window = render(<App />);

  const linkElement = window.getByText("Enter your name");

  expect(linkElement).toBeInTheDocument();
});

test("render input box", () => {
  const window = render(<App />);

  const inputBox = window.getByLabelText("Enter your name");

  expect(inputBox).toBeInTheDocument();
});

test("render submit button", () => {
  const window = render(<App />);

  const submit = document.getElementById("button");

  expect(submit).toBeInTheDocument();
});

test("button should be disabled if input is not provided", async () => {
  const window = render(<App />);

  expect(window.getByRole("button")).toBeDisabled();
});

test("button should be enabled if input is provided", async () => {
  const window = render(<App />);

  const inputBox = window.getByLabelText("Enter your name");
  userEvent.type(inputBox, "Ram");

  expect(window.getByRole("button")).toBeEnabled();
});

test("on button click greeting message should appear", async () => {
  const window = render(<App />);

  const inputBox = window.getByLabelText("Enter your name");
  userEvent.type(inputBox, "John");
  await waitFor(() => expect(inputBox).toHaveValue("John"));
  await waitFor(() => userEvent.click(screen.getByRole("button")));
  const actualGreet = window.getByText("Hello John !!");

  expect(actualGreet).toBeInTheDocument();
});

test("on button click, the greeting message should appear", () => {
  const window = render(<App />);

  const inputBox = window.getByLabelText("Enter your name");
  fireEvent.change(inputBox, { target: { value: "John" } });
  expect(inputBox).toHaveValue("John");
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const actualGreet = window.getByText("Hello John !!");

  expect(actualGreet).toBeInTheDocument();
});
