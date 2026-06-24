import { motion, useScroll, useTransform } from "motion/react";
import { GithubLogo, DownloadSimple, ShieldCheck, WifiSlash, Graph, LockKey, Translate } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const content = {
  en: {
    downloadApp: "Download APK",
    heroTitle: "Offline messaging.",
    heroTitleHighlight: "Off the grid.",
    heroSubtitle: "Connect securely with people nearby using Bluetooth mesh networking. No servers, no cell towers, no tracking. Total privacy.",
    downloadSawa: "Download Sawa",
    howItWorks: "How it works",
    featuresTitle: "Built for absolute autonomy.",
    meshTitle: "Self-Healing Mesh",
    meshDesc: "Messages hop securely from device to device. As more people join, the network becomes stronger, faster, and more resilient.",
    zeroInternetTitle: "Zero Internet",
    zeroInternetDesc: "Operates entirely via Bluetooth Low Energy (BLE). No data plans or Wi-Fi required.",
    encryptedTitle: "End-to-End Encrypted",
    encryptedDesc: "AES-256 GCM encryption ensures your messages are cryptographically sealed. Intermediate nodes cannot read your data.",
    anonTitle: "Anonymous by Design",
    anonDesc: "No phone numbers, no emails, no centralized identities. You are known only by the cryptographic keypairs you generate on your device.",
    footerTitle: "Take back your communications.",
    footerDesc: "Sawa is open-source and free forever. Join the resilient communication network today.",
    github: "View on GitHub",
    langToggle: "العربية"
  },
  ar: {
    downloadApp: "تحميل التطبيق",
    heroTitle: "مراسلة بدون إنترنت.",
    heroTitleHighlight: "خارج الشبكة.",
    heroSubtitle: "تواصل بأمان مع الأشخاص القريبين منك باستخدام شبكة بلوتوث متداخلة. بدون خوادم، بدون أبراج اتصالات، بدون تتبع. خصوصية تامة.",
    downloadSawa: "تحميل Sawa",
    howItWorks: "كيف يعمل",
    featuresTitle: "صُمم للاستقلالية المطلقة.",
    meshTitle: "شبكة متداخلة ذاتية الإصلاح",
    meshDesc: "تنتقل الرسائل بأمان من جهاز إلى آخر. كلما انضم عدد أكبر من الأشخاص، أصبحت الشبكة أقوى وأسرع وأكثر مرونة.",
    zeroInternetTitle: "بدون إنترنت",
    zeroInternetDesc: "يعمل بالكامل عبر تقنية بلوتوث منخفضة الطاقة (BLE). لا حاجة لباقات بيانات أو شبكة Wi-Fi.",
    encryptedTitle: "تشفير تام بين الطرفين",
    encryptedDesc: "يضمن تشفير AES-256 GCM إغلاق رسائلك بشكل مشفر. لا يمكن للأجهزة الوسيطة قراءة بياناتك.",
    anonTitle: "مجهول الهوية بطبيعته",
    anonDesc: "لا أرقام هواتف، لا رسائل بريد إلكتروني، لا هويات مركزية. تُعرف فقط من خلال مفاتيح التشفير التي تقوم بإنشائها على جهازك.",
    footerTitle: "استعد السيطرة على اتصالاتك.",
    footerDesc: "تطبيق Sawa مفتوح المصدر ومجاني للأبد. انضم إلى شبكة الاتصالات المرنة اليوم.",
    github: "عرض على GitHub",
    langToggle: "English"
  }
};

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/30 selection:text-white pb-10">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-t-0 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto left-0 right-0 mt-4 rounded-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-bold text-white text-sm tracking-tighter" dir="ltr">S</span>
          </div>
          <span className="font-semibold text-lg tracking-tight" dir="ltr">Sawa</span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={toggleLang} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
            <Translate size={20} />
            <span className="hidden sm:inline">{t.langToggle}</span>
          </button>
          
          <div className="w-px h-4 bg-white/20 mx-1"></div>

          <a href="https://github.com/muslim-kh09/Sawa" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
            <GithubLogo size={24} weight="fill" />
          </a>
          <a href="https://github.com/muslim-kh09/Sawa/releases/latest" target="_blank" rel="noreferrer" className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:scale-[0.98] transition-transform flex items-center gap-2">
            <DownloadSimple size={16} weight="bold" />
            <span className="hidden sm:inline">{t.downloadApp}</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[100dvh] flex flex-col md:flex-row items-center gap-16 relative">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
        
        <div className="flex-1 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]"
          >
            {t.heroTitle} <br/>
            <span className="text-white/40">{t.heroTitleHighlight}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-lg"
          >
            {t.heroSubtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="https://github.com/muslim-kh09/Sawa/releases/latest" target="_blank" rel="noreferrer" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-base hover:scale-[0.98] transition-all flex justify-center items-center">
              {t.downloadSawa}
            </a>
            <a href="#features" className="glass-panel text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/5 transition-colors flex justify-center items-center">
              {t.howItWorks}
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yOffset }}
          className="flex-1 relative z-10 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden glass-panel p-2">
             <img src="./hero-mockup.png" alt="Sawa App Interface" className="w-full h-full object-cover rounded-[24px]" />
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{t.featuresTitle}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel rounded-[32px] p-8 md:p-12 overflow-hidden relative min-h-[400px] flex flex-col">
            <div className="absolute inset-0 z-0">
               <img src="./feature-mesh.png" alt="Mesh Network" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
               <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            </div>
            <div className="relative z-10 mt-auto">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                <Graph size={24} weight="duotone" className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t.meshTitle}</h3>
              <p className="text-white/60 max-w-md leading-relaxed">
                {t.meshDesc}
              </p>
            </div>
          </div>
          
          <div className="glass-panel rounded-[32px] p-8 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 mt-auto">
              <WifiSlash size={24} weight="duotone" className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.zeroInternetTitle}</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              {t.zeroInternetDesc}
            </p>
          </div>
          
          <div className="glass-panel rounded-[32px] p-8 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 mt-auto">
              <LockKey size={24} weight="duotone" className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.encryptedTitle}</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              {t.encryptedDesc}
            </p>
          </div>
          
          <div className="md:col-span-2 glass-panel rounded-[32px] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                <ShieldCheck size={24} weight="duotone" className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.anonTitle}</h3>
              <p className="text-white/60 leading-relaxed text-sm max-w-sm">
                {t.anonDesc}
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
               <ShieldCheck size={64} weight="thin" className="text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="pt-32 px-6 border-t border-white/10 mt-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.footerTitle}</h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            {t.footerDesc}
          </p>
          <a href="https://github.com/muslim-kh09/Sawa" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-base hover:scale-[0.98] transition-transform">
            <GithubLogo size={20} weight="fill" />
            <span>{t.github}</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
