import { ToastContainer } from "react-toastify";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <ToastContainer limit={4} />
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppRouter />
      </div>
    </>
  );
}

export default App;
