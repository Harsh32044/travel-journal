import Navbar from './components/Navbar'
import Experience from './components/Experience';
import data from './data';

function App() {

  const experienceMap = data.map(item => {
    
    return <Experience
      key = {item.id}
      {...item}
      />
  })
  return (
    <>
    <Navbar/>
    {experienceMap}
    <hr />
    </>
  );
}

export default App;
