import Link from "next/link";
import React from "react";

const errorPage = () => {
  return (
    <div>
      <img src="/error.jpg" alt="" />
      <Link href="/">
        {" "}
        <button className="btn btn-primary">Back To Home</button>
      </Link>
    </div>
  );
};

export default errorPage;
