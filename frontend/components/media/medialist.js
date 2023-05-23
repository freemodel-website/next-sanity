import React from "react";
import ArticleCard from "../atoms/articlecard";

export default function MediaList({ media }) {
  return (
    <div class="grid md:grid-cols-2 gap-y-10 md:gap-y-20 my-10 md:p-9 mx-auto md:w-3/4">
      {media.map((article, index) => (
        <ArticleCard key={index} image={article.image} title={article.title} />
      ))}
    </div>
  );
}
