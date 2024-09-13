"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const categories = [
  "All",
  "React",
  "JavaScript",
  "Python",
  "Web Development",
  "Node.js",
  "discuss",
  "Programming",
];

export const AllBlogs1 = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(12);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(12);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${
            category !== "All" ? `&tag=${category}` : ""
          }`
        );

        const data = await res.json();

        setBlogs(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category, perPage]);
  const image =
    "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww";
  return (
    <div className="flex flex-col gap-8 lg:w-[1220px] w-[390px] m-auto py-8">
      <h1 className="font-bold text-2xl">All Blog Post</h1>

      <div className="lg:w-full lg:grid lg:grid-cols-3 lg:gap-[24px] grid gap-[20px]">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <BlogCard
              key={blog.title}
              image={blog.cover_image ?? image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
              profile={blog.user.profile_image}
              name={blog.user.name}
            />
          </Link>
        ))}
      </div>

      <button
        className="m-auto w-[200px] py-2 bg-[#4B6BFB] text-white rounded-md"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading...</p> : <p>Load More</p>}
      </button>
    </div>
  );
};

const BlogCard = ({ image, title, date, tags, profile, name }) => {
  return (
    <div className="border p-4 flex flex-col gap-4 w-full rounded-md bg-white h-[440px] justify-between">
      <img src={image} alt="image" className="aspect-[2/1] w-full rounded-md" />

      <div className="py-2 flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <BlogTag key={tag} tag={tag} />
          ))}
        </div>

        <h3 className="font-semibold text-2xl h-[64px] overflow-hidden">
          {title}
        </h3>

        <div className="flex justify-between">
          <img
            className="w-[28px] h-[28px] rounded-full "
            src={profile}
            alt="Profile"
          />
          <p>{name}</p>
          <p className="text-gray-500">
            {date && <div>{format(date, "MMMM dd, yyyy")}</div>}
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogTag = ({ tag }) => {
  return (
    <div className="bg-[#4b6bfb0d] py-1 px-[10px] rounded-md">
      <p className="text-[#4B6BFB] font-medium text-md capitalize">{tag}</p>
    </div>
  );
};
