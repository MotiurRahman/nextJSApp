import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const blogId = () => {
  const router = useRouter();
  const id = router.query.blogId;
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>
      <h1>this is dinamic page {id}</h1>
    </div>
  );
};

export default blogId;
