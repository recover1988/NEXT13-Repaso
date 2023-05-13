import React from "react";

const page = async ({ params }: { params: { postId: string } }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data = await res.json();
    console.log(data);
    return (
        <div className="grid grid-cols-6 gap-x-6 gap-y-3">
            <div className="col-span-full space-y-3 lg:col-span-4">
                <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
                    {data.title}
                </h1>
                <p className="font-medium text-gray-500">{data.body}</p>
            </div>
        </div>
    );
};

export default page;
