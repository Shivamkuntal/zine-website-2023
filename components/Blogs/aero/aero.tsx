import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Intro from "../../../images/blog/aero/home/intro.jpg";
import Maneuvering from "../../../images/blog/aero/home/maneuvering.webp";
import RCPlane from "../../../images/blog/aero/home/rcplane.webp";
import MultirotorAircrafts from "../../../images/blog/aero/home/multirotor-aircrafts.jpg";

const blogs = [
  {
    title: "Introduction",
    image: Intro,
    description: "If you have ever wondered how someone could fly, what would you think of? Wings? Propellers? [Because that’s how the Wright brothers did it, duh]. But how does it work? We are here to answer that question for you.",
    link: "/blogs/aero/intro"
  },
  {
    title: "Maneuvering",
    image: Maneuvering,
    description: "Ever wondered what would happen when you throw your first built paper plane, which is not controlled by you",
    link: "/blogs/aero/maneuvering"
  },
  {
    title: "RC Plane DIY",
    image: RCPlane,
    description: "We have studied the physics and those lengthy theories, we have seen how the plane is controlled, but how about actually building one of those?",
    link: "/blogs/aero/rcplane"
  },
  {
    title: "Multirotor Aircrafts",
    image: MultirotorAircrafts,
    description: "A multirotor is a rotor based aircraft with 2 or more lift generating rotors",
    link: "/blogs/aero/multirotor-aircrafts"
  }
];

const BlogCard = ({ blog }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="col-span-1 mb-8">
      <Image src={blog.image} className="" width={2000} height={1200} />
      <h1 className="text-xl mb-4">{blog.title}</h1>
      <p className="h-52 md:h-72 lg:h-80 xl:h-68">{blog.description}</p>
      <div className="text-right text-red-600 underline mb-4">
        <Link href={blog.link}>Go to Blog</Link>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2 rounded">
          Like {likes}
        </button>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          className="border p-2 rounded w-full mx-4"
        />
        <button onClick={handleCommentSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
          Comment
        </button>
      </div>
      <div>
        {comments.map((cmt, index) => (
          <p key={index} className="bg-gray-100 p-2 rounded mb-2">
            {cmt}
          </p>
        ))}
      </div>
    </div>
  );
};

const Aero = () => {
  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-blog-bg bg-no-repeat bg-center bg-cover bg-fixed py-96"></div>

      <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">BLOGS</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Aero;
