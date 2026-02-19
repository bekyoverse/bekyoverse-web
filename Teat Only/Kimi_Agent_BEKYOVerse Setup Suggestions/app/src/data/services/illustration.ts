export const illustrationData = {
    en: {
        meta: {
            title: "Illustration Service - BEKYOVerse",
            desc: "Custom Illustration & Digital Art by BEKYOVerse. Character portraits, cover art, music covers, thumbnails and more."
        },
        hero: {
            title: "Illustration Service",
            subtitle: "One artwork. Your vision, fully realized."
        },
        pricing: {
            title: "Pricing",
            personal: {
                title: "Personal Use",
                subName: "Fanart · OC · Gift · Portrait · Seasonal Art",
                priceRange: "$30 – $60",
                mmkRange: "120,000 – 240,000 MMK",
                features: [
                    "For personal enjoyment, gifts, or non-commercial use",
                    "High-resolution PNG file (300 DPI)",
                    "Transparent BG version included",
                    "Source file included",
                    "2 Revision rounds"
                ]
            },
            commercial: {
                title: "Commercial Use",
                subName: "Cover Art · Music Cover · Thumbnail · Brand · Merch",
                priceRange: "$50 – $100",
                mmkRange: "200,000 – 400,000 MMK",
                features: [
                    "Full commercial rights included",
                    "Book covers, music singles, EP/album art",
                    "YouTube thumbnails, social media visuals",
                    "Merchandise, brand use, print",
                    "High-resolution PNG file (300 DPI)",
                    "Transparent BG + Web-optimized versions",
                    "Source file included",
                    "2 Revision rounds"
                ],
                featured: true,
                badge: "Commercial"
            },
            note: "Final price is confirmed after reviewing your brief. The range reflects complexity — a simple bust portrait sits at the lower end, a detailed scene with multiple characters at the higher end."
        },
        whatIMake: {
            title: "What I Can Make",
            items: [
                "Character Portraits", "OC / Original Characters", "Fanart",
                "Book & Novel Covers", "Music Single Cover", "EP / Album Art",
                "YouTube Thumbnails", "Podcast Cover", "Social Media Visuals",
                "Seasonal & Event Art", "Gift Illustration", "Couple / Group Portrait",
                "Merchandise Art", "Brand Illustration"
            ],
            note: "Don't see what you need? Just describe it — if I can draw it, I will."
        },
        factors: {
            title: "What Affects the Final Price",
            items: [
                { icon: "fas fa-user", title: "Number of Characters", desc: "More characters = more time. First character is included in base price." },
                { icon: "fas fa-mountain", title: "Background Complexity", desc: "No BG / flat color = lower end. Detailed scene with multiple elements = higher end." },
                { icon: "fas fa-font", title: "Typography / Text", desc: "Title text, song name, or any lettering included in the artwork adds to the scope." },
                { icon: "fas fa-ruler-combined", title: "Dimensions / Format", desc: "Square, portrait, landscape, or platform-specific sizes (e.g. Spotify 3000×3000px)." }
            ]
        },
        surcharges: {
            title: "Surcharges",
            items: [
                { label: "Extra Character Surcharge", sub: "Applied from the 2nd character onwards, per character", price: "+$20", mmk: "+80,000 MMK each" }
            ]
        },
        workflow: {
            title: "Workflow",
            steps: [
                { num: "01", title: "Brief & Reference", icon: "fas fa-comments", desc: "Tell me what you want — character description, mood, purpose, and any references you have. The more detail, the better." },
                { num: "02", title: "Quote Confirmation", icon: "fas fa-calculator", desc: "I review your brief and confirm the final price before anything starts. No surprises." },
                { num: "03", title: "Deposit Payment", icon: "fas fa-wallet", desc: "50% deposit required before work begins. Work starts after payment is confirmed.", depositTag: "50% Deposit" },
                { num: "04", title: "Sketch", icon: "fas fa-pencil-alt", desc: "A rough sketch is shared for composition and pose approval before moving to final line art." },
                { num: "05", title: "Color & Finish", icon: "fas fa-paint-brush", desc: "Flat color applied, details refined. Final revision round happens here before export." },
                { num: "06", title: "Final Payment & Delivery", icon: "fas fa-check-circle", desc: "Remaining 50% paid, then all files delivered via Google Drive or WeTransfer.", depositTag: "50% Final" }
            ],
            note: "After delivery, a 7-day support window is included for minor fixes and file format requests."
        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Sketch", allowed: "Composition, pose, and layout changes. Up to 2 major direction changes (extra redraws: $15 / 60,000 MMK each)." },
                { stage: "Color & Detail", allowed: "Color palette changes, minor element adjustments. No full redraws at this stage." },
                { stage: "Final / After Export", allowed: "File format corrections only. No visual changes after final approval." }
            ],
            note: "Each order includes 2 revision rounds. Send all feedback in one message per round. Extra rounds are $15 / 60,000 MMK each."
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "Payment Schedule", icon: "fas fa-percentage", content: ["50% deposit before work starts", "50% final payment before files are released", "Deposit is non-refundable once sketching has begun"] },
                { title: "Accepted Methods", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "Bank Transfer (Myanmar)", "PayPal / Wise (International)"] },
                { title: "Cancellation Policy", icon: "fas fa-file-contract", content: ["Cancelled before sketch: full refund", "Cancelled after sketch: deposit forfeited", "No refund after final delivery"] },
                { title: "Rights & Ownership", icon: "fas fa-shield-alt", content: ["Personal: for non-commercial use only", "Commercial: full commercial rights on final payment", "Portfolio display rights retained by BEKYOVerse", "Request private/NDA for confidentiality"] }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                { question: "How do I know the final price before paying?", answer: "Send me your brief first — what you want, how many characters, background complexity, and purpose (personal or commercial). I'll give you a confirmed price before any payment is made. No surprises." },
                { question: "What's the difference between personal and commercial?", answer: "Personal use means the artwork is for your own enjoyment — a gift, wallpaper, fanart, or personal portrait. Commercial use means you'll use it to make money or promote a business — book covers, music releases, merchandise, brand content, social media for your business, etc." },
                { question: "Can I use a personal-use illustration commercially later?", answer: "Yes — you can upgrade to commercial rights by paying the difference in price. Contact me before using it commercially." },
                { question: "Do you draw in any style or only your own?", answer: "I work in my own flat cartoon style. If you need me to match a very specific existing style, send references and I'll let you know if it's achievable. Style adaptation may affect pricing." },
                { question: "Can you add text / title to the artwork?", answer: "Yes. Song titles, book titles, names, or any text can be included in the artwork. Let me know in your brief what text you need and what style or mood you want for it." },
                { question: "What file formats will I receive?", answer: "PNG (300 DPI, print-ready), PNG with transparent background, web-optimized version (72 DPI), and the source file. For platform-specific exports (e.g. Spotify 3000×3000px, YouTube 2560×1440px), just let me know the platform and I'll export at the correct size." },
                { question: "How long does it take?", answer: "Typically 5–7 days for a single illustration. Complex pieces with multiple characters or detailed backgrounds may take up to 10 days. Rush delivery (timeline halved) is available for a +50% surcharge — contact me first to check availability." }
            ]
        }
    },
    mm: {
        meta: {
            title: "Illustration Service - BEKYOVerse",
            desc: "BEKYOVerse Illustration ဝန်ဆောင်မှု။ Character Design, Cover Art နှင့် အခြားသော Digital Art များ။"
        },
        hero: {
            title: "Illustration Service",
            subtitle: "တစ်ပုံတည်း။ သင့်အိပ်မက်၊ အပြည့်အဝ ဖန်တီးပေး။"
        },
        pricing: {
            title: "Pricing",
            personal: {
                title: "Personal Use",
                subName: "Fanart · OC · လက်ဆောင် · Portrait · ရာသီ Art",
                priceRange: "$30 – $60",
                mmkRange: "120,000 – 240,000 MMK",
                features: [
                    "ကိုယ်ပိုင်အသုံးပြုခြင်း၊ လက်ဆောင် သို့မဟုတ် စီးပွားရေးမဟုတ်သောအသုံးပြုမှုအတွက်",
                    "High-resolution PNG ဖိုင် (300 DPI)",
                    "Transparent BG ဗားရှင်း ပါဝင်",
                    "Source file ပါဝင်",
                    "ပြင်ဆင်ခွင့် ၂ ကြိမ်"
                ]
            },
            commercial: {
                title: "Commercial Use",
                subName: "Cover Art · Music Cover · Thumbnail · Brand · Merch",
                priceRange: "$50 – $100",
                mmkRange: "200,000 – 400,000 MMK",
                features: [
                    "စီးပွားရေး အခွင့်အရေး အပြည့်အဝ ပါဝင်",
                    "စာအုပ်မျက်နှာဖုံး၊ သီချင်း single၊ EP/album art",
                    "YouTube thumbnail၊ social media ပုံများ",
                    "Merchandise၊ brand အသုံးပြုမှု၊ print",
                    "High-resolution PNG ဖိုင် (300 DPI)",
                    "Transparent BG + Web-optimized ဗားရှင်းများ",
                    "Source file ပါဝင်",
                    "ပြင်ဆင်ခွင့် ၂ ကြိမ်"
                ],
                featured: true,
                badge: "Commercial"
            },
            note: "နောက်ဆုံးစျေးနှုန်းကို သင့် brief ကြည့်ပြီး အတည်ပြုပေးမည်။ အပိုင်းအခြားသည် ရှုပ်ထွေးမှုပမာဏပေါ် မူတည်သည် — ရိုးရှင်းသော bust portrait သည် အောက်ဘက်ပိုင်းတွင်ရှိပြီး ဇာတ်ကောင်များစွာပါသော ရှုခင်းသည် အပေါ်ဘက်ပိုင်းတွင်ရှိသည်။"
        },
        whatIMake: {
            title: "ဆွဲပေးနိုင်သောပုံများ",
            items: [
                "Character Portraits", "OC / Original Characters", "Fanart",
                "စာအုပ် & Novel Covers", "Music Single Cover", "EP / Album Art",
                "YouTube Thumbnails", "Podcast Cover", "Social Media Visuals",
                "ရာသီ & ပွဲတော် Art", "လက်ဆောင် Illustration", "တွဲဖက် / အုပ်စု Portrait",
                "Merchandise Art", "Brand Illustration"
            ],
            note: "သင်လိုချင်သည့်ပုံ မတွေ့ဘူးလား? ဖော်ပြပေးလိုက်ပါ — ဆွဲနိုင်သည်ဆိုလျှင် ဆွဲပေးမည်။"
        },
        factors: {
            title: "နောက်ဆုံးစျေးနှုန်းကို သက်ရောက်သောအချက်များ",
            items: [
                { icon: "fas fa-user", title: "ဇာတ်ကောင်အရေအတွက်", desc: "ဇာတ်ကောင်များများဆိုလေ = အချိန်ပိုကုန်လေ။ ပထမဇာတ်ကောင်တစ်ယောက်သည် base စျေးထဲတွင် ပါဝင်သည်။" },
                { icon: "fas fa-mountain", title: "နောက်ခံ ရှုပ်ထွေးမှု", desc: "Background မပါ / flat color = အောက်ဘက်ပိုင်း။ အသေးစိတ် ရှုခင်း = အပေါ်ဘက်ပိုင်း။" },
                { icon: "fas fa-font", title: "Typography / Text", desc: "ခေါင်းစဉ် text၊ သီချင်းအမည် သို့မဟုတ် စာသား မည်သည်ကမဆို artwork ထဲ ထည့်ပါက scope ကို တိုးစေသည်။" },
                { icon: "fas fa-ruler-combined", title: "အရွယ်အစား / Format", desc: "Square၊ portrait၊ landscape၊ သို့မဟုတ် platform အလိုက် အရွယ်အစားများ (ဥပမာ Spotify 3000×3000px)။" }
            ]
        },
        surcharges: {
            title: "အပိုကြေးများ",
            items: [
                { label: "ဇာတ်ကောင် အပိုကြေး", sub: "ဒုတိယဇာတ်ကောင်မှစ၍ တစ်ယောက်ချင်းစီအတွက် ကောက်ခံသည်", price: "+$20", mmk: "+80,000 MMK each" }
            ]
        },
        workflow: {
            title: "Workflow",
            steps: [
                { num: "01", title: "Brief & Reference", icon: "fas fa-comments", desc: "သင်လိုချင်သည်ကို ပြောပါ — ဇာတ်ကောင်ဖော်ပြချက်၊ mood၊ ရည်ရွယ်ချက် နှင့် reference ပုံများ။ အသေးစိတ် ပိုပြောလေ ပိုကောင်းလေ။" },
                { num: "02", title: "Quote Confirmation", icon: "fas fa-calculator", desc: "သင့် brief ကို စစ်ဆေးပြီး မည်သည့်အလုပ်မဆို မစတင်မီ နောက်ဆုံးစျေးနှုန်း အတည်ပြုမည်။ အံ့သြမှုမရှိ။" },
                { num: "03", title: "Deposit Payment", icon: "fas fa-wallet", desc: "အလုပ်မစမီ 50% ကြိုငွေ ပေးဆောင်ရမည်။ ငွေပေးချေမှု အတည်ပြုပြီးမှ အလုပ်စတင်မည်။", depositTag: "50% Deposit" },
                { num: "04", title: "Sketch", icon: "fas fa-pencil-alt", desc: "နောက်ဆုံး line art သို့ မသွားမီ ဖွဲ့စည်းပုံနှင့် အနေအထား အတည်ပြုရန် rough sketch တစ်ခု မျှဝေပေးမည်။" },
                { num: "05", title: "Color & Finish", icon: "fas fa-paint-brush", desc: "Flat color ဆေးဆိုးပြီး အသေးစိတ် ပြင်ဆင်မည်။ Export မလုပ်မီ နောက်ဆုံး ပြင်ဆင်မှု ဤနေရာတွင် ဖြစ်ပေါ်သည်။" },
                { num: "06", title: "Final Payment & Delivery", icon: "fas fa-check-circle", desc: "ကျန် 50% ပေးချေပြီးနောက် ဖိုင်အားလုံးကို Google Drive သို့မဟုတ် WeTransfer မှတဆင့် ပို့ပေးမည်။", depositTag: "50% Final" }
            ],
            note: "ပေးပို့ပြီးနောက် အသေးစားပြင်ဆင်မှုများနှင့် ဖိုင် format တောင်းဆိုမှုများအတွက် ၇ ရက် support window ပါဝင်သည်။"
        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Sketch", allowed: "ဖွဲ့စည်းပုံ၊ အနေအထား နှင့် layout ပြောင်းလဲမှုများ။ ဦးတည်ချက် အကြီးအကျယ် ပြောင်းလဲမှု ၂ ကြိမ်အထိ (အပိုဆွဲပြင်မှု: $15 / 60,000 MMK တစ်ကြိမ်)။" },
                { stage: "Color & Detail", allowed: "အရောင် palette ပြောင်းလဲမှု၊ အသေးစားဒြပ်စင် ချိန်ညှိမှုများ။ ဤအဆင့်တွင် အပြည့်အဝ ပြန်ဆွဲ၍ မရပါ။" },
                { stage: "Final / After Export", allowed: "ဖိုင် format ပြင်ဆင်မှုများသာ။ နောက်ဆုံး အတည်ပြုပြီးနောက် မြင်နိုင်သော ပြောင်းလဲမှုများ မပြုလုပ်ပါ။" }
            ],
            note: "အော်ဒါတစ်ခုချင်းစီတွင် ပြင်ဆင်မှု ၂ ကြိမ် ပါဝင်သည်။ တစ်ကြိမ်လျှင် feedback အားလုံးကို မက်ဆေ့တစ်ခုတည်းဖြင့် ပို့ပေးပါ။ အပိုကြိမ်များ $15 / 60,000 MMK တစ်ကြိမ်။"
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "ငွေပေးချေမှုအစီအစဉ်", icon: "fas fa-percentage", content: ["အလုပ်မစမီ 50% ကြိုငွေ", "ဖိုင်များ ထုတ်ပေးမည့်မတိုင်မီ 50% နောက်ဆုံးငွေ", "Sketch စပြီးသောအခါ ကြိုငွေ မပြန်အမ်း"] },
                { title: "လက်ခံသောနည်းလမ်းများ", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "ဘဏ်လွှဲ (မြန်မာ)", "PayPal / Wise (နိုင်ငံတကာ)"] },
                { title: "ပယ်ဖျက်မှုမူဝါဒ", icon: "fas fa-file-contract", content: ["Sketch မဆွဲမီ ပယ်ဖျက်ခဲ့သော် ငွေပြန်အမ်းမည်", "Sketch ဆွဲပြီးနောက် ပယ်ဖျက်ခဲ့သော် ကြိုငွေ ဆုံးရှုံးမည်", "နောက်ဆုံးပေးပို့ပြီးနောက် ငွေပြန်မအမ်း"] },
                { title: "Rights & Ownership", icon: "fas fa-shield-alt", content: ["Personal: စီးပွားရေးမဟုတ်သောအသုံးပြုမှုအတွက်သာ", "Commercial: နောက်ဆုံးငွေပေးချေမှုတွင် စီးပွားရေးအခွင့်အရေး အပြည့်အဝ", "Portfolio ပြသခွင့် BEKYOVerse တွင် ထိန်းသိမ်းသည်", "လျှို့ဝှက်ရေးအတွက် private/NDA တောင်းဆိုနိုင်"] }
            ]
        },
        faq: {
            title: "မေးလေ့ရှိသော မေးခွန်းများ",
            items: [
                { question: "ငွေပေးချေမတိုင်မီ နောက်ဆုံးစျေးနှုန်းကို မည်သို့သိနိုင်မည်နည်း?", answer: "ကျွန်တော့်ဆီ brief တစ်ခု ဦးစွာ ပို့လိုက်ပါ — သင်လိုချင်သည်၊ ဇာတ်ကောင်မည်မျှ၊ နောက်ခံ ရှုပ်ထွေးမှု နှင့် ရည်ရွယ်ချက် (personal or commercial)။ ငွေပေးချေမှုမပြုမီ အတည်ပြုထားသောစျေးနှုန်း ပေးမည်။ အံ့သြမှုမရှိ။" },
                { question: "Personal နှင့် Commercial ၏ ကွာခြားချက်မှာ ဘာလဲ?", answer: "Personal use ဆိုသည်မှာ artwork ကို ကိုယ့်အတွက်သာ — လက်ဆောင်၊ wallpaper၊ fanart သို့မဟုတ် ကိုယ်ပိုင် portrait အဖြစ်သုံးသည်။ Commercial use ဆိုသည်မှာ ငွေရှာခြင်း သို့မဟုတ် စီးပွားရေး မြှင့်တင်ရန် သုံးသည် — စာအုပ်မျက်နှာဖုံး၊ သီချင်းထုတ်ဝေမှု၊ merchandise၊ brand content၊ သင့်စီးပွားရေးအတွက် social media စသည်တို့ ဖြစ်သည်။" },
                { question: "Personal-use illustration ကို နောက်ပိုင်းတွင် စီးပွားရေးအတွက် သုံးနိုင်သလား?", answer: "ဟုတ်ကဲ့ — စျေးနှုန်း ကွာခြားချက်ကို ပေးချေခြင်းဖြင့် commercial rights သို့ အဆင့်မြှင့်နိုင်သည်။ စီးပွားရေးအတွက် မသုံးမီ ကျွန်တော့်ဆီ ဆက်သွယ်ပါ။" },
                { question: "မည်သည့် style မဆို ဆွဲပေးနိုင်သလား ဒါမှမဟုတ် ကိုယ်ပိုင် style သာလား?", answer: "ကျွန်တော် ကိုယ်ပိုင် flat cartoon style ဖြင့် လုပ်ဆောင်သည်။ သင် ရှိပြီးသား style တစ်ခုနှင့် ကိုက်ညီရန် လိုအပ်ပါက reference ပို့ပြီး ဖြစ်နိုင်မဖြစ်နိုင် ပြောမည်။ Style adaptation ကြောင့် စျေးနှုန်း ပြောင်းနိုင်သည်။" },
                { question: "Artwork ထဲတွင် စာသား / ခေါင်းစဉ် ထည့်ပေးနိုင်သလား?", answer: "ဟုတ်ကဲ့။ သီချင်းခေါင်းစဉ်၊ စာအုပ်ခေါင်းစဉ်၊ အမည်များ သို့မဟုတ် မည်သည့်စာသားမဆို artwork ထဲ ထည့်သွင်းနိုင်သည်။ သင်၏ brief တွင် မည်သည့်စာသားနှင့် မည်သည့် style သို့မဟုတ် mood လိုချင်ကြောင်း ဖော်ပြပေးပါ။" },
                { question: "မည်သည့် file format များ ရမည်နည်း?", answer: "PNG (300 DPI, print-ready)၊ transparent background ပါသော PNG၊ web-optimized ဗားရှင်း (72 DPI) နှင့် source file ။ Platform အတိအကျ export (ဥပမာ Spotify 3000×3000px၊ YouTube 2560×1440px) လိုပါက platform ပြောပြပါ၊ မှန်ကန်သောအရွယ်အစားဖြင့် export ပေးမည်။" },
                { question: "ဘယ်လောက် ကြာမလဲ?", answer: "ပုံမှန်အားဖြင့် ၅-၇ ရက် အတွင်း Single illustration တစ်ခုပြီးသည်။ ဇာတ်ကောင်များစွာ သို့မဟုတ် ရှုခင်းအသေးစိတ်ပါသော ရှုပ်ထွေးသည့်အလုပ်များသည် ၁၀ ရက်အထိ ကြာနိုင်သည်။ Rush delivery (အချိန်တစ်ဝက်) ကို +50% အပိုကြေးဖြင့် ရနိုင်သည်။ ဦးစွာ ဆက်သွယ်မေးမြန်းပါ။" }
            ]
        }
    }
};
