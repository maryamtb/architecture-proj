import React from 'react';
import { Parallax } from 'react-parallax';

var intro = {
    fontSize: '75px',
    // display: 'inline-block',
    WebkitTransition: 'all',
    msTransition: 'all',
    fontFamily: 'Shadows Into Light',
    overflow: 'auto',
}

var subintro = {
    fontSize: '27px',
    fontWeight: 'light',
}

const HomeParallax = () => (
    <div>
            <svg width="1000" height="650">
                <g transform="translate(30,20)">
                    <text id="TextElement" x="50" y="50" style={intro}>Ahmed
                    <animateMotion path="M -100 -10 L 465 290" dur="1s" fill="freeze" />
                    </text>
                </g>
                <g transform="translate(100,180)">
                    <text id="TextElement" x="50" y="50" style={intro}>Lemseffer
                    <animateMotion path="M 0 0 L 105 50" dur="1.1s" fill="freeze" />
                    </text>
                </g>
                <g transform="translate(380,380)">
                    <text id="TextElement" x="50" y="50" style={subintro}> ARCHITECTE
                    <animateMotion path="M 0 0 L 0 0" dur="1.1s" fill="freeze" />
                    </text>
                </g>
            </svg>
            <Parallax
            blur={{ min: -10, max: 15 }}
            bgImage={require('../whitebox.png')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        marginLeft: '10px',
                        background: `rgb(247,233,202, ${percentage * 1})`,
                        left: '0%',
                        top: '50%',
                        width: percentage * 900,
                        height: percentage * 390,
                    }}
                />
            )}
        >
            <div style={{ height: '90px', marginTop: '20px', position: 'absolute' }} />
            <h1 style={{ marginRight:'900px' }}>Villa A</h1>
            <p style={{ marginRight:'900px'}}>Madrid, Spain</p>
            <img src={require('./2.jpeg')} style={{ height:'460px', width:'460px', marginRight: '500px'}}  alt={'1'}/>  
        </Parallax>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./black.jpg')}
            strength={100}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        marginLeft: '10px',
                        background: `rgba(221,221,221, ${percentage * 1.8})`,
                        left: '10%',
                        top: '40%',
                        right: '20%',
                        width: percentage * 2000,
                        height: percentage * 300,
                    }}
                />
            )}
        >
            <svg height="10" width="900">
                <g fill="none" stroke="black">
                    <path strokeWidth="4" d="M5 40 l215 0" />
                </g>
            </svg>
            <div style={{ height: '10px', marginTop: '60px', position: 'relative', color:'white' }} />
            <h1 style={{marginTop: '10px', color:'white', marginLeft: '-750px'}}>Villa B</h1>
            <p style={{color:'white', marginLeft: '-750px'}}>Rio de Janeiro, Brazil</p>
            <img src={require('./a.jpg')} style={{ height:'650px', width:'650px', marginLeft: '250px', marginBottom: '200px'}}  alt={'1'}/> 
        </Parallax>
        <Parallax
            blur={{ min: -25, max: 5 }}
            bgImage={require('../whitebox.png')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        marginLeft: '10px',
                        background: `rgb(50,60,60, ${percentage * 1})`,
                        left: '0%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 200,
                    }}
                />
            )}
        >
            {/* <div style={{ height: '100px', marginTop: '20px', position: 'absolute' }} /> */}
            <h1 style={{ marginRight:'900px',  transform: `translate(${50}px, ${850}px)`}}>Villa C</h1>
            <p style={{ marginRight:'900px',  transform: `translate(${50}px, ${850}px)`}}>Sevilla, Spain</p>
            <img src={require('./3.jpg')} style={{ height:'900px', width:'900px', marginLeft: '400px', marginBottom: '200px'}}  alt={'1'}/>  
        </Parallax>
       
{/* 
        {<Parallax strength={500}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src={require('./black.jpg')}  alt={'1'}/> 
            </Background>

            <img src={require('./2.jpeg')} style={{ height:'400px', width:'400px', marginLeft: '500px', marginBottom: '-200px'}}  alt={'1'}/>     

        </Parallax>
        } */}

     </div> 
);
export default HomeParallax;