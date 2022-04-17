import './reset.css'
import './App.css';
import useLanguages from './hooks/useLanguage'
import useThemes from './hooks/useThemes';
import useScrollEffect from './hooks/useScrollEffect';
import CubeButton from './components/cubeButton';

function App() {
  const [texts, setLanguage] = useLanguages();
  const [ThemeProvider, setTheme, THEME] = useThemes();
  useScrollEffect('scroll-effect', 'scrolling');

  return (
    <ThemeProvider>
      <section className='fixed' id='section-header'>
        <div className='section-content'>
          <div className='scroll-effect' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* <CubeButton
              width={400}
              height={250}
              shadowSize={50}
              animationTime={200}
            /> */}
          </div>
        </div>
      </section>
      <section className='header'>
        <div className='section-content'>

        </div>
      </section>
      <section>
        <div className='section-content'>

        </div>
      </section>
      <section>
        <div className='section-content'>

        </div>
      </section>
      <section>
        <div className='section-content'>

        </div>
      </section>
      <section><div className='section-content'>

      </div>
      </section>
      <section>
        <div className='section-content'>

        </div>
      </section>
    </ThemeProvider>
  );
}

export default App;
