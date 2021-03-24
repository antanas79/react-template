import React, { RefCallback, useEffect, useState } from 'react';
import CustomCard from './components/custom-card/custom-card';
import HorizontalLinearStepper from './components/horizontal-line-stepper/HorizontalLinearStepper';
import logo from './logo.svg';
import './App.css';
import { useSwipeable } from "react-swipeable";
import SwipeableViews from "react-swipeable-views";





function App() {

  // const { ref } = useSwipeable({ onSwiped: () =>   console.log('swiped') }) as { ref: RefCallback<Document> };

  // useEffect(() => {
  //   ref(document);
  // });
  
  const [showFirst, setShowFirst] = useState(false);
  const handlers = useSwipeable({ onSwipedRight: () => setShowFirst(true), onSwipedLeft: () => setShowFirst(false), trackMouse: true })

  // setup ref for your usage
  const myRef = React.useRef();

  const refPassthrough = (el: any) => {
    // call useSwipeable ref prop with el
    handlers.ref(el);

    // set myRef el so you can access it yourself
    myRef.current = el;
  }
  

  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };


  return (
    <div className="App">
      <div className="cards" {...handlers} ref={refPassthrough}>
        <div className={`one ${showFirst ? "one-showfirst" : ""}`}>
            <CustomCard/>
          <CustomCard/>
          <CustomCard/>
        </div>
     

        <div className="two">
        <CustomCard/>
        </div>
      </div>
      
      <div className="stepper">
        <HorizontalLinearStepper/>
      </div>


      <SwipeableViews>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CustomCard/>
          <CustomCard/>
          <CustomCard/>
        </div>
     

        <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <CustomCard/>
        </div>
  
    </SwipeableViews>


    </div>
  );
}

export default App;




