import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderView from './components/HeaderView/HeaderView';
import FooterView from './components/FooterView/FooterView';
import PersonalDetailsPage from './pages/PersonalDetailsPage/PersonalDetailsPage';
import EducationPage from './pages/EducationPage/EducationPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import WorkingHistoryPage from './pages/WorkingHistoryPage/WorkingHistoryPage';
function App() {
  return (
    <Router>
      <HeaderView/>
      <PersonalDetailsPage/>
      <EducationPage/>
      <SkillsPage/>
      <WorkingHistoryPage/>
      <FooterView/>
    </Router>

);
}

export default App;