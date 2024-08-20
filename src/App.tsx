import { QuestionContextProvider } from 'context/QuestionContext';
import MainPage from 'pages/Main';

function App() {
  return (
    <QuestionContextProvider>
      <MainPage />
    </QuestionContextProvider>
  );
}

export default App;
