import Link from "next/link";

export default function PostCard({ post }) {
  const { title, slug, date } = post.fields;

  return (
    <div className="border-4 border-purple-300">
      <Link href={`/posts/${slug}`}>
        <a>
          <div className="border-2 border-red-300">
            <h3 className="text-lg font-bold ">{title}</h3>
            <span className="text-sm font-thin color-gray-200">{date}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
