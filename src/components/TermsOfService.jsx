"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
export function TermsOfService({openTermsOfServiceModal,setOpenTermsOfServiceModal}) {
  return ( 
    <>
     <Modal className="bg-[#07152d] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
       dismissible show={openTermsOfServiceModal} onClose={() => { setOpenTermsOfServiceModal(false) }}>
  <Modal.Header className="bg-[#000114] border-b-[#00F560]"> <p className="text-[#00F560]">Terms of Service</p> </Modal.Header>
  <Modal.Body className="bg-[#000114] border-b-[#00F560]  border-t-[#00F560]">
    <div className="space-y-6 text-gray-300 ">
      <h3 className="text-xl text-[#00F560] font-semibold">1. مقدمة</h3>
      <p>
        مرحبًا بك في استثمارات، المنصة الرقمية التي تتيح لرواد الأعمال التواصل مع المستثمرين، الشركات الداعمة، وحاضنات الأعمال.
        نحن نهدف إلى تسهيل عملية البحث عن التمويل والاستثمار من خلال تقديم بيئة موثوقة وشفافة تربط بين الأطراف المختلفة في عالم ريادة الأعمال.
        باستخدام هذا الموقع، فإنك توافق على هذه الشروط والأحكام، لذا نرجو منك قراءتها بعناية. إذا كنت لا توافق على أي جزء منها، فلا يجوز لك استخدام خدماتنا.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">2. التعريفات</h3>
      <p>
        <strong>الموقع:</strong> يشير إلى منصة "استثمارات" وجميع الخدمات الرقمية المتاحة من خلالها.
      </p>
      <p>
        <strong>المستخدم:</strong> أي فرد أو كيان يقوم بالتسجيل في الموقع أو يستخدم أي من خدماته، سواء كان مستثمرًا، رائد أعمال، أو جهة داعمة.
      </p>
      <p>
        <strong>الخدمات:</strong> تشمل جميع الميزات المتاحة عبر الموقع، بما في ذلك عرض المشاريع، البحث عن المستثمرين، تقديم طلبات التمويل، وإجراء الاتصالات عبر المنصة.
      </p>
      <p>
        <strong>المحتوى:</strong> يشمل جميع البيانات، النصوص، الرسومات، الصور، الفيديوهات، والمواد الأخرى التي يتم عرضها على الموقع أو مشاركتها من قبل المستخدمين.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">3. إنشاء الحساب واستخدام الخدمات</h3>
      <p>
        <strong>3.1 الأهلية:</strong> يجب أن يكون المستخدم فوق سن 18 عامًا، ويتمتع بالأهلية القانونية الكاملة لإجراء التعاملات التجارية والاستثمارية.
      </p>
      <p>
        لا يجوز للمستخدمين الذين سبق حظرهم من استخدام الموقع التسجيل مرة أخرى دون إذن كتابي مسبق من الإدارة.
      </p>
      <p>
        <strong>3.2 إنشاء الحساب والمعلومات الشخصية:</strong> عند التسجيل في الموقع، يتوجب على المستخدمين تقديم معلومات دقيقة وكاملة، مثل الاسم، البريد الإلكتروني، ورقم الهاتف.
      </p>
      <p>
        يوافق المستخدم على تحديث بياناته الشخصية عند حدوث أي تغيير لضمان استمرار الخدمات بكفاءة.
      </p>
      <p>
        يتحمل المستخدم وحده مسؤولية الحفاظ على سرية بيانات تسجيل الدخول، وأي نشاط يتم على حسابه يكون على مسؤوليته الشخصية.
      </p>
      <p>
        <strong>3.3 قيود على استخدام الموقع:</strong> يحظر على المستخدمين:
      </p>
      <ul className="list-inside list-decimal">
        <li>استخدام الموقع لأي أنشطة احتيالية، غير قانونية، أو غير أخلاقية.</li>
        <li>تقديم معلومات خاطئة أو مضللة عن المشاريع أو الاستثمارات.</li>
        <li>محاولة الوصول إلى بيانات مستخدمين آخرين دون إذن.</li>
        <li>تحميل أو نشر أي محتوى ينتهك حقوق الملكية الفكرية أو يتضمن مواد مسيئة أو مضرة.</li>
      </ul>

      <h3 className="text-xl text-[#00F560] font-semibold">4. شروط استخدام المستثمرين ورواد الأعمال</h3>
      <p>
        <strong>4.1 شروط استخدام المستثمرين:</strong> يوافق المستثمرون على مراجعة المشاريع بعناية قبل اتخاذ قرارات الاستثمار.
      </p>
      <p>
        يتحمل المستثمر المسؤولية الكاملة عن قراراته الاستثمارية، ولا يضمن الموقع نجاح أي استثمار أو عائد مالي محدد.
      </p>
      <p>
        يجب أن يمتثل المستثمر لجميع القوانين واللوائح المحلية والدولية المتعلقة بالاستثمار والتمويل.
      </p>
      <p>
        <strong>4.2 شروط استخدام رواد الأعمال:</strong> يتوجب على رواد الأعمال تقديم معلومات دقيقة وشفافة عن مشاريعهم عند التسجيل.
      </p>
      <p>
        يتحمل المستخدم المسؤولية الكاملة عن دقة أي بيانات مالية أو إحصائية يتم عرضها في ملف المشروع.
      </p>
      <p>
        لا يجوز تقديم أي مشاريع غير قانونية، وهمية، أو تنتهك حقوق الغير.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">5. الملكية الفكرية وحقوق النشر</h3>
      <p>
        جميع المحتويات والمواد الموجودة على الموقع، بما في ذلك النصوص، التصميمات، الشعارات، والبرمجيات، مملوكة لموقع استثمارات أو مرخصة له، ومحميّة بموجب قوانين الملكية الفكرية.
      </p>
      <p>
        لا يجوز للمستخدمين إعادة إنتاج، توزيع، تعديل، أو استخدام أي من محتويات الموقع دون الحصول على إذن مسبق من الإدارة.
      </p>
      <p>
        يحق للموقع إزالة أي محتوى ينتهك حقوق الملكية الفكرية أو يخالف القوانين.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">6. حدود المسؤولية</h3>
      <p>
        لا يتحمل الموقع أي مسؤولية عن القرارات الاستثمارية التي يتخذها المستخدمون بناءً على المعلومات المتاحة على المنصة.
      </p>
      <p>
        لا يُقدم الموقع أي ضمانات بشأن نجاح المشاريع أو تحقيق أرباح للمستثمرين.
      </p>
      <p>
        لا يتحمل الموقع أي مسؤولية عن الخسائر الناتجة عن الاستخدام غير الصحيح للخدمات أو أي أعطال فنية أو أمنية قد تؤثر على توفر الموقع.
      </p>
      <p>
        المستخدمون مسؤولون عن حماية أجهزتهم وبياناتهم من أي تهديدات إلكترونية عند استخدام الموقع.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">7. سياسة الخصوصية وحماية البيانات</h3>
      <p>
        يلتزم الموقع بحماية خصوصية بيانات المستخدمين وعدم بيعها أو مشاركتها مع أطراف ثالثة دون موافقة المستخدم، إلا في الحالات التي يقتضيها القانون.
      </p>
      <p>
        يتم استخدام البيانات الشخصية بهدف تحسين تجربة المستخدم، تقديم خدمات مخصصة، وضمان الأمان داخل المنصة.
      </p>
      <p>
        للمزيد من التفاصيل، يُرجى الاطلاع على سياسة الخصوصية الخاصة بالموقع.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">8. التعديلات على الشروط والأحكام</h3>
      <p>
        يحق لإدارة الموقع تعديل هذه الشروط والأحكام في أي وقت، ويتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار داخل الموقع.
      </p>
      <p>
        استمرار المستخدم في استخدام الموقع بعد نشر التعديلات يُعتبر موافقة ضمنية على التحديثات الجديدة.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">9. الإنهاء والتعليق</h3>
      <p>
        يحق لإدارة الموقع تعليق أو حذف حساب أي مستخدم في حال انتهاك الشروط والأحكام أو القيام بأي أنشطة غير قانونية.
      </p>
      <p>
        يمكن للمستخدمين حذف حساباتهم من خلال الإعدادات أو طلب ذلك من فريق الدعم الفني.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">10. القانون الحاكم وحل النزاعات</h3>
      <p>
        تخضع هذه الشروط والأحكام لقوانين جمهورية مصر العربية أو أي ولاية قضائية يحددها الموقع.
      </p>
      <p>
        في حالة نشوء أي نزاع، يجب أولًا محاولة حله وديًا، وفي حال فشل ذلك، يتم اللجوء إلى التحكيم أو المحاكم المختصة لحل النزاع.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">11. التواصل والدعم</h3>
      <p>
        لأي استفسارات أو مشكلات متعلقة باستخدام الموقع، يمكنكم التواصل معنا عبر البريد الإلكتروني: [email@example.com] أو من خلال صفحة اتصل بنا على الموقع.
      </p>

      <h3 className="text-xl text-[#00F560] font-semibold">قبول الشروط</h3>
      <p>
        باستخدامك لهذا الموقع، فإنك تقر بأنك قرأت هذه الشروط والأحكام وفهمتها ووافقت عليها بالكامل. إذا كنت لا توافق على أي من البنود الواردة في هذه الوثيقة، يُرجى التوقف عن استخدام الموقع فورًا.
      </p>
    </div>
  </Modal.Body>
  <Modal.Footer className="bg-[#000114]  border-t-[#00F560]">

  </Modal.Footer>
</Modal>


    </>
  );
}
