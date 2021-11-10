import React from "react";
import image from "../landing.jpg"
import "./Home.css"

export default function Home() {
    return(
    <main className= "bg-black">
      <img
        src={image}
        alt="Saharsh Image"
        className="absolute justify-cover w-full h-full"
      />
      <section className="relative flex cursive">
        <h1 className="typewriter my-40 text-8xl text-blue-300">
          SAHARSH
        </h1>
        <h1 className="typewriter my-40 mx-10 text-8xl text-white">
          KHICHA
        </h1>
      </section>
      <section className="relative flex cursive">
      <h2 className="mx-30 text-3xl text-white">
          I'm a student. Web Developer. Software Engineer. Biologist
      </h2>
      </section>
    </main>
    );
}