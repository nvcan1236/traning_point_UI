import { Route, Routes} from 'react-router-dom'
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import ResultPage from './pages/ResultPage';
import ActivitiesPage from './pages/ActivitiesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='post' element={<PostPage/>}></Route>
          <Route path='activities' element={<ActivitiesPage/>}></Route>
          <Route path='result' element={<ResultPage/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
