import React from 'react';
import './App.css';
import SliderComponent from './components/Slider/Slider'
import Card from './components/card/card'
import Addsanimate from "./components/addsAnimate/index";
import CostNotice from "./components/costCalculate_notice";
import ScrolUp from "./components/scrolUpBtn/ScrolUp"
import NewsTips from './components/puschesTheme/mainComponents';
import PurchaseThisTheme from './components/puschesTheme/thirdComponent';
import WhyShoudChose from './components/fourthComponent/fourthComponent';
import QuickQuote from './components/quickquote/QuickQuote';
import Testimonials from './components/testimonials/Testimonials';
import Footer from "./components/footer/footer"
import Header from './components/header/Header';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (


    <BrowserRouter>
      <div>
        <Route path="/a" component={Header} />
        <Header />
        <SliderComponent />
        <Card />
        <Addsanimate />
        <ScrolUp />
        <CostNotice />
        <WhyShoudChose />
        <QuickQuote />
        <Testimonials />
        <NewsTips />
        <PurchaseThisTheme />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
