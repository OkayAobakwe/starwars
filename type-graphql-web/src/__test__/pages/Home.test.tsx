import { Home } from "../../pages/Home";
import { render } from "@testing-library/react";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "../../cache";
import { API_URL } from "../../constants/index";

describe("Home Page", () => {
  const client = new ApolloClient({
    cache,
    uri: API_URL,
  })
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
  )});
  

  it("renders successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});