import axios from "axios";
import { ObjectType, Field } from "type-graphql";
import { Planet } from "./Planet";

@ObjectType()
export class Person {
  @Field()
  name: string;

  @Field()
  height: string;

  @Field()
  mass: string;

  @Field()
  gender: string;

  homeworld: string;
  @Field(() => Planet, { name: "homeworld"})
  resolveHomeworld() {
    const response = axios
      .get(this.homeworld)
      .then((res) => res.data)
    return response
  }
}