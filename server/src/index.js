import { readFileSync } from "fs";
import { join } from "path";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = readFileSync(join(process.cwd(), "src/schema.gql"), "utf-8");

// リゾルバ定義
const resolvers = {
  Query: {
    hello: () => {
      console.log("query hello is called");
      return "Hello world!";
    },
    getUsers() {
      return [
        { id: 1, name: "Suzuki" },
        { id: 2, name: "Tanaka" },
      ];
    },
  },
};

// サーバーの作成
const server = new ApolloServer({ typeDefs, resolvers });

// サーバーの起動
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
