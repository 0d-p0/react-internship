// App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TopMenu from "./components/topMenu/TopMenu";
import AllPhotos from "./Pages/Photos/AllPhotos";

import PhotoDetails from "./Pages/Photos/PhotoDetails";

import UploadPage from "./Pages/Upload Photo/UploadPage";
import AppContext from "./App Context/AppContext";

function App() {
  return (
    <>
      <AppContext>
        <Router>
          <TopMenu />
          <Routes>
            <Route path="/" element={<Navigate to="/photos" replace />} />
            <Route exact path="/Photos" element={<AllPhotos />} />

            <Route path="/photo-details/:id" element={<PhotoDetails />} />
            <Route path="/add-photo" element={<UploadPage />} />
          </Routes>
        </Router>
      </AppContext>
    </>
  );
}

export default App;
