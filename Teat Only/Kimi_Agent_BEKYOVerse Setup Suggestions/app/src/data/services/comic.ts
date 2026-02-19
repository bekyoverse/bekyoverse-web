export const comicData = {
    en: {
        meta: {
            title: "Comic Art Service - BEKYOVerse",
            desc: "Custom Comic Art by BEKYOVerse. Full color digital comics for marketing, storytelling, education, and personal projects."
        },
        hero: {
            title: "Comic Art Service",
            subtitle: "Bringing your story to life, panel by panel"
        },
        pricing: {
            title: "Pricing — per Page",
            tiers: [
                {
                    pages: "1 - 3 Pages",
                    range: "Short Form · One-Shot · Skit",
                    price: "$40",
                    mmk: "160,000 MMK / Page",
                    example: "3 Pgs = $120 / 480k MMK",
                    dataPages: "pg"
                },
                {
                    pages: "4 - 7 Pages",
                    range: "Short Story · Marketing Comic · Episode",
                    price: "$35",
                    mmk: "140,000 MMK / Page",
                    example: "5 Pgs = $175 / 700k MMK",
                    save: "Save $5 per page",
                    featured: true,
                    badge: "Best Value",
                    dataPages: "pg"
                },
                {
                    pages: "8+ Pages",
                    range: "Long Form · Series · Chapter",
                    price: "$30",
                    mmk: "120,000 MMK / Page",
                    example: "10 Pgs = $300 / 1,200k MMK",
                    save: "Save $10 per page",
                    dataPages: "pg"
                }
            ],
            note: "Price is per page regardless of panel count. Max 4 panels per page. Pages with fewer panels are not discounted — composition and storytelling work is the same."
        },
        included: {
            title: "What's Included — Every Page",
            items: [
                "Script breakdown for visual composition", "Panel layout & storyboard",
                "Full color digital art", "Character design (per project)",
                "Backgrounds in every panel", "Dialog & lettering",
                "Speech bubbles & sound effects", "High-res export (300 DPI)",
                "Web-optimized version (72 DPI)", "Source file included",
                "Commercial rights included", "1 Revision round per page"
            ]
        },
        addons: {
            title: "Add-On Services",
            items: [
                { name: "Extra Revision Round (per page)", price: "$10", mmk: "40,000 MMK" },
                { name: "Black & White Version (Instead of Color)", price: "−$8 / page", mmk: "−32,000 MMK" },
                { name: "Cover Page Design (Title, Char, Comp)", price: "$50", mmk: "200,000 MMK" },
                { name: "Social Media Format Export (9:16 / Square)", price: "$10", mmk: "40,000 MMK" },
                { name: "Rush Delivery (Half timeline)", price: "+50%", mmk: "of total" }
            ]
        },
        workflow: {
            title: "Workflow",
            steps: [
                { num: "01", title: "Story Brief", icon: "fas fa-comments", desc: "Tell me your story — characters, setting, what happens. You don't need a full script. Just the idea and flow." },
                { num: "02", title: "Quote & Page Count", icon: "fas fa-calculator", desc: "Based on your story scope, we confirm total pages and price. Agreed before starting." },
                { num: "03", title: "Deposit Payment", icon: "fas fa-wallet", desc: "50% deposit required. Work starts after payment.", depositTag: "50% Deposit" },
                { num: "04", title: "Script Finalization", icon: "fas fa-scroll", desc: "I take your story and break it down into a script for visual composition — dialog, panel flow, pacing. You review and approve." },
                { num: "05", title: "Panel Layout & Storyboard", icon: "fas fa-border-all", desc: "Rough panel layout shared for approval. Major composition changes happen here — NOT after coloring." },
                { num: "06", title: "Line Art & Color", icon: "fas fa-paint-brush", desc: "Full line art and flat colors applied to every panel." },
                { num: "07", title: "Lettering & Dialogue", icon: "fas fa-comment-dots", desc: "Speech bubbles, dialog, and sound effects added. Final check before export." },
                { num: "08", title: "Final Payment & Delivery", icon: "fas fa-check-circle", desc: "Remaining 50% paid, then all files delivered.", depositTag: "50% Final" }
            ],
            note: "After delivery, a 7-day support window is included for minor fixes and export format requests."
        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Script & Dialogue", allowed: "Word changes, tone tweaks, rewriting dialog. Unlimited before approval." },
                { stage: "Panel Layout / Storyboard", allowed: "Panel composition, flow, and arrangement changes. This is the last stage for major changes — confirm carefully." },
                { stage: "Line Art & Color", allowed: "Minor color and detail adjustments only. No redrawing panels or composition changes here." },
                { stage: "Lettering Stage", allowed: "Dialog text corrections and typo fixes only." },
                { stage: "Final / After Export", allowed: "File format corrections only. No visual changes." }
            ],
            note: "Each order includes 1 revision round per page. Send all feedback for all pages in one batch message. Extra rounds are $10 / 40,000 MMK (per page)."
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "Payment Schedule", icon: "fas fa-percentage", content: ["50% deposit before work starts", "50% final payment before files released", "For long projects (8+), milestone payments possible", "Deposit non-refundable once script is done"] },
                { title: "Accepted Methods", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "Bank Transfer (Myanmar)", "PayPal / Wise (International)"] },
                { title: "Cancellation Policy", icon: "fas fa-file-contract", content: ["Cancel before script: full refund", "Cancel after script: deposit forfeited", "Cancel mid-project: pay for completed pages, refund rest"] },
                { title: "Rights & Ownership", icon: "fas fa-shield-alt", content: ["Full commercial rights transferred on final payment", "Portfolio display rights retained by BEKYOVerse", "Request private/NDA project for confidentiality"] }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                { question: "Do I need a full script?", answer: "No. Just bring your story idea, characters, what happens, and general flow. I will break it down into a script for visual composition — dialog, panel pacing, and storytelling. You review and approve the script before I draw anything." },
                { question: "Why is a comic page more expensive than an illustration?", answer: "A comic page is a full production — script breakdown, panel layout, multiple characters in various poses, backgrounds in every panel, coloring, lettering, and dialog bubbles. It cannot be compared to a single illustration. The price reflects the full workload involved in one page." },
                { question: "How many panels per page?", answer: "Max 4 panels per page. I will decide the best panel layout based on your story and composition needs. Pages with fewer panels are not discounted — a large panel can equal the work of four smaller ones." },
                { question: "Color or Black & White?", answer: "All comics are produced in full color by default. If you prefer Black & White, I offer a discount of $8 / 32,000 MMK per page. Mention this in your brief." },
                { question: "Can I order just one page?", answer: "Yes. Single page orders are welcome. Note that the rate will be the base rate ($40 / 160,000 MMK) — higher page counts get discounted rates." },
                { question: "Do you do ongoing series or monthly chapters?", answer: "Yes. Contact me to discuss a schedule for ongoing series or monthly chapters. For long-term projects, we can arrange a consistent rate and milestone payments." },
                { question: "What file format do I get?", answer: "You get high-resolution PNG (300 DPI) for print, a web-optimized version for posting online, and the source file (.PSD/.CLIP). If you need specific formats like Webtoon vertical scroll, let me know (additional formatting fee may apply)." }
            ]
        }
    },
    mm: {
        meta: {
            title: "Comic Art Service - BEKYOVerse",
            desc: "BEKYOVerse Comic Art ဝန်ဆောင်မှု။ ဇာတ်လမ်းဆင်ခြင်း၊ ပုံဆွဲခြင်း၊ စာစီခြင်း အပြည့်အစုံ။"
        },
        hero: {
            title: "Comic Art Service",
            subtitle: "သင့်ဇာတ်လမ်းကို panel တစ်ချပ်ချင်းစီ ဖော်ထုတ်ပေးမည်"
        },
        pricing: {
            title: "Pricing — စာမျက်နှာတစ်ချပ်လျှင်",
            tiers: [
                {
                    pages: "၁ – ၃ စာမျက်နှာ",
                    range: "တိုတောင်းသောပုံစံ · တစ်ဇာတ်ကွက် · တစ်ကြိမ်တည်း",
                    price: "$40",
                    mmk: "160,000 MMK / Page",
                    example: "၃ ချပ် = $120 / 480k MMK",
                    dataPages: "pg"
                },
                {
                    pages: "၄ – ၇ စာမျက်နှာ",
                    range: "တိုတောင်းသောဇာတ်လမ်း · Marketing Comic · Episode",
                    price: "$35",
                    mmk: "140,000 MMK / Page",
                    example: "၅ ချပ် = $175 / 700k MMK",
                    save: "Save $5 per page",
                    featured: true,
                    badge: "Best Value",
                    dataPages: "pg"
                },
                {
                    pages: "၈+ စာမျက်နှာ",
                    range: "ရှည်လျားသောပုံစံ · Series · Chapter",
                    price: "$30",
                    mmk: "120,000 MMK / Page",
                    example: "၁၀ ချပ် = $300 / 1,200k MMK",
                    save: "Save $10 per page",
                    dataPages: "pg"
                }
            ],
            note: "စျေးနှုန်းသည် panel အရေအတွက်မည်မျှပင်ဖြစ်စေ တစ်ချပ်လျှင် ဖြစ်သည်။ အများဆုံး တစ်ချပ်မှာ ၄ panel ပါဝင်သည်။ Panel နည်းသောစာမျက်နှာများကို လျှော့ချမည်မဟုတ် — ဖွဲ့စည်းမှုနှင့် storytelling အလုပ်မှာ အတူတူပင်ဖြစ်သည်။"
        },
        included: {
            title: "What's Included — စာမျက်နှာတိုင်းတွင်",
            items: [
                "Visual composition အတွက် Script ချမှတ်ခြင်း", "Panel layout & storyboard",
                "အရောင်ပြည့် digital art", "ဇာတ်ကောင်ဒီဇိုင်း (project တစ်ခုလျှင်)",
                "Panel တစ်ချပ်လျှင် နောက်ခံ", "Dialog & lettering",
                "Speech bubble & sound effect", "High-res export (300 DPI)",
                "Web-optimized version (72 DPI)", "Source file ပါဝင်သည်",
                "Commercial rights ပါဝင်သည်", "တစ်ချပ်လျှင် ပြင်ဆင်ချက် ၁ ကြိမ်"
            ]
        },
        addons: {
            title: "Add-On Services",
            items: [
                { name: "ပြင်ဆင်ချက် နောက်ထပ်တစ်ကြိမ် (တစ်ချပ်လျှင်)", price: "$10", mmk: "40,000 MMK" },
                { name: "အနက်ဖြူ Version (အရောင်အစား)", price: "−$8 / page", mmk: "−32,000 MMK" },
                { name: "Cover Page Design (ခေါင်းစဉ်၊ ဇာတ်ကောင်၊ ဖွဲ့စည်းမှု)", price: "$50", mmk: "200,000 MMK" },
                { name: "Social Media Format Export (vertical 9:16 / square)", price: "$10", mmk: "40,000 MMK" },
                { name: "Rush Delivery (timeline တစ်ဝက်လျှော့)", price: "+50%", mmk: "စုစုပေါင်း၏" }
            ]
        },
        workflow: {
            title: "Workflow",
            steps: [
                { num: "01", title: "Story Brief", icon: "fas fa-comments", desc: "သင့်ဇာတ်လမ်းကို ပြောပြပါ — ဇာတ်ကောင်များ၊ နေရာ၊ ဘာဖြစ်တတ်သည်ဆိုသည်ကို။ ပြည့်ပြည့်စုံစုံ script မဟုတ်ရလည်း ရသည်။ အိုင်ဒီယာနှင့် flow သာ ဖြစ်ရသည်။" },
                { num: "02", title: "Quote & Page Count", icon: "fas fa-calculator", desc: "သင့်ဇာတ်လမ်း scope ကို အခြေခံ၍ စုစုပေါင်းစာမျက်နှာအရေအတွက်နှင့် စျေးနှုန်းကို အတည်ပြုသည်။ မည်သည့်အရာမဆို မစတင်မီ သဘောတူသည်။" },
                { num: "03", title: "Deposit Payment", icon: "fas fa-wallet", desc: "အလုပ်မစမီ 50% deposit ပေးချေသည်။ ငွေပေးချေမှု အတည်ပြုပြီးမှ အလုပ်စတင်သည်။", depositTag: "50% Deposit" },
                { num: "04", title: "Script Finalization", icon: "fas fa-scroll", desc: "သင့်ဇာတ်လမ်းကိုယူပြီး visual composition အတွက် script ကို dialog၊ panel flow၊ pacing ဖြင့် ချမှတ်သည်။ ပုံဆွဲမတိုင်မီ သင် စစ်ဆေးပြီး အတည်ပြုရမည်။" },
                { num: "05", title: "Panel Layout & Storyboard", icon: "fas fa-border-all", desc: "စာမျက်နှာအားလုံးအတွက် rough panel layout ကို အတည်ပြုရန် မျှဝေသည်။ အဓိကဖွဲ့စည်းမှုပြောင်းလဲမှုများကို ဤနေရာတွင်သာ ပြုလုပ်ရမည် — အရောင်ဆေးပြီးနောက် မဟုတ်ပါ။" },
                { num: "06", title: "Line Art & Color", icon: "fas fa-paint-brush", desc: "Line art အပြည့်ဆွဲပြီး flat color နှင့် အသေးစိတ်များကို စာမျက်နှာတိုင်းတွင် ဖြည့်သွင်းသည်။" },
                { num: "07", title: "Lettering & Dialogue", icon: "fas fa-comment-dots", desc: "Speech bubble၊ dialog နှင့် sound effect များ ထည့်သွင်းသည်။ Export မတိုင်မီ နောက်ဆုံးစစ်ဆေးမှု ပြုလုပ်သည်။" },
                { num: "08", title: "Final Payment & Delivery", icon: "fas fa-check-circle", desc: "ကျန် 50% ပေးချေပြီးနောက် file အားလုံးကို Google Drive သို့မဟုတ် WeTransfer မှတဆင့် ပေးပို့သည်။", depositTag: "50% Final" }
            ],
            note: "ပေးပို့ပြီးနောက် သေးငယ်သောပြင်ဆင်မှုများနှင့် export format တောင်းခံမှုများအတွက် ရက် ၇ ရက် support window ပါဝင်သည်။"
        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Script & Dialogue", allowed: "စကားလုံးပြောင်းမှု၊ tone ချိန်ညှိမှု၊ dialog ပြန်ရေးမှုများ။ အတည်ပြုမတိုင်မီ ကန့်သတ်မှုမရှိ။" },
                { stage: "Panel Layout / Storyboard", allowed: "Panel ဖွဲ့စည်းမှု၊ flow နှင့် စီစဉ်မှုပြောင်းလဲမှုများ။ ဤအဆင့်သည် အဓိကပြောင်းလဲမှုများအတွက် နောက်ဆုံးအဆင့်ဖြစ်သည် — ရှေ့ဆက်မသွားမီ သေချာစွာ အတည်ပြုပါ။" },
                { stage: "Line Art & Color", allowed: "သေးငယ်သောအရောင်နှင့် အသေးစိတ်ချိန်ညှိမှုများသာ ဆောင်ရွက်နိုင်သည်။ ဤအဆင့်တွင် panel ပြန်ဆွဲမှု သို့မဟုတ် ဖွဲ့စည်းမှုပြောင်းလဲမှုများ မပြုနိုင်ပါ။" },
                { stage: "Lettering Stage", allowed: "Dialog စာသားပြင်ဆင်မှုနှင့် စာလုံးပေါင်းအမှားပြင်ဆင်မှုများသာ ဆောင်ရွက်နိုင်သည်။" },
                { stage: "Final / After Export", allowed: "File format ပြင်ဆင်မှုများသာ ဆောင်ရွက်နိုင်သည်။ နောက်ဆုံးအတည်ပြုပြီးနောက် visual ပြောင်းလဲမှုများ မပြုနိုင်ပါ။" }
            ],
            note: "မှာယူမှုတိုင်းတွင် တစ်ချပ်လျှင် ပြင်ဆင်ချက် ၁ ကြိမ် ပါဝင်သည်။ စာမျက်နှာအားလုံး၏ feedback ကို မက်ဆေ့တစ်ခုတည်းဖြင့် တစ်ပြိုင်နက် ပေးပို့ပါ။ ထပ်တိုးပြင်ဆင်ချက် တစ်ကြိမ်လျှင် $10 / 40,000 MMK (တစ်ချပ်လျှင်) ဖြစ်သည်။"
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "Payment Schedule", icon: "fas fa-percentage", content: ["အလုပ်မစမီ 50% deposit ပေးချေရမည်", "File မထုတ်မပေးမီ 50% နောက်ဆုံးငွေပေးချေရမည်", "ရှည်လျားသော project (၈ ချပ်အထက်) တွင် milestone ငွေပေးချေမှုကို စီစဉ်နိုင်သည်", "Script ရေးသားပြီးသည်နှင့် deposit သည် မပြန်အမ်း"] },
                { title: "Accepted Methods", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "Bank Transfer (မြန်မာ)", "PayPal / Wise (နိုင်ငံတကာ)"] },
                { title: "Cancellation Policy", icon: "fas fa-file-contract", content: ["Script မရေးမီ ဖျက်သိမ်းပါက: ငွေအပြည့်ပြန်အမ်းသည်", "Script အတည်ပြုပြီးနောက် ဖျက်သိမ်းပါက: deposit ဆုံးရှုံးသည်", "Project အကြားဖျက်သိမ်းပါက: ပြီးစီးသောစာမျက်နှာများ ပေးပို့မည်၊ ကျန်ငွေ ပြန်အမ်းမည်"] },
                { title: "Rights & Ownership", icon: "fas fa-shield-alt", content: ["နောက်ဆုံးငွေပေးချေပြီးသည်နှင့် commercial rights အပြည့်အဝ လွှဲပြောင်းသည်", "Portfolio display rights ကို BEKYOVerse သိမ်းဆည်းသည်", "လျှို့ဝှက်ရန် private/NDA project ကို တောင်းခံနိုင်သည်"] }
            ]
        },
        faq: {
            title: "မေးလေ့ရှိသော မေးခွန်းများ",
            items: [
                { question: "Script ပြည့်ပြည့်စုံစုံ ရေးပြီး ပေးရမလား?", answer: "မလိုပါ။ ဇာတ်ကောင်များ၊ ဘာဖြစ်တတ်သည်၊ နှင့် ယေဘုယျ flow ကိုသာ ယူဆောင်လာပါ။ ထိုအချက်များကို visual composition အတွက် script — dialog၊ panel pacing နှင့် storytelling ဖြင့် ချမှတ်ပေးမည်။ မည်သည့်ပုံမဆွဲမီ သင် script ကို စစ်ဆေးပြီး အတည်ပြုရမည်။" },
                { question: "Comic page တစ်ချပ်ကို illustration တစ်ချပ်နှင့် ဘာကြောင့် စျေးကွာနေတာလဲ?", answer: "Comic page တစ်ချပ်သည် production တစ်ခုလုံးဖြစ်သည် — script ချမှတ်ခြင်း၊ panel layout၊ pose မျိုးစုံဖြင့် ဇာတ်ကောင်များစွာ၊ panel တစ်ချပ်စီတွင် နောက်ခံ၊ အရောင်ဆေးခြင်း၊ lettering နှင့် dialog bubble များ ပါဝင်သည်။ ၎င်းကို illustration တစ်ချပ်နှင့် နှိုင်းယှဉ်၍ မရပါ။ စျေးနှုန်းသည် တစ်ချပ်တွင် ပါဝင်သောအလုပ်အကိုင်အပြည့်အဝကို ထင်ဟပ်သည်။" },
                { question: "တစ်ချပ်မှာ panel ဘယ်နှစ်ခုပါသလဲ?", answer: "တစ်ချပ်လျှင် အများဆုံး ၄ panel ဖြစ်သည်။ သင့်ဇာတ်လမ်းနှင့် ဖွဲ့စည်းမှုလိုအပ်ချက်အပေါ် မူတည်၍ အကောင်းဆုံး panel layout ကို ဆုံးဖြတ်ပေးမည်။ Panel နည်းသောစာမျက်နှာများကို လျှော့ချမည်မဟုတ် — large panel တစ်ခုသည် smaller panel လေးခုနှင့် အလုပ်ပမာဏ တူနိုင်သည်။" },
                { question: "အရောင်နှင့် ဆွဲမလား၊ အနက်ဖြူနှင့် ဆွဲမလား?", answer: "Comic အားလုံးကို ပုံမှန်အတိုင်း အရောင်ပြည့်ဖြင့် ထုတ်လုပ်သည်။ အနက်ဖြူကို နှစ်သက်ပါက တစ်ချပ်လျှင် $8 / 32,000 MMK လျှော့ပေးသည်။ Brief တွင် ကြိုတင်ပြောပြပါ။" },
                { question: "တစ်ချပ်တည်းသာ မှာနိုင်မလား?", answer: "ဟုတ်ကဲ့။ တစ်ချပ်တည်း မှာယူမှုကို လက်ခံသည်။ တစ်ချပ်နှုန်း ($40 / 160,000 MMK) ကောက်ခံမည်ဖြစ်ကြောင်း မှတ်သားပါ — စာမျက်နှာများပိုမှာလေ တစ်ချပ်နှုန်းနည်းလေ ဖြစ်သည်။" },
                { question: "ဆက်တိုက် series သို့မဟုတ် လစဉ် chapter များ လုပ်ပေးနိုင်မလား?", answer: "ဟုတ်ကဲ့။ ဆက်တိုက် series သို့မဟုတ် လစဉ် chapter များအတွက် စီစဉ်မှုကို ဆွေးနွေးရန် ဆက်သွယ်ပါ။ ရေရှည် project များတွင် ချိန်ညှိထားသောစျေးနှုန်းနှင့် milestone ငွေပေးချေမှုကို စီစဉ်နိုင်သည်။" },
                { question: "File ကို ဘယ် format နဲ့ ရမလဲ?", answer: "Print အတွက် high-resolution PNG (300 DPI)၊ online တင်ရန် web-optimized version၊ နှင့် source file (.PSD/.CLIP) ရရှိမည်။ Webtoon vertical scroll ကဲ့သို့ format အတိအကျလိုပါက ပြောပြပါ (additional formatting fee ရှိနိုင်သည်)။" }
            ]
        }
    }
};
