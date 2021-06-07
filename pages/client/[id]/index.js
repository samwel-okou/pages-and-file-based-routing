import React from "react";

import { useRouter } from "next/router";

const ClientsProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const loadProjectHandler = () => {
    // loading data...
    router.push("/client/sam/projectA");
  };

  return (
    <div>
      <h1> Project of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientsProjectPage;
