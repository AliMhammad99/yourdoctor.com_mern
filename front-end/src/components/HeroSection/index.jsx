import React from "react";
import SearchForm from "../SearchForm";
import BigTitle from "./BigTitle";
import "./HeroSection.scss";
import SmallTitle from "./SmallTitle";

function HeroSection() {
  return (
    <section className="hero-section">
      <BigTitle title="Book your next healthcare appointment" />
      <SmallTitle title="Find, Book, and Add your favorite practitioners to your care team" />
      <SearchForm />
    </section>
  );
}
export default HeroSection;
