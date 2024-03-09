"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo/client";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <p>app/layout</p>
      {children}
    </ApolloProvider>
  );
}
