"use client";

import { useQuery, gql } from "@apollo/client";

const HELLO = gql(`
  query heloooo {
    hello
  }
`);

const GETUSERS = gql(`
  query getUsers {
    getUsers {
      id
      name
    }
  }
`);

export default function Hoge() {
  // const { loading, error, data } = useQuery(HELLO);
  const { loading, error, data } = useQuery(GETUSERS);
  console.log(data);
  return (
    <>
      <p>hoge/page</p>
      {/* <p>{data?.hello}</p> */}
      <p>{JSON.stringify(data?.getUsers)}</p>
    </>
  );
}
