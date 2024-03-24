"use client";

import { useQuery } from "@apollo/client";
import { gql } from "../../../apollo/__generated__/client";

// const HELLO = gql(`
//   query heloooo {
//     hello
//   }
// `);

const ALL_USERS = gql(`query ALL_USERS {
  getUsers {
    name
  }
}`);

export default function Hoge() {
  // const { loading, error, data } = useQuery(HELLO);
  const { loading, error, data } = useQuery(ALL_USERS);
  console.log(data?.getUsers?.[0]?.name);
  console.log(data);
  return (
    <>
      <p>hoge/page</p>
      {/* <p>{data?.hello}</p> */}
      <p>{JSON.stringify(data?.getUsers)}</p>
    </>
  );
}
