import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ArticleCard from "../atoms/articlecard";

export default function MediaList({ media }) {
  return (
    <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-2 my-10 md:p-9 mx-auto md:w-4/6">
      {media.map((article, index) => (
        <AnimatedArticleCard
          key={index}
          image={article.image}
          title={article.name}
          url={article.url}
        />
      ))}
    </div>
  );
}

function AnimatedArticleCard({ image, title, url }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Stagger the animations by 0.1 seconds per card
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className=" p-4"
    >
      <ArticleCard image={image} title={title} url={url} />
    </motion.div>
  );
}
