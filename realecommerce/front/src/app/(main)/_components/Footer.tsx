import { Facebook } from "@/assets/Facebook";
import { Insta } from "@/assets/Insta";
import { Linkedin } from "@/assets/Linkedin";
import { Logo1 } from "@/assets/Logo1";
import { Mail } from "@/assets/Mail";
import { Phone } from "@/assets/Phone";
import { Twitter } from "@/assets/Twitter";

export const Footer = () => {
  return (
    <div className="py-4 px-6 bg-black flex justify-center w-full ">
      <div className=" w-[1440px] px-[200px] py-16 flex flex-col gap-11 text-white">
        <div className="flex justify-between">
          <div>
            <Logo1 />
          </div>
          <div className="flex gap-9">
            <div className="flex items-center gap-5">
              <div>
                <Phone />
              </div>
              <div className="text-[14px] font-medium">(976) 7007-1234</div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Mail />
              </div>
              <div className="text-[14px] font-medium">
                contact@ecommerce.mn
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1.5px] bg-[#FFFFFF] opacity-10"></div>
        <div className="flex justify-between">
          <div className="text-[14px] font-medium">© 2024 Ecommerce MN</div>
          <div className="flex items-center gap-6">
            <div>
              <Facebook />
            </div>
            <div>
              <Insta />
            </div>
            <div>
              <Twitter />
            </div>
            <div>
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
