import classNames from "classnames";
import Image from "next/image";
import css from "./HeroImage.module.css";

const HeroImage = ({ alt, children, className, src }) => {
  return (
    <div className={classNames(className, css.hero_container)}>
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
        alt={alt}
      />
      {children}
    </div>
  );
};

export default HeroImage;
