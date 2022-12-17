import React from "react";

const comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <h1 key={comment.id} className="my-10 mx-10">
          Comment Body: {comment.body}
        </h1>
      ))}
    </div>
  );
};

export default comments;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: {
      comments: data,
    },
  };
};
