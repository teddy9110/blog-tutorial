import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const chars = await fetch(`https://rickandmortyapi.com/api/character`)
  return json(await chars.json())
};

export default function GetChars() {
  const chars = useLoaderData();
  return (
    <main className="container mx-auto">
      <h1>Posts</h1>
      <div className="mx-auto text-center">
        {chars.results.map((post: any) => (
          <div key={post.id} className="p-6 m-6 bg-white mx-auto max-w-lg rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link
              to={"/Character/" + post.id}
              className="text-blue-600 underline"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.name}
                <img className="w-10 h-10 float-right object-cover rounded-full border-2 border-indigo-500 " src={post.image} />
              </h5>
            </Link>
            <p className="mt-2 text-gray-600"> Species: {post.species}</p>
            <p className="mt-2 text-gray-600"> Type: {post.type}  </p>
            <p className="mt-2 text-gray-600"> Gender: {post.gender} </p>
            <p className="mt-2 text-gray-600"> Status: {post.status} </p>
            <p className="mt-2 text-gray-600"> Origin: {post.origin.name} </p>
          </div>
        ))}
      </div>
    </main>
  );
}
