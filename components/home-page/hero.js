import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/kakashi.jpg"}
          alt="An image showing Nabeel"
          width={240}
          height={240}
        />
      </div>
      <h1>Hi, I'm Nabeel</h1>
      <p>
        I blog about web development, life, anime, music and everything above &
        beyond
      </p>
    </section>
  );
}
export default Hero;
