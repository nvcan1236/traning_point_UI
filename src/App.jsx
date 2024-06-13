/* eslint-disable no-unused-vars */
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
import DetailResult from "./pages/DetailResult";
import Profile from "./pages/Profile";
import { API } from "./configs/APIconfig";
import AssistantLayout from "./components/layout/Assistant/AssistantLayout";
import AssistantActivitiesPage from "./pages/assistant/AssistantActivitiesPage";
import AssistantDetailActivity from "./pages/assistant/AssistantDetailActivity";
import AssistantCreateActivity from "./pages/assistant/AssistantCreateActivity";
import AssistantHome from "./pages/assistant/AssistantHome";
import AssistantPost from "./pages/assistant/AssistantPost";
import AssistantAchivement from "./pages/assistant/AssistantAchivement";
import AssistantMissing from "./pages/assistant/AssistantMissing";
import AssistantStats from "./pages/assistant/AssistantStats";
import AssistantEditPostPage from "./pages/assistant/AssistantEditPostPage";
import AssistantDetailMissing from "./pages/assistant/AssistantDetailMissing";
import MissingReport from "./pages/MissingReport";

function App() {
  const { user, dispatch } = useAuth();
  const navigate = useNavigate();

  const token = localStorage.getItem("USER_TOKEN");
  const getUser = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await fetch(API.currentUser, {
        headers: {
          Authorization: token,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const user = await response.json();
      return user;
    } catch (e) {
      return null;
    }
  };

  const fetchUser = async () => {
    try {
      const user = await getUser();
      if (user) {
        dispatch({ type: "current", payload: user });
        navigate("/");
      }
      else {
        navigate("/login");
      }
    } catch (ex) {
      console.log("====================================");
      console.log(ex);
      console.log("====================================");
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <Routes>
      {user && user.role === "ROLE_STUDENT" && (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="post/*" element={<PostPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="result/overall" element={<ResultPage />} />
          <Route path="missing/*" element={<MissingReport />} />
          <Route path="result/detail" element={<DetailResult />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      )}

      {user && ["ROLE_ASSISTANT", "ROLE_ADMIN"].includes(user.role)  && (
        <Route path="/" element={<AssistantLayout />}>
          <Route index element={<AssistantHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="post" element={<AssistantPost />} />
          <Route path="post/edit/:postId" element={<AssistantEditPostPage />} />
          <Route
            path="activities"
            element={<AssistantActivitiesPage />}
          ></Route>
          <Route
            path="activities/detail/:activityId"
            element={<AssistantDetailActivity />}
          />
          <Route
            path="activities/edit/:activityId"
            element={<AssistantCreateActivity />}
          />
          <Route
            path="activities/edit/"
            element={<AssistantCreateActivity />}
          />
          

          <Route path="achivement" element={<AssistantAchivement />} />

          <Route path="missing" element={<AssistantMissing />} />

          <Route path="missing/:missingReportId" element={<AssistantDetailMissing />} />
          <Route path="missing" element={<AssistantMissing />} />

          <Route path="stats" element={<AssistantStats />} />
        </Route>
      )}

      <Route path="/" element={<BlankLayout />}>
        <Route index path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
