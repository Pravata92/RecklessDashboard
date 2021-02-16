import './App.css';

/* Containers */
import AppContainer from './components/';
import ContentWrapper from './components/containers/ContentWrapper';

import Sidebar from './components/sidebar/';

import Topbar from './components/topbar/';

import Main from './components/main/'

import Footer from './components/footer'

function App() {
  return (
    <>
      <AppContainer>
        <Sidebar />
        <ContentWrapper>
          <Topbar />
          <Main />          	
          <Footer />
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default App;
