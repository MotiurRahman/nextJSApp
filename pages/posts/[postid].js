import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/posts");
  };
  return (
    <div>
      <div className="card my-10 mx-auto bg-base-100 shadow-xl image-full">
        {/* <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure> */}
        <div className="card-body">
          <p>Post ID:{post?.id}</p>
          <h2 className="card-title">Title: {post?.title}</h2>
          <p>Post: {post?.body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleBack}>
              Back To Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postid}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        postid: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
