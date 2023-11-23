import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componants/Nav'
import Sectiontwo from './componants/Sectiontwo'
import Footer from './componants/Footer'
import About from './componants/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='div-row'>
    <Nav src="./assets/Tuiwaq-academy/src/assets/tuiawq-removebg-preview.png" main="الرئيسية" bootcamps="المعسكرات والبرامج" about="حول الأكاديمية" academies="الأكاديميات التابعة" test_center="مركز الإختبارات" signin="
تسجيل الدخول" />
  </div>
  
  <div>
    <Sectiontwo young="الناشئين" olders="الكبار" bootcamps_programs="المعسكرات والبرامج" />
  </div>

  <div className='diiv-row'>
    <Footer trainee="شارك كمتدرب" academy="حول الأكاديمية" condition="الشروط والسياسه" privacy="سياسة الخصوصية" twitter="@TuwaiqAcademy" h1="جميع الحقوق محفوظة لأكاديمية طويق 2023"/>
  </div>
  <About signin= "خطوات التسجيل"/>
    </>

  )
}

export default App
