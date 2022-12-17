import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {post.title}
            <div className="badge badge-secondary">NEW</div>
            <div className="badge badge-outline">Fashion</div>
          </h2>
          <p>{post.body}</p>
          <div className="card-actions justify-end">
            <Link href={`/posts/${post.id}`}>
              <button className="btn btn-success">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
