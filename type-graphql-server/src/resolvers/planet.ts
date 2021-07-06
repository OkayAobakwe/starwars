import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { Planet } from "../entity/Planet";


@Resolver()
export class PlanetResolver {
  @Query(() => Planet)
  async planet(@Arg("homeworld") homeworld: string ) {
    const response = await axios.
      get(homeworld)
      .then((res) => console.log(res));

    return response 
  }
}