// import logo from "./logo.svg";
import AppHeader from "components/features/AppHeader";
import Post from "components/features/Post";
import "./App.css";
// import { Switch, Route } from "react-router-dom";
// import Login from "Views/Login";
// import { Body } from "./style";
// import UserPage from "Views/UserPage";

function App() {
  return (
    <>
      <AppHeader />{" "}
      <Post
        postImg={"images/test.png"}
        postHeadline={"Is TrickBot Indestructible"}
        postCategory={"Vulnerabilities"}
        postCreatedOn={"2021-01-30 00:00:000"}
        postContent={
          "After a takedown attempt in 2020 by the global law enforcement, that somehow wasn't that successful, a new TrickBot version has arrived."
        }
      />
    </>
  );
}

export default App;
