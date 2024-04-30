import Header from "./Components/Header";

import Feedbacklist from "./Components/Feedbacklist";

import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AbouticonLink from "./Components/AbouticonLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const x = "FeedbackUI";
  return (
    <FeedbackProvider>
      <Router>
        <Header text={x} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats />
                  <Feedbacklist />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AbouticonLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
