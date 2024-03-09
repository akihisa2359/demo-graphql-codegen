import { ApolloServer, gql } from "apollo-server";

// スキーマ定義
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// リゾルバ定義
const resolvers = {
  Query: {
    hello: () => {
      console.log("query hello is called");
      return "Hello world!";
    },
  },
};

// サーバーの作成
const server = new ApolloServer({ typeDefs, resolvers });

// サーバーの起動
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
