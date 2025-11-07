// --- DOM Elements ---
const toggleButton = document.querySelector('.navbar__toggle');
const navLinks = document.querySelector('.navbar__links');
const allPageSections = document.querySelectorAll('.page-section');
const navLinksAnchors = document.querySelectorAll('.navbar__links a');
const langButtons = document.querySelectorAll('.lang-btn');
const topBannerText = document.querySelector('.top-banner__text');
const navbarCta = document.querySelector('.navbar__cta');
const heroTag = document.querySelector('.hero__tag');
const heroTitle = document.querySelector('.hero__content h1');
const heroSubtitle = document.querySelector('.hero__content p');
const exploreProgramsBtn = document.querySelector('[data-key="explore_programs"]');
const learnAboutUsBtn = document.querySelector('[data-key="learn_about_us"]');

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const carouselTrack = document.querySelector('.testimonials__carousel .carousel__track');
const carouselControls = document.querySelectorAll('.testimonials__carousel .carousel__control');
const scrollTopBtn = document.querySelector('.scroll-top');
const bookingForm = document.querySelector('.contact-form'); // Reused class
const formErrors = document.querySelectorAll('.form__error');
const formSuccessMessage = document.querySelector('.form__success');
const yearSpan = document.getElementById('year');

let currentLang = 'ar'; // Default language

