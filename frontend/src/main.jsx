import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import store from "./store/store";

// Lazy-loaded components
const App = lazy(() => import("./App"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const UserDetailsForm = lazy(() =>
  import("./pages/UserDetailsFormPage/UserDetailsFormPage")
);
const SignUp = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage/SettingsPage"));
const ProfileSettingsPage = lazy(() =>
  import("./pages/ProfileSettingsPage/ProfileSettingsPage")
);
const PasswordUpdatePage = lazy(() =>
  import("./pages/PasswordUpdatePage/PasswordUpdatePage")
);
const VideoUploadPage = lazy(() =>
  import("./pages/VideoUploadPage/VideoUploadPage")
);

// Error and 404 components
const ErrorPage = () => lazy(() => import("./pages/ErrorPage/ErrorPage"));

const NotFoundPage = () =>
  lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

// Router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main layout routes under App */}
      <Route element={<App />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Standalone routes outside App layout */}
      <Route path="auth">
        <Route path="sign-up" element={<UserDetailsForm />} />
        <Route path="sign-up/avatar" element={<SignUp />} />
        <Route path="sign-in" element={<LogInPage />} />
      </Route>
      <Route path="profile">
        <Route path="settings" element={<SettingsPage />}>
          <Route path="update-profile" element={<ProfileSettingsPage />} />
          <Route path="update-password" element={<PasswordUpdatePage />} />
        </Route>
      </Route>
      <Route path="video">
        <Route path="upload" element={<VideoUploadPage />} />
      </Route>

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

// Render with Suspense for lazy loading
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  </Provider>
);
