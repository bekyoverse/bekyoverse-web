import { useLanguage } from '../contexts/LanguageContext';
import ClassPageTemplate from '../components/ClassPageTemplate';
import type { Lesson, ResourceItem } from '../components/ClassPageTemplate';

const getLessons = (t: (en: string, mm: string) => string): Lesson[] => [
  { id: 1, title: t('Week 1 – Tue: Drawing Basics & Warm-up', 'အပတ် ၁ - အင်္ဂါ - အခြေခံပုံဆွဲနည်းနှင့် အနွေးထည်လေ့ကျင့်ခန်း'), duration: '45:00', week: 1 },
  { id: 2, title: t('Week 1 – Thu: Basic Body Proportions', 'အပတ် ၁ - ကြာသပတေး - အခြေခံခန္ဓာကိုယ်အချိုးအစား'), duration: '50:00', week: 1 },
  { id: 3, title: t('Week 2 – Tue: Poses & Gesture Drawing', 'အပတ် ၂ - အင်္ဂါ - အမူအရာနှင့် ကိုယ်နေဟန်ထားများ'), duration: '55:00', week: 2 },
  { id: 4, title: t('Week 2 – Thu: Faces & Expressions', 'အပတ် ၂ - ကြာသပတေး - မျက်နှာနှင့် အမူအရာများ'), duration: '48:00', week: 2 },
  { id: 5, title: t('Week 3 – Tue: Hair & Simple Accessories', 'အပတ် ၃ - အင်္ဂါ - ဆံပင်နှင့် ရိုးရှင်းသော အပိုအသုံးအဆောင်များ'), duration: '42:00', week: 3 },
  { id: 6, title: t('Week 3 – Thu: Outfits & Character Personality', 'အပတ် ၃ - ကြာသပတေး - ဝတ်စုံနှင့် ဇာတ်ကောင်စရိုက်'), duration: '52:00', week: 3 },
  { id: 7, title: t('Week 4 – Tue: Character Turnaround Basics', 'အပတ် ၄ - အင်္ဂါ - ဇာတ်ကောင်လှည့်ပတ်ပုံ အခြေခံ'), duration: '58:00', week: 4 },
  { id: 8, title: t('Week 4 – Thu: Final Character & Composition', 'အပတ် ၄ - ကြာသပတေး - နောက်ဆုံးလက်ရာနှင့် ပေါင်းစပ်ပုံဖော်ခြင်း'), duration: '65:00', week: 4 },
];

const getMaterials = (t: (en: string, mm: string) => string): ResourceItem[] => [
  { name: t('Pencil Set (HB, 2B, 4B)', 'ခဲတံအစုံ (HB, 2B, 4B)'), icon: '✏️' },
  { name: t('Sketchbook A4 Size', 'စကတ်ချ်ဘုတ် A4 ဆိုဒ်'), icon: '📓' },
  { name: t('Eraser & Sharpener', 'ခဲဖျက်နှင့် ခဲချွန်စက်'), icon: '🧹' },
  { name: t('Ruler & Compass', 'ပေတံနှင့် ကံပါတ်'), icon: '📐' },
];

export default function TraditionalClass() {
  const { t } = useLanguage();
  const lessons = getLessons(t);
  const materials = getMaterials(t);

  return (
    <ClassPageTemplate
      courseId="traditional"
      heroColors={['#d97706', '#c2410c']}
      heroEmojis={[
        { icon: '✏️', top: 20, left: 30, opacity: 0.15 },
        { icon: '📓', bottom: 20, right: 40, opacity: 0.15 }
      ]}
      courseTitle={t('Traditional Character Drawing', 'ရိုးရာကာတွန်းပုံဆွဲနည်း')}
      courseSubtitle={t('Traditional Art Class', 'ရိုးရာအနုပညာသင်တန်း')}
      courseDescription={t(
        'Master the art of pencil drawing and bring your cartoon characters to life.',
        'ခဲတံအသုံးပြု၍ ပုံဆွဲနည်းကို ကျွမ်းကျင်အောင်လေ့ကျင့်ပြီး သင့်ဇာတ်ကောင်များကို အသက်သွင်းပါ။'
      )}
      priceFormatted="50,000 MMK"
      lessons={lessons}
      resources={materials}
      resourceSectionTitle={t('Required Materials', 'လိုအပ်သော ပစ္စည်းများ')}
    />
  );
}
