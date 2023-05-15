import React, { Suspense } from "react";
import Loading from "./loading";

const page = () => {
    return (
        <div className="h-screen w-screen bg-slate-600 m-5 border-cyan-500 border-spacing-3">
            <h1 className="">Posts</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis quod voluptatibus maiores deleniti, molestias animi
                aut rem recusandae ab debitis eligendi vitae reiciendis vel
                voluptate soluta cupiditate. Fugit, facere non.
            </p>
            <Suspense fallback={<Loading />} />
        </div>
    );
};

export default page;
