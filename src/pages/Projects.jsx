function Projects() {
  return (
    <div>
      <h1 className="flex justify-center self-center text-2xl font-bold p-3 mt-3 ">
        My Projects
      </h1>
      <div className="flex flex-col gap-6">
      <div className="border border-gray-800 mx-auto p-6  w-[768px] rounded-tl-3xl rounded-br-3xl">
        <h3 className="text-xl font-bold py-2 hover:underline cursor-pointer">
          Blog App
        </h3>
        <p className="text-md text-gray-500">
          <span className="text-lg font-semibold text-black">
            Tech Stack Used:
          </span>{" "}
          React,Tailwindcss,React-router,Redux-toolkit,Node.js,Express.js,MongoDB
        </p>
        <p className="text-md text-gray-500">
          <span className="text-lg font-semibold text-black">
            NPM Packages Used:
          </span>{" "}
          JWT,Flowbite-react,mongoose
        </p>
        <div>
          <span className="text-lg font-semibold text-black">Features: </span>
          <ul className="list-style-bullets list-disc">
            <li>
              <p className="text-md text-gray-500">
                You can signup and login through Google or create any individual
              </p>
            </li>
            <li>
              <p className="text-md text-gray-500">Only Admin can post Blog</p>
            </li>
            <li>
              <p className="text-md text-gray-500">
                You can see any post but like them or comment on it you used to
                login
              </p>
            </li>
            <li>
              <p className="text-md text-gray-500">
                Admin can see Dashboard which show all the activities regarding
                posts,comments and users
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold py-3 hover:text-teal-400">
            <a href="https://github.com/PrashantMaurya252/blog-app" target="_blank" rel="noopener noreferrer">
              Github link for this Project
            </a>
          </span>
          <span className="text-xl font-bold py-3 hover:text-teal-400">
            <a href="https://mern-blog-m5rc.onrender.com/" target="_blank" rel="noopener noreferrer">
              Live link of website
            </a>
          </span>
        </div>
      </div>
      <div className="border border-gray-800  p-6 mx-auto w-[768px] rounded-tl-3xl rounded-br-3xl">
        <h3 className="text-xl font-bold py-2 hover:underline cursor-pointer">
          Book App
        </h3>
        <p className="text-md text-gray-500">
          <span className="text-lg font-semibold text-black">
            Tech Stack Used:
          </span>{" "}
          React,Tailwindcss,React-router,Node.js,Express.js,MongoDB
        </p>
        <p className="text-md text-gray-500">
          <span className="text-lg font-semibold text-black">
            NPM Packages Used:
          </span>{" "}
          mongoose
        </p>
        <div>
          <span className="text-lg font-semibold text-black">Features: </span>
          <ul className="list-style-bullets list-disc">
            <li>
              <p className="text-md text-gray-500">
                This website able to perform CRUD operation
              </p>
            </li>
            <li>
              <p className="text-md text-gray-500">You can add any book with book name ,author name and publishing year</p>
            </li>
            <li>
              <p className="text-md text-gray-500">
                You can also delete and update any book
              </p>
            </li>
           
          </ul>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold py-3 hover:text-teal-400">
            <a href="https://github.com/PrashantMaurya252/merns-tack-bookstore" target="_blank" rel="noopener noreferrer">
              Github link for this Project
            </a>
          </span>
          <span className="text-xl font-bold py-3 hover:text-teal-400">
            <a href="https://jade-dieffenbachia-692a17.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live link of website
            </a>
          </span>
        </div>
      </div>
      <div className="border border-gray-800  p-6 mx-auto w-[768px] rounded-tl-3xl rounded-br-3xl">
        <h3 className="text-xl font-bold py-2 hover:underline cursor-pointer">
          Google Book API
        </h3>
        <p className="text-md text-gray-500">
          <span className="text-lg font-semibold text-black">
            Tech Stack Used:
          </span>{" "}
          React,Tailwindcss,React-router
        </p>
        
        <div>
          <span className="text-lg font-semibold text-black">Features: </span>
          <ul className="list-style-bullets list-disc">
            <li>
              <p className="text-md text-gray-500">
                This website created using Google Book Api
              </p>
            </li>
            <li>
              <p className="text-md text-gray-500">You can see various books with its details when you click on it</p>
            </li>
            
           
          </ul>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold py-3 hover:text-teal-400">
            <a href="https://github.com/PrashantMaurya252/React-Book-Store" target="_blank" rel="noopener noreferrer">
              Github link for this Project
            </a>
          </span>
          <span className="text-xl font-bold py-3 hover:text-teal-400">
            <a href="https://relaxed-basbousa-e74b1c.netlify.app" target="_blank" rel="noopener noreferrer">
              Live link of website
            </a>
          </span>
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default Projects;
