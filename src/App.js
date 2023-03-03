import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Hackathon } from "./components/Hackathon";

function App({ signOut, user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} signOut={signOut} />}>
          <Route index element={<Home />} />
          <Route path="/hackathon" element={<Hackathon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
