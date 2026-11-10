(function(){
  var WA = "971502127167";
  var svcNames = {
    s1:["Cysteine & Protein Hair Treatment","علاج السيستين والبروتين للشعر"],
    s2:["Hair Colour & Highlights","صبغة الشعر والهايلايت"],
    s3:["Haircut & Styling","قص وتصفيف الشعر"],
    s4:["Keratin & Hair Care","الكيراتين والعناية بالشعر"],
    s5:["Facial","تنظيف البشرة (فيشل)"],
    s6:["Manicure, Pedicure & Nail Art","مانيكير وباديكير وفن الأظافر"],
    s7:["Threading & Waxing","الخيط والشمع"],
    s8:["Makeup / Bridal Makeup","المكياج / مكياج العرائس"],
    s9:["Henna","الحناء"],
    s10:["Home Salon Service","خدمة الصالون في المنزل"]
  };
  function waMsg(svc){
    var en, ar;
    if(svc && svcNames[svc]){
      en = "Hello Noor Ladies Salon! I'd like to book: " + svcNames[svc][0] + ". Preferred day & time: ";
      ar = "مرحباً صالون نور للسيدات! أود حجز: " + svcNames[svc][1] + ". اليوم والوقت المفضل: ";
    } else {
      en = "Hello Noor Ladies Salon! I'd like to book an appointment. Service: ___  Preferred day & time: ___";
      ar = "مرحباً صالون نور للسيدات! أود حجز موعد. الخدمة: ___  اليوم والوقت المفضل: ___";
    }
    var lang = document.documentElement.lang;
    var text = lang === "ar" ? ar + "\n\n" + en : en + "\n\n" + ar;
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(text);
  }
  var AR = {
    brand:"نور", brandSub:"صالون السيدات", navServices:"قائمة الخدمات", navReviews:"التقييمات", navVisit:"زيارتنا",
    bookShort:"احجزي", phHero:"مكان مخصص · صورة أو فيديو صالون نور الخاص، بإذنكم",
    eyebrow:"صالون شعر وتجميل · النهدة 1، دبي", h1a:"نور", h1b:"صالون السيدات",
    lead:"حيث يجد شعرك نوره. علاجات السيستين والبروتين، والصبغة والعناية، في مكان هادئ مخصص للسيدات فقط.",
    trust:"أكثر من 1,000 تقييم على Google", bookWa:"احجزي عبر واتساب",
    factHours:"يومياً · 10 صباحاً – 10 مساءً", factHome:"خدمة منزلية متوفرة", factPin:"مطر بلازا · محل 04",
    ethKicker:"طقوس نور", ethStatement:"نور تعني <em>الضوء</em>. ولأكثر من ألف عميلة قيّمن الصالون على Google، كانت تعني أيضاً شعراً أكثر صحة، واستقبالاً دافئاً، وساعة خاصة بهن وحدهن.",
    w1t:"متخصصات في الشعر", w1d:"العميلات يعدن مراراً لعلاجات السيستين والبروتين.",
    w2t:"استقبال شخصي", w2d:"صاحبة صالون تستقبلك بنفسها، وفريق تذكره العميلات بالاسم.",
    w3t:"نظافة وهدوء", w3d:"مكان هادئ ومرتب للسيدات فقط.",
    w4t:"في منزلك أيضاً", w4d:"تفضلين البقاء في منزلك؟ اسألي عن خدمة الصالون المنزلية.",
    phSig:"مكان مخصص · صورة قبل وبعد علاج السيستين من صالون نور",
    sigTag:"العلاج المميز", s1:"علاج السيستين والبروتين للشعر",
    s1d:"العلاج الأكثر إشادة في تقييمات نور: شعر أنعم، بلا هيشان، وبمظهر صحي. في الصالون أو في منزلك.",
    sigCite:"تقييم Google، نوفمبر 2024 · ترجمة: العلاج جعل شعري حريرياً وناعماً وبلا هيشان.",
    ask:"السعر عند الطلب", bookThis:"احجزي هذا العلاج",
    svcKicker:"قائمة الخدمات", svcTitle:"الخدمات", svcSub:"تختلف الأسعار حسب طول الشعر والعروض الحالية. اختاري الخدمة للاستفسار عبر واتساب، ورسالتك جاهزة.",
    catHair:"الشعر", catBeauty:"الجمال", catOcc:"المناسبات والمنزل", enquire:"استفسري",
    s1m:"تنعيم، بلا هيشان، ولمعان صحي",
    s2:"الصبغة والهايلايت", s2d:"صبغة كاملة وهايلايت وتجديد الجذور",
    s3:"القص والتصفيف", s3d:"قص وتشذيب وسشوار",
    s4:"الكيراتين والعناية بالشعر", s4d:"كيراتين وعلاجات مغذية",
    s5:"العناية بالبشرة (فيشل)", s5d:"جلسات فيشل لإشراقة متجددة",
    s6:"مانيكير وباديكير وفن الأظافر", s6d:"مانيكير وباديكير وطلاء وتصاميم أظافر",
    s7:"الخيط والشمع", s7d:"تحديد الحواجب بالخيط وإزالة الشعر بالشمع",
    s8:"المكياج ومكياج العرائس", s8d:"مكياج للمناسبات وللعرائس",
    s9:"الحناء", s9d:"نقوش حناء لكل مناسبة",
    s10:"خدمة الصالون المنزلية", s10d:"علاجات التجميل في راحة منزلك",
    offers:"جميع الأسعار عند الطلب. العروض الموسمية تتغير باستمرار، اسألي عن عروض هذا الشهر.",
    galKicker:"داخل صالون نور", galTitle:"أعمالنا في الضوء",
    ph1:"مكان مخصص · تحوّل الشعر", ph2:"مكان مخصص · داخل الصالون", ph3:"مكان مخصص · فن الأظافر", ph4:"مكان مخصص · العرائس والحناء",
    igMore:"تابعينا على إنستغرام",
    ratingCap:"1,076 تقييماً على Google", revKicker:"بكلماتهن", revTitle:"المفضل في النهدة للعناية بالشعر",
    qSrc:"تقييم Google", q3date:"يناير 2026", q4date:"نوفمبر 2022",
    q2tr:"ترجمة: الصالون نظيف، والموظفات وصاحبة الصالون ودودات، ومرتب، وأجواؤه مريحة.",
    q3tr:"ترجمة: شعري الآن ناعم وصحي جداً!",
    q4tr:"ترجمة: الجميل أنهم يقدمون الخدمة المنزلية أيضاً.",
    qNote:"مقتطفات حرفية من تقييمات Google العامة بلغتها الإنجليزية الأصلية، مع ترجمة.",
    visKicker:"زيارتنا", visTitle:"النهدة 1، دبي", addrL:"العنوان", addr:"محل 04، مطر بلازا، النهدة الأولى، دبي",
    hoursL:"ساعات العمل", hours:"يومياً · 10:00 صباحاً – 10:00 مساءً", hoursNote:"قد تتغير المواعيد في رمضان والعطلات الرسمية.",
    phoneL:"الهاتف وواتساب", callNow:"اتصلي", directions:"الاتجاهات",
    finTitle:"يوم شعرك القادم يبدأ برسالة واحدة", finSub:"أخبرينا بالخدمة والوقت المناسب لك، ونؤكد موعدك عبر واتساب.",
    footName:"صالون نور للسيدات", footAddr:"مطر بلازا · النهدة 1 · دبي", demo:"نسخة تجريبية مُعدّة لصالون نور للسيدات", fab:"واتساب"
  };
  var EN = {};
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function(n){ EN[n.getAttribute("data-i18n")] = n.innerHTML; });
  var toggle = document.getElementById("langToggle");
  function apply(lang){
    var h = document.documentElement;
    h.lang = lang; h.dir = lang === "ar" ? "rtl" : "ltr";
    nodes.forEach(function(n){
      var k = n.getAttribute("data-i18n");
      var v = lang === "ar" ? AR[k] : EN[k];
      if (v !== undefined) n.innerHTML = v;
    });
    toggle.textContent = lang === "ar" ? "English" : "العربية";
    toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    document.title = lang === "ar" ? "صالون نور للسيدات · النهدة، دبي | احجزي عبر واتساب" : "Noor Ladies Salon · Al Nahda, Dubai | Book on WhatsApp";
    document.querySelectorAll(".wa-link").forEach(function(a){ a.href = waMsg(a.getAttribute("data-svc")); });
    try { localStorage.setItem("noorLang", lang); } catch(e){}
  }
  toggle.addEventListener("click", function(){ apply(document.documentElement.lang === "ar" ? "en" : "ar"); });
  var q = new URLSearchParams(location.search).get("lang");
  var saved = null; try { saved = localStorage.getItem("noorLang"); } catch(e){}
  apply(q === "ar" || q === "en" ? q : (saved || "en"));
  var nav = document.getElementById("nav");
  function onScroll(){ nav.classList.toggle("solid", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !/static=1/.test(location.search)) {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }); }, {threshold:.12, rootMargin:"0px 0px -40px 0px"});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add("in"); }); }
})();