// --- Translations Data ---
const translations = {
  ar: {
    // General
    spring_offer: '✨ خصم الربيع: وفّر 15٪ على الرحلات النيلية لمدة محدودة!',
    book_now_cta: 'احجز الآن',
    explore_programs: 'استكشف برامجنا',
    learn_about_us: 'تعرّف علينا',
    request_details_btn: 'اطلب التفاصيل',
    book_now_btn: 'احجز الآن',
    schedule_btn: 'حدد موعدًا',
    // Navigation
    nav_home: 'الرئيسية',
    nav_packages: 'الرحلات',
    nav_blog: 'مدونة',
    nav_one_day_trips: 'رحلات اليوم الواحد',
    nav_about_us: 'من نحن',
    nav_contact_us: 'اتصل بنا',
    // Hero Section
    hero_tag: 'رحلات سياحية أصيلة في أسوان',
    hero_title: 'اكتشف سحر النيل والهوية النوبية مع Ki Nani Travel',
    hero_subtitle: 'نأخذك في رحلة استثنائية عبر معابد فيلة وألوان النوبة وأسواق أسوان، مع برامج مصممة خصيصًا لتلائم أسلوب حياتك واهتماماتك.',
    // Ki Nani Story
    story_title: 'مغامرات كي ناني من أسوان',
    story_p1: 'في مدينة أسوان الدافئة والذهبية بجنوب مصر، عاش صبي فضولي ومغامر يُدعى كي ناني. بعينين مليئتين بالعجب وقلب ينبض بالاكتشاف، لم يكن كي ناني مثل معظم الأطفال في عمره. بينما كان الآخرون يلعبون كرة القدم في الشوارع أو يسبحون في النيل، كان كي ناني يقضي وقته يحلم بمصر القديمة – بالفراعنة الأقوياء، والمقابر المخفية، والمعابد الشاهقة المنحوتة في الحجر.',
    story_p2: 'الشيء المفضل لكي ناني في العالم كان السفر عبر مصر، وكان لديه شغف خاص بزيارة المتاحف. سواء كان المتحف المصري الكبير في القاهرة أو المتاحف الأصغر والأقل شهرة في مدن مثل الأقصر والإسكندرية، كان كي ناني يتجول في القاعات وعيناه متسعتان، يحدق في التماثيل القديمة والأقنعة الذهبية، ويقرأ كل لافتة يجدها. كان يتخيل نفسه عالم آثار شاب يكتشف أسرارًا مدفونة تحت الرمال.',
    story_p3: 'لكن ما أحبه كي ناني بقدر المتاحف كانت الرحلات البحرية على طول النيل. من أسوان إلى الأقصر، أحب الوقوف على سطح المركب، ومشاهدة أشجار النخيل وهي تمر، والمياه تتلألأ تحت الشمس. كان يجلس ومفكرة في يديه، يرسم المعابد وهي تظهر في الأفق – كوم أمبو، إدفو، ومعبد الكرنك العظيم.',
    story_p4: 'محطته المفضلة على الإطلاق كانت دائمًا وادي الملوك، حيث كان يتجول في المقابر القديمة المنحوتة عميقًا في الأرض. كان يغمض عينيه ويحاول تخيل الفراعنة المدفونين هناك، والطقوس، والكنوز، والقصص التي يبلغ عمرها آلاف السنين.',
    story_p5: 'لم يكن كي ناني مجرد مسافر، بل كان راوي قصص أيضًا. بعد كل رحلة، كان يعود إلى أسوان ويشارك ما تعلمه مع أصدقائه، ويخبرهم عن حتشبسوت، رمسيس الثاني، وتوت عنخ آمون وكأنهم أصدقاء قدامى. حتى أنه صنع "متحفه" الخاص في غرفة نومه، مليئًا بالبطاقات البريدية، والتماثيل الصغيرة، والرسومات من جميع الأماكن التي زارها.',
    story_p6: 'على الرغم من صغر سنه، كان لكي ناني حلم كبير – أن يصبح يومًا ما عالم مصريات مشهور عالميًا ويُظهر للناس من جميع أنحاء العالم مدى جمال وسحر بلده حقًا.',
    story_p7: 'وهكذا، في كل مرة يتدفق فيها النيل بجوار منزله، كان كي ناني ينظر ويتجول ويبتسم، عالمًا أن مغامرة أخرى تنتظره دائمًا في الأفق.',
    // What We Do
    what_we_do_title: 'ماذا نقدم؟',
    what_we_do_intro: 'نقدم مجموعة واسعة من الخدمات السياحية، منها:',
    what_we_do_li1: '<strong>مسارات رحلات مخصصة:</strong> خطط سفر مصممة بناءً على اهتماماتك وتفضيلاتك.',
    what_we_do_li2: '<strong>جولات حصرية:</strong> جولات جماعية صغيرة وخاصة لوجهات فريدة.',
    what_we_do_li3: '<strong>موارد السفر:</strong> أدلة مفيدة، نصائح، وتوصيات لضمان رحلة سلسة وممتعة.',
    what_we_do_li4: '<strong>خبرة محلية:</strong> معرفة متعمقة بأفضل الجواهر الخفية، الثقافة المحلية، والأنشطة التي يجب تجربتها.',
    // Why Ki Nani
    why_ki_nani_title: 'لماذا تختار Ki Nani Travel؟',
    why_ki_nani_intro: 'في Ki Nani Travel، نؤمن بأن كل رحلة يجب أن تكون فريدة ولا تُنسى مثل المسافر نفسه. إليك الأسباب التي تجعلك تثق بنا كدليل لك في مغامرتك القادمة:',
    why_ki_nani_li1: '<strong>تجارب سفر مخصصة:</strong> نحن نتفهم أن كل مسافر مختلف، ولهذا نقدم خطط سفر مخصصة لتناسب تفضيلاتك. سواء كنت تبحث عن مغامرة مليئة بالإثارة، أو عطلة استرخاء، أو تجربة ثقافية عميقة، فإن Ki Nani Travel تُصمم مسارات رحلات شخصية تعكس أسلوبك، ميزانيتك، واهتماماتك.',
    why_ki_nani_li2: '<strong>خبرة محلية متعمقة:</strong> فريقنا من خبراء السفر لديهم معرفة عميقة بالوجهات التي نقدمها. مع سنوات من الخبرة والرؤى المباشرة، نقدم توصيات أصيلة تتجاوز مناطق الجذب السياحي التقليدية. نساعدك على اكتشاف الجواهر الخفية والمفضلة لدى السكان المحليين التي ستجعل رحلتك لا تُنسى حقًا.',
    why_ki_nani_li3: '<strong>تخطيط سلس للرحلة:</strong> قد يكون تخطيط الرحلة أمرًا مرهقًا، ولكن مع Ki Nani Travel، نجعل الأمر سهلاً. من حجز الرحلات الجوية والإقامة إلى تنظيم الجولات والأنشطة، نحن نتولى جميع التفاصيل. هدفنا هو تزويدك بتجربة خالية من المتاعب، حتى تتمكن من التركيز على الاستمتاع بإجازتك.',
    why_ki_nani_li4: '<strong>خدمة تتمحور حول العميل:</strong> رضاك هو أولويتنا القصوى. نحن نفخر بتقديم خدمة عملاء استثنائية، متاحة في كل خطوة من رحلتك. سواء كنت بحاجة إلى مساعدة في الحجز، أو نصيحة بشأن مسار رحلتك، أو دعم أثناء رحلتك، فإن فريقنا الودود والمحترف هنا للمساعدة.',
    why_ki_nani_li5: '<strong>أسعار تنافسية:</strong> نؤمن بأن تجارب السفر الرائعة يجب أن تكون في متناول الجميع. تسمح لنا علاقاتنا القوية مع الشركاء والموردين المحليين بتقديم أسعار تنافسية على الإقامات والجولات والأنشطة. نضمن لك الحصول على أفضل قيمة دون المساومة على الجودة.',
    why_ki_nani_li6: '<strong>سفر مستدام ومسؤول:</strong> في Ki Nani Travel، نلتزم بتعزيز السياحة المسؤولة والمستدامة. نعمل مع المجتمعات المحلية والمشغلين الصديقين للبيئة لضمان أن يكون لرحلاتنا تأثير إيجابي على كل من البيئة والأشخاص في الوجهات التي نزورها. عندما تسافر معنا، يمكنك أن تشعر بالرضا وأنت تعلم أن رحلتك تدعم الممارسات المستدامة.',
    why_ki_nani_li7: '<strong>دعم على مدار الساعة طوال أيام الأسبوع:</strong> راحة بالك تهمنا. إذا حدث أي شيء غير متوقع أثناء رحلتك، يمكنك الاعتماد علينا. فريقنا متاح على مدار الساعة للمساعدة في أي مشكلات أو تغييرات في مسار رحلتك، مما يضمن تجربة سفر سلسة وخالية من التوتر.',
    why_ki_nani_li8: '<strong>شراكات وعروض حصرية:</strong> لقد بنينا علاقات قوية مع مزودي خدمات السفر الموثوق بهم، مما يعني صفقات حصرية والوصول إلى عروض خاصة لن تجدها في أي مكان آخر. من الفنادق الفاخرة إلى الرحلات الفريدة، نقدم لك أفضل الخيارات بأفضل الأسعار.',
    why_ki_nani_li9: '<strong>شهادات العملاء ورضاهم:</strong> لا تأخذ كلامنا فقط — استمع من عملائنا السعداء! يمدح مسافرونا باستمرار اهتمامنا بالتفاصيل، والخدمة الشخصية، والتجارب التي لا تُنسى التي نقدمها. نحن فخورون بامتلاك سمعة قوية في خلق ذكريات إيجابية ودائمة لعملائنا.',
    why_ki_nani_li10: '<strong>مغامرتك تبدأ هنا:</strong> سواء كنت تحلم بالاسترخاء على الشواطئ البكر، أو استكشاف المدن النابضة بالحياة، أو الرحلات عبر الغابات المورقة، فإن Ki Nani Travel هنا لتحويل أحلامك في السفر إلى حقيقة. دعنا نكون شريكك الموثوق به في استكشاف العالم.',
    why_ki_nani_cta: 'ابدأ رحلتك مع Ki Nani Travel اليوم — حيث تبدأ مغامرتك.',
    // Experiences
    experiences_title: 'تجارب متنوعة لكل شغف',
    experiences_subtitle: 'اختر نوع الرحلة الذي يلائمك، أو دَع فريق التخطيط لدينا يصمم تجربة خاصة بك.',
    tab_cultural: 'ثقافية',
    tab_relax: 'استجمام',
    tab_adventure: 'مغامرة',
    tab_corporate: 'شركات',
    cultural_h3: 'رحلات ثقافية',
    cultural_li1: 'زيارة معابد فيلة وكوم أمبو مع مرشدين معتمدين.',
    cultural_li2: 'جلسات حكي موسيقية مع فناني الطمبورة.',
    cultural_li3: 'جولات في الأسواق الشعبية وتذوق أشهى الأطعمة المحلية.',
    relax_h3: 'برامج الاستجمام',
    relax_li1: 'إقامة في منتجعات نيلية مع جلسات يوجا مسائية.',
    relax_li2: 'رحلات فلّوكة عند الغروب مع وجبات نباتية صحية.',
    relax_li3: 'علاجات سبا باستخدام مكونات طبيعية من جنوب مصر.',
    adventure_h3: 'مغامرات',
    adventure_li1: 'التخييم في صحراء العتمور مع ورش تصوير النجوم.',
    adventure_li2: 'جولات الدراجات حول القرى النوبية.',
    adventure_li3: 'التجديف عبر الجزر النيلية الصغيرة.',
    corporate_h3: 'فعاليات الشركات',
    corporate_li1: 'برامج Team Building بتصاميم مستوحاة من الثقافة النوبية.',
    corporate_li2: 'مؤتمرات صغيرة في أماكن تاريخية مهيبة.',
    corporate_li3: 'رحلات تحفيزية ومدمجة بين العمل والترفيه.',
    // Stats
    stats_years_num: '+12',
    stats_years_label: 'عامًا من الخبرة',
    stats_satisfaction_num: '96%',
    stats_satisfaction_label: 'رضا العملاء',
    stats_programs_num: '45',
    stats_programs_label: 'برنامجًا متنوعًا',
    stats_support_num: '24/7',
    stats_support_label: 'دعم العملاء',
    // Testimonials
    testimonials_title: 'آراء أحبائنا',
    testimonial1_name: 'ليلى – جدة، السعودية',
    testimonial1_text: '“تشعرك الرحلة معهم أنك بين عائلتك. مناظر النيل عند الغروب لا تُنسى، والأنشطة كانت منظمة بدقة.”',
    testimonial2_name: 'مايكل – لندن، المملكة المتحدة',
    testimonial2_text: '“خدمة استثنائية وتفاصيل ثقافية غنية. لقد تعلمنا الكثير عن النوبة وازدادت رغبتنا في العودة مجددًا.”',
    testimonial3_name: 'سامي – القاهرة، مصر',
    testimonial3_text: '“أقوى رحلة عمل لشركتنا. استطاعوا جعل فريقنا أقرب لبعضه من خلال الأنشطة التفاعلية الرائعة.”',
    // Packages Page
    packages_page_title: 'برامجنا السياحية',
    packages_page_subtitle: 'استكشف رحلاتنا المصممة بعناية لتناسب جميع الأذواق والميزانيات.',
    package1_title: 'رحلة يومين: عبق النوبة',
    package1_tag: 'الأكثر مبيعًا',
    package1_li1: 'إقامة في بيت نوبي تقليدي.',
    package1_li2: 'جولة أسواق وأساطير محلية.',
    package1_li3: 'سهرة موسيقية على ضفاف النيل.',
    package1_li4: 'يشمل وجبة إفطار وعشاء.',
    package1_price: 'ابتداءً من \$180 للشخص',
    package2_title: 'فلّوكة الغروب',
    package2_li1: 'رحلة خاصة من ساعتين مع مرشد.',
    package2_li2: 'مشروبات وعصائر طبيعية.',
    package2_li3: 'جلسة تصوير احترافية.',
    package2_price: 'ابتداءً من \$75 للزوجين',
    package3_title: 'رحلة الشركات الإبداعية',
    package3_li1: 'تنسيق كامل لفعاليات الشركة.',
    package3_li2: 'ورش عمل بقيادة مدربين محترفين.',
    package3_li3: 'برنامج ترفيهي ثقافي مدمج.',
    package3_price: 'حسب الطلب',
    package4_title: 'استكشاف أبو سمبل',
    package4_tag: 'تاريخ وعظمة',
    package4_li1: 'جولة يوم كامل إلى معبد أبو سمبل.',
    package4_li2: 'مرشد سياحي متخصص في المصريات.',
    package4_li3: 'وجبة غداء على ضفاف بحيرة ناصر.',
    package4_li4: 'الانتقالات من وإلى الفندق.',
    package4_price: 'ابتداءً من \$110 للشخص',
    package5_title: 'مغامرة الصحراء النوبية',
    package5_li1: 'رحلة سفاري بالسيارات الرباعية.',
    package5_li2: 'زيارة الواحات الخفية والعيون الطبيعية.',
    package5_li3: 'عشاء بدوي تحت النجوم مع عروض فلكلورية.',
    package5_price: 'ابتداءً من \$150 للشخص',
    // Blog Posts
    blog_page_title: 'مدونة Ki Nani Travel',
    blog_page_subtitle: 'مقالات ونصائح ووجهات نظر من فريقنا حول السفر المستدام واستكشاف الجواهر الخفية.',
    blog1_title: 'اكتشف الجواهر الخفية في [مصر] مع Ki Nani Travel',
    blog1_intro: 'عندما تفكر في [مصر]، قد تتخيل المواقع السياحية المعتادة. لكن هناك الكثير لهذا الموقع الجميل أكثر مما تراه العين. في هذه المدونة، نتعمق في بعض الجواهر الخفية التي لن ترغب في تفويتها!',
    blog1_point1: '<strong>[الغردقة]:</strong> وصف لمكان فريد، مثل شاطئ هادئ، سوق محلي، أو معلم غير تقليدي.',
    blog1_point2: '<strong>[الإسكندرية]:</strong> مكان سري آخر يعرفه السكان المحليون فقط، مع توصيات للأنشطة أو المطاعم.',
    blog1_point3: '<strong>[الأقصر]:</strong> موقع ثقافي أو تاريخي غالبًا ما يتجاهله السياح ولكنه غني بالمعنى.',
    blog1_conclusion: 'سافر مع Ki Nani Travel لاكتشاف هذه الجواهر الخفية واستمتع بتجربة السفر كأنك من أهل البلد!',
    blog2_title: 'كيف تسافر بشكل مستدام: نصائح لمغامرات صديقة للبيئة',
    blog2_intro: 'السفر المستدام هو أكثر من مجرد موضة؛ إنه مسؤولية. في Ki Nani Travel، نؤمن بخلق تجارب سفر صديقة للبيئة ولا تُنسى في نفس الوقت. إليك بعض النصائح العملية لمساعدتك على السفر بشكل مستدام في رحلتك القادمة.',
    blog2_point1: '<strong>اختر أماكن إقامة صديقة للبيئة:</strong> ابحث عن الفنادق والمنتجعات التي تستخدم الطاقة المتجددة، وتقلل من النفايات، وتدعم المجتمعات المحلية.',
    blog2_point2: '<strong>اختر النقل العام:</strong> استخدم الحافلات أو القطارات أو الدراجات بدلاً من سيارات الأجرة أو السيارات المستأجرة لتقليل بصمتك الكربونية.',
    blog2_conclusion: 'عندما تسافر مع Ki Nani Travel، نساعدك على اختيار خيارات واعية بيئيًا لرحلة مستدامة لا تُنسى.',
    blog3_title: 'نصائح أساسية لتجهيز حقائبك لرحلتك القادمة',
    blog3_intro: 'قد يكون التعبئة أحد أكثر الأجزاء المجهدة في التحضير لرحلة. ولكن مع النصائح الصحيحة، يمكنك التعبئة بذكاء والسفر بخفة. إليك خمس نصائح لتعبئة أمتعتك لتجعل إجازتك القادمة نسيمًا.',
    blog3_point1: '<strong>نصيحة رقم 1: لفّ الملابس بدلًا من طيها:</strong> لفّ الملابس يوفر المساحة ويقلل من التجاعيد.',
    blog3_point2: '<strong>نصيحة رقم 2: احتفظ بالأساسيات في حقيبة اليد:</strong> احزم دائمًا جواز سفرك ومحفظتك وهاتفك وأي أدوية في حقيبة يدك.',
    blog3_point3: '<strong>نصيحة رقم 3: استخدم مكعبات التعبئة:</strong> تساعد مكعبات التعبئة في تنظيم ملابسك وإكسسواراتك، مما يسهل العثور على ما تحتاجه.',
    blog3_point4: '<strong>نصيحة رقم 4: قلل من الأحذية:</strong> تشغل الأحذية مساحة كبيرة، لذا حاول الاقتصار على زوجين أو ثلاثة.',
    blog3_point5: '<strong>نصيحة رقم 5: لا تنسَ الشواحن والمحولات:</strong> تذكر أن تحزم شواحن أجهزتك، وتحقق مما إذا كنت بحاجة إلى محول طاقة لوجهتك.',
    blog3_conclusion: 'التعبئة لا يجب أن تكون مرهقة. مع هذه النصائح، ستكون مستعدًا للانطلاق في مغامرتك في وقت قصير!',
    blog4_title: 'أفضل وقت لزيارة [مصر]',
    blog4_intro: 'اختيار الوقت المناسب لزيارة وجهة يمكن أن يحدث فرقًا كبيرًا في تجربتك. في هذه المدونة، سنساعدك على تحديد أفضل وقت لزيارة [اسم الوجهة] للاستفادة القصوى من رحلتك.',
    blog4_point1: '<strong>الموسم المرتفع:</strong> أفضل وقت للطقس الجيد والمهرجانات والفعاليات الشعبية ولكن توقع المزيد من الحشود.',
    blog4_point2: '<strong>الموسم الانتقالي:</strong> توازن رائع بين الطقس الجيد وعدد أقل من السياح، بالإضافة إلى أسعار أقل.',
    blog4_point3: '<strong>الموسم المنخفض:</strong> إذا كنت تبحث عن أفضل الصفقات ولا تمانع في بعض الطقس غير المتوقع، فقد يكون الموسم المنخفض مثاليًا.',
    blog4_conclusion: 'في Ki Nani Travel، سنساعدك في التخطيط لرحلتك إلى مصر في الوقت المثالي لتجربتك المثالية!',
    // One Day Trips
    one_day_trips_title: 'رحلات اليوم الواحد',
    one_day_trips_subtitle: 'استمتع بتجارب أسوان الساحرة في رحلات قصيرة ومكثفة.',
    oneday_trip1_title: 'جولة معبد فيلة',
    oneday_trip1_li1: 'زيارة معبد فيلة والقبة السماوية.',
    oneday_trip1_li2: 'مرشد متخصص.',
    oneday_trip1_li3: 'الانتقالات ذهابًا وإيابًا.',
    oneday_trip1_price: 'ابتداءً من \$45 للشخص',
    oneday_trip2_title: 'زيارة القرية النوبية',
    oneday_trip2_li1: 'جولة في القرية النوبية الملونة.',
    oneday_trip2_li2: 'شاي كركديه ترحيبي.',
    oneday_trip2_li3: 'فرصة لشراء منتجات يدوية.',
    oneday_trip2_price: 'ابتداءً من \$30 للشخص',
    oneday_trip3_title: 'السد العالي والمسلة الناقصة',
    oneday_trip3_li1: 'استكشاف السد العالي.',
    oneday_trip3_li2: 'زيارة المسلة الناقصة.',
    oneday_trip3_li3: 'شرح تاريخي للمواقع.',
    oneday_trip3_price: 'ابتداءً من \$35 للشخص',
    // About Us Page
    about_us_page_title: 'من نحن',
    about_us_p1: 'مرحباً بكم في Ki Nani Travel – شريكك الموثوق في اكتشاف أروع الوجهات حول العالم! سواء كنت تخطط لعطلة شاطئية مريحة، رحلة مغامرة عبر الطبيعة، أو تجربة ثقافية غامرة، نحن هنا لمساعدتك في خلق ذكريات لا تُنسى.',
    about_us_what_we_do_h3: 'ماذا نقدم؟',
    about_us_what_we_do_li1: '<strong>مسارات رحلات مخصصة:</strong> خطط سفر مصممة بناءً على اهتماماتك وتفضيلاتك.',
    about_us_what_we_do_li2: '<strong>جولات حصرية:</strong> جولات جماعية صغيرة وخاصة لوجهات فريدة.',
    about_us_what_we_do_li3: '<strong>موارد السفر:</strong> أدلة مفيدة، نصائح، وتوصيات لضمان رحلة سلسة وممتعة.',
    about_us_what_we_do_li4: '<strong>خبرة محلية:</strong> معرفة متعمقة بأفضل الجواهر الخفية، الثقافة المحلية، والأنشطة التي يجب تجربتها.',
    about_us_why_choose_us_h3: 'لماذا تختارنا؟',
    about_us_why_choose_us_li1: '<strong>خدمة مخصصة:</strong> نأخذ الوقت الكافي لفهم احتياجاتك وصياغة المسار المثالي لك.',
    about_us_why_choose_us_li2: '<strong>توصيات الخبراء:</strong> يتكون فريقنا من مسافرين متحمسين وخبراء محليين يقدمون نصائح صادقة وموثوقة.',
    about_us_why_choose_us_li3: '<strong>تجارب لا تُنسى:</strong> نركز على خلق ذكريات دائمة من خلال تقديم تجارب أصيلة وغير تقليدية.',
    about_us_p2: 'سواء كنت مسافرًا منفردًا، عائلة، أو مجموعة، نحن ملتزمون بمساعدتك على تجربة العالم بطريقة ذات معنى وملهمة. في Ki Nani Travel، مغامرتك القادمة على بُعد نقرة واحدة.',
    about_us_p3: 'انضم إلينا في استكشاف العالم!',
    // Contact Us Page
    contact_us_page_title: 'اتصل بنا',
    contact_us_intro: 'يسعدنا أن نسمع منك! سواء كانت لديك أسئلة حول رحلتك القادمة، أو كنت بحاجة إلى مساعدة في التخطيط لزيارتك، أو ببساطة ترغب في مشاركة تجربتك، فإن فريقنا هنا للمساعدة.',
    contact_details_h3: 'تواصل معنا:',
    contact_email: 'kinani.official@gmail.com',
    contact_phone: '01552109003',
    customer_service_h3: 'ساعات خدمة العملاء:',
    customer_service_hours: 'طوال الأسبوع: 9:00 صباحًا - 9:00 مساءً',
    customer_service_timezone: 'بتوقيت مصر (GMT+2:00)',
    contact_form_h3: 'نموذج الاتصال',
    form_label_name: 'الاسم الكامل',
    form_label_email: 'البريد الإلكتروني',
    form_label_phone: 'رقم الهاتف',
    form_label_comment: 'التعليق',
    form_send_btn: 'إرسال',
    form_name_error: 'الرجاء كتابة اسمك الكامل.',
    form_email_error: 'الرجاء إدخال بريد إلكتروني صالح.',
    form_phone_error: 'الرجاء إدخال رقم هاتف صالح.',
    form_trip_error: 'اختر نوع الرحلة التي ترغب بها.', // From old form, might not be used here
    form_success_message: 'شكراً لك! تم إرسال طلبك بنجاح وسنتواصل معك قريبًا.',
    // Footer
    footer_brand: 'Ki Nani Travel',
    footer_slogan: 'رحلات سياحية أصيلة في أسوان والنوبة منذ 2013.',
    footer_contact_info: 'معلومات التواصل',
    contact_phone_footer: '01552109003',
    contact_email_footer: 'hello@kinanitravel.com',
    contact_address_footer: 'أسوان، مصر',
    footer_hours_title: 'ساعات العمل',
    footer_hours_details: 'السبت – الخميس: 9 صباحًا – 9 مساءً',
    footer_hours_friday: 'الجمعة: وردية صباحية فقط',
    footer_follow_us: 'تابعنا',
    quick_links_title: 'روابط سريعة',
    quick_link_about: 'من نحن',
    quick_link_story: 'قصتنا (Ki Nani)',
    quick_link_why: 'لماذا Ki Nani',
    quick_link_what_we_do: 'ماذا نقدم',
    quick_link_contact: 'اتصل بنا',
    footer_copyright_brand: 'Ki Nani Travel',
    footer_rights_reserved: 'جميع الحقوق محفوظة.',
    footer_made_with_love: 'صنع بكل حب في أسوان.',
  },
  en: {
    // General
    spring_offer: '✨ Spring Discount: Save 15% on Nile Cruises for a limited time!',
    book_now_cta: 'Book Now',
    explore_programs: 'Explore Our Programs',
    learn_about_us: 'Learn About Us',
    request_details_btn: 'Request Details',
    book_now_btn: 'Book Now',
    schedule_btn: 'Schedule an Appointment',
    // Navigation
    nav_home: 'Home',
    nav_packages: 'Packages',
    nav_blog: 'Blog',
    nav_one_day_trips: 'One Day Trips',
    nav_about_us: 'About Us',
    nav_contact_us: 'Contact Us',
    // Hero Section
    hero_tag: 'Authentic Travel Experiences in Aswan',
    hero_title: 'Discover the Magic of the Nile and Nubian Identity with Ki Nani Travel',
    hero_subtitle: 'We take you on an exceptional journey through Philae Temples, Nubian colors, and Aswan markets, with programs tailored to suit your lifestyle and interests.',
    // Ki Nani Story
    story_title: 'The Adventures of Ki Nani from Aswan',
    story_p1: 'In the warm, golden town of Aswan in southern Egypt, there lived a curious and adventurous boy named Ki Nani. With eyes full of wonder and a heart that beat for discovery, Ki Nani wasn’t like most kids his age. While others played football in the streets or swam in the Nile, Ki Nani spent his time dreaming about ancient Egypt—about mighty pharaohs, hidden tombs, and towering temples carved from stone.',
    story_p2: 'Kinani\'s favorite thing in the world was traveling across Egypt, and he had a special passion for visiting museums. Whether it was the grand Egyptian Museum in Cairo or the smaller, hidden ones in cities like Luxor and Alexandria, Kinani would wander through the halls wide-eyed, staring up at ancient statues and golden masks, reading every sign he could find. He would imagine himself as a young archaeologist uncovering secrets buried beneath the sand.',
    story_p3: 'But what Ki Nani loved just as much as museums were the cruises along the Nile. From Aswan to Luxor, he loved to stand on the deck of the boat, watching the palm trees pass by, the water glittering under the sun. He would sit with a notebook in his hands, sketching temples as they appeared in the distance—Kom Ombo, Edfu, and the grand Karnak Temple.',
    story_p4: 'His favorite stop of all was always the Valley of the Kings, where he would walk through the ancient tombs carved deep into the earth. He would close his eyes and try to imagine the pharaohs buried there, the rituals, the treasures, and the stories that were thousands of years old.',
    story_p5: 'Ki Nani wasn’t just a Traveler he was a storyteller too. After every journey, he would return to Aswan and share what he learned with his friends, telling them about Hatshepsut, Ramses II, and Tutankhamun as if they were old friends. He even made his own “museum” in his bedroom, filled with postcards, mini statues, and drawings from all the places he visited.',
    story_p6: 'Though he was young, Ki Nani had a big dream—to one day become a world-famous Egyptologist and show people from around the globe how beautiful and magical his country truly is.',
    story_p7: 'And so, every time the Nile flowed past his home, Ki Nani would look out and smile, knowing that another adventure was always just around the corner.',
    // What We Do
    what_we_do_title: 'What We Do?',
    what_we_do_intro: 'We offer a wide range of travel services, including:',
    what_we_do_li1: '<strong>Customized Itineraries:</strong> Tailored travel plans based on your interests and preferences.',
    what_we_do_li2: '<strong>Exclusive Tours:</strong> Small-group and private tours to unique destinations.',
    what_we_do_li3: '<strong>Travel Resources:</strong> Helpful guides, tips, and recommendations to ensure a smooth and enjoyable trip.',
    what_we_do_li4: '<strong>Local Expertise:</strong> In-depth knowledge of the best-hidden gems, local culture, and must-try activities.',
    // Why Ki Nani
    why_ki_nani_title: 'Why Choose Ki Nani Travel?',
    why_ki_nani_intro: 'At Ki Nani Travel, we believe that every journey should be as unique and unforgettable as the traveler. Here’s why you should trust us to be your guide on your next adventure:',
    why_ki_nani_li1: '<strong>Tailored Travel Experiences:</strong> We understand that every traveler is different, which is why we offer customized travel plans to fit your preferences. Whether you’re looking for an action-packed adventure, a relaxing getaway, or a cultural deep dive, Ki Nani Travel curates personalized itineraries that reflect your style, budget, and interests.',
    why_ki_nani_li2: '<strong>Expert Local Knowledge:</strong> Our team of travel experts has deep knowledge of the destinations we offer. With years of experience and firsthand insights, we provide authentic recommendations that go beyond the typical tourist attractions. We help you discover hidden gems and local favorites that will make your trip truly memorable.',
    why_ki_nani_li3: '<strong>Seamless Travel Planning:</strong> Planning a trip can be overwhelming, but with Ki Nani Travel, we make it easy. From booking flights and accommodations to organizing tours and activities, we handle all the details. Our goal is to provide you with a hassle-free experience, so you can focus on enjoying your vacation.',
    why_ki_nani_li4: '<strong>Customer-Centric Service:</strong> Your satisfaction is our top priority. We pride ourselves on offering exceptional customer service, available at every step of your journey. Whether you need assistance with booking, advice on your itinerary, or support during your trip, our friendly and professional team is here to help.',
    why_ki_nani_li5: '<strong>Competitive Pricing:</strong> We believe that great travel experiences should be accessible to everyone. Our strong relationships with local partners and suppliers allow us to offer competitive pricing on accommodations, tours, and activities. We ensure that you get the best value without compromising on quality.',
    why_ki_nani_li6: '<strong>Sustainable and Responsible Travel:</strong> At Ki Nani Travel, we are committed to promoting responsible and sustainable tourism. We work with local communities and eco-friendly operators to ensure that our trips have a positive impact on both the environment and the people in the destinations we visit. When you travel with us, you can feel good knowing that your journey is supporting sustainable practices.',
    why_ki_nani_li7: '<strong>24/7 Support:</strong> Your peace of mind is important to us. If anything unexpected comes up during your trip, you can count on us to be there for you. Our team is available around the clock to assist with any issues or changes to your itinerary, ensuring a smooth and stress-free travel experience.',
    why_ki_nani_li8: '<strong>Exclusive Partnerships & Offers:</strong> We’ve built strong partnerships with trusted travel providers, which means exclusive deals and access to special offers that you won’t find elsewhere. From luxury hotels to unique excursions, we bring you the best options at the best prices.',
    why_ki_nani_li9: '<strong>Client Testimonials & Satisfaction:</strong> Don’t just take our word for it — hear from our happy clients! Our travelers consistently praise our attention to detail, personalized service, and the unforgettable experiences we provide. We’re proud to have a strong reputation for creating positive, lasting memories for our customers.',
    why_ki_nani_li10: '<strong>Your Adventure Starts Here:</strong> Whether you\'re dreaming of relaxing on pristine beaches, exploring vibrant cities, or trekking through lush jungles, Ki Nani Travel is here to turn your travel dreams into reality. Let us be your trusted partner in exploring the world.',
    why_ki_nani_cta: 'Start your journey with Ki Nani Travel today — where your adventure begins.',
    // Experiences
    experiences_title: 'Diverse Experiences for Every Passion',
    experiences_subtitle: 'Choose the type of trip that suits you, or let our planning team design a special experience for you.',
    tab_cultural: 'Cultural',
    tab_relax: 'Relaxation',
    tab_adventure: 'Adventure',
    tab_corporate: 'Corporate',
    cultural_h3: 'Cultural Trips',
    cultural_li1: 'Visit Philae and Kom Ombo temples with certified guides.',
    cultural_li2: 'Storytelling sessions with Tamboura artists.',
    cultural_li3: 'Tours of local markets and tasting delicious local foods.',
    relax_h3: 'Relaxation Programs',
    relax_li1: 'Stay in Nile resorts with evening yoga sessions.',
    relax_li2: 'Sunset felucca rides with healthy vegetarian meals.',
    relax_li3: 'Spa treatments using natural ingredients from Southern Egypt.',
    adventure_h3: 'Adventures',
    adventure_li1: 'Camping in the Al-Atmour desert with star photography workshops.',
    adventure_li2: 'Bike tours around Nubian villages.',
    adventure_li3: 'Kayaking through small Nile islands.',
    corporate_h3: 'Corporate Events',
    corporate_li1: 'Team Building programs inspired by Nubian culture.',
    corporate_li2: 'Small conferences in majestic historical venues.',
    corporate_li3: 'Incentive trips combining work and entertainment.',
    // Stats
    stats_years_num: '+12',
    stats_years_label: 'Years of Experience',
    stats_satisfaction_num: '96%',
    stats_satisfaction_label: 'Customer Satisfaction',
    stats_programs_num: '45',
    stats_programs_label: 'Diverse Programs',
    stats_support_num: '24/7',
    stats_support_label: 'Customer Support',
    // Testimonials
    testimonials_title: 'What Our Beloved Clients Say',
    testimonial1_name: 'Layla – Jeddah, Saudi Arabia',
    testimonial1_text: '“Traveling with them makes you feel like you are with your family. The views of the Nile at sunset are unforgettable, and the activities were meticulously organized.”',
    testimonial2_name: 'Michael – London, UK',
    testimonial2_text: '“Exceptional service and rich cultural details. We learned so much about Nubia and our desire to return has grown.”',
    testimonial3_name: 'Samy – Cairo, Egypt',
    testimonial3_text: '“Our company’s strongest business trip. They managed to bring our team closer through wonderful interactive activities.”',
    // Packages Page
    packages_page_title: 'Our Travel Packages',
    packages_page_subtitle: 'Explore our carefully designed trips to suit all tastes and budgets.',
    package1_title: '2-Day Trip: Scent of Nubia',
    package1_tag: 'Best Seller',
    package1_li1: 'Accommodation in a traditional Nubian house.',
    package1_li2: 'Local market and legends tour.',
    package1_li3: 'Musical evening on the banks of the Nile.',
    package1_li4: 'Includes breakfast and dinner.',
    package1_price: 'Starting from \$180 per person',
    package2_title: 'Sunset Felucca Ride',
    package2_li1: '2-hour private trip with a guide.',
    package2_li2: 'Natural drinks and juices.',
    package2_li3: 'Professional photo session.',
    package2_price: 'Starting from \$75 for couples',
    package3_title: 'Creative Corporate Trip',
    package3_li1: 'Full coordination for company events.',
    package3_li2: 'Workshops led by professional trainers.',
    package3_li3: 'Integrated cultural entertainment program.',
    package3_price: 'Upon Request',
    package4_title: 'Explore Abu Simbel',
    package4_tag: 'History & Grandeur',
    package4_li1: 'Full-day tour to Abu Simbel Temple.',
    package4_li2: 'Specialized Egyptology guide.',
    package4_li3: 'Lunch on the shores of Lake Nasser.',
    package4_li4: 'Transfers to and from the hotel.',
    package4_price: 'Starting from \$110 per person',
    package5_title: 'Nubian Desert Adventure',
    package5_li1: '4x4 safari trip.',
    package5_li2: 'Visit hidden oases and natural springs.',
    package5_li3: 'Bedouin dinner under the stars with folklore shows.',
    package5_price: 'Starting from \$150 per person',
    // Blog Posts
    blog_page_title: 'Ki Nani Travel Blog',
    blog_page_subtitle: 'Articles, tips, and insights from our team on sustainable travel and exploring hidden gems.',
    blog1_title: 'Discover the Hidden Gems of [Egypt] with Ki Nani Travel',
    blog1_intro: 'When you think of [Egypt], you might imagine the usual tourist hotspots. But there’s so much more to this beautiful location than meets the eye. In this blog, we’re diving into some hidden gems you won’t want to miss!',
    blog1_point1: '<strong>[Hurghada]:</strong> Description of a unique spot, such as a quiet beach, a local market, or an off-the-beaten-path attraction.',
    blog1_point2: '<strong>[Alexandira]:</strong> Another secret spot that only locals know about, with recommendations for activities or dining.',
    blog1_point3: '<strong>[Luxor]:</strong> A cultural or historical site that\'s often overlooked by tourists but is rich in meaning.',
    blog1_conclusion: 'Travel with Ki Nani Travel to uncover these hidden gems and experience like a local!',
    blog2_title: 'How to Travel Sustainably: Tips for Eco-Friendly Adventures',
    blog2_intro: 'Sustainable travel is more than just a trend; it\'s a responsibility. At Ki Nani Travel, we believe in making travel experiences that are as kind to the planet as they are unforgettable. Here are some practical tips to help you travel sustainably on your next trip.',
    blog2_point1: '<strong>Choose Eco-Friendly Accommodations:</strong> Look for hotels and resorts that use renewable energy, reduce waste, and support local communities.',
    blog2_point2: '<strong>Opt for Public Transport:</strong> Use buses, trains, or bicycles instead of taxis or rental cars to reduce your carbon footprint.',
    blog2_conclusion: 'When you travel with Ki Nani Travel, we help you choose eco-conscious options for an unforgettable, sustainable journey.',
    blog3_title: 'Essential Packing Tips for Your Next Vacation',
    blog3_intro: 'Packing can be one of the most stressful parts of preparing for a trip. But with the right tips, you can pack smart and travel light. Here are five packing tips to make your next vacation a breeze.',
    blog3_point1: '<strong>Tip #1: Roll, Don’t Fold:</strong> Rolling clothes saves space and minimizes wrinkles.',
    blog3_point2: '<strong>Tip #2: Keep Essentials in Your Carry-On:</strong> Always pack your passport, wallet, phone, and any medications in your carry-on bag.',
    blog3_point3: '<strong>Tip #3: Use Packing Cubes:</strong> Packing cubes help you organize your clothes and accessories, making it easier to find what you need.',
    blog3_point4: '<strong>Tip #4: Limit Shoes:</strong> Shoes take up a lot of space, so try to limit yourself to two or three pairs.',
    blog3_point5: '<strong>Tip #5: Don’t Forget Chargers & Adapters:</strong> Remember to pack the chargers for your devices, and check if you need a power adapter for your destination.',
    blog3_conclusion: 'Packing doesn’t have to be stressful. With these tips, you’ll be ready to head off on your adventure in no time!',
    blog4_title: 'The Best Time to Visit [Egypt]',
    blog4_intro: 'Choosing the right time to visit a destination can make all the difference in your experience. In this blog, we’ll help you decide the best time to visit [Destination Name] to make the most of your trip.',
    blog4_point1: '<strong>High Season:</strong> The best time for good weather, festivals, and popular events but expect more crowds.',
    blog4_point2: '<strong>Shoulder Season:</strong> A great balance of good weather and fewer tourists, along with lower prices.',
    blog4_point3: '<strong>Low Season:</strong> If you’re looking for the best deals and don’t mind some unpredictable weather, the low season might be perfect.',
    blog4_conclusion: 'At Ki Nani Travel, we’ll help you plan your trip to Egypt at the perfect time for your ideal experience!',
    // One Day Trips
    one_day_trips_title: 'One Day Trips',
    one_day_trips_subtitle: 'Enjoy the charming experiences of Aswan in short and intensive trips.',
    oneday_trip1_title: 'Philae Temple Tour',
    oneday_trip1_li1: 'Visit Philae Temple and the Planetarium.',
    oneday_trip1_li2: 'Specialized guide.',
    oneday_trip1_li3: 'Round-trip transfers.',
    oneday_trip1_price: 'Starting from \$45 per person',
    oneday_trip2_title: 'Nubian Village Visit',
    oneday_trip2_li1: 'Tour of the colorful Nubian Village.',
    oneday_trip2_li2: 'Welcome Karkade tea.',
    oneday_trip2_li3: 'Opportunity to buy handmade products.',
    oneday_trip2_price: 'Starting from \$30 per person',
    oneday_trip3_title: 'High Dam and Unfinished Obelisk',
    oneday_trip3_li1: 'Explore the High Dam.',
    oneday_trip3_li2: 'Visit the Unfinished Obelisk.',
    oneday_trip3_li3: 'Historical explanation of the sites.',
    oneday_trip3_price: 'Starting from \$35 per person',
    // About Us Page
    about_us_page_title: 'About Us',
    about_us_p1: 'Welcome to Ki Nani Travel – your trusted partner in discovering the world’s most incredible destinations! Whether you\'re planning a relaxing beach getaway, an adventurous trek through nature, or an immersive cultural experience, we’re here to help you create unforgettable memories.',
    about_us_what_we_do_h3: 'What We Do?',
    about_us_what_we_do_li1: '<strong>Customized Itineraries:</strong> Tailored travel plans based on your interests and preferences.',
    about_us_what_we_do_li2: '<strong>Exclusive Tours:</strong> Small-group and private tours to unique destinations.',
    about_us_what_we_do_li3: '<strong>Travel Resources:</strong> Helpful guides, tips, and recommendations to ensure a smooth and enjoyable trip.',
    about_us_what_we_do_li4: '<strong>Local Expertise:</strong> In-depth knowledge of the best-hidden gems, local culture, and must-try activities.',
    about_us_why_choose_us_h3: 'Why Choose Us?',
    about_us_why_choose_us_li1: '<strong>Personalized Service:</strong> We take the time to understand your needs and craft the perfect itinerary just for you.',
    about_us_why_choose_us_li2: '<strong>Expert Recommendations:</strong> Our team consists of avid travelers and local experts who provide honest and reliable advice.',
    about_us_why_choose_us_li3: '<strong>Memorable Experiences:</strong> We focus on creating lasting memories by offering authentic, off-the-beaten-path experiences.',
    about_us_p2: 'Whether you\'re a solo traveler, family, or group, we\'re committed to helping you experience the world in a way that’s both meaningful and inspiring. At Ki Nani Travel, your next adventure is just a click away.',
    about_us_p3: 'Join Us in Exploring the World!',
    // Contact Us Page
    contact_us_page_title: 'Contact Us',
    contact_us_intro: 'We’d love to hear from you! Whether you have questions about your upcoming trip, need assistance planning your visit, or simply want to share your experience, our team is here to help.',
    contact_details_h3: 'Get in touch with us:',
    contact_email: 'kinani.official@gmail.com',
    contact_phone: '01552109003',
    customer_service_h3: 'Customer Service Hours:',
    customer_service_hours: 'All Week : 9:00 AM - 9:00 PM',
    customer_service_timezone: 'Egypt Standard Time GMT+2:00',
    contact_form_h3: 'Contact Form',
    form_label_name: 'Full Name',
    form_label_email: 'Email',
    form_label_phone: 'Phone Number',
    form_label_comment: 'Comment',
    form_send_btn: 'Send',
    form_name_error: 'Please enter your full name.',
    form_email_error: 'Please enter a valid email address.',
    form_phone_error: 'Please enter a valid phone number.',
    form_trip_error: 'Please select your desired trip type.',
    form_success_message: 'Thank you! Your request has been sent successfully and we will contact you shortly.',
    // Footer
    footer_brand: 'Ki Nani Travel',
    footer_slogan: 'Authentic travel experiences in Aswan and Nubia since 2013.',
    footer_contact_info: 'Contact Info',
    contact_phone_footer: '01552109003',
    contact_email_footer: 'hello@kinanitravel.com',
    contact_address_footer: 'Aswan, Egypt',
    footer_hours_title: 'Working Hours',
    footer_hours_details: 'Sat – Thu: 9 AM – 9 PM',
    footer_hours_friday: 'Fri: Morning shift only',
    footer_follow_us: 'Follow Us',
    quick_links_title: 'Quick Links',
    quick_link_about: 'About Us',
    quick_link_story: 'Our Story (Ki Nani)',
    quick_link_why: 'Why Ki Nani',
    quick_link_what_we_do: 'What We Do',
    quick_link_contact: 'Contact Us',
    footer_copyright_brand: 'Ki Nani Travel',
    footer_rights_reserved: 'All rights reserved.',
    footer_made_with_love: 'Made with love in Aswan.',
  },
  es: {
    // General
    spring_offer: '✨ Descuento de Primavera: ¡Ahorra 15% en cruceros por el Nilo por tiempo limitado!',
    book_now_cta: 'Reservar Ahora',
    explore_programs: 'Explorar Programas',
    learn_about_us: 'Conócenos',
    request_details_btn: 'Solicitar Detalles',
    book_now_btn: 'Reservar Ahora',
    schedule_btn: 'Programar Cita',
    // Navigation
    nav_home: 'Inicio',
    nav_packages: 'Paquetes',
    nav_blog: 'Blog',
    nav_one_day_trips: 'Excursiones de un día',
    nav_about_us: 'Sobre Nosotros',
    nav_contact_us: 'Contacto',
    // Hero Section
    hero_tag: 'Experiencias de viaje auténticas en Asuán',
    hero_title: 'Descubre la magia del Nilo y la identidad nubia con Ki Nani Travel',
    hero_subtitle: 'Te llevamos en un viaje excepcional a través de los templos de Filas, los colores de Nubia y los mercados de Asuán, con programas diseñados a tu medida.',
    // Ki Nani Story
    story_title: 'Las aventuras de Ki Nani desde Asuán',
    story_p1: 'En la cálida y dorada ciudad de Asuán, en el sur de Egipto, vivía un niño curioso y aventurero llamado Ki Nani. Con ojos llenos de asombro y un corazón que latía por el descubrimiento, Ki Nani no era como la mayoría de los niños de su edad. Mientras otros jugaban al fútbol en las calles o nadaban en el Nilo, Ki Nani pasaba su tiempo soñando con el antiguo Egipto: con faraones poderosos, tumbas ocultas y templos imponentes tallados en piedra.',
    story_p2: 'Lo que más le gustaba a Kinani en el mundo era viajar por Egipto, y tenía una pasión especial por visitar museos. Ya fuera el gran Museo Egipcio de El Cairo o los más pequeños y escondidos en ciudades como Luxor y Alejandría, Kinani deambularía por los pasillos con los ojos muy abiertos, mirando estatuas antiguas y máscaras doradas, leyendo cada cartel que encontraba. Se imaginaría a sí mismo como un joven arqueólogo descubriendo secretos enterrados bajo la arena.',
    story_p3: 'Pero lo que Ki Nani amaba tanto como los museos eran los cruceros por el Nilo. De Asuán a Luxor, le encantaba estar en la cubierta del barco, viendo pasar las palmeras, el agua brillando bajo el sol. Se sentaba con un cuaderno en las manos, dibujando templos a medida que aparecían en la distancia: Kom Ombo, Edfu y el gran Templo de Karnak.',
    story_p4: 'Su parada favorita de todas era siempre el Valle de los Reyes, donde caminaba por las antiguas tumbas excavadas en la tierra. Cerraba los ojos e intentaba imaginar a los faraones enterrados allí, los rituales, los tesoros y las historias de miles de años de antigüedad.',
    story_p5: 'Ki Nani no era solo un viajero, también era un narrador de historias. Después de cada viaje, regresaba a Asuán y compartía lo que había aprendido con sus amigos, contándoles sobre Hatshepsut, Ramsés II y Tutankamón como si fueran viejos amigos. Incluso hizo su propio "museo" en su dormitorio, lleno de postales, mini estatuas y dibujos de todos los lugares que visitó.',
    story_p6: 'Aunque era joven, Ki Nani tenía un gran sueño: convertirse algún día en un egiptólogo de fama mundial y mostrar a la gente de todo el mundo lo hermoso y mágico que es realmente su país.',
    story_p7: 'Y así, cada vez que el Nilo fluía junto a su casa, Ki Nani miraba y sonreía, sabiendo que otra aventura siempre estaba a la vuelta de la esquina.',
    // What We Do
    what_we_do_title: '¿Qué Ofrecemos?',
    what_we_do_intro: 'Ofrecemos una amplia gama de servicios de viaje, incluyendo:',
    what_we_do_li1: '<strong>Itinerarios Personalizados:</strong> Planes de viaje a medida basados en tus intereses y preferencias.',
    what_we_do_li2: '<strong>Tours Exclusivos:</strong> Tours privados y para grupos pequeños a destinos únicos.',
    what_we_do_li3: '<strong>Recursos de Viaje:</strong> Guías útiles, consejos y recomendaciones para asegurar un viaje tranquilo y agradable.',
    what_we_do_li4: '<strong>Expertise Local:</strong> Conocimiento profundo de las mejores joyas escondidas, la cultura local y las actividades imperdibles.',
    // Why Ki Nani
    why_ki_nani_title: '¿Por qué elegir Ki Nani Travel?',
    why_ki_nani_intro: 'En Ki Nani Travel, creemos que cada viaje debe ser tan único e inolvidable como el viajero. Aquí te explicamos por qué deberías confiar en nosotros como tu guía en tu próxima aventura:',
    why_ki_nani_li1: '<strong>Experiencias de viaje a medida:</strong> Entendemos que cada viajero es diferente, por eso ofrecemos planes de viaje personalizados para adaptarnos a tus preferencias. Ya sea que busques una aventura llena de acción, una escapada relajante o una inmersión cultural profunda, Ki Nani Travel crea itinerarios personalizados que reflejan tu estilo, presupuesto e intereses.',
    why_ki_nani_li2: '<strong>Conocimiento experto local:</strong> Nuestro equipo de expertos en viajes tiene un profundo conocimiento de los destinos que ofrecemos. Con años de experiencia y conocimientos de primera mano, proporcionamos recomendaciones auténticas que van más allá de las atracciones turísticas típicas. Te ayudamos a descubrir joyas ocultas y lugares favoritos locales que harán que tu viaje sea realmente memorable.',
    why_ki_nani_li3: '<strong>Planificación de viajes sin problemas:</strong> Planificar un viaje puede ser abrumador, pero con Ki Nani Travel, lo hacemos fácil. Desde la reserva de vuelos y alojamientos hasta la organización de tours y actividades, nos encargamos de todos los detalles. Nuestro objetivo es brindarte una experiencia sin complicaciones para que puedas concentrarte en disfrutar de tus vacaciones.',
    why_ki_nani_li4: '<strong>Servicio centrado en el cliente:</strong> Tu satisfacción es nuestra máxima prioridad. Nos enorgullecemos de ofrecer un servicio al cliente excepcional, disponible en cada paso de tu viaje. Ya sea que necesites ayuda con la reserva, consejos sobre tu itinerario o apoyo durante tu viaje, nuestro amable y profesional equipo está aquí para ayudarte.',
    why_ki_nani_li5: '<strong>Precios competitivos:</strong> Creemos que las grandes experiencias de viaje deben ser accesibles para todos. Nuestras sólidas relaciones con socios y proveedores locales nos permiten ofrecer precios competitivos en alojamientos, tours y actividades. Nos aseguramos de que obtengas el mejor valor sin comprometer la calidad.',
    why_ki_nani_li6: '<strong>Viajes sostenibles y responsables:</strong> En Ki Nani Travel, estamos comprometidos a promover el turismo responsable y sostenible. Trabajamos con comunidades locales y operadores ecológicos para asegurar que nuestros viajes tengan un impacto positivo tanto en el medio ambiente como en las personas de los destinos que visitamos. Cuando viajas con nosotros, puedes sentirte bien sabiendo que tu viaje apoya prácticas sostenibles.',
    why_ki_nani_li7: '<strong>Soporte 24/7:</strong> Tu tranquilidad es importante para nosotros. Si surge algo inesperado durante tu viaje, puedes contar con nosotros. Nuestro equipo está disponible las 24 horas del día para ayudarte con cualquier problema o cambio en tu itinerario, asegurando una experiencia de viaje fluida y sin estrés.',
    why_ki_nani_li8: '<strong>Asociaciones y ofertas exclusivas:</strong> Hemos construido sólidas alianzas con proveedores de viajes de confianza, lo que significa ofertas exclusivas y acceso a ofertas especiales que no encontrarás en ningún otro lugar. Desde hoteles de lujo hasta excursiones únicas, te ofrecemos las mejores opciones a los mejores precios.',
    why_ki_nani_li9: '<strong>Testimonios y satisfacción del cliente:</strong> ¡No solo confíes en nuestra palabra, escucha lo que dicen nuestros clientes satisfechos! Nuestros viajeros elogian constantemente nuestra atención al detalle, el servicio personalizado y las experiencias inolvidables que brindamos. Estamos orgullosos de tener una sólida reputación por crear recuerdos positivos y duraderos para nuestros clientes.',
    why_ki_nani_li10: '<strong>Tu aventura comienza aquí:</strong> Ya sea que sueñes con relajarte en playas vírgenes, explorar ciudades vibrantes o hacer senderismo por exuberantes selvas, Ki Nani Travel está aquí para convertir tus sueños de viaje en realidad. Permítenos ser tu socio de confianza para explorar el mundo.',
    why_ki_nani_cta: 'Comienza tu viaje con Ki Nani Travel hoy, donde comienza tu aventura.',
    // Experiences
    experiences_title: 'Experiencias diversas para cada pasión',
    experiences_subtitle: 'Elige el tipo de viaje que más te convenga, o deja que nuestro equipo de planificación diseñe una experiencia especial para ti.',
    tab_cultural: 'Cultural',
    tab_relax: 'Relajación',
    tab_adventure: 'Aventura',
    tab_corporate: 'Corporativo',
    cultural_h3: 'Viajes culturales',
    cultural_li1: 'Visita los templos de Filas y Kom Ombo con guías certificados.',
    cultural_li2: 'Sesiones de narración musical con artistas de Tamboura.',
    cultural_li3: 'Tours por mercados locales y degustación de deliciosas comidas locales.',
    relax_h3: 'Programas de relajación',
    relax_li1: 'Estancia en resorts del Nilo con sesiones de yoga por la tarde.',
    relax_li2: 'Paseos en faluca al atardecer con comidas vegetarianas saludables.',
    relax_li3: 'Tratamientos de spa con ingredientes naturales del sur de Egipto.',
    adventure_h3: 'Aventuras',
    adventure_li1: 'Acampada en el desierto de Al-Atmour con talleres de fotografía estelar.',
    adventure_li2: 'Paseos en bicicleta por pueblos nubios.',
    adventure_li3: 'Paseo en kayak por pequeñas islas del Nilo.',
    corporate_h3: 'Eventos Corporativos',
    corporate_li1: 'Programas de Team Building inspirados en la cultura nubia.',
    corporate_li2: 'Pequeñas conferencias en majestuosos lugares históricos.',
    corporate_li3: 'Viajes de incentivo que combinan trabajo y entretenimiento.',
    // Stats
    stats_years_num: '+12',
    stats_years_label: 'Años de Experiencia',
    stats_satisfaction_num: '96%',
    stats_satisfaction_label: 'Satisfacción del Cliente',
    stats_programs_num: '45',
    stats_programs_label: 'Programas Diversos',
    stats_support_num: '24/7',
    stats_support_label: 'Atención al Cliente',
    // Testimonials
    testimonials_title: 'Lo que dicen nuestros clientes',
    testimonial1_name: 'Layla – Yeda, Arabia Saudita',
    testimonial1_text: '“Viajar con ellos te hace sentir como en familia. Las vistas del Nilo al atardecer son inolvidables, y las actividades estaban meticulosamente organizadas.”',
    testimonial2_name: 'Michael – Londres, Reino Unido',
    testimonial2_text: '“Servicio excepcional y ricos detalles culturales. Aprendimos mucho sobre Nubia y nuestro deseo de volver ha crecido.”',
    testimonial3_name: 'Samy – El Cairo, Egipto',
    testimonial3_text: '“El viaje de negocios más fuerte de nuestra empresa. Lograron unir a nuestro equipo a través de maravillosas actividades interactivas.”',
    // Packages Page
    packages_page_title: 'Nuestros Paquetes de Viaje',
    packages_page_subtitle: 'Explora nuestros viajes cuidadosamente diseñados para todos los gustos y presupuestos.',
    package1_title: 'Viaje de 2 Días: Aroma de Nubia',
    package1_tag: 'Más Vendido',
    package1_li1: 'Alojamiento en una casa nubia tradicional.',
    package1_li2: 'Tour por el mercado local y leyendas.',
    package1_li3: 'Noche musical a orillas del Nilo.',
    package1_li4: 'Incluye desayuno y cena.',
    package1_price: 'Desde \$180 por persona',
    package2_title: 'Paseo en Faluca al Atardecer',
    package2_li1: 'Viaje privado de 2 horas con guía.',
    package2_li2: 'Bebidas y zumos naturales.',
    package2_li3: 'Sesión de fotos profesional.',
    package2_price: 'Desde \$75 por pareja',
    package3_title: 'Viaje Corporativo Creativo',
    package3_li1: 'Coordinación completa para eventos de empresa.',
    package3_li2: 'Talleres dirigidos por formadores profesionales.',
    package3_li3: 'Programa de entretenimiento cultural integrado.',
    package3_price: 'Según Solicitud',
    package4_title: 'Explora Abu Simbel',
    package4_tag: 'Historia y Grandeza',
    package4_li1: 'Tour de día completo al Templo de Abu Simbel.',
    package4_li2: 'Guía especializado en egiptología.',
    package4_li3: 'Almuerzo a orillas del lago Nasser.',
    package4_li4: 'Traslados de ida y vuelta al hotel.',
    package4_price: 'Desde \$110 por persona',
    package5_title: 'Aventura en el Desierto Nubio',
    package5_li1: 'Viaje en safari 4x4.',
    package5_li2: 'Visita a oasis ocultos y manantiales naturales.',
    package5_li3: 'Cena beduina bajo las estrellas con espectáculos folclóricos.',
    package5_price: 'Desde \$150 por persona',
    // Blog Posts
    blog_page_title: 'Blog de Ki Nani Travel',
    blog_page_subtitle: 'Artículos, consejos y perspectivas de nuestro equipo sobre viajes sostenibles y descubrimiento de joyas ocultas.',
    blog1_title: 'Descubre las Gemas Ocultas de [Egipto] con Ki Nani Travel',
    blog1_intro: 'Cuando piensas en [Egipto], podrías imaginar los puntos turísticos habituales. ¡Pero hay mucho más en este hermoso lugar de lo que parece! En este blog, nos adentramos en algunas gemas ocultas que no querrás perderte.',
    blog1_point1: '<strong>[Hurgada]:</strong> Descripción de un lugar único, como una playa tranquila, un mercado local o una atracción fuera de lo común.',
    blog1_point2: '<strong>[Alejandría]:</strong> Otro lugar secreto que solo los lugareños conocen, con recomendaciones de actividades o restaurantes.',
    blog1_point3: '<strong>[Luxor]:</strong> Un sitio cultural o histórico que a menudo es pasado por alto por los turistas pero que es rico en significado.',
    blog1_conclusion: '¡Viaja con Ki Nani Travel para descubrir estas joyas ocultas y vivir experiencias como un local!',
    blog2_title: 'Cómo viajar de forma sostenible: Consejos para aventuras ecológicas',
    blog2_intro: 'Viajar de forma sostenible es más que una tendencia; es una responsabilidad. En Ki Nani Travel, creemos en crear experiencias de viaje tan amables con el planeta como inolvidables. Aquí tienes algunos consejos prácticos para ayudarte a viajar de forma sostenible en tu próximo viaje.',
    blog2_point1: '<strong>Elige alojamientos ecológicos:</strong> Busca hoteles y resorts que utilicen energías renovables, reduzcan residuos y apoyen a las comunidades locales.',
    blog2_point2: '<strong>Opta por el transporte público:</strong> Utiliza autobuses, trenes o bicicletas en lugar de taxis o coches de alquiler para reducir tu huella de carbono.',
    blog2_conclusion: 'Cuando viajas con Ki Nani Travel, te ayudamos a elegir opciones ecoconscientes para un viaje sostenible e inolvidable.',
    blog3_title: 'Consejos esenciales para hacer la maleta para tus próximas vacaciones',
    blog3_intro: 'Hacer la maleta puede ser una de las partes más estresantes de la preparación de un viaje. Pero con los consejos adecuados, puedes empacar de forma inteligente y viajar ligero. Aquí tienes cinco consejos para hacer la maleta y que tus próximas vacaciones sean pan comido.',
    blog3_point1: '<strong>Consejo #1: Enrolla, no dobles:</strong> Enrollar la ropa ahorra espacio y minimiza las arrugas.',
    blog3_point2: '<strong>Consejo #2: Guarda lo esencial en tu equipaje de mano:</strong> Empaca siempre tu pasaporte, cartera, teléfono y cualquier medicamento en tu equipaje de mano.',
    blog3_point3: '<strong>Consejo #3: Usa cubos de embalaje:</strong> Los cubos de embalaje te ayudan a organizar tu ropa y accesorios, lo que facilita encontrar lo que necesitas.',
    blog3_point4: '<strong>Consejo #4: Limita los zapatos:</strong> Los zapatos ocupan mucho espacio, así que intenta limitarte a dos o tres pares.',
    blog3_point5: '<strong>Consejo #5: No olvides cargadores y adaptadores:</strong> Recuerda empacar los cargadores de tus dispositivos y comprueba si necesitas un adaptador de corriente para tu destino.',
    blog3_conclusion: '¡Hacer la maleta no tiene por qué ser estresante! Con estos consejos, estarás listo para tu aventura en poco tiempo.',
    blog4_title: 'La mejor época para visitar [Egipto]',
    blog4_intro: 'Elegir el momento adecuado para visitar un destino puede marcar la diferencia en tu experiencia. En este blog, te ayudaremos a decidir la mejor época para visitar [Nombre del Destino] para aprovechar al máximo tu viaje.',
    blog4_point1: '<strong>Temporada alta:</strong> El mejor momento para buen tiempo, festivales y eventos populares, pero espera más multitudes.',
    blog4_point2: '<strong>Temporada media:</strong> Un gran equilibrio entre buen tiempo y menos turistas, junto con precios más bajos.',
    blog4_point3: '<strong>Temporada baja:</strong> Si buscas las mejores ofertas y no te importa un clima impredecible, la temporada baja podría ser perfecta.',
    blog4_conclusion: '¡En Ki Nani Travel, te ayudaremos a planificar tu viaje a Egipto en el momento perfecto para tu experiencia ideal!',
    // One Day Trips
    one_day_trips_title: 'Excursiones de un día',
    one_day_trips_subtitle: 'Disfruta de las encantadoras experiencias de Asuán en viajes cortos e intensivos.',
    oneday_trip1_title: 'Tour del Templo de Filas',
    oneday_trip1_li1: 'Visita al Templo de Filas y al Planetario.',
    oneday_trip1_li2: 'Guía especializado.',
    oneday_trip1_li3: 'Traslados de ida y vuelta.',
    oneday_trip1_price: 'Desde \$45 por persona',
    oneday_trip2_title: 'Visita al Pueblo Nubio',
    oneday_trip2_li1: 'Recorrido por el colorido Pueblo Nubio.',
    oneday_trip2_li2: 'Té de hibisco de bienvenida.',
    oneday_trip2_li3: 'Oportunidad de comprar productos artesanales.',
    oneday_trip2_price: 'Desde \$30 por persona',
    oneday_trip3_title: 'Presa Alta y Obelisco Inacabado',
    oneday_trip3_li1: 'Explora la Presa Alta.',
    oneday_trip3_li2: 'Visita el Obelisco Inacabado.',
    oneday_trip3_li3: 'Explicación histórica de los sitios.',
    oneday_trip3_price: 'Desde \$35 por persona',
    // About Us Page
    about_us_page_title: 'Sobre Nosotros',
    about_us_p1: '¡Bienvenido a Ki Nani Travel, tu socio de confianza para descubrir los destinos más increíbles del mundo! Ya sea que estés planeando una escapada relajante a la playa, una emocionante caminata por la naturaleza o una experiencia cultural inmersiva, estamos aquí para ayudarte a crear recuerdos inolvidables.',
    about_us_what_we_do_h3: '¿Qué Ofrecemos?',
    about_us_what_we_do_li1: '<strong>Itinerarios personalizados:</strong> Planes de viaje a medida basados en tus intereses y preferencias.',
    about_us_what_we_do_li2: '<strong>Tours exclusivos:</strong> Tours para grupos pequeños y privados a destinos únicos.',
    about_us_what_we_do_li3: '<strong>Recursos de viaje:</strong> Guías útiles, consejos y recomendaciones para asegurar un viaje tranquilo y agradable.',
    about_us_what_we_do_li4: '<strong>Experiencia local:</strong> Conocimiento profundo de las mejores joyas ocultas, la cultura local y las actividades imperdibles.',
    about_us_why_choose_us_h3: '¿Por qué elegirnos?',
    about_us_why_choose_us_li1: '<strong>Servicio personalizado:</strong> Nos tomamos el tiempo para entender tus necesidades y diseñar el itinerario perfecto para ti.',
    about_us_why_choose_us_li2: '<strong>Recomendaciones de expertos:</strong> Nuestro equipo está formado por viajeros apasionados y expertos locales que ofrecen consejos honestos y fiables.',
    about_us_why_choose_us_li3: '<strong>Experiencias memorables:</strong> Nos centramos en crear recuerdos duraderos ofreciendo experiencias auténticas y fuera de lo común.',
    about_us_p2: 'Ya seas un viajero solitario, una familia o un grupo, estamos comprometidos a ayudarte a experimentar el mundo de una manera significativa e inspiradora. En Ki Nani Travel, tu próxima aventura está a solo un clic de distancia.',
    about_us_p3: '¡Únete a nosotros para explorar el mundo!',
    // Contact Us Page
    contact_us_page_title: 'Contacto',
    contact_us_intro: '¡Nos encantaría saber de ti! Ya sea que tengas preguntas sobre tu próximo viaje, necesites ayuda para planificar tu visita o simplemente quieras compartir tu experiencia, nuestro equipo está aquí para ayudarte.',
    contact_details_h3: 'Ponte en contacto con nosotros:',
    contact_email: 'kinani.official@gmail.com',
    contact_phone: '01552109003',
    customer_service_h3: 'Horario de Atención al Cliente:',
    customer_service_hours: 'Toda la semana: 9:00 AM - 9:00 PM',
    customer_service_timezone: 'Hora estándar de Egipto GMT+2:00',
    contact_form_h3: 'Formulario de Contacto',
    form_label_name: 'Nombre Completo',
    form_label_email: 'Correo Electrónico',
    form_label_phone: 'Número de Teléfono',
    form_label_comment: 'Comentario',
    form_send_btn: 'Enviar',
    form_name_error: 'Por favor, introduce tu nombre completo.',
    form_email_error: 'Por favor, introduce una dirección de correo electrónico válida.',
    form_phone_error: 'Por favor, introduce un número de teléfono válido.',
    form_trip_error: 'Por favor, selecciona tu tipo de viaje deseado.',
    form_success_message: '¡Gracias! Tu solicitud ha sido enviada con éxito y nos pondremos en contacto contigo en breve.',
    // Footer
    footer_brand: 'Ki Nani Travel',
    footer_slogan: 'Experiencias de viaje auténticas en Asuán y Nubia desde 2013.',
    footer_contact_info: 'Información de Contacto',
    contact_phone_footer: '01552109003',
    contact_email_footer: 'hello@kinanitravel.com',
    contact_address_footer: 'Asuán, Egipto',
    footer_hours_title: 'Horario de Trabajo',
    footer_hours_details: 'Sab – Jue: 9 AM – 9 PM',
    footer_hours_friday: 'Vie: Solo turno de mañana',
    footer_follow_us: 'Síguenos',
    quick_links_title: 'Enlaces Rápidos',
    quick_link_about: 'Sobre Nosotros',
    quick_link_story: 'Nuestra Historia (Ki Nani)',
    quick_link_why: 'Por qué Ki Nani',
    quick_link_what_we_do: 'Qué Hacemos',
    quick_link_contact: 'Contacto',
    footer_copyright_brand: 'Ki Nani Travel',
    footer_rights_reserved: 'Todos los derechos reservados.',
    footer_made_with_love: 'Hecho con amor en Asuán.',
  }
};

// --- Helper Functions ---

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Update form placeholders manually as they are not affected by innerHTML
  document.getElementById('contact-name').placeholder = (lang === 'ar') ? 'اكتب اسمك' : (lang === 'en' ? 'Enter your name' : 'Introduce tu nombre');
  document.getElementById('contact-email').placeholder = (lang === 'ar') ? 'example@email.com' : (lang === 'en' ? 'example@email.com' : 'ejemplo@email.com');
  document.getElementById('contact-phone').placeholder = (lang === 'ar') ? '+20 100 000 0000' : (lang === 'en' ? '+20 100 000 0000' : '+20 100 000 0000');
  document.getElementById('contact-message').placeholder = (lang === 'ar') ? 'اكتب رسالتك هنا' : (lang === 'en' ? 'Type your message here' : 'Escribe tu mensaje aquí');


  // Update language buttons active state
  langButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
}

function navigateTo(pageId) {
  // Hide all pages
  allPageSections.forEach(section => section.classList.remove('active-page'));
  // Show the target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active-page');
    // Scroll to the top of the new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update active state in navbar
  navLinksAnchors.forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`.navbar__links a[href="#${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Close mobile nav if open
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    toggleButton.classList.remove('open');
  }
}

// --- Event Listeners and Initializations ---

// Update year in footer
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Mobile navigation toggle
if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggleButton.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  navLinksAnchors.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggleButton.classList.remove('open');
      }
    });
  });
}

// Page navigation (client-side routing)
navLinksAnchors.forEach(link => {
  link.addEventListener('click', (e) => {
    const pageId = link.getAttribute('href').substring(1); // Remove '#'
    navigateTo(pageId);
  });
});

// Handle initial page load based on URL hash or default to 'home'
window.addEventListener('load', () => {
  const initialHash = window.location.hash ? window.location.hash.substring(1) : 'home';
  navigateTo(initialHash);
  setLanguage(currentLang); // Set initial language
});

window.addEventListener('hashchange', () => {
  const newHash = window.location.hash ? window.location.hash.substring(1) : 'home';
  navigateTo(newHash);
});


// Language switcher functionality
langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    setLanguage(lang);
  });
});

// Tab switching for experiences section
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabButtons.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');

    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${target}`);
    });
  });
});

// Testimonials Carousel
let currentSlide = 0;
const slideWidth = carouselTrack ? carouselTrack.children[0].offsetWidth : 0; // Get width of first slide

function updateCarousel(delta) {
  if (!carouselTrack) return;
  const items = carouselTrack.children;
  currentSlide = (currentSlide + delta + items.length) % items.length;
  carouselTrack.scrollLeft = items[currentSlide].offsetLeft;
}

carouselControls.forEach((control, index) => {
  control.addEventListener('click', () => {
    // Determine direction based on button class or index
    if (control.classList.contains('prev')) {
      updateCarousel(-1);
    } else if (control.classList.contains('next')) {
      updateCarousel(1);
    }
  });
});


// Scroll-to-top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 360) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


// Contact Form Validation
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;
    formErrors.forEach(error => error.textContent = ''); // Clear previous errors
    formSuccessMessage.textContent = ''; // Clear previous success message

    const formData = new FormData(bookingForm);
    const fields = {
      name: formData.get('name').trim(),
      email: formData.get('email').trim(),
      phone: formData.get('phone').trim(),
      message: formData.get('message').trim() // Get message too
    };

    if (fields.name.length < 3) {
      setFieldError('name', translations[currentLang].form_name_error);
      isValid = false;
    }

    if (!validateEmail(fields.email)) {
      setFieldError('email', translations[currentLang].form_email_error);
      isValid = false;
    }

    if (fields.phone.length < 8) { // Basic phone validation
      setFieldError('phone', translations[currentLang].form_phone_error);
      isValid = false;
    }
    // No 'trip' field in this form, so no need for that specific validation

    if (isValid) {
      formSuccessMessage.textContent = translations[currentLang].form_success_message;
      bookingForm.reset();
      setTimeout(() => {
        formSuccessMessage.textContent = '';
      }, 6000); // Clear success message after 6 seconds
    }
  });
}

function setFieldError(fieldName, message) {
  const field = bookingForm.querySelector(`[name="${fieldName}"]`);
  if (field) {
    const errorSpan = field.nextElementSibling; // Assumes error span is immediately next
    if (errorSpan && errorSpan.classList.contains('form__error')) {
      errorSpan.textContent = message;
    }
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initial language setup (Arabic by default, or from user preference)
setLanguage(currentLang);