import { lazy, StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { UserDetailsForm, SignUp } from "./components/index";
import HomePage from "./pages/HomePage";
const App = lazy(() => import("./App"));
const UserDetailsForm = lazy(() =>
  import("./components/SignUp/UserDetailsForm")
);
const SignUp = lazy(() => import("./components/SignUp/SignUp"));

const preloadComponent = (component) => {
  component();
};

const PreloadApp = () => {
  useEffect(() => {
    preloadComponent(() => import("./pages/HomePage"));
  }, []);

  return (
    <Suspense fallback={<>Loading...</>}>
      <App />
    </Suspense>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" element={<PreloadApp />}>
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/sign-up" element={UserDetailsForm} />
      <Route path="/sign-up/avatar" element={SignUp} />
    </Suspense>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
