import React from 'react'
import { Route, Routes } from 'react-router'
import About from './Quran/section/About'
import Navigation from './Quran/section/Navigation'
import Home from './Quran/section/Home'
import Translation from './Quran/section/Translation'
import Preachers from './Quran/section/Preachers'
import Blog from './Quran/section/Blog'
import Footer from './Quran/section/Footer'
import Download from './Quran/section/Download'
import { GlobalStyles } from './styles/GlobalStyles'
import Stats from './Quran/Stats'
import WholeSurah from './Quran/WholeSurah'
import Surah from './Quran/Surah'
import ScrollUp from './Quran/ScrollUp'
import Juz from './Quran/Juz'


export const AppQuranRoute = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path='/' element={<AppQuran />} />
        <Route path='wholesurah/:number' element={<WholeSurah />} />
        <Route path='surah' element={<Surah />} />
        <Route path='juz' element={<Juz />} />
        <Route path='*' element={<AppQuran />} />
    </Routes>
    </>
  )
}
const AppQuran = () => {
  return (
    <>
      <Navigation />
      <Home />
      <Stats />
      <About />
      <Translation />
      <Preachers />
      <Blog />
      <Download />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default AppQuran