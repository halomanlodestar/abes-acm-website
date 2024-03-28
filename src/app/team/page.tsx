import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { team as teamMembers } from "@/../public/data/team";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "TEAM | ABES ACM",
  description: "Official ABES ACM Chapter",
  icons: { icon: "/images/abes-acm.png" },
};

const Team = () => {
  return (
    <main className="p-5 md:px-20 lg:px-36 space-y-5">
      <h1 className="text-4xl">Meet The Team</h1>
      <p>
        Every member of the society has always been passionate and hard working
        towards their goal, creating a positive work environment.
        <br />
        Their support and will to help each other out in every way possible is
        what makes ACM-ABES 'the Team'.
      </p>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-5 md:gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {member.image.length ? (
              <Image
                width={512}
                height={512}
                src={"/images/team/" + member.image}
                alt={member.name}
                className="rounded-full md:max-w-52 md:min-w-52 md:max-h-52 md:min-h-52 object-cover min-w-40 min-h-40 max-w-40 max-h-40"
              />
            ) : (
              <div
                className={`rounded-full text-7xl w-full h-full md:min-w-52 md:min-h-52 md:max-w-52 md:max-h-52 min-w-40 min-h-40 max-w-40 max-h-40 flex items-center justify-center bg-cyan-600`}
              >
                {member.name
                  .toUpperCase()
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>
            )}
            <div className="text-center mt-2">
              <Link
                href={"/team/" + member.name.toLowerCase().split(" ").join("-")}
              >
                <h2 className="text-lg font-semibold">{member.name}</h2>
              </Link>
              {/* <p className="text-sm">{member.designation}</p> */}
              <p className="text-sm">{member.role}</p>
              <div className="flex justify-center mt-2">
                {member.github && (
                  <Link
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <FaGithub className="text-lg" />
                  </Link>
                )}
                {member.linkedin && (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<FaLinkedin className="text-lg" />}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Team;
