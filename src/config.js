// config.js
// هذا الملف يحتوي على جميع النصوص والإعدادات القابلة للتعديل لواجهة المستخدم.
// يمكن تعديل هذه القيم بسهولة لتحديث محتوى الموقع.

export const websiteConfig = {
    // إعدادات عامة للموقع
    siteTitle: "شغلتك - سندك بالشغل التكنولوجي الذكي والمضبوط",
    companyName: "شغلتك",
    logoSvgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", // SVG path للشعار
    logoPlaceholder: "https://placehold.co/40x40/ADD8E6/000000?text=Logo", // placeholder للصورة إذا لم يتم استخدام SVG

    // روابط التنقل في الرأس
    navLinks: [
        { text: "من نحن", href: "#about" },
        { text: "لماذا تختارنا؟", href: "#why-choose-us" },
        { text: "خدماتنا", href: "#services" },
        { text: "أعمالنا", href: "#portfolio" },
        { text: "تواصل ويانا", href: "#contact" },
    ],

    // قسم الأبطال (Hero Section)
    hero: {
        heading: '"شغلتك": سندك بالشغل التكنولوجي الذكي والمضبوط',
        subheading: 'نؤمن كلش زين إن كل واحد بيكم، سواء چان زغير أو جبير، عنده طابع خاص يستاهل حلول تكنولوجية مفصلة على قياسه بالتمام.',
        buttonText: 'تواصل ويانا اليوم',
        buttonLink: '#contact',
    },

    // قسم "من نحن" (About Section)
    about: {
        heading: 'جم شغلة نوضحها',
        points: [
            {
                icon: '✔', // يمكنك استخدام أيقونة Unicode أو SVG path
                title: 'نفهمك كلش زين:',
                description: 'أول شي نكعد وياك وتفتهم شنهي طموحاتك وشنو اللي مضوجك بشغلك.',
            },
            {
                icon: '✨',
                title: 'حلول تخبل وحديثة:',
                description: 'جماعتنا خبرة ويستخدمون أحدث التقنيات حتى يطلعولك فد شي ما صاير.',
            },
            {
                icon: '⚙️',
                title: 'تتكيف وياك:',
                description: 'مهما جان شغلك زغير أو جبير، أحنا نشتغل وياك ونعدل الحلول على مودك.',
            },
            {
                icon: '✅',
                title: 'شغل نظيف ومضمون:',
                description: 'نهتم بالشغل كلش هواي حتى يطلع مضبوط وما بيه أي نقص.',
            },
        ],
        imagePlaceholder: '../assets/images/Square@4x.png',
    },

    // قسم "لماذا تختارنا؟" (Why Choose Us Section)
    whyChooseUs: {
        heading: 'لماذا تختار "شغلتك"؟',
        features: [
            {
                iconPath: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z', // نجمة
                title: 'خبرة واسعة',
                description: 'فريقنا يمتلك سنوات من الخبرة في أحدث التقنيات وأفضل الممارسات لتقديم حلول مبتكرة.',
            },
            {
                iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2h1l-.01.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-1V7h-1c-.55 0-1-.45-1-1s-.45-1-1-1H7V4h2c.55 0 1-.45 1-1s.45-1 1-1h1c.55 0 1 .45 1 1s.45 1 1 1h1V6h2c.55 0 1 .45 1 1s-.45 1-1 1h-1v3c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v3c0 .55-.45 1-1 1h-1V19c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1s-.45 1-1 1H7v-.07c4.05.49 7-3.08 7-7.93 0-.62-.08-1.21-.21-1.79L15 9v1c0 1.1.9 2 2 2h1l.01-.93z', // شكل معقد
                title: 'ابتكار مستمر',
                description: 'نبحث دائماً عن أحدث التقنيات والحلول المبتكرة لتقديم أفضل قيمة لعملائنا.',
            },
            {
                iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z', // دائرة مع i
                title: 'دعم فني متميز',
                description: 'نقدم دعماً فنياً شاملاً وسريع الاستجابة لضمان استمرارية عملك وراحتك.',
            },
        ],
    },

    // قسم الخدمات (Services Section)
    services: {
        heading: 'قائمة بالخدمات',
        items: [
            {
                title: 'نصائح تكنولوجية ذهبية',
                description: 'تنطيك نصائح ذهبية بشغلات التكنولوجيا، لضمان اتخاذ أفضل القرارات التقنية.',
            },
            {
                title: 'أمن سايبر مضبوط',
                description: 'نحمي معلوماتك من الهكرية بشغل أمن سايبر مضبوط، لحماية أعمالك وبياناتك الحساسة.',
            },
            {
                title: 'حلول ذكاء اصطناعي مبتكرة',
                description: 'نوفرلك حلول ذكاء اصطناعي تسهل شغلك وتطوره، لزيادة الكفاءة والابتكار.',
            },
            {
                title: 'أتمتة الأعمال الروتينية',
                description: 'نسوي أتمتة للأعمال الروتينية حتى توفر وقت وجهد، لتمكينك من التركيز على الأهم.',
            },
            {
                title: 'مواقع إنترنت عصرية وجذابة',
                description: 'نقدم مواقع إنترنت عصرية وجذابة تعكس هويتك، لتعزيز حضورك الرقمي.',
            },
            {
                title: 'تطبيقات موبايل مبتكرة',
                description: 'نطور تطبيقات موبايل مبتكرة وسهلة الاستخدام توصلك لزبائنك وين ما كانوا، لزيادة الانتشار.',
            },
        ],
    },

    // قسم أعمالنا ومشاريعنا (Portfolio Section)
    portfolio: {
        heading: 'أعمالنا ومشاريعنا',
        // تعريف الفئات المتاحة
        categories: [
            { id: 'all', name: 'الكل' },
            { id: 'admin', name: 'إدارية' },
            { id: 'finance', name: 'مالية' },
            { id: 'ai', name: 'ذكاء اصطناعي' },
            { id: 'delivery', name: 'توصيل' },
            { id: 'health', name: 'طبية' },
            { id: 'education', name: 'تعليم' },
            { id: 'e-payment', name: 'دفع إلكتروني' },
        ],
        // تعريف فئات CSS لأزرار الفئات
        categoryButtonClasses: {
            base: 'px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out cursor-pointer',
            active: 'bg-blue-600 text-white shadow-xl border border-blue-600 transform scale-105',
            inactive: 'bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:shadow-xl transform hover:scale-105 opacity-80',
        },
        projects: [
            {
                imagePlaceholder: 'https://placehold.co/600x400/C1DFF0/1A2B5B?text=Smart+Analytics+System',
                altText: 'نظام التحليل الذكي',
                title: 'نظام التحليل الذكي',
                description: 'تحليل البيانات باستخدام الذكاء الاصطناعي لتوفير رؤى دقيقة وقرارات مستنيرة.',
                detailsLink: '#',
                category: 'ai'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/D9E9F0/1A2B5B?text=Project+Management+Platform',
                altText: 'منصة إدارة المشاريع',
                title: 'منصة إدارة المشاريع',
                description: 'تطبيق ويب متكامل لإدارة المشاريع والمهام بفعالية، وتحسين سير العمل.',
                detailsLink: '#',
                category: 'admin'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/F2F8FA/1A2B5B?text=Fast+Delivery+App',
                altText: 'تطبيق التوصيل السريع',
                title: 'تطبيق التوصيل السريع',
                description: 'تطبيق جوال متقدم لخدمات التوصيل السريع، يضمن كفاءة وسرعة في العمليات اللوجستية.',
                detailsLink: '#',
                category: 'delivery'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/C1DFF0/1A2B5B?text=E-payment+Gateway',
                altText: 'بوابة الدفع الإلكتروني',
                title: 'بوابة الدفع الإلكتروني',
                description: 'نظام متكامل وآمن للمدفوعات الإلكترونية، يوفر تجربة سلسة للمستخدمين والتجار.',
                detailsLink: '#',
                category: 'e-payment'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/D9E9F0/1A2B5B?text=E-Learning+Platform',
                altText: 'منصة التعلم الإلكتروني',
                title: 'منصة التعلم الإلكتروني',
                description: 'نظام تعليمي تفاعلي عبر الإنترنت، يسهل الوصول إلى المحتوى التعليمي عالي الجودة.',
                detailsLink: '#',
                category: 'education'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/F2F8FA/1A2B5B?text=AI+Assistant',
                altText: 'مساعد ذكاء اصطناعي',
                title: 'مساعد ذكاء اصطناعي',
                description: 'نظام محادثة ذكي للدعم الفني، يوفر استجابات سريعة وفعالة لاستفسارات المستخدمين.',
                detailsLink: '#',
                category: 'ai'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/C1DFF0/1A2B5B?text=Sales+Management',
                altText: 'نظام إدارة المبيعات',
                title: 'نظام إدارة المبيعات',
                description: 'منصة متكاملة لإدارة المبيعات والمخزون وتحسين عمليات المبيعات.',
                detailsLink: '#',
                category: 'finance'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/D9E9F0/1A2B5B?text=Smart+Health+App',
                altText: 'تطبيق الصحة الذكية',
                title: 'تطبيق الصحة الذكية',
                description: 'تطبيق جوال لمتابعة الصحة واللياقة البدنية، يقدم نصائح مخصصة وتتبع التقدم.',
                detailsLink: '#',
                category: 'health'
            },
            {
                imagePlaceholder: 'https://placehold.co/600x400/F2F8FA/1A2B5B?text=Smart+Recommendation',
                altText: 'محرك توصيات ذكي',
                title: 'محرك توصيات ذكي',
                description: 'نظام توصيات مخصص بالذكاء الاصطناعي، يحسن تجربة المستخدم ويقدم اقتراحات دقيقة.',
                detailsLink: '#',
                category: 'ai'
            },
        ],
        moreProjectsButtonText: 'اكتشف المزيد من أعمالنا',
    },

    // قسم التواصل (Contact Section)
    contact: {
        heading: 'تواصل ويانا',
        subheading: 'لا تخلي المشاكل مال تكنولوجيا توكف بطريقك. بـ "شغلتك"، عدنا الحل المضبوط اللي تريده بالضبط. اتصل بينا اليوم حتى نسولف على مشروعك أو فكرتك، وراح نسويها فد شي يخبل على أرض الواقع.',
        contactInfo: [
            { iconPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', text: 'INFO@SHAGHL.TECH' },

            { iconPath: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', text: 'IRAQ, BAGHDAD AL-SINAA' },
            { iconPath: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.05 2.05c-4.74-2.39-8.19-5.83-10.58-10.57l2.05-2.05c.27-.27.35-.66.24-1.01C8.75 3.45 8.55 2.25 8.55 1h-7c-.55 0-1 .45-1 1C.45 11.19 8.81 19.55 19 19.55c.55 0 1-.45 1-1v-7z', text: '+964 783 700 7044' },
        ],
        qrCodePlaceholder: "../assets/images/qr_code.png",
        qrCodeText: 'امسح الكود للتواصل الفوري معنا',
    },

    // قسم التذييل (Footer Section)
    footer: {
        copyrightText: 'جميع الحقوق محفوظة.',
        designedByText: 'مصممة بحب من "شغلتك" ✨',
    },
};
