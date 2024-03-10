import { ApolloServer, gql } from "apollo-server";

// スキーマ定義
const typeDefs = gql`
  type User {
    id: Float
    name: String
  }

  type Query {
    hello: String
    getUsers: [User]
  }
`;

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
