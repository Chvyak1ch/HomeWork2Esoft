import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import foto from '/chel.svg'
import './App.css'
import { BigCard } from './components/bigCardComponent.jsx'
import { SmallCardСompetence } from './components/smallCardComponent.jsx'



function App() {
  return (
    <>
      <div>
         <div className='someclass'>          
            
            <BigCard 
            class="bigcard" 
            src={foto} 
            className='myfoto'
            alt="my"
            h2="Черный Константин Викторович"/>



            <SmallCardСompetence 
            class="smallcard"
            h2="моя компетенция №1"
            p="знание html и css"/>

            <SmallCardСompetence 
            class="smallcard"
            h2="моя компетенция №2"
            p="знание js"/>

            <SmallCardСompetence 
            class="smallcard"
            h2="моя компетенция №3"
            p="немного работал с БД"/>

            <SmallCardСompetence 
            class="smallcard"
            h2="моя компетенция №4"
            p="работал с PHP и Python"/>



            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="ajax"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="json"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="jquery"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="WebSocket"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="postgresql"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="PHP"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="MobX"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="Webpack"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="Docker"/>

            <SmallCardСompetence 
            class="smallcardtech"
            h2="технологии которые хочу изучить"
            p="Back-End Web"/>
    
        </div>            
      </div>
    </>
  );
};

export default App
