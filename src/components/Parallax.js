import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
var intro = {
    fontSize: '75px',
    display: 'inline-block',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    fontFamily: 'Shadows Into Light',
    overflow: 'auto',
}

var subintro = {
    fontSize: '27px',
    fontWeight: 'light',
}

const MyComponent = () => (
    <div>
        <Parallax
            blur={10}
            // bgImage={require('../logo.png')}
            bgImageAlt="logo"
            strength={200}
        >
            <div>
            <svg width="1000" height="1000">
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
                {/* <h1 style={{margin: '0px'}}>Villa A</h1>
                <h1>Villa B</h1> */}
            </div>
            <div style={{ height: '200px', width: '150px'  }} />
        </Parallax>
        <Parallax
            bgImage={'../logo.png'}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(225, 28, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Contsdfasdfasdfent</p>
            <div>
                <h1 style={{margin: '500px'}}>Villa A</h1>
                <h1 >Villa B</h1>
            </div>
        </Parallax>
        {/* -----dynamic blur-----
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../logo.png')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '150px', width: '150px' }} />
        </Parallax> */}
 
        -----custom background element-----
        <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
        </Parallax>
 
        {/* -----renderProp: "renderLayer"-----*/}
        
    </div>
);
export default MyComponent;