
import { ToastContainer } from "react-toastify";

function App({ children }) {
  return (
    <>
      <ToastContainer />
      <div className="h-screen">{children}</div>
    </>
  );
}

export default App;
