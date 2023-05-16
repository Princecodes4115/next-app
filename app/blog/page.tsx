import Link from "next/link";
// import { AppProps } from 'next/app';

export default function Blog(props: { posts: any[]; skyColor: any["blue"] }) {
  return (
    <>
      <h2>The Blog</h2>
      <h3>{props.skyColor}</h3>
      {props.posts &&
        props.posts.map((post) => {
          return (
            <div>
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.content}</p>
              <hr />
            </div>
          );
        })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://learnwebcode.github.io/json-example/posts.json"
  );
  const data = await response.json();
  console.log(JSON.stringify(data));
  return {
    props: {
      posts: data.posts,
    },
  };
}
