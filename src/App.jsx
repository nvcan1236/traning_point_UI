import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ResultPage from "./pages/ResultPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlankLayout from "./components/layout/BlankLayout";
import { useAuth } from "./contexts/authContext";
import { useEffect } from "react";

function App() {
  const { user, setUser } = useAuth();
  const api_endpoint = "http://localhost:8080/TrainingPointSystem/api";
  const navigator = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("USER_TOKEN");
    if (token) {
      fetch(`${api_endpoint}/user/current`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((user) => setUser(user));
    }
    else {
      // navigator("/login")
    }
  }, []);

  return (
    <Routes>
      {user.is_student && (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="post" element={<PostPage />}></Route>
          <Route path="activities" element={<ActivitiesPage />}></Route>
          <Route path="result" element={<ResultPage />}></Route>
        </Route>
      )}

      {user.is_assistant && (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="post" element={<PostPage />}></Route>
          <Route path="activities" element={<ActivitiesPage />}></Route>
        </Route>
      )}

      <Route path="/" element={<BlankLayout />}>
        <Route index path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
      </Route>

      <Route path="*" element={<h1>NOT FOUND</h1>}></Route>
    </Routes>
  );
}

export default App;
