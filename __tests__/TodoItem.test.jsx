import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "@/components/todoComponents/todoItem";

const mockTodo = {
  id: 1,
  text: "Learn Unit Testing",
  done: false,
};

const mockIndex = 1;

const toggleDone = jest.fn();
const toggleDelete = jest.fn();

describe("Todo Item", () => {
  it("render todo text", () => {
    render(<TodoItem index={mockIndex} todo={mockTodo} onDone={toggleDone} onDelete={toggleDelete} />);

    const todoText = screen.getByText(/learn unit testing/i);
    expect(todoText).toBeInTheDocument();
    expect(todoText).toHaveTextContent("Learn Unit Testing");
  });

  it("Call toggle delete function", () => {
    render(<TodoItem index={mockIndex} todo={mockTodo} onDone={toggleDone} onDelete={toggleDelete} />);

    const deleteButton = screen.getByText(/×/i);
    fireEvent.click(deleteButton);

    expect(toggleDelete).toHaveBeenCalledWith(1);
  });

  it("Match snapshot", () => {
    const { asFragment } = render(<TodoItem index={mockIndex} todo={mockTodo} onDone={toggleDone} onDelete={toggleDelete} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
