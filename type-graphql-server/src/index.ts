import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { PersonResolver } from "./resolvers/person";
import { PlanetResolver } from "./resolvers/planet";

const main = async () => {

  const schema = await buildSchema({
    resolvers: [PersonResolver, PlanetResolver],
  })

  const apolloServer = new ApolloServer({
    schema,
  });

  const app = Express();
  app.use(cors({}))
  apolloServer.applyMiddleware({
    app,
    cors: false
  });

  app.listen(4000, () => console.log("server running on http://localhost:4000/graphql"))
}

main();