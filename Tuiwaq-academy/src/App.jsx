import './App.css'

import Cardss from './componet/Cardss'


import Nav from './componants/Nav'
import Sectiontwo from './componants/Sectiontwo'
import Footer from './componants/Footer'
import About from './componants/About'


function App() {

  return (
    <>

    <div className="cards-container">

   <Cardss name="برنامج" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II "  place="الرياض" time="اسبوع واحد" start="يبدأ في 11\26\2023" btn="التفاصيل" ></Cardss>
   <Cardss name="برنامج" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II "  place="الرياض" time="اسبوع واحد" start="يبدأ في 11\26\2023" btn="التفاصيل" ></Cardss> <Cardss name="برنامج" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II "  place="الرياض" time="اسبوع واحد" start="يبدأ في 11\26\2023" btn="التفاصيل" ></Cardss> <Cardss name="معسكر" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II "  place="الرياض" time="اسبوع واحد" start="يبدأ في 11\26\2023" btn="التفاصييل" ></Cardss> <Cardss name="معسكر" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II "  place="الرياض" time="اسبوع واحد" start="يبدأ في 11\26\2023" btn="التفاصييل" ></Cardss>
   <Cardss name="مغلق" title="تهيئة المجموعات الإنتاجية باستخدام Red Hat OpenShift II "  place="الرياض" time="اسبوع واحد" start="يبدأ في 11\26\2023" btn="مغلق" ></Cardss>
   </div>
    </>
    

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
