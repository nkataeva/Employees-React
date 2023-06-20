import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import Layout from "./components/Layout";
import EmployeesPage from "./pages/EmployeesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="employees" element={<Layout />}>
          <Route index element={<EmployeesPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;