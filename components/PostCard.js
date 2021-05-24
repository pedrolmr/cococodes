import Link from "next/link";

export default function PostCard({ post }) {
  const { title, slug, date } = post.fields;

  return (
    <div>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className="my-5">
            <h3 className="text-sl font-bold text-gray-600">{title}</h3>
            <span className="text-sm font-thin color-gray-200">
              {new Date(date).toLocaleDateString()}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}
