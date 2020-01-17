import React from 'react';
import { Parallax, Background } from 'react-parallax';

var intro = {
    fontSize: '75px',
    display: 'inline-block',
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
            <svg width="1000" height="700">
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
            blur={{ min: -15, max: 15 }}
            bgImage={require('./1.jpeg')}
            strength={600}
            style={{zIndex: '-10', position: 'absolute'}}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        marginLeft: '100px',
                        background: `rgba(0, 0, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '0%',
                        width: percentage * 100,
                        height: percentage * 20,
                    }}
                />
            )}
        >
            <svg height="80" width="300">
  <g fill="none" stroke="black">
    <path strokeWidth="4" d="M5 40 l215 0" />
  </g>
</svg>
            <div style={{ height: '50px' }} />
            <h1 >Villa A</h1>
            <p>Casablanca, Morocco</p>

            <img src={require('./2.jpeg')} style={{ height:'400px', width:'400px', marginLeft: '500px', marginBottom: '-300px', position: 'absolute'}}  alt={'1'}/>    
            <img src={require('./a.jpg')} style={{ height:'400px', width:'400px', marginRight: '400px'}}  alt={'1'}/> 
            

        </Parallax>

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./3.jpg')}
            bgImageAlt="the dog"
            strength={500}
        >
            <div style={{ height: '100px' }} />
            <h1>Villa B</h1>
            <img src={require('./a.jpg')} style={{ height:'400px', width:'400px', marginLeft: '500px', marginBottom: '-300px', zIndex:10}}  alt={'1'}/>     
            <img src={require('./2.jpeg')} style={{ height:'400px', width:'400px', marginRight: '400px'}}  alt={'1'}/>  
        </Parallax>

        {<Parallax strength={500}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src={require('./1.jpeg')}  alt={'1'}/> 
            </Background>

            <img src={require('./2.jpeg')} style={{ height:'400px', width:'400px', marginLeft: '500px', marginBottom: '-200px'}}  alt={'1'}/>     

        </Parallax>
        }

     </div> 
);
export default HomeParallax;