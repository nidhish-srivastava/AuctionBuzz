/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.githubusercontent.com",
          port: "",
        },
        {
          protocol: "https",
          hostname: "**.googleusercontent.com",
          port: "",
        },
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;
  