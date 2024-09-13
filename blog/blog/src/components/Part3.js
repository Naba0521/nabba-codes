import { Acard } from "./Acart";

export const Part3 = ({ data }) => {
  return (
    <div className="lg:w-[1220px] w-[390px]  m-auto flex flex-col gap-[30px] pt-[100px] pb-[64px]">
      <div className="text-[24px] text-[#181A2A] font-bold">All Blog Post</div>
      <div className="flex justify-between text-[12px] font-bold text-[#495057]">
        <div className="flex gap-[20px] ">
          <div>All</div>
          <div>Design</div>
          <div>Travel</div>
          <div>Fashion</div>
          <div>Technology</div>
          <div>Branding</div>
        </div>
        <div className="hidden lg:flex">View All</div>
      </div>
      <div className="flex flex-wrap gap-[20px]">
        {data.slice(1, 10).map((item) => (
          <Acard
            key={item.title}
            img={item.cover_image}
            title={item.title}
            description={item.description}
            time={item.published_at}
            tags={item.tag_list}
          />
        ))}
      </div>
      <div className="flex m-auto px-[16px] py-[8px] rounded-md mt-[80px] border-2 border-gray-200 w-fit">
        Load More
      </div>
    </div>
  );
};
