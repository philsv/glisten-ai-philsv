import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { components } from "..";

/**
 * Props for `Article`.
 */
export type ArticleProps = SliceComponentProps<Content.ArticleSlice>;

/**
 * Component for "Article" Slices.
 */
const Article = ({ slice }: ArticleProps): JSX.Element => {
  return (
    <Bounded>
      <div className="prose prose-invert prose-lg prose-slate">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </Bounded>
  );
};

export default Article;
