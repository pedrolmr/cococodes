import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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

export default function PostDetails({ post }) {
  const { title, content, date } = post.fields;

  return (
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
        <p>{documentToReactComponents(content)}</p>
      </div>

      <div>
        <Subscribe />
      </div>
    </div>
  );
}
