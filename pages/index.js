import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POST = [
  { 
    slug: "getting-started-with-nextjs-0",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a ReactJS framework for production - it makes building fullstack webapps easier",
    date: "2022-02-10"
  },
  { 
    slug: "getting-started-with-nextjs-1",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a ReactJS framework for production - it makes building fullstack webapps easier",
    date: "2022-02-10"
  },
  { 
    slug: "getting-started-with-nextjs-2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a ReactJS framework for production - it makes building fullstack webapps easier",
    date: "2022-02-10"
  },
  { 
    slug: "getting-started-with-nextjs-3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a ReactJS framework for production - it makes building fullstack webapps easier",
    date: "2022-02-10"
  },
];
function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </>
  );
}
export default HomePage;
