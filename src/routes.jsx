import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import Assessment from './pages/Assessment';
import MentorshipCommunity from './pages/MentorshipCommunity';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Course Pages
import Python from './pages/courses/Python';
import MachineLearning from './pages/courses/MachineLearning';
import SQL from './pages/courses/SQL';
import RProgramming from './pages/courses/RProgramming';
import Statistics from './pages/courses/Statistics';
import WebDesign from './pages/courses/WebDesign';

// Course Modules
import PythonModule1 from './pages/courses/modules/python/Module1';
import MLModule1 from './pages/courses/modules/machine-learning/Module1';
import SQLModule1 from './pages/courses/modules/sql/Module1';
import RModule1 from './pages/courses/modules/r-programming/Module1';
import StatisticsModule1 from './pages/courses/modules/statistics/Module1';
import WebModule1 from './pages/courses/modules/web-design/Module1';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/mentorship-community" element={<MentorshipCommunity />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Course Routes */}
      <Route path="/courses/python" element={<Python />} />
      <Route path="/courses/machine-learning" element={<MachineLearning />} />
      <Route path="/courses/sql" element={<SQL />} />
      <Route path="/courses/r-programming" element={<RProgramming />} />
      <Route path="/courses/statistics" element={<Statistics />} />
      <Route path="/courses/web-design" element={<WebDesign />} />

      {/* Module Routes */}
      <Route path="/courses/python/module1" element={<PythonModule1 />} />
      <Route path="/courses/machine-learning/module1" element={<MLModule1 />} />
      <Route path="/courses/sql/module1" element={<SQLModule1 />} />
      <Route path="/courses/r-programming/module1" element={<RModule1 />} />
      <Route path="/courses/statistics/module1" element={<StatisticsModule1 />} />
      <Route path="/courses/web-design/module1" element={<WebModule1 />} />
    </Routes>
  );
};

export default AppRoutes; 