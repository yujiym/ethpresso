import { useConnect } from "wagmi";
import logo from "./assets/logo.svg";
import metamask from "./assets/metamask-fox.svg";
import "./App.css";

function App() {
  // const { connect } = useConnect();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <main>
        <img src={logo} alt="EthPRESSO" className="mx-auto" width="128" />
        <p className="text-gray-700 mt-4 mb-12 text-center text-sm">
          messaging/notification
          <br />
          for evm-address
        </p>
        <button
          type="button"
          className="flex border-primary text-primary border-2 py-3 px-6 mx-1 w-full rounded-full font-title hover:bg-primary hover:text-white"
          onClick={() => {
            console.log("aa");
          }}
        >
          Signin with
          <img src={metamask} height={24} width={24} className="ml-3" />
        </button>
      </main>
    </div>
  );
}

export default App;
