import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Image
        src={"https://avatars.githubusercontent.com/u/54898895?v=4"}
        alt={"https://avatars.githubusercontent.com/u/54898895?v=4"}
        width={20}
        height={20}
      />
      <p>built by AJ4200</p>
    </>
  );
};
export default About;
