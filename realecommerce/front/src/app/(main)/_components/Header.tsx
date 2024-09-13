import { Heart } from "@/assets/Heart";
import { Logo } from "@/assets/logo";
import { ProfileIcon } from "@/assets/ProfileIcon";
import { Search } from "@/assets/Search";
import { Tereg } from "@/assets/Tereg";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="py-4 px-6 bg-black flex justify-center w-full">
      <div className=" w-[1440px] flex justify-between text-white">
        <div className="flex items-center gap-4">
          <Link href={`/`}>
            <div>
              <Logo />
            </div>
          </Link>

          <div>ECOMMERCE</div>
          <Link href={`/product`}>
            <div>Ангилал</div>
          </Link>
        </div>
        <div className="flex w-[300px] bg-[#71717A] items-center py-2 px-4 gap-4 rounded-md">
          <div>
            <Search />
          </div>
          <input
            type="search"
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-[#71717A] outline-none"
          ></input>
        </div>
        <div className="flex items-center gap-6">
          <Link href={`/saved`}>
            <div>
              {" "}
              <Heart />
            </div>
          </Link>
          <Link href={`/hurgelt`}>
            <div>
              <Tereg />
            </div>
          </Link>
          <Link href={`/userInfo1`}>
            <ProfileIcon />
          </Link>
          <div className="flex gap-2 text-white">
            <button className="bg-black border border-[#2563EB] py-2 px-3 rounded-md  font-medium">
              Бүртгүүлэх
            </button>
            <button className="bg-[#2563EB] py-2 px-3 rounded-md   font-medium">
              Нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
