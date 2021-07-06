import axios from "axios";
import { PEOPLE_API_URL } from "../utils/urlUtils";
import { Arg, Query, Resolver } from "type-graphql";
import { Person } from "../entity/Person";


@Resolver()
export class PersonResolver {
  @Query(() => [Person])
  async people(@Arg("pageNumber") pageNumber: number) {
    const response = await axios
      .get(`${PEOPLE_API_URL}?page=${pageNumber}`)
      .then((res) => res.data.results);

    return response 
  }
  @Query(() => [Person])
  async person(@Arg("person") person: string){
    const response = await axios
      .get(`${PEOPLE_API_URL}?search=${person}`)
      .then((res) => res.data.results)

    return response;
  }
}