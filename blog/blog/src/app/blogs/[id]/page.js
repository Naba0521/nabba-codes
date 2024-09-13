"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const PerBlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  const now = data?.published_at;
  const image = "https://s3.zerochan.net/240/37/35/3974287.avif";
  return (
    <>
      <Header />
      <div className="lg:w-[1220px] w-[390px] m-auto">
        <h1 className="text-[#181A2A] text-[38px] font-semibold mb-[20px]">
          {data?.title}
        </h1>
        <div className="flex items-center gap-[24px] mb-[32px]">
          <div className="flex items-center gap-2">
            <img
              className="w-[28px] h-[28px] rounded-full"
              src={data?.user.profile_image}
            />
            <p>{data?.user.name}</p>
          </div>
          {now && <div>{format(now, "MMMM dd, yyyy")}</div>}
        </div>
        <div className="h-[462px] w-full rounded overflow-hidden">
          <img
            className="h-full object-cover m-auto"
            src={data?.cover_image ?? image}
          />
        </div>
        <div
          className="mt-[32px] text-[#3B3C4A] text-[18px] flex flex-col items-start gap-6 [&>p]:text-[20px] [&>h3]:font-semibold [&>img]:self-center"
          dangerouslySetInnerHTML={{ __html: data?.body_html }}
        />
      </div>
      <Footer />
    </>
  );
};

export default PerBlogPage;
