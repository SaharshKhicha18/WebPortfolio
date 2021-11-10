import React from "react";
import image from "../landing.jpg"
import "./Home.css"

export default function Home() {
    return(
    <main className= "bg-black">
      <img
        src={image}
        alt="Saharsh Image"
        className="absolute justify-left w-full h-full"
      />
      <section className="relative flex cursive justify-center">
        <h1 className="text-8xl text-blue-300">
          SAHARSH
        </h1>
        <h1 className="mx-10 text-8xl text-white">
          KHICHA
        </h1>
      </section>
      <div className="absolute flex cursive my-80 mx-80 text-4xl text-white">
      <h2 className="justify-center typewriter my-40 mx-20">
          I'm a student. Web Developer. Software Engineer. Biologist
      </h2>
      </div>
    </main>
    );
}