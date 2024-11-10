import { Facebook } from "@/assets/Facebook";
import { Insta } from "@/assets/Insta";
import { Linkedin } from "@/assets/Linkedin";
import { Logo1 } from "@/assets/Logo1";
import { Mail } from "@/assets/Mail";
import { Phone } from "@/assets/Phone";
import { Twitter } from "@/assets/Twitter";

export const Footer = () => {
  return (
    <div className="py-4 px-6 bg-black flex justify-center w-full">
      <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-10 md:py-16 flex flex-col gap-6 md:gap-11 text-white">
        {/* Logo and Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-4 md:mb-0">
            <Logo1 />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-9 text-center md:text-left">
            <div className="flex items-center gap-2 md:gap-5">
              <Phone />
              <span className="text-sm md:text-[14px] font-medium">
                (976) 7007-1234
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-5">
              <Mail />
              <span className="text-sm md:text-[14px] font-medium">
                contact@ecommerce.mn
              </span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px bg-white opacity-10"></div>

        {/* Footer Bottom - Copy Right and Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-sm md:text-[14px] font-medium">
            © 2024 Ecommerce MN
          </div>

          <div className="flex gap-4 md:gap-6">
            <Facebook />
            <Insta />
            <Twitter />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
