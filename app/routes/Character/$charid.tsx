import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({
  params,
}) => {
  console.log(params.charid);
  const chars = await fetch('https://rickandmortyapi.com/api/character/' + params.charid)
  return json(await chars.json())
};

export default function Character() {
  const char = useLoaderData();
  return (
    <main className="container mx-auto text-center">
      <div>
        <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={char.image}/>
          </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">{char.name}</h2>
              <p className="mt-2 text-gray-600"> Species: {char.species}</p>
              <p className="mt-2 text-gray-600"> Type: {char.type}  </p>
              <p className="mt-2 text-gray-600"> Gender: {char.gender} </p>
              <p className="mt-2 text-gray-600"> Status: {char.status} </p>
              <p className="mt-2 text-gray-600"> Origin: {char.origin.name} </p>

            </div>
            <div className="flex justify-end mt-4">
              <a href="/GetChars" className="text-xl font-medium text-indigo-500">Return</a>
            </div>
          </div>
        </div>
    </main>
      );
}
