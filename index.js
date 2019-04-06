import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  //   resolvers: resolvers, 이게 기본형식
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
