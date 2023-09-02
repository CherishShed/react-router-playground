import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
