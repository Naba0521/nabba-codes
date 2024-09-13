import { Button } from "./Button";
import { FaHandPointRight } from "react-icons/fa";
export const About = () => {
  return (
    <div className=" w-[100%] bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]">
        <div className=" flex items-center m-auto ">
          <Button value="About me" className="" />
        </div>

        <div className="flex flex-col lg:flex lg:flex-row ">
          <div className="flex flex-1 items-center justify-center pb-[40px]">
            <img
              className="shadow-about w-[360px] h-[360px]  rounded-[20px]"
              src="/self.jpg"
            />
          </div>
          <div className="flex-1 gap-[16px] flex flex-col dark:text-[#F9FAFB] text-justify">
            <div className="text-3xl font-semibold dark:text-[#F9FAFB]">
              Curious about me? Here you have it:
            </div>
            <div>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </div>
            <div>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </div>
            <div>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </div>
            <div>Finally, some quick bits about me.</div>
            <ul>
              <li className="flex gap-[8px] items-center">
                {" "}
                <FaHandPointRight /> B.E. in Computer Engineering
              </li>
              <li className="flex gap-[8px] items-center">
                {" "}
                <FaHandPointRight /> Avid learner
              </li>
              <li className="flex gap-[8px] items-center">
                {" "}
                <FaHandPointRight /> Full time freelancer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
