import { createRoot } from "react-dom/client";
import { NavBar, VehicleSearchBtn, VehicleSearchModal } from "./components";

function App() {
  return (
    <>
      <NavBar type="analytics" /> 
      <VehicleSearchModal />
    </>
  );
}

const root = createRoot(document.getElementById("root") as Element);
root.render(<App />);
