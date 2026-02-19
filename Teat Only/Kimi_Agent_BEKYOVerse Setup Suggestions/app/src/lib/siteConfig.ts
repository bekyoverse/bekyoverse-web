
// ─── Default Site Configuration ────────────────────────────────────────────────

const EN_DEFAULTS = {
    hero: {
        title: 'BEKYOVerse',
        subtitle: 'Creative Animator & Illustrator',
        tagline: 'Where imagination meets strategy. I create comics, animations, and character designs that tell stories.',
        ctaText: 'Start a Project',
    },
    about: {
        title: 'About Me',
        text: "I'm a freelance animator and illustrator working under the name BEKYOVerse. I create character-driven visuals through animation, illustration, and comics for both personal stories and brand projects. I've worked with local and international clients across Myanmar, Thailand, and beyond.",
        stats: { projects: '100+', clients: '50+', years: '5+' }
    },
    contact: {
        title: "Let's connect",
        tagline: "You can reach me on social media or message me directly for projects and collaborations.",
    },
    portfolio: {
        categories: [
            { id: 'animation', title: 'Animation', videos: ['1166222902', '1166223038', '1166223191', '1166223253'] },
            // { id: 'process', title: 'Process & Shorts', videos: [] } // Hidden for now as we only have 4 main videos
        ],
    },
    pricing: {
        hero: { title: 'Bring Your Ideas to Life' },
        categories: [
            {
                id: 'mascot',
                title: 'Mascot',
                icon: 'fa-mask',
                packages: [
                    { name: 'Starter', price: '$45', priceMMK: '180,000 MMK', sub: 'Bust / Icon', featured: false, features: ['1 Character (Head only)', 'Full Color & Shading', 'High-Res PNG', 'Commercial Rights'] },
                    { name: 'Standard', price: '$75', priceMMK: '300,000 MMK', sub: 'Waist Up / Action Pose', featured: true, features: ['1 Character (Half Body)', 'Dynamic Pose', 'Full Color', 'Source File (.PSD)'] },
                    { name: 'Premium', price: '$110', priceMMK: '440,000 MMK', sub: 'Full Body / Detailed', featured: false, features: ['1 Character (Full Body)', 'Complex Pose', 'Full Color', 'Source File (.PSD)'] },
                ]
            },
            {
                id: 'stickers',
                title: 'Stickers',
                icon: 'fa-sticky-note',
                packages: [
                    { name: 'Static Sticker', price: '$15', priceMMK: '60,000 MMK', sub: 'Per Sticker', featured: false, features: ['Full Color', 'Telegram Format (512px)', 'White Outline', 'High-Res PNG'] },
                    { name: 'Animated Sticker', price: '$25', priceMMK: '100,000 MMK', sub: 'Per Sticker', featured: true, features: ['Smooth 3s Loop', 'TGS / WebM Format', 'Optimized File Size', 'High-Res Assets'] },
                ],
                // Addons or workflows can be added here if PricingPage supports them for this category
            },
            {
                id: 'illustration',
                title: 'Illustration',
                icon: 'fa-palette',
                packages: [
                    { name: 'Personal Use', price: '$30 - $60', priceMMK: '120,000 - 240,000 MMK', sub: 'Fanart · OC · Portrait', featured: false, features: ['Personal Enjoyment', 'High-Res PNG', 'Transparent BG', 'Source File Included'] },
                    { name: 'Commercial Use', price: '$50 - $100', priceMMK: '200,000 - 400,000 MMK', sub: 'Cover Art · Brand · Merch', featured: true, features: ['Full Commercial Rights', 'Book Covers / Album Art', 'Web & Print Ready', 'Source File Included'] },
                ]
            },
            {
                id: 'comic',
                title: 'Comic',
                icon: 'fa-book-open',
                packages: [
                    { name: '1 - 3 Pages', price: '$40', priceMMK: '160,000 MMK', sub: 'Per Page', featured: false, features: ['Short Form / One-Shot', 'Script & Layout', 'Full Color Art', 'Lettering Included'] },
                    { name: '4 - 7 Pages', price: '$35', priceMMK: '140,000 MMK', sub: 'Per Page · Best Value', featured: true, features: ['Short Story / Episode', 'Save $5 per page', 'Consistent Art Style', 'Commercial Rights'] },
                    { name: '8+ Pages', price: '$30', priceMMK: '120,000 MMK', sub: 'Per Page', featured: false, features: ['Long Form / Series', 'Save $10 per page', 'Milestone Payments', 'Full Production'] },
                ]
            },
            {
                id: 'animation',
                title: 'Animation',
                icon: 'fa-film',
                packages: [
                    { name: 'Essential Story', price: '$200', priceMMK: '800,000 MMK', sub: 'Simple & Cute', featured: false, features: ['Flat Motion Graphics', 'Simple Backgrounds', 'Stock Music Included', '1 Revision Round'] },
                    { name: 'Cinematic Story', price: '$400', priceMMK: '1,600,000 MMK', sub: 'Emotion & Atmosphere', featured: true, features: ['Detailed Character Acting', 'Hand-drawn Backgrounds', 'Licensed Music + Voiceover', '3 Revision Rounds'] },
                ],
                workflow: [
                    { title: 'Brief & Vision', text: 'Tell me your idea, references, and goals.' },
                    { title: 'Quote & Deposit', text: '50% deposit before work begins.' },
                    { title: 'Script & Board', text: 'Reviewing narrative and visual plan.' },
                    { title: 'Production', text: 'Animation frame by frame starts.' },
                    { title: 'Revision & Delivery', text: 'Final tweaks and delivery in MP4.' }
                ],
                faqs: [
                    { q: 'How long does a 1-minute video take?', a: 'Typically 3-4 weeks depending on complexity.' },
                    { q: 'Can I provide my own music?', a: 'Yes, just ensure you have the rights or it is royalty-free.' }
                ],
                addons: [
                    { name: 'Extra Revision', usd: '$15', mmk: '60,000 MMK' },
                    { name: 'Voiceover', usd: 'From $40', mmk: 'From 160,000 MMK' }
                ]
            }
        ]
    }
};

const MM_DEFAULTS = {
    hero: {
        title: 'BEKYOVerse',
        subtitle: 'ဖန်တီးမှုပြည့်ဝသော Animator နှင့် Illustrator',
        tagline: 'စိတ်ကူးယဉ်မှုများကို လက်တွေ့ဘဝသို့ ဖော်ဆောင်ပေးသည်။ သင်ပုံပြင်များအတွက် အန်နီမေးရှင်း၊ ပုံဆွဲခြင်းနှင့် ဇာတ်ကောင်ဒီဇိုင်းများကို ဖန်တီးပေးသည်။',
        ctaText: 'ပတ်သတ်ဆက်သွယ်ရန်',
    },
    about: {
        title: 'ကျွန်ုပ်အကြောင်း',
        text: "ကျွန်တော်က BEKYOVerse နာမည်ဖြင့် အလုပ်လုပ်နေသော freelance animator နှင့် illustrator တစ်ဦးဖြစ်သည်။ ဇာတ်ကောင်ကို အခြေခံသော ဗီဇာလ်များကို အန်နီမေးရှင်း၊ ပုံဆွဲခြင်းနှင့် ရုပ်ပြများမှတဆင့် ဖန်တီးပေးသည်။ မြန်မာနိုင်ငံ၊ ယိုးဒယားနှင့် အခြားပြည်ပမှ client များစွာနှင့် လုပ်ကိုင်ခဲ့ဖူးပါသည်။",
        stats: { projects: '၁၀၀+', clients: '၅၀+', years: '၅+' }
    },
    contact: {
        title: 'ဆက်သွယ်ပေးပါ',
        tagline: "ဆိုရှယ်မီဒီယာများ သို့မဟုတ် တိုက်ရိုက်မက်ဆေ့ခ်ျပို့၍ ဆက်သွယ်နိုင်ပါသည်။",
    },
    portfolio: {
        categories: [
            { id: 'animation', title: 'အန်နီမေးရှင်း', videos: ['1166222902', '1166223038', '1166223191', '1166223253'] },
            // { id: 'process', title: 'အလုပ်လုပ်ပုံအဆင့်ဆင့်', videos: [] }
        ],
    },
    pricing: {
        hero: { title: 'သင့်စိတ်ကူးများကို လက်တွေ့ပုံဖော်လိုက်ပါ' },
        categories: [
            {
                id: 'mascot',
                title: 'Mascot',
                icon: 'fa-mask',
                packages: [
                    { name: 'Starter', price: '$45', priceMMK: '180,000 MMK', sub: 'ခေါင်းပိုင်း', featured: false, features: ['၁ ကောင် (ခေါင်း)', 'အရောင် အပြည့်အစုံ', 'High-Res PNG', 'Commercial Rights'] },
                    { name: 'Standard', price: '$75', priceMMK: '300,000 MMK', sub: 'ကိုယ်တစ်ပိုင်း / Action', featured: true, features: ['၁ ကောင် (ခါးအထက်)', 'Dynamic Pose', 'Source File (.PSD)', 'Commercial Rights'] },
                    { name: 'Premium', price: '$110', priceMMK: '440,000 MMK', sub: 'တစ်ကိုယ်လုံး / အသေးစိတ်', featured: false, features: ['၁ ကောင် (တစ်ကိုယ်လုံး)', 'ရှုပ်ထွေးသော Pose', 'Full Color', 'Source File (.PSD)'] },
                ]
            },
            {
                id: 'stickers',
                title: 'Stickers',
                icon: 'fa-sticky-note',
                packages: [
                    { name: 'Static (မလှုပ်)', price: '$15', priceMMK: '60,000 MMK', sub: '၁ ခုလျှင်', featured: false, features: ['အရောင်စုံ', 'Telegram Format', 'White Outline', 'High-Res PNG'] },
                    { name: 'Animated (လှုပ်ရှား)', price: '$25', priceMMK: '100,000 MMK', sub: '၁ ခုလျှင်', featured: true, features: ['3s Smooth Loop', 'TGS / WebM Format', 'Optimized File Size', 'High-Res Assets'] },
                ],
            },
            {
                id: 'illustration',
                title: 'Illustration',
                icon: 'fa-palette',
                packages: [
                    { name: 'Personal Use', price: '$30 - $60', priceMMK: '120,000 - 240,000 MMK', sub: 'Fanart · OC · Portrait', featured: false, features: ['ကိုယ်ပိုင်သုံး', 'High-Res PNG', 'Transparent BG', 'Source File ပါဝင်'] },
                    { name: 'Commercial Use', price: '$50 - $100', priceMMK: '200,000 - 400,000 MMK', sub: 'Cover Art · Brand', featured: true, features: ['စီးပွားဖြစ် အခွင့်အရေး', 'Book Covers / Album Art', 'Web & Print Ready', 'Source File ပါဝင်'] },
                ]
            },
            {
                id: 'comic',
                title: 'Comic',
                icon: 'fa-book-open',
                packages: [
                    { name: '၁ - ၃ စာမျက်နှာ', price: '$40', priceMMK: '160,000 MMK', sub: 'တစ်ချပ်လျှင်', featured: false, features: ['တိုတောင်းသောပုံစံ', 'Script & Layout', 'Full Color Art', 'Lettering ပါဝင်'] },
                    { name: '၄ - ၇ စာမျက်နှာ', price: '$35', priceMMK: '140,000 MMK', sub: 'တစ်ချပ်လျှင် · တန်ဖိုးအရှိဆုံး', featured: true, features: ['Short Story / Episode', 'Save $5 per page', 'Consistent Art Style', 'Commercial Rights'] },
                    { name: '၈+ စာမျက်နှာ', price: '$30', priceMMK: '120,000 MMK', sub: 'တစ်ချပ်လျှင်', featured: false, features: ['Long Form / Series', 'Save $10 per page', 'Milestone Payments', 'Full Production'] },
                ]
            },
            {
                id: 'animation',
                title: 'အန်နီမေးရှင်း',
                icon: 'fa-film',
                packages: [
                    { name: 'Essential Story', price: '$200', priceMMK: '800,000 MMK', sub: 'ရိုးရှင်းပြီး ချစ်စဖွယ်', featured: false, features: ['ရိုးရှင်းသော Motion', 'ရိုးရှင်းသောနောက်ခံ', 'Stock Music ပါဝင်သည်', 'ပြင်ဆင်ချက် ၁ ကြိမ်'] },
                    { name: 'Cinematic Story', price: '$400', priceMMK: '1,600,000 MMK', sub: 'စိတ်လှုပ်ရှားဖွယ်ဇာတ်လမ်း', featured: true, features: ['အသေးစိတ်ဇာတ်ကောင်သရုပ်ဆောင်မှု', 'လက်ဆွဲနောက်ခံများ', 'Licensed Music + Voiceover', 'ပြင်ဆင်ချက် ၃ ကြိမ်'] },
                ],
                workflow: [
                    { title: 'Brief & Vision', text: 'သင့်အိုင်ဒီယာနှင့် reference များ ပြောပြပါ။' },
                    { title: 'Quote & Deposit', text: 'မစတင်မီ ၅၀% ကြိုတင်ပေးချေရပါမည်။' }
                ],
                faqs: [
                    { q: '၁ မိနစ်စာ ဗီဒီယို ဘယ်လောက်ကြာမလဲ?', a: 'ပုံမှန်အားဖြင့် ၃ ပတ်မှ ၄ ပတ်ခန့် ကြာနိုင်ပါသည်။' }
                ],
                addons: [
                    { name: 'ပိုမိုပြင်ဆင်ချက်', usd: '$15', mmk: '60,000 MMK' }
                ]
            }
        ]
    }
};

export const DEFAULT_CONFIG = {
    en: EN_DEFAULTS,
    mm: MM_DEFAULTS,
    contact: { // Global links
        email: 'bekyoverse@gmail.com',
        links: {
            telegram: 'https://t.me/bekyoverse_bot',
            messenger: 'https://m.me/bekyoverse',
            facebook: 'https://www.facebook.com/bekyoverse',
            instagram: 'https://www.instagram.com/bekyoverse/',
        }
    }
};

const CONFIG_KEY = 'bekyoverse_site_config_v2';

export function getSiteConfig() {
    if (typeof window === 'undefined') return DEFAULT_CONFIG;
    try {
        const saved = localStorage.getItem(CONFIG_KEY);
        if (!saved) return DEFAULT_CONFIG;

        let data = JSON.parse(saved);

        // Migration helper: If old structure (no en/mm) exists, move to en/mm
        if (!data.en || !data.mm) {
            const oldData = { ...data };
            data = {
                en: oldData,
                mm: JSON.parse(JSON.stringify(MM_DEFAULTS)), // Use MM defaults
                contact: oldData.contact || DEFAULT_CONFIG.contact
            };

            // Cleanup migrated en data if it was top-level
            delete (data.en as any).contact;
        }

        // Deep migration for portfolio (handled within en/mm if they were merged)
        [data.en, data.mm].forEach(lang => {
            if (lang && lang.portfolio && Array.isArray(lang.portfolio.videos)) {
                lang.portfolio = {
                    categories: [
                        { id: 'featured', title: lang === data.en ? 'Featured Work' : 'လက်ရာများ', videos: lang.portfolio.videos }
                    ]
                };
            }
        });

        return data;
    } catch (e) {
        return DEFAULT_CONFIG;
    }
}

export function saveSiteConfig(config: any) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
    }
}
