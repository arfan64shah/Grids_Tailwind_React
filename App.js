import "./App.css";
import image1 from "/home/uca/Desktop/react/test/src/images/image1.jpg";
import image2 from "/home/uca/Desktop/react/test/src/images/image2.jpg";
import image3 from "/home/uca/Desktop/react/test/src/images/image3.webp";

function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 ml-5 mr-5 mt-3 mb-3 gap-2">
      <div className="h-72 mt-16 sm:grid grid-columns-1">
        <h1 className="text-4xl font-Lora font-medium h-12 w-52 ml-20">
          Our Mission
        </h1>
        <p className="text-xl font-normal font-Lora w-96 h-48 text-justify ml-20">
          Alumni sit with students to share real-life experiences after
          graduation regarding job hunt, corporate life and graduate school
          applications. They share advices on how to take most advantage of
          undergraduate school to prepare for professional life.{" "}
        </p>
        <button className=" text-yellow-400 h-10 w-28 rounded-lg border-2 border-yellow-400 ml-80">
          Read More
        </button>
      </div>
      <div className="bg-gray-400 h-96 mt-8">
        <img src={image1} className="h-full w-full shadow-xl shadow-gray-400" />
      </div>
      <div className="bg-green-500 h-96 -mt-10">
        <img src={image2} className="h-full w-full shadow-xl shadow-gray-400" />
      </div>
      <div className="h-72 mt-2">
        <h1 className="text-4xl font-Lora font-medium h-12 w-52 ml-20">
          Our Vision
        </h1>
        <p className="text-xl font-normal font-Lora w-96 h-48 text-justify ml-20">
          Alumni sit with students to share real-life experiences after
          graduation regarding job hunt, corporate life and graduate school
          applications. They share advices on how to take most advantage of
          undergraduate school to prepare for professional life.{" "}
        </p>
        <button className=" text-yellow-400 h-10 w-28 rounded-lg border-2 border-yellow-400 ml-80">
          Read More
        </button>
      </div>
      <div className="h-72 -mt-12">
        <h1 className="text-4xl font-Lora font-medium h-12 w-52 ml-20">
          Our Values
        </h1>
        <p className="text-xl font-normal font-Lora w-96 h-48 text-justify ml-20">
          Alumni sit with students to share real-life experiences after
          graduation regarding job hunt, corporate life and graduate school
          applications. They share advices on how to take most advantage of
          undergraduate school to prepare for professional life.{" "}
        </p>
        <button className=" text-yellow-400 h-10 w-28 rounded-lg border-2 border-yellow-400 ml-80">
          Read More
        </button>
      </div>
      <div className="h-96 -mt-28">
        <img src={image3} className="h-full w-full shadow-xl shadow-gray-400" />
      </div>
    </div>
  );
}

export default App;
