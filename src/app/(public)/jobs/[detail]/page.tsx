import { notFound } from "next/navigation";
import JobDetailPage from "@/view/job/JobDetailPage";
interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPost(id: string) {
  let res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
    cache: "force-cache",
  });

  let post: Post = await res.json();

  if (!post) notFound();

  return post;
}

export async function generateStaticParams() {
  let posts = await fetch("http://localhost:3000/api/jobs", {
    cache: "force-cache",
  }).then((res) => res.json());

  return posts.map((post: Post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getPost(params.id);

  return {
    title: post.title,
  };
}

const JobDetail = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id);

  console.log(post);

  return <JobDetailPage />;
};

export default JobDetail;
