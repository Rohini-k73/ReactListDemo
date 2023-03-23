import Ameesha from "./Ameesha";

let simpleMessage = `Hello and Welcome to Home`;

const Home = () => {
  const stuff = (
    <div>
      <div className="text-center">
        <p>{simpleMessage}</p>
      </div>
      <hr></hr>
      <Ameesha />
    </div>
  );

  return stuff;
};

export default Home;
