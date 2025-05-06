import { useEffect, useState } from 'react'
import './App.css'
import SplitText from './components/SplitText'
import axios from 'axios'
import he from 'he';
import MouseParticles from 'react-mouse-particles'

function App() {
  const [hello, setHello] = useState("")

  useEffect(() => {
    fetchText();
  }, [])

  const fetchText = async () => {
    const ip = await axios.get("https://api.ipify.org");
    const helloTranslated = await axios.get(`https://hellosalut.stefanbohacek.dev/?ip=${ip.data}`);
    const decoded = await he.decode(helloTranslated.data.hello);
    const text = `${decoded[0].toUpperCase()}${decoded.slice(1)}!`
    document.title = text;
    setHello(text);
  }

  return (
    <>
      <h1>
        {
          hello !== "" ? (
            <>
              <SplitText
                text={hello}
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </>
          ) : (
            <>
            </>
          )
        }
      </h1>
      <MouseParticles g={1} color={["#363636", "#404f40"]} cull="col,image-wrapper" radius="8" level="10" life="1.5"/>
    </>
  )
}

export default App
