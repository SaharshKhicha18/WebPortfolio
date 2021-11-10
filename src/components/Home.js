import React from "react";
import image from "../nasa-unsplash.jpg"

export default function Home() {
    return(
    <main>
      <img
        src={image}
        alt="Nasa Image"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-4">
        <h1 className="text-2xl text-blue-300 leading-none cursive lg:leading-snug home-name">
          I am a Software Engineer 
        </h1>
      </section>
    </main>
    );
}