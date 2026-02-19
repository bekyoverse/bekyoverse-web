import { useLanguage } from '../contexts/LanguageContext';
import ClassPageTemplate from '../components/ClassPageTemplate';
import type { Lesson, ResourceItem } from '../components/ClassPageTemplate';

const getLessons = (t: (en: string, mm: string) => string): Lesson[] => [
  { id: 1, title: t('Week 1 – Tue: Digital Tools Setup + Sketching', 'အပတ် ၁ - အင်္ဂါ - ဒစ်ဂျစ်တယ်ကိရိယာများ စီစဉ်ခြင်းနှင့် စကတ်ချ်ဆွဲခြင်း'), duration: '50:00', week: 1 },
  { id: 2, title: t('Week 1 – Thu: Clean Line Art Techniques', 'အပတ် ၁ - ကြာသပတေး - သန့်ရှင်းသော လိုင်းအတ် နည်းစနစ်များ'), duration: '48:00', week: 1 },
  { id: 3, title: t('Week 2 – Tue: Brush Control & Line Weight', 'အပတ် ၂ - အင်္ဂါ - ဘရပ်ရှ်ကို ထိန်းချုပ်ခြင်းနှင့် လိုင်းအထူအပါး'), duration: '52:00', week: 2 },
  { id: 4, title: t('Week 2 – Thu: Simple Coloring + Flat Render', 'အပတ် ၂ - ကြာသပတေး - ရိုးရှင်းသော ဆေးရောင်ခြယ်ခြင်း'), duration: '55:00', week: 2 },
  { id: 5, title: t('Week 3 – Tue: Basic Shading & Textures', 'အပတ် ၃ - အင်္ဂါ - အခြေခံ အရိပ်နှင့် ဝတ္ထုမျက်နှာပြင်များ'), duration: '58:00', week: 3 },
  { id: 6, title: t('Week 3 – Thu: Mascot Character Design', 'အပတ် ၃ - ကြာသပတေး - မာစကော့ဇာတ်ကောင် ဒီဇိုင်း'), duration: '60:00', week: 3 },
  { id: 7, title: t('Week 4 – Tue: Emote & Sticker Creation', 'အပတ် ၄ - အင်္ဂါ - အီမုတ်နှင့် စတစ်ကာ ဖန်တီးခြင်း'), duration: '55:00', week: 4 },
  { id: 8, title: t('Week 4 – Thu: Final Project + Feedback', 'အပတ် ၄ - ကြာသပတေး - နောက်ဆုံးပရောဂျက်နှင့် အကြံပြုချက်များ'), duration: '70:00', week: 4 },
];

const getSoftware = (t: (en: string, mm: string) => string): ResourceItem[] => [
  { name: t('Clip Studio Paint (Required)', 'Clip Studio Paint (လိုအပ်သည်)'), icon: '🎨' },
  { name: t('Drawing Tablet', 'ပုံဆွဲ တက်ဘလက်'), icon: '🖊️' },
  { name: t('Computer or iPad', 'ကွန်ပျူတာ သို့မဟုတ် iPad'), icon: '💻' },
];

export default function DigitalClass() {
  const { t } = useLanguage();
  const lessons = getLessons(t);
  const software = getSoftware(t);

  return (
    <ClassPageTemplate
      courseId="digital"
      heroColors={['#0891b2', '#1d4ed8']}
      heroEmojis={[
        { icon: '💻', top: 20, left: 30, opacity: 0.15 },
        { icon: '✨', bottom: 20, right: 40, opacity: 0.15 }
      ]}
      courseTitle={t('Digital Art', 'ဒစ်ဂျစ်တယ်ပန်းချီ')}
      courseSubtitle={t('Digital Art Class', 'ဒစ်ဂျစ်တယ်ပန်းချီသင်တန်း')}
      courseDescription={t(
        'Transform your artistic vision into digital masterpieces with Clip Studio Paint.',
        'Clip Studio Paint ကို အသုံးပြု၍ သင်၏ အနုပညာ စိတ်ကူးများကို ဒစ်ဂျစ်တယ် လက်ရာများအဖြစ် ဖန်တီးပါ။'
      )}
      priceFormatted="75,000 MMK"
      lessons={lessons}
      resources={software}
      resourceSectionTitle={t('Required Software', 'လိုအပ်သော ဆော့ဖ်ဝဲလ်')}
      resourceNote={t(
        'Clip Studio Paint must be purchased separately. Student discount available.',
        'Clip Studio Paint ကို သီးသန့် ဝယ်ယူရပါမည်။ ကျောင်းသား လျှော့စျေး ရနိုင်ပါသည်။'
      )}
    />
  );
}
