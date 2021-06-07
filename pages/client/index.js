import React from "react";

import { useRouter } from "next/router";

import Link from "next/link";

const ClientsPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const client = [
    {
      id: "sam",
      name: "Samuel",
    },
    {
      id: "tito",
      name: "Titus",
    },
    {
      id: "eli",
      name: "Elias",
    },
    {
      id: "bryo",
      name: "Brian",
    },
  ];

  return (
    <div>
      <h1> The Clients Page</h1>
      <ul>
        {client.map((clint) => (
          <li key={clint.id}>
            {/* <Link href={`/client/ ${clint.id}`}>{clint.name}</Link> */}
            <Link
              href={{
                pathname: "/client/[id]",
                query: { id: clint.id },
              }}
            >
              {clint.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
