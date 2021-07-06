import { ObjectType, Field} from "type-graphql";

@ObjectType()
export class Planet {
  @Field()
  name: string;

  @Field()
  terrain: string;

  @Field()
  population: string;
}