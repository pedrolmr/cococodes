import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import RichText from "@madebyconnor/rich-text-to-jsx";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Head from "next/head";
import Subscribe from "../../components/Subscribe";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: { post: res.items[0] },
  };
}

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        node.content[0].marks.find((x) => x.type === "code")
        // node.content[0].marks.find((x) => console.log(children))
      ) {
        console.log("children", children);
        return <pre className="lang-javascript">{children}</pre>;
      }
      return <p>{children}</p>;
    },

    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <RichText language="javascript" style={okaidia}>
            {text}
          </RichText>
        );
      },
    },
  },
};

export default function PostDetails({ post }) {
  const { title, content, date } = post.fields;

  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"
          integrity="sha512-YBk7HhgDZvBxmtOfUdvX0z8IH2d10Hp3aEygaMNhtF8fSOvBZ16D/1bXZTJV6ndk/L/DlXxYStP8jrF77v2MIg=="
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        <div>
          <h1 className="text-2xl font-bold mb-5">{title}</h1>
          <p className="text-sm color-gray-200">
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="my-5">
          {documentToReactComponents(content, renderOptions)}
        </div>

        <div>
          <Subscribe />
        </div>
      </div>
    </>
  );
}
