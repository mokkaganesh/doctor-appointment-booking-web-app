/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            { hostname: 'localhost' },
            { hostname: 'res.cloudinary.com' },
            { hostname: 'lh3.googleusercontent.com' },
            //allow render
             {hostname:'onrender.com'},

        ],
        // unoptimized: true,
        // domains: ['localhost', 'res.cloudinary.com','lh3.googleusercontent.com'],  ->depricated
        
    },
};

export default nextConfig;
