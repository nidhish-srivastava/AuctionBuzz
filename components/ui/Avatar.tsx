"use client";

import Image from "next/image";

type AvatarProps  = {
  src?: string | null | undefined;
}
const Avatar = ({ src } : AvatarProps) => {
  const imgSrc = src ? src : "/images/placeholder.jpg";
  return (
    <Image
      className="rounded-full"
      height={"30"}
      width={"30"}
      alt="avatar"
      src={imgSrc}
    />
  );
};

export default Avatar;
