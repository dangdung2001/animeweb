import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./layout";
import { publicRouters } from "./router";
import { AuthProvider } from "~/context/AuthContext";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          {publicRouters.map((routePublic , index) => {
            let Layout = Mainlayout;
            // logic chia layout , routes
            return (
              <Route key={index}
                path={routePublic.path}
                element={
                  <Layout movieListsTop={routePublic.movieListsTop}>
                    <routePublic.component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
