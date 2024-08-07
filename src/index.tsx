import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Root from "./routes/Root";
import Appbar from "./components/Appbar";
import ErrorPage from "./routes/error-page";
import SignupForm from "./routes/Auth/Signup";
import SignInPage from "./routes/Auth/SignIn";
import ProfilePage from "./components/Profile";

const router = createBrowserRouter([
  /*Start of landing*/ {
    path: "/",
    element: [<Root />],
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/whichquestion",
        element: [
          <Appbar />,
          <div
            id="whichquestion"
            style={{
              textAlign: "center",
              backgroundImage:
                "url(https://static.vecteezy.com/system/resources/previews/021/249/964/original/people-asking-questions-illustration-cartoon-character-thinking-trying-to-find-a-solution-with-question-mark-illustration-free-vector.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "no-repeat",
              height: "95vh",
              color: "darkblue",
            }}
          >
            <h1 className="display-1 p-5" style={{ color: "darkblue " }}>
              Answer or write a question:
            </h1>
            <a href="Answerques" style={{ color: "darkblue" }}>
              Answer Question:
            </a>
            <a href="Writeques" style={{ color: "darkblue" }}>
              Write Question:
            </a>
          </div>,
        ],
      },
      {
        path: "/Answerques",
        element: [
          <>
            <Appbar />
            <div
              style={{
                textAlign: "center",
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/042/894/940/non_2x/online-communication-theme-flat-illustration-vector.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
              }}
            >
              <h1>What question do you want to answer?</h1>
              <textarea> </textarea>
            </div>
          </>,
        ],
      },

      {
        path: "/Writeques",
        element: [
          <>
            <Appbar />
            <div
              style={{
                textAlign: "center",
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/042/894/940/non_2x/online-communication-theme-flat-illustration-vector.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
              }}
            >
              <h1>What question do you want to ask?</h1>
              <textarea></textarea>
            </div>
          </>,
        ],
      },

      {
        path: "/chat",
        element: [
          <>
            <Appbar />
            <div
              style={{
                textAlign: "center",
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/025/390/760/original/studying-together-club-illustration-vector.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: "95vh",
              }}
            >
              <h1>Friends:</h1>
            </div>
          </>,
        ],
      },
      {
        path: "/",
        element: [
          <>
            <Appbar />
            <div
              style={{
                textAlign: "center",
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/025/390/760/original/studying-together-club-illustration-vector.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: "95vh",
              }}
            >
              <h1
                className="display-1"
                style={{ fontSize: "100px", color: "darkblue" }}
              >
                Student Algorithm; Peer Power!
              </h1>
            </div>
          </>,
        ],
      },
      {
        path: "/LogOut",
        element: [
          <>
            <Appbar />
            <div
              style={{
                textAlign: "center",
                backgroundImage:
                  "url(https://t3.ftcdn.net/jpg/05/68/13/56/360_F_568135634_r8PaehtZ8gCaYyo3Qkqh7qAjtfznYCYt.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
              }}
            >
              <h1 style={{ color: "red" }}>
                Are you sure you want to log out?
              </h1>
              <div id="logout">
                <a href="signin" style={{ color: "darkblue" }}>
                  Yes
                </a>
                <a href="/" style={{ color: "darkblue" }}>
                  No
                </a>
              </div>
            </div>
          </>,
        ],
      },
      {
        path: "/Settings",
        element: [
          <Appbar />,
          <div>
            <h1>Settings</h1>
          </div>,
        ],
      },
      {
        path: "/Profile",
        element: [
          <Appbar />,
          <div>
            <h1>Your Profile</h1>
          </div>,
          <ProfilePage />,
        ],
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
    ],
    /*End of Landing*/
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
