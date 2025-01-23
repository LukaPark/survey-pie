import { Route, Routes } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';

function App() {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/survey/:surveyId'} element={<SurveyPage />}>
                    <Route path={':step'} element={<SurveyPage />} />
                </Route>
                <Route path={'/done'} element={<CompletionPage />} />
            </Routes>
        </div>
    );
}

export default App;
