export interface MascotServiceData {
    meta: { title: string; desc: string };
    hero: { title: string; subtitle: string };
    pricing: {
        title: string;
        packages: {
            name: string;
            subName: string;
            price: string;
            mmk: string;
            timeline: string;
            features: string[];
            featured?: boolean;
            badge?: string;
        }[];
        note?: string;
    };
    addons: { title: string; items: { name: string; price: string; mmk: string }[] };
    workflow: { title: string; steps: { num: string; title: string; icon: string; desc: string; depositTag?: string }[]; note?: string };
    revision: { title: string; items: { stage: string; allowed: string }[]; note?: string };
    payment: { title: string; policies: { title: string; icon: string; content: string[] }[] };
    faq: { title: string; items: { question: string; answer: string }[] };
}

export const mascotData: Record<'en' | 'mm', MascotServiceData> = {
    en: {
        meta: {
            title: "Mascot Design Service - BEKYOVerse",
            desc: "Custom Mascot Logo Design by BEKYOVerse. Unique characters for brands, streamers and teams."
        },
        hero: {
            title: "Mascot Design Service",
            subtitle: "Your brand's face, full of personality"
        },
        pricing: {
            title: "Pricing Packages",
            packages: [
                {
                    name: "Starter (Head)",
                    subName: "Bust / Icon",
                    price: "$45",
                    mmk: "180,000 MMK",
                    timeline: "7-10 Days",
                    features: [
                        "1 Character (Head only)",
                        "Full Color & Shading",
                        "High-Res PNG (Transparent)",
                        "Commercial Rights",
                        "Source File (.PSD)"
                    ]
                },
                {
                    name: "Standard (Half)",
                    subName: "Waist Up / Action Pose",
                    price: "$75",
                    mmk: "300,000 MMK",
                    timeline: "10-14 Days",
                    features: [
                        "1 Character (Half Body)",
                        "Dynamic Pose & Props",
                        "Full Color & Shading",
                        "High-Res PNG (Transparent)",
                        "Commercial Rights",
                        "Source File (.PSD)"
                    ],
                    featured: true,
                    badge: "Most Popular"
                },
                {
                    name: "Premium (Full)",
                    subName: "Full Body / Detailed",
                    price: "$110",
                    mmk: "440,000 MMK",
                    timeline: "14-20 Days",
                    features: [
                        "1 Character (Full Body)",
                        "Complex Pose & Details",
                        "Full Color & Shading",
                        "High-Res PNG (Transparent)",
                        "Commercial Rights",
                        "Source File (.PSD)"
                    ]
                }

            ],
            note: "All packages include commercial rights. 50% deposit required to start."
        },
        addons: {
            title: "Add-On Services",
            items: [
                { name: "Extra Revision Round", price: "$10", mmk: "40,000 MMK" },
                { name: "Additional Character", price: "+80%", mmk: "of base price" },
                { name: "Complex Background", price: "$30+", mmk: "120,000+ MMK" },
                { name: "Expression Sheet (3 faces)", price: "$40", mmk: "160,000 MMK" },
                { name: "Rush Delivery (Half Time)", price: "+50%", mmk: "of total" }
            ]
        },
        workflow: {
            title: "Workflow",
            steps: [
                { num: "01", title: "Brief & Discussion", icon: "fas fa-comments", desc: "We discuss your idea, style preferences, and usage. You send references if any." },
                { num: "02", title: "Deposit Payment", icon: "fas fa-wallet", desc: "50% non-refundable deposit is required to start the sketching phase.", depositTag: "50% Deposit" },
                { num: "03", title: "Sketch & Concept", icon: "fas fa-pencil-alt", desc: "I provide rough sketches. We refine the pose and concept here. Major changes allowed." },
                { num: "04", title: "Line Art", icon: "fas fa-pen-fancy", desc: "Clean outlines created. Refinements to details only. No major pose changes." },
                { num: "05", title: "Color & Shading", icon: "fas fa-palette", desc: "Flat colors and final rendering. Adjustments to colors allowed." },
                { num: "06", title: "Final Payment & Delivery", icon: "fas fa-check-circle", desc: "Remaining 50% paid. Final high-res files sent via Google Drive.", depositTag: "50% Final" }
            ],
            note: "I update you at every stage. You must approve each stage before I move to the next."
        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Sketch Stage", allowed: "Unlimited major changes (pose, concept, items)." },
                { stage: "Line Art Stage", allowed: "Minor detail tweaks. No pose changes." },
                { stage: "Color Stage", allowed: "Color adjustments only. No line art changes." },
                { stage: "After Delivery", allowed: "File error fixes only." }
            ],
            note: "Each package includes 2 revision rounds per stage. Extra rounds are charged at $10 / 40,000 MMK."
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "Payment Schedule", icon: "fas fa-percentage", content: ["50% deposit upfront", "50% before final delivery", "No work begins without deposit"] },
                { title: "Accepted Methods", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "Bank Transfer (Myanmar)", "PayPal / Wise (International)"] },
                { title: "Rights & Ownership", icon: "fas fa-shield-alt", content: ["You get full commercial rights", "I retain portfolio rights", "Source files included"] }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                { question: "Can I use the mascot for my logo?", answer: "Yes! All packages include Commercial Rights, so you can use it for your business logo, merchandise, streaming, etc." },
                { question: "What files do I get?", answer: "You will receive high-resolution PNGs (transparent background) and the source file (.PSD) so you can edit it later if needed." },
                { question: "How long does it take?", answer: "It depends on the complexity and package, usually between 7 to 20 days. I will give you a specific timeline when we start." },
                { question: "Can you draw in a specific style?", answer: "I specialize in anime/cartoon styles. Please check my portfolio to see if my style fits your vision. I can adapt slightly but I won't copy other artists exactly." },
                { question: "Refund Policy?", answer: "Deposits are non-refundable once work (sketching) has started. If I cannot complete the commission for any reason, a full refund will be issued." }
            ]
        }
    },
    mm: {
        meta: {
            title: "Mascot Design Service - BEKYOVerse",
            desc: "BEKYOVerse Mascot Design ဝန်ဆောင်မှု။ သင့်လုပ်ငန်းအတွက် ကိုယ်ပိုင်အမှတ်တံဆိပ် Mascot များ။"
        },
        hero: {
            title: "Mascot Design Service",
            subtitle: "သင့် Brand အတွက် သက်ဝင်လှုပ်ရှားနေသော မျက်နှာစာ"
        },
        pricing: {
            title: "ဈေးနှုန်း နှင့် ပက်ကေ့ချ်များ",
            packages: [
                {
                    name: "Starter (ခေါင်း)",
                    subName: "ပခုံးအထက် / Icon",
                    price: "$45",
                    mmk: "180,000 MMK",
                    timeline: "၇-၁၀ ရက်",
                    features: [
                        "၁ ကောင် (ခေါင်းပိုင်း)",
                        "အရောင် အပြည့်အစုံ",
                        "High-Res PNG (အောက်ခံအကြည်)",
                        "Commercial Rights ပါဝင်သည်",
                        "Source File (.PSD) ပါဝင်သည်"
                    ]
                },
                {
                    name: "Standard (တစ်ဝက်)",
                    subName: "ခါးအထက် / Action Pose",
                    price: "$75",
                    mmk: "300,000 MMK",
                    timeline: "၁၀-၁၄ ရက်",
                    features: [
                        "၁ ကောင် (ကိုယ်တစ်ပိုင်း)",
                        "Dynamic Pose နှင့် Props",
                        "အရောင် အပြည့်အစုံ",
                        "High-Res PNG (အောက်ခံအကြည်)",
                        "Commercial Rights ပါဝင်သည်",
                        "Source File (.PSD) ပါဝင်သည်"
                    ],
                    featured: true,
                    badge: "လူကြိုက်အများဆုံး"
                },
                {
                    name: "Premium (အပြည့်)",
                    subName: "တစ်ကိုယ်လုံး / အသေးစိတ်",
                    price: "$110",
                    mmk: "440,000 MMK",
                    timeline: "၁၄-၂၀ ရက်",
                    features: [
                        "၁ ကောင် (တစ်ကိုယ်လုံး)",
                        "ရှုပ်ထွေးသော Pose နှင့် အသေးစိတ်များ",
                        "အရောင် အပြည့်အစုံ",
                        "High-Res PNG (အောက်ခံအကြည်)",
                        "Commercial Rights ပါဝင်သည်",
                        "Source File (.PSD) ပါဝင်သည်"
                    ]
                }
            ]
        },
        addons: {
            title: "ထပ်ဆောင်း ဝန်ဆောင်မှုများ",
            items: [
                { name: "ပြင်ဆင်ခွင့် အကြိမ်ရေတိုးခြင်း", price: "$10", mmk: "40,000 MMK" },
                { name: "နောက်ထပ် ဇာတ်ကောင် ၁ ကောင်", price: "+80%", mmk: "မူရင်းဈေး၏ +80%" },
                { name: "နောက်ခံ အရှုပ် (Background)", price: "$30+", mmk: "120,000+ MMK" },
                { name: "မျက်နှာအမူအရာ (၃ မျိုး)", price: "$40", mmk: "160,000 MMK" },
                { name: "အမြန်လိုချင်လျှင် (အချိန်တစ်ဝက်)", price: "+50%", mmk: "စုစုပေါင်း၏ +50%" }
            ]
        },
        workflow: {
            title: "လုပ်ငန်းစဉ် အဆင့်ဆင့်",
            steps: [
                { num: "01", title: "ဆွေးနွေးခြင်း", icon: "fas fa-comments", desc: "သင့်စိတ်ကူး၊ ပုံစံနှင့် အသုံးပြုမည့်နေရာကို ဆွေးနွေးပါသည်။ Reference ပုံများရှိလျှင် ပိုကောင်းပါသည်။" },
                { num: "02", title: "စပေါ်ငွေ", icon: "fas fa-wallet", desc: "ပုံကြမ်း (Sketch) မစတင်မီ 50% စပေါ်ငွေ လွှဲပေးရပါမည်။ (ပြန်အမ်းမရပါ)", depositTag: "50% စပေါ်" },
                { num: "03", title: "ပုံကြမ်း (Sketch)", icon: "fas fa-pencil-alt", desc: "ပုံကြမ်းဆွဲပြပါမည်။ Pose နှင့် ပုံစံကို ဤအဆင့်တွင် ညှိနှိုင်းရပါမည်။ အကြီးစားပြင်ဆင်မှုများ လုပ်နိုင်ပါသည်။" },
                { num: "04", title: "လိုင်း (Line Art)", icon: "fas fa-pen-fancy", desc: "သေသပ်သော လိုင်းများဆွဲပါမည်။ အသေးစိတ်ကိုသာ ပြင်ဆင်နိုင်ပါသည်။ Pose ပြောင်းမရတော့ပါ။" },
                { num: "05", title: "ဆေးရောင် (Color)", icon: "fas fa-palette", desc: "ဆေးရောင်ထည့်ပါမည်။ အရောင်အနုအရင့် ချိန်ညှိနိုင်ပါသည်။" },
                { num: "06", title: "ကျန်ငွေ နှင့် ပေးပို့ခြင်း", icon: "fas fa-check-circle", desc: "ကျန် 50% ပေးချေပြီးလျှင် ဖိုင်များကို Google Drive မှတဆင့် ပေးပို့ပါမည်။", depositTag: "50% ကျန်ငွေ" }
            ],
            note: "အဆင့်တိုင်းတွင် သင့်ကို အသိပေးပါမည်။ သင့်အတည်ပြုချက်ရမှ နောက်တစ်ဆင့် သွားပါမည်။"
        },
        revision: {
            title: "ပြင်ဆင်ခွင့် မူဝါဒ",
            items: [
                { stage: "Sketch အဆင့်", allowed: "အကြီးစားပြင်ဆင်မှုများ (Pose, ပုံစံ, ပစ္စည်း) အကန့်အသတ်မရှိ ပြင်နိုင်သည်။" },
                { stage: "Line Art အဆင့်", allowed: "အသေးစိတ် အနည်းငယ်သာ ပြင်နိုင်သည်။ Pose ပြောင်းမရပါ။" },
                { stage: "Color အဆင့်", allowed: "အရောင် အပြောင်းအလဲသာ ရပါမည်။ လိုင်း ပြင်မရပါ။" },
                { stage: "ဖိုင်အပ်ပြီးနောက်", allowed: "ဖိုင် Error ရှိမှသာ ပြင်ပေးပါမည်။" }
            ],
            note: "အဆင့်တိုင်း၌ ပြင်ဆင်ခွင့် ၂ ကြိမ် (2 Rounds) ပါဝင်သည်။ ထပ်တိုးပြင်ဆင်လိုပါက $10 / 40,000 MMK ကျသင့်ပါမည်။"
        },
        payment: {
            title: "ငွေပေးချေမှု စည်းကမ်းများ",
            policies: [
                { title: "ပေးချေရမည့် ပုံစံ", icon: "fas fa-percentage", content: ["အလုပ်မစမီ 50% စပေါ်", "ဖိုင်မပို့မီ 50% ကျန်ငွေ", "စပေါ်မရှိလျှင် အလုပ်မစပါ"] },
                { title: "လက်ခံသော စနစ်များ", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "ဘဏ်လွှဲ (မြန်မာ)", "PayPal / Wise (ပြည်ပ)"] },
                { title: "ပိုင်ဆိုင်မှု", icon: "fas fa-shield-alt", content: ["Commercial Rights အပြည့်အဝ ရရှိမည်", "Artwork ကို Portfolio အဖြစ် ကျွန်တော် ပြခွင့်ရှိသည်", "Source file များ ထည့်ပေးသည်"] }
            ]
        },
        faq: {
            title: "မေးလေ့ရှိသော မေးခွန်းများ",
            items: [
                { question: "Mascot ကို Logo အဖြစ် သုံးလို့ရမလား?", answer: "ရပါတယ်ခင်ဗျာ။ Package တိုင်းမှာ Commercial Rights ပါဝင်ပြီးသားမို့ Logo, Merchandise, Streaming ကြိုက်ရာ နေရာမှာ သုံးနိုင်ပါတယ်။" },
                { question: "ဘာဖိုင်တွေ ရမလဲ?", answer: "High-resolution PNG (အောက်ခံအကြည်) နဲ့ Source file (.PSD) ပါ ရရှိပါမယ်။ နောက်ပိုင်း ကိုယ်တိုင် ပြန်ပြင်ချင်ရင် လွယ်ကူပါတယ်။" },
                { question: "ဘယ်လောက် ကြာမလဲ?", answer: "အခက်အခဲနဲ့ Package ပေါ်မူတည်ပြီး ၇ ရက်မှ ရက် ၂၀ ကြား ကြာနိုင်ပါတယ်။ အလုပ်စတာနဲ့ အချိန်အတိအကျကို ပြောပြပေးပါတယ်။" },
                { question: "ပုံစံ (Style) သတ်မှတ်ပြီး ဆွဲခိုင်းလို့ရလား?", answer: "ကျွန်တော်က Anime/Cartoon ပုံစံကို အဓိက ဆွဲပါတယ်။ တခြား Artist တွေကို လိုက်တုပြီး ဆွဲပေးလေ့ မရှိပါဘူး။ ကျွန်တော့် Portfolio ကို ကြည့်ပြီး နှစ်သက်မှ အပ်နှံဖို့ အကြံပြုလိုပါတယ်။" },
                { question: "ငွေပြန်အမ်းပါသလား?", answer: "အလုပ်စတင်ပြီးပါက (Sketch ဆွဲပြီးလျှင်) စပေါ်ငွေ ပြန်မအမ်းပါ။ အကြောင်းတစ်ခုခုကြောင့် ကျွန်တော် အလုပ်မပြီးမြောက်နိုင်ပါက ငွေအပြည့် ပြန်အမ်းပေးပါမည်။" }
            ]
        }
    }
};
