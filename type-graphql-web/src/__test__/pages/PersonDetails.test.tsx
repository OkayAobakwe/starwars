import  PersonDetails  from "../../pages/PersonDetails";
import { render } from "@testing-library/react";

describe("Person Details", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(<PersonDetails />);
  });

  it("renders successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});