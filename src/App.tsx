import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import SEO from "./components/seo/SEO";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
const HomePage7 = lazy(() => import("./pages/homes/index-07"));

import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import GlobaleffectProvider from "./components/common/GlobaleffectProvider";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        // autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SEO />

      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>Something went wrong.</h2>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button
              className="btn btn-primary mt-3"
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white"
              style={{ zIndex: 1050 }}
            >
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">
                  Building something great...
                </span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage7 />} />
          </Routes>
        </Suspense>

        <ScrollTopBehaviour />
        <GlobaleffectProvider />
      </ErrorBoundary>
    </>
  );
}

export default App;
