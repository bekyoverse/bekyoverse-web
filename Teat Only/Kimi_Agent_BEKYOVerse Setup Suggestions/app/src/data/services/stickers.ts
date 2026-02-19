export interface StickerServiceData {
    meta: { title: string; desc: string };
    hero: { title: string; subtitle: string };
    pricing: {
        title: string;
        static: { title: string; price: string; mmk: string; desc: string; features: string[] };
        animated: { title: string; price: string; mmk: string; desc: string; features: string[] };
        note?: string;
    };
    surcharges: { title: string; items: { title: string; icon: string; price: string; mmk: string; desc: string }[] };
    quantity: { title: string; rows: { qty: string; discount: string; price: string; mmk: string; highlight?: boolean }[] };
    addons: { title: string; items: { name: string; price: string; mmk: string }[] };
    workflow: { title: string; steps: { num: string; title: string; icon: string; desc: string }[] };
    revision: { title: string; items: { stage: string; allowed: string }[]; note?: string };
    payment: { title: string; policies: { title: string; icon: string; content: string[] }[] };
    faq: { title: string; items: { question: string; answer: string }[] };
}

export const stickerData: Record<'en' | 'mm', StickerServiceData> = {
    en: {
        meta: {
            title: "Telegram Sticker Service - BEKYOVerse",
            desc: "Custom Telegram Stickers by BEKYOVerse. Static and Animated sticker packs for your personal brand or community."
        },
        hero: {
            title: "Telegram Sticker Service",
            subtitle: "Express yourself with custom stickers"
        },
        pricing: {
            title: "Base Price per Sticker",
            static: {
                title: "Static Sticker",
                price: "$15",
                mmk: "60,000 MMK",
                desc: "Full color, clean line art, expressive pose. Perfect for general emotions.",
                features: ["High-Res PNG", "Telegram Format (512px)", "White Outline included"]
            },
            animated: {
                title: "Animated Sticker",
                price: "$25",
                mmk: "100,000 MMK",
                desc: "Smooth loop animation (TGS/WebM). Brings your character to life.",
                features: ["Smooth 3s Loop", "TGS / WebM Format", " optimized file size"]
            },
            note: "Price is for 1 character. Complex designs may incur a surcharge."
        },
        surcharges: {
            title: "Animation Complexity Surcharges",
            items: [
                { title: "Simple Motion", icon: "fas fa-smile", price: "+$0", mmk: "+0 MMK", desc: "Blinking, simple emote, floating hearts, basic head tilt." },
                { title: "Moderate Action", icon: "fas fa-hand-paper", price: "+$10", mmk: "+40,000 MMK", desc: "Waving hand, laughing (body moves), clapping, tears flowing." },
                { title: "Complex Action", icon: "fas fa-running", price: "+$20", mmk: "+80,000 MMK", desc: "Running, dancing, full body transformation, complex VFX." }
            ]
        },
        quantity: {
            title: "Quantity Discounts",
            rows: [
                { qty: "1 - 4 Stickers", discount: "None", price: "$15 / $25", mmk: "60k / 100k" },
                { qty: "5 - 9 Stickers", discount: "5% OFF", price: "$14.25 / $23.75", mmk: "57k / 95k", highlight: true },
                { qty: "10 - 19 Stickers", discount: "10% OFF", price: "$13.50 / $22.50", mmk: "54k / 90k", highlight: true },
                { qty: "20+ Stickers", discount: "15% OFF", price: "$12.75 / $21.25", mmk: "51k / 85k", highlight: true }
            ]
        },
        addons: {
            title: "Add-On Services",
            items: [
                { name: "Additional Character in one sticker", price: "+80%", mmk: "of base price" },
                { name: "Rush Delivery (Priority)", price: "+50%", mmk: "of total" },
                { name: "Source File (.AI / .AEP)", price: "+30%", mmk: "of total" },
                { name: "Copyright Transfer (Commercial)", price: "+100%", mmk: "of total" }
            ]
        },
        workflow: {
            title: "Workflow",
            steps: [
                { num: "01", title: "List & References", icon: "fas fa-list", desc: "Send me a list of emotions (e.g., Happy, Sad, Angry) and character references." },
                { num: "02", title: "Quote & Deposit", icon: "fas fa-calculator", desc: "I calculate the total with discounts. 50% deposit required." },
                { num: "03", title: "Sketches", icon: "fas fa-pencil-alt", desc: "Drafts of all stickers. You can change expressions here." },
                { num: "04", title: "Line & Color", icon: "fas fa-paint-brush", desc: "Clean lines and color. For animated, this is the base asset." },
                { num: "05", title: "Animation (If any)", icon: "fas fa-film", desc: "Motion is added. Preview sent as GIF/Video." },
                { num: "06", title: "Delivery", icon: "fas fa-paper-plane", desc: "Final files sent (PNG/TGS). I can also upload the pack for you." }
            ]

        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Sketch Stage", allowed: "Unlimited changes to expression and pose." },
                { stage: "Line/Color", allowed: "Minor tweaks only. No pose changes." },
                { stage: "Animation", allowed: "Timing adjustments only. No structural changes." }
            ],
            note: "2 Revision rounds included per stage. Extra rounds: $5 / 20,000 MMK."
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "Schedule", icon: "fas fa-percentage", content: ["50% Deposit", "50% Final"] },
                { title: "Rights", icon: "fas fa-shield-alt", content: ["Personal Use Only", "Commercial +100%"] }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                { question: "Can you upload the pack for me?", answer: "Yes! If you want, I can create the pack link in Telegram and send it to you as 'Add Sticker'." },
                { question: "Do I get Commercial Rights?", answer: "The base price is for Personal Use (Telegram chat). For selling merchandise or branding usage, a Commercial License fee (+100%) applies." },
                { question: "What is the max length for animation?", answer: "Telegram limits stickers to 3 seconds loop and under 64KB. I optimize everything to fit these rules." }
            ]
        }
    },
    mm: {
        meta: {
            title: "Telegram Sticker Service - BEKYOVerse",
            desc: "BEKYOVerse Telegram Sticker ဝန်ဆောင်မှု။ သင့်အတွက် သီးသန့် Static နှင့် Animated Sticker Pack များ။"
        },
        hero: {
            title: "Telegram Sticker Service",
            subtitle: "Chat Box ထဲမှာ ကိုယ့်စတိုင်နဲ့ကိုယ်"
        },
        pricing: {
            title: "Sticker တစ်ခု ဈေးနှုန်း",
            static: {
                title: "Static (မလှုပ်)",
                price: "$15",
                mmk: "60,000 MMK",
                desc: "အရောင်စုံ၊ လိုင်းသေသပ်၊ မျက်နှာအမူအရာ ပီပြင်သည်။",
                features: ["High-Res PNG", "Telegram Format (512px)", "အနားကွပ် (White Outline) ပါဝင်"]
            },
            animated: {
                title: "Animated (လှုပ်ရှား)",
                price: "$25",
                mmk: "100,000 MMK",
                desc: "ချောမွေ့သော Loop Animation (TGS/WebM)။",
                features: ["3s Smooth Loop", "TGS / WebM Format", "ဖိုင်ဆိုဒ် optimize လုပ်ပေးသည်"]
            },
            note: "ဇာတ်ကောင် ၁ ကောင်အတွက် ဈေးနှုန်းဖြစ်သည်။ ရှုပ်ထွေးပါက ဈေးနှုန်း အเปลี่ยนแปลง ရှိနိုင်ပါသည်။"
        },
        surcharges: {
            title: "Animation အခက်အခဲအပေါ် မူတည်သော ဈေးနှုန်းများ",
            items: [
                { title: "ရိုးရှင်းသော လှုပ်ရှားမှု", icon: "fas fa-smile", price: "+$0", mmk: "+0 MMK", desc: "မျက်တောင်ခတ်၊ ခေါင်းညိတ်၊ အသည်းပုံလေးများ ပေါ်လာခြင်း။" },
                { title: "အသင့်အတင့် လှုပ်ရှားမှု", icon: "fas fa-hand-paper", price: "+$10", mmk: "+40,000 MMK", desc: "လက်ဝှေ့ယမ်းခြင်း၊ ရယ်မောခြင်း (ခန္ဓာကိုယ်လှုပ်)၊ လက်ခုပ်တီးခြင်း။" },
                { title: "ရှုပ်ထွေးသော လှုပ်ရှားမှု", icon: "fas fa-running", price: "+$20", mmk: "+80,000 MMK", desc: "ပြေးလွှားခြင်း၊ ကခုန်ခြင်း၊ ပုံစံပြောင်းသွားခြင်း (Transformation)၊ VFX များ။" }
            ]
        },
        quantity: {
            title: "Quantity Discounts (အများဈေး)",
            rows: [
                { qty: "၁ - ၄ ခု", discount: "မရှိ", price: "$15 / $25", mmk: "60k / 100k" },
                { qty: "၅ - ၉ ခု", discount: "5% OFF", price: "$14.25 / $23.75", mmk: "57k / 95k", highlight: true },
                { qty: "၁၀ - ၁၉ ခု", discount: "10% OFF", price: "$13.50 / $22.50", mmk: "54k / 90k", highlight: true },
                { qty: "၂၀ နှင့် အထက်", discount: "15% OFF", price: "$12.75 / $21.25", mmk: "51k / 85k", highlight: true }
            ]
        },
        addons: {
            title: "ထပ်ဆောင်း ဝန်ဆောင်မှုများ",
            items: [
                { name: "Sticker တစ်ခုထဲတွင် ဇာတ်ကောင်ထပ်ထည့်ခြင်း", price: "+80%", mmk: "မူရင်းဈေး၏ +80%" },
                { name: "အမြန်လိုချင်လျှင် (Priority)", price: "+50%", mmk: "စုစုပေါင်း၏ +50%" },
                { name: "Source File (.AI / .AEP) ယူလျှင်", price: "+30%", mmk: "စုစုပေါင်း၏ +30%" },
                { name: "Commercial License (စီးပွားဖြစ်သုံး)", price: "+100%", mmk: "စုစုပေါင်း၏ +100%" }
            ]
        },
        workflow: {
            title: "လုပ်ငန်းစဉ်",
            steps: [
                { num: "01", title: "စာရင်း နှင့် ပုံစံ", icon: "fas fa-list", desc: "လိုချင်တဲ့ Emotions စာရင်း (ဥပမာ - ပျော်၊ ဝမ်းနည်း၊ စိတ်ဆိုး) နဲ့ ဇာတ်ကောင်ပုံ ပေးပို့ပါ။" },
                { num: "02", title: "ဈေးနှုန်းတွက်ချက်ခြင်း", icon: "fas fa-calculator", desc: "အရေအတွက်လျော့ဈေး (Discount) နဲ့ စုစုပေါင်းကို တွက်ပေးပါမယ်။ 50% စပေါ် လွှဲရပါမယ်။" },
                { num: "03", title: "ပုံကြမ်း (Sketches)", icon: "fas fa-pencil-alt", desc: "Sticker အားလုံးအတွက် ပုံကြမ်းဆွဲပြပါမယ်။ အမူအရာ ပြင်ချင်ရင် ဒီမှာ ပြင်ရပါမယ်။" },
                { num: "04", title: "လိုင်း နှင့် ဆေးရောင်", icon: "fas fa-paint-brush", desc: "လိုင်းသပ်သပ်ရပ်ရပ်နဲ့ ဆေးရောင်ထည့်ပါမယ်။ Animated အတွက်ဆိုရင် ဒါက Base ပါ။" },
                { num: "05", title: "Animation (ရွေးထားလျှင်)", icon: "fas fa-film", desc: "လှုပ်ရှားမှု ထည့်ပါမယ်။ GIF/Video နဲ့ အစမ်းပြပါမယ်။" },
                { num: "06", title: "ပေးပို့ခြင်း", icon: "fas fa-paper-plane", desc: "ဖိုင်များ (PNG/TGS) ပေးပို့ပါမယ်။ Telegram မှာ Pack တည်ပေးစေချင်ရင်လည်း လုပ်ပေးပါတယ်။" }
            ]
        },
        revision: {
            title: "ပြင်ဆင်ခွင့် မူဝါဒ",
            items: [
                { stage: "Sketch အဆင့်", allowed: "အကန့်အသတ်မရှိ ပြင်ဆင်နိုင်သည်။" },
                { stage: "Line/Color", allowed: "အနည်းငယ်သာ ပြင်နိုင်သည်။" },
                { stage: "Animation", allowed: "Timing သာ ချိန်ညှိနိုင်သည်။" }
            ],
            note: "အဆင့်တိုင်းတွင် ပြင်ဆင်ခွင့် ၂ ကြိမ်ပါသည်။ ထပ်တိုး: $5 / 20,000 MMK."
        },
        payment: {
            title: "ငွေပေးချေမှု စည်းကမ်းများ",
            policies: [
                { title: "အချိန်ဇယား", icon: "fas fa-percentage", content: ["50% စပေါ်", "50% ပြီးစီးချိန်"] },
                { title: "ပိုင်ဆိုင်မှု", icon: "fas fa-shield-alt", content: ["Personal Use သီးသန့်", "Commercial +100%"] }
            ]
        },
        faq: {
            title: "မေးလေ့ရှိသော မေးခွန်းများ",
            items: [
                { question: "Pack ကို Telegram မှာ တင်ပေးလား?", answer: "ရပါတယ်ခင်ဗျာ။ ကျွန်တော်ကိုယ်တိုင် Pack create လုပ်ပြီး Link ပေးပို့နိုင်ပါတယ်။ Link နှိပ်ပြီး Add Sticker လုပ်လိုက်ရုံပါပဲ။" },
                { question: "Commercial Rights ပါလား?", answer: "ပုံမှန်ဈေးနှုန်းက Personal Use (ချက်ဘောက်စ်သုံးရန်) သက်သက်ပါ။ ကုန်ပစ္စည်း Logo သို့မဟုတ် စီးပွားဖြစ် သုံးမယ်ဆိုရင် License fee (+100%) ပေးဆောင်ရပါမယ်။" },
                { question: "Video ဘယ်လောက်ကြာကြာ ရလဲ?", answer: "Telegram က 3 စက္ကန့် Loop နဲ့ ဖိုင်ဆိုဒ် 64KB အောက်ပဲ လက်ခံပါတယ်။ အဲ့ဒီ စည်းကမ်းနဲ့အညီ ဝင်အောင် လုပ်ပေးပါတယ်။" }
            ]
        }
    }
};
