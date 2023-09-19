import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headderImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "el Futuro de la tecnologia" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 300); 
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
             tick();
        }, delta);

         return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{` Descubre `} <span className="wrap" >{text}</span></h1>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
                          <iframe
                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                            src="https://www.youtube.com/watch?v=IXWEQHCKR20"
                            title="Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <button onClick={() => console.log('connect')}>Let's Connect  <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headderImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}