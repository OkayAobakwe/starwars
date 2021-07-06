import { QueryResults } from "../../pages/QueryResults";
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
        <QueryResults />
      </ApolloProvider>
  )});
  

  it("renders successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});