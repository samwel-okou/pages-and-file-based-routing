import React from "react";

import { useRouter } from "next/router";

const ClientSelectedProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>A Project Page for a specific Project for a specific client </h1>
    </div>
  );
};

export default ClientSelectedProjectPage;
