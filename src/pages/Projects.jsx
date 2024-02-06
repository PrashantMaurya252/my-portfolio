function Projects() {
  return (
    <div>
      <h1 className="flex self-center justify-center text-slate-600 font-bold text-4xl p-3 m-3 font-sans-serif">
        My Projects
      </h1>
      <div className="flex gap-6 md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col p-3 mx-auto md:w-1/4 border-teal-500 border-4 rounded-lg bg-slate-100 ">
          <h1 className="font-sans-serif font-bold">Blog App</h1>
          <h3 className="font-bold">
            Tech Stack: <span className=" font-system-ui font-thin">MERN</span>
          </h3>
          <img
            className=" w-80 rounded-md border-teal-400 border-2 "
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&"
            alt="blog"
          />
          <div className="flex justify-between">
            <a
              href="https://mern-blog-m5rc.onrender.com"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3 hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Live Demo Link
            </a>
            <a
              href="https://github.com/PrashantMaurya252/blog-app"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3  hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Github Link
            </a>
          </div>
        </div>
        <div className="flex flex-col p-3 mx-auto md:w-1/4 border-teal-500 border-4 rounded-lg bg-slate-100">
          <h1 className="font-sans-serif font-bold">Book Store</h1>
          <h3 className="font-bold">
            Tech Stack: <span className=" font-system-ui font-thin">MERN</span>
          </h3>
          <img
            className="w-80 rounded-md border-teal-400 border-2"
            src="https://images.pexels.com/photos/2607687/pexels-photo-2607687.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="blog"
          />
          <div className="flex justify-between">
            <a
              href="https://jade-dieffenbachia-692a17.netlify.app/"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3 hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Live Demo Link
            </a>
            <a
              href="https://github.com/PrashantMaurya252/merns-tack-bookstore"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3  hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Github Link
            </a>
          </div>
        </div>
        <div className="flex flex-col p-3 mx-auto md:w-1/4 border-teal-500 border-4 rounded-lg bg-slate-100">
          <h1 className="font-sans-serif font-bold">Google API Book Store</h1>
          <h3 className="font-bold">
            Tech Stack:{" "}
            <span className=" font-system-ui font-thin">React,TailwindCSS</span>
          </h3>
          <img
            className="w-80 rounded-md border-teal-400 border-2"
            src="https://images.pexels.com/photos/5490916/pexels-photo-5490916.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="book"
          />
          <div className="flex justify-between">
            <a
              href="https://relaxed-basbousa-e74b1c.netlify.app/"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3 hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Live Demo Link
            </a>
            <a
              href="https://github.com/PrashantMaurya252/React-Book-Store"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3  hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Github Link
            </a>
          </div>
        </div>
        <div className="flex flex-col p-3 mx-auto md:w-1/4 border-teal-500 border-4 rounded-lg bg-slate-100">
          <h1 className="font-sans-serif font-bold">Shop-cart</h1>
          <h3 className="font-bold">
            Tech Stack:{" "}
            <span className=" font-system-ui font-thin">
              React,Redux-Toolkit,TailwindCSS
            </span>
          </h3>
          <img
            className="w-80 rounded-md border-teal-400 border-2"
            src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="book"
          />
          <div className="flex justify-between">
            <a
              href="https://grand-creponne-1b573d.netlify.app/"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3 hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Live Demo Link
            </a>
            <a
              href="https://github.com/PrashantMaurya252/e-commerce"
              className="bg-teal-300 w-fit text-xl p-3 rounded-md mt-3  hover:bg-green-500 hover:text-white font-sans-serif font-bold"
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
