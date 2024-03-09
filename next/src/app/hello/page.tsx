"use client";

import { useQuery, gql } from "@apollo/client";

const HELLO = gql(`
  query heloooo {
    hello
  }
`);

export default function Hoge() {
  const { loading, error, data } = useQuery(HELLO);
  console.log(data);
  return (
    <>
      <p>hoge/page</p>
      <p>{data?.hello}</p>
    </>
  );
}
