export interface AnimationServiceData {
    meta: { title: string; desc: string };
    hero: { title: string; subtitle: string };
    packages: {
        title: string;
        items: {
            name: string;
            sub: string;
            price: string;
            mmk: string;
            minNote: string;
            timeline: string;
            features: { style: string[]; included: string[] };
            featured?: boolean;
            badge?: string;
        }[];
        minOrder: { title: string; desc: string };
    };
    factors: { title: string; items: { icon: string; title: string; desc: string }[]; note?: string };
    addons: { title: string; items: { name: string; price: string; mmk: string }[] };
    workflow: { title: string; steps: { num: string; title: string; icon: string; desc: string; depositTag?: string }[]; note?: string };
    revision: { title: string; items: { stage: string; allowed: string }[]; note?: string };
    payment: { title: string; policies: { title: string; icon: string; content: string[] }[] };
    faq: { title: string; items: { question: string; answer: string }[] };
}

export const animationData: Record<'en' | 'mm', AnimationServiceData> = {
    en: {
        meta: {
            title: "Animation Service - BEKYOVerse",
            desc: "Professional 2D Animation Service by BEKYOVerse. Storytelling, wedding films, ads and more."
        },
        hero: {
            title: "2D Animation Service",
            subtitle: "Premium storytelling tailored to your vision"
        },
        packages: {
            title: "Service Packages",
            items: [
                {
                    name: "Essential Story",
                    sub: "Simple memories · Cute loops · Quick explainers",
                    price: "$200 USD",
                    mmk: "800,000 MMK",
                    minNote: "Per minute · Minimum 30 seconds ($100 / 400,000 MMK)",
                    timeline: "2 – 3 Weeks / min",
                    features: {
                        style: [
                            "Simple & cute — focus on clarity and simple motion",
                            "Simple / abstract backgrounds"
                        ],
                        included: [
                            "Script writing included",
                            "Stock music only",
                            "1 revision round"
                        ]
                    }
                },
                {
                    name: "Cinematic Story",
                    sub: "Wedding films · Life flashbacks · Company ads",
                    price: "$400 USD",
                    mmk: "1,600,000 MMK",
                    minNote: "Per minute · Minimum 30 seconds ($200 / 800,000 MMK)",
                    timeline: "3 – 4 Weeks / min",
                    features: {
                        style: [
                            "Full animation — focus on acting, emotion & atmosphere",
                            "Detailed scenes & backgrounds"
                        ],
                        included: [
                            "Script writing included",
                            "Licensed music + voiceover (optional)",
                            "2 revision rounds"
                        ]
                    },
                    featured: true,
                    badge: "Most Requested"
                },
                {
                    name: "Premium",
                    sub: "TV commercials · High-end branding",
                    price: "$600 USD",
                    mmk: "2,400,000 MMK",
                    minNote: "Per minute · Minimum 30 seconds ($300 / 1,200,000 MMK)",
                    timeline: "6 – 8 Weeks / min",
                    features: {
                        style: [
                            "Broadcast quality — precision fluid motion",
                            "Custom art direction & complex scenes"
                        ],
                        included: [
                            "Complete art direction & scripting",
                            "Custom sound design",
                            "Unlimited revisions"
                        ]
                    }
                }
            ],
            minOrder: {
                title: "Minimum Order — 30 Seconds",
                desc: "All packages have a minimum of 30 seconds. Projects shorter than 30 seconds are charged at the 30-second rate. Duration is measured from first frame to last frame, excluding title cards and credits unless animated."
            }
        },
        factors: {
            title: "What Affects the Final Quote",
            items: [
                { icon: "fas fa-video", title: "Video Duration", desc: "Longer videos require more backgrounds, frames, and animation work. Price scales with duration." },
                { icon: "fas fa-running", title: "Character Complexity", desc: "Number of characters, acting complexity, and action scenes all affect production time." },
                { icon: "fas fa-mountain", title: "Background Detail", desc: "Simple flat backgrounds vs. detailed illustrated environments are priced differently." },
                { icon: "fas fa-scroll", title: "Story Development", desc: "Original story from scratch requires more planning vs. working from an existing script." },
                { icon: "fas fa-music", title: "Music & Sound", desc: "Stock music is included in Essential. Licensed music and custom sound design are add-ons." },
                { icon: "fas fa-hourglass-half", title: "Deadline", desc: "Rush projects with tight deadlines require a surcharge. Always book in advance for firm dates." }
            ],
            note: "Final quote is confirmed after reviewing your brief. Contact me with your idea and I'll give you a clear number before any payment."
        },
        addons: {
            title: "Add-On Services",
            items: [
                { name: "Extra Revision Round", price: "$15", mmk: "60,000 MMK" },
                { name: "Professional Voiceover (depends on voice actor)", price: "From $40", mmk: "From 160,000 MMK" },
                { name: "Licensed Music (royalty-free track)", price: "From $20", mmk: "From 80,000 MMK" },
                { name: "Custom Sound Design", price: "Custom quote", mmk: "—" },
                { name: "Additional Format Export (e.g. vertical 9:16, square)", price: "$20", mmk: "80,000 MMK" },
                { name: "Rush Delivery (timeline halved)", price: "+50%", mmk: "of total price" }
            ]
        },
        workflow: {
            title: "Animation Workflow",
            steps: [
                { num: "01", title: "Brief & Vision", icon: "fas fa-comments", desc: "Tell me your idea, purpose, target audience, and any references. The clearer your brief, the better the result." },
                { num: "02", title: "Quote & Duration", icon: "fas fa-calculator", desc: "I confirm the package, total duration, and final price. We agree on everything before any payment." },
                { num: "03", title: "Deposit Payment", icon: "fas fa-wallet", desc: "50% deposit before work begins. Work starts after payment is confirmed.", depositTag: "50% Deposit" },
                { num: "04", title: "Script Writing", icon: "fas fa-scroll", desc: "Script is finalized based on your brief — narrative, dialogue, and scene breakdown. You review and approve before moving forward." },
                { num: "05", title: "Storyboard", icon: "fas fa-border-all", desc: "Scene-by-scene visual plan shared for approval. Major composition and story changes must be made here." },
                { num: "06", title: "Character & Background Art", icon: "fas fa-paint-brush", desc: "All characters and backgrounds are illustrated and approved before animation begins." },
                { num: "07", title: "Animation Production", icon: "fas fa-film", desc: "Characters are animated frame by frame. This is the longest stage — no major changes after this point." },
                { num: "08", title: "Sound & Music", icon: "fas fa-music", desc: "Music, sound effects, and voiceover (if included) are synced and mixed with the animation." },
                { num: "09", title: "Revision", icon: "fas fa-sync-alt", desc: "Final review based on the revision rounds included in your package. Color and sound tweaks only at this stage." },
                { num: "10", title: "Final Payment & Delivery", icon: "fas fa-check-circle", desc: "Remaining 50% paid, then final video delivered in MP4 (H.264) via Google Drive or WeTransfer.", depositTag: "50% Final" }
            ],
            note: "Animation production is a long process. Advance booking is strongly encouraged for projects with firm deadlines. Once animation production begins, no structural changes can be made."
        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Script", allowed: "Dialogue, tone, and narrative changes. No limit before approval — approve carefully before moving to storyboard." },
                { stage: "Storyboard", allowed: "Scene composition, flow, and pacing changes. Minor: up to 5×. Major direction change: up to 2× (beyond that: redraw fee applies)." },
                { stage: "Character & Background Art", allowed: "Color palette and minor detail adjustments only. No redesigns after art approval." },
                { stage: "Animation Production", allowed: "No structural changes. Timing and speed adjustments only." },
                { stage: "Sound & Music", allowed: "Volume mix, music track swap (if within budget), voiceover line edits." },
                { stage: "Final Review", allowed: "Color correction and volume tweaks only. No scene changes after final approval." }
            ],
            note: "Extra revision round is $15 / 60,000 MMK. Once animation production starts, major changes are impossible — so storyboard approval is the most critical step."
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "Payment Schedule", icon: "fas fa-percentage", content: ["50% deposit before work starts", "50% final payment before video is released", "For long projects (3min+), milestone payments can be discussed", "Deposit is non-refundable once script is done"] },
                { title: "Accepted Methods", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "Bank Transfer (Myanmar)", "PayPal / Wise (International)"] },
                { title: "Cancellation Policy", icon: "fas fa-file-contract", content: ["Cancel before script: full refund", "Cancel after script: deposit forfeited", "Cancel mid-production: pay for work done up to that point, refund rest"] },
                { title: "Rights & Ownership", icon: "fas fa-shield-alt", content: ["Full commercial rights transferred on final payment", "Portfolio display rights retained by BEKYOVerse", "Request private/NDA project for confidentiality", "Music rights depend on license chosen"] }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                { question: "What is the minimum order?", answer: "Minimum is 30 seconds. Projects shorter than 30 seconds are billed at the 30-second rate. For example, a 15-second Essential Story is still $100 / 400,000 MMK (30s minimum)." },
                { question: "Do I have to write the script myself?", answer: "No. Script writing is included in all packages. Just tell me your idea, story, or message — I will craft the script for animation. If you already have a script, I will adapt it for visual storytelling." },
                { question: "Which package should I choose?", answer: "Essential Story is great for simple explainers, social media content, and cute loops. Cinematic Story is perfect for emotional narratives — wedding stories, brand stories, deeper ads. Premium is for broadcast-level commercials where quality is paramount. If unsure, share your idea and I'll recommend the best fit." },
                { question: "Why can't I make changes during animation production?", answer: "Animation is built frame by frame. Changing a character's position, composition, or story flow once a scene is animated means scrapping and redoing all those frames from scratch. That's why storyboard approval is the most critical step — all major decisions must be locked in before production starts." },
                { question: "What file format do I get?", answer: "MP4 (H.264) at the resolution and aspect ratio agreed upon in the brief. Standard is 1920×1080 (16:9). Vertical (9:16) and Square (1:1) for social media are available as add-ons." },
                { question: "Can I use the animation commercially?", answer: "Yes. You get full commercial rights upon final payment. You can use the animation for ads, social media, TV, presentations, and any commercial purpose. Note: music rights depend on the specific track license chosen." },
                { question: "How far in advance should I book?", answer: "Animation takes time — anywhere from 2 to 8 weeks per minute depending on the package. For projects with a deadline (events, product launches, campaigns), book at least 4-6 weeks in advance. Rush delivery is available for a +50% surcharge, subject to schedule availability." },
                { question: "Do you work with international clients?", answer: "Yes. International clients can pay via PayPal or Wise. Communication is in English. Final video is delivered via Google Drive or WeTransfer." }
            ]
        }
    },
    mm: {
        meta: {
            title: "Animation Service - BEKYOVerse",
            desc: "BEKYOVerse 2D Animation ဝန်ဆောင်မှု။ Storytelling, wedding films, ကြော်ငြာများနှင့် အခြားအရာများ။"
        },
        hero: {
            title: "2D Animation Service",
            subtitle: "သင့်ရည်မှန်းချက်နှင့် ကိုက်ညီသော Premium Storytelling"
        },
        packages: {
            title: "Service Packages",
            items: [
                {
                    name: "Essential Story",
                    sub: "ရိုးရှင်းသောမှတ်တမ်း · လန်းဆန်းသောပုံသေကွင်း · မြန်မြန်ရှင်းပြချက်",
                    price: "$200 USD",
                    mmk: "800,000 MMK",
                    minNote: "တစ်မိနစ်လျှင် · အနည်းဆုံး ၃၀ စက္ကန့် ($100 / 400,000 MMK)",
                    timeline: "2 – 3 Weeks / min",
                    features: {
                        style: [
                            "ရိုးရှင်းပြီး ချစ်စဖွယ် — ရှင်းလင်းပြတ်သားသော motion ကို အဓိကထားသည်",
                            "ရိုးရှင်း / abstract နောက်ခံများ"
                        ],
                        included: [
                            "Script ရေးသားခြင်း ပါဝင်သည်",
                            "Stock music သာ ပါဝင်သည်",
                            "ပြင်ဆင်ချက် ၁ ကြိမ်"
                        ]
                    }
                },
                {
                    name: "Cinematic Story",
                    sub: "မင်္ဂလာဆောင်ဖြစ်ရပ် · ဘဝမှတ်တမ်း · ကုမ္ပဏီကြော်ငြာ",
                    price: "$400 USD",
                    mmk: "1,600,000 MMK",
                    minNote: "တစ်မိနစ်လျှင် · အနည်းဆုံး ၃၀ စက္ကန့် ($200 / 800,000 MMK)",
                    timeline: "3 – 4 Weeks / min",
                    features: {
                        style: [
                            "Full animation — သရုပ်ဆောင်မှု၊ စိတ်ခံစားချက်နှင့် ပတ်ဝန်းကျင်ကို အဓိကထားသည်",
                            "အသေးစိတ် scene နှင့် နောက်ခံများ"
                        ],
                        included: [
                            "Script ရေးသားခြင်း ပါဝင်သည်",
                            "Licensed music + voiceover (ရွေးချယ်နိုင်သည်)",
                            "ပြင်ဆင်ချက် ၂ ကြိမ်"
                        ]
                    },
                    featured: true,
                    badge: "Most Requested"
                },
                {
                    name: "Premium",
                    sub: "TV ကြော်ငြာ · အဆင့်မြင့် branding",
                    price: "$600 USD",
                    mmk: "2,400,000 MMK",
                    minNote: "တစ်မိနစ်လျှင် · အနည်းဆုံး ၃၀ စက္ကန့် ($300 / 1,200,000 MMK)",
                    timeline: "6 – 8 Weeks / min",
                    features: {
                        style: [
                            "Broadcast quality — တိကျပြောင်မြောက်သော fluid motion",
                            "Custom art direction နှင့် ရှုပ်ထွေးသော scene များ"
                        ],
                        included: [
                            "Art direction နှင့် script ရေးသားခြင်း အပြည့်အဝ ပါဝင်သည်",
                            "Custom sound design",
                            "ပြင်ဆင်ချက် အကန့်အသတ်မရှိ"
                        ]
                    }
                }
            ],
            minOrder: {
                title: "အနည်းဆုံး မှာယူမှု — ၃၀ စက္ကန့်",
                desc: "Package အားလုံးတွင် အနည်းဆုံး ၃၀ စက္ကန့် ရှိသည်။ ၃၀ စက္ကန့်အောက် project များကို ၃၀ စက္ကန့်နှုန်းဖြင့် တွက်ချက်သည်။ ကြာချိန်ကို ပထမ frame မှ နောက်ဆုံး frame အထိ တိုင်းတာပြီး၊ animated မဟုတ်သော title card နှင့် credit များ မပါဝင်ပါ။"
            }
        },
        factors: {
            title: "နောက်ဆုံးစျေးနှုန်းကို သက်ရောက်သောအချက်များ",
            items: [
                { icon: "fas fa-video", title: "Video ကြာချိန်", desc: "ပိုရှည်သော video တွင် နောက်ခံ၊ frame နှင့် animation အလုပ် ပိုများသည်။ စျေးနှုန်းကို ကြာချိန်နှင့် အချိုးကျ တွက်ချက်သည်။" },
                { icon: "fas fa-running", title: "ဇာတ်ကောင်ရှုပ်ထွေးမှု", desc: "ဇာတ်ကောင်အရေအတွက်၊ သရုပ်ဆောင်မှုရှုပ်ထွေးမှုနှင့် action scene များသည် production ကြာချိန်ကို သက်ရောက်သည်။" },
                { icon: "fas fa-mountain", title: "နောက်ခံအသေးစိတ်", desc: "ရိုးရှင်းသော flat နောက်ခံနှင့် အသေးစိတ် illustrated environment တို့ကို ကွာခြားသောစျေးနှုန်းဖြင့် တွက်ချက်သည်။" },
                { icon: "fas fa-scroll", title: "ဇာတ်လမ်းဖန်တီးမှု", desc: "အစအဆုံး မူလဇာတ်လမ်းဖန်တီးခြင်းသည် ရှိပြီးသား script ဖြင့် လုပ်ဆောင်ခြင်းထက် ပိုမိုကြာသော စီမံကိန်းရေးဆွဲမှုကို လိုအပ်သည်။" },
                { icon: "fas fa-music", title: "Music & Sound", desc: "Stock music သည် Essential တွင် ပါဝင်သည်။ Licensed music နှင့် custom sound design တို့မှာ add-on ဖြစ်သည်။" },
                { icon: "fas fa-hourglass-half", title: "သတ်မှတ်ရက်", desc: "အချိန်တိုဖြင့် အရေးပေါ်ထုတ်လုပ်ရသော project များတွင် surcharge ကောက်ခံသည်။ သတ်မှတ်ရက်ရှိသော project များအတွက် ကြိုတင်မှာယူပါ။" }
            ],
            note: "နောက်ဆုံးစျေးနှုန်းကို သင့် brief ကို လေ့လာပြီးမှ အတည်ပြုသည်။ ငွေပေးချေမှုမပြုမီ သင့်အိုင်ဒီယာဖြင့် ဆက်သွယ်ပါ။"
        },
        addons: {
            title: "Add-On Services",
            items: [
                { name: "ပြင်ဆင်ချက် နောက်ထပ်တစ်ကြိမ်", price: "$15", mmk: "60,000 MMK" },
                { name: "Professional Voiceover (voice actor ပေါ် မူတည်သည်)", price: "From $40", mmk: "From 160,000 MMK" },
                { name: "Licensed Music (royalty-free track)", price: "From $20", mmk: "From 80,000 MMK" },
                { name: "Custom Sound Design", price: "Custom quote", mmk: "—" },
                { name: "Format ထပ်မံ Export (ဥပမာ vertical 9:16, square)", price: "$20", mmk: "80,000 MMK" },
                { name: "Rush Delivery (timeline တစ်ဝက်လျှော့)", price: "+50%", mmk: "စုစုပေါင်းစျေးနှုန်း၏" }
            ]
        },
        workflow: {
            title: "Animation Workflow",
            steps: [
                { num: "01", title: "Brief & Vision", icon: "fas fa-comments", desc: "သင့်အိုင်ဒီယာ၊ ရည်ရွယ်ချက်၊ ပစ်မှတ်ပရိသတ်နှင့် reference များ ပြောပြပါ။ Brief ရှင်းလင်းလေ ရလဒ် ပိုကောင်းလေ ဖြစ်သည်။" },
                { num: "02", title: "Quote & Duration", icon: "fas fa-calculator", desc: "Package၊ စုစုပေါင်းကြာချိန်နှင့် နောက်ဆုံးစျေးနှုန်းကို အတည်ပြုသည်။ မည်သည့်ငွေပေးချေမှုမပြုမီ အရာအားလုံးကို သဘောတူသည်။" },
                { num: "03", title: "Deposit Payment", icon: "fas fa-wallet", desc: "အလုပ်မစမီ 50% deposit ပေးချေသည်။ ငွေပေးချေမှု အတည်ပြုပြီးမှ အလုပ်စတင်သည်။", depositTag: "50% Deposit" },
                { num: "04", title: "Script Writing", icon: "fas fa-scroll", desc: "သင့် brief အပေါ်အခြေခံ၍ script ကို ဇာတ်ကြောင်း၊ dialog နှင့် scene ခွဲခြမ်းစိတ်ဖြာမှုဖြင့် ချမှတ်သည်။ ရှေ့ဆက်မတိုင်မီ သင် စစ်ဆေးပြီး အတည်ပြုရမည်။" },
                { num: "05", title: "Storyboard", icon: "fas fa-border-all", desc: "Scene တစ်ခုချင်းစီ၏ visual plan ကို အတည်ပြုရန် မျှဝေသည်။ ဆောင်ပုဒ်နှင့် ဇာတ်လမ်းအပြောင်းအလဲများကို ဤနေရာတွင်သာ ပြုလုပ်ရမည်။" },
                { num: "06", title: "Character & Background Art", icon: "fas fa-paint-brush", desc: "Animation မစတင်မီ ဇာတ်ကောင်နှင့် နောက်ခံများအားလုံးကို ပုံဆွဲပြီး အတည်ပြုသည်။" },
                { num: "07", title: "Animation Production", icon: "fas fa-film", desc: "ဇာတ်ကောင်များကို frame တစ်ချပ်ချင်းစီ animate လုပ်သည်။ ဤအဆင့်မှာ အချိန်အများဆုံး ကြာသောကာလဖြစ်ပြီး — ဤနောက် အဓိကပြောင်းလဲမှုများ မပြုနိုင်တော့ပါ။" },
                { num: "08", title: "Sound & Music", icon: "fas fa-music", desc: "Music၊ sound effect နှင့် voiceover (ပါဝင်ပါက) တို့ကို animation နှင့် sync ချပြီး mix လုပ်သည်။" },
                { num: "09", title: "Revision", icon: "fas fa-sync-alt", desc: "သင့် package တွင် ပါဝင်သော revision round အတွင်း နောက်ဆုံးစစ်ဆေးမှု ပြုလုပ်သည်။ ဤအဆင့်တွင် အရောင်နှင့် အသံ ချိန်ညှိမှုများသာ ဆောင်ရွက်နိုင်သည်။" },
                { num: "10", title: "Final Payment & Delivery", icon: "fas fa-check-circle", desc: "ကျန် 50% ပေးချေပြီးနောက် MP4 (H.264) ဖော်မတ်ဖြင့် Google Drive သို့မဟုတ် WeTransfer မှတဆင့် နောက်ဆုံး video ပေးပို့သည်။", depositTag: "50% Final" }
            ],
            note: "Animation production သည် ကြာသောလုပ်ငန်းစဉ်တစ်ခုဖြစ်သည်။ သတ်မှတ်ရက်ရှိသော project များအတွက် ကြိုတင်မှာယူရန် အကြံပြုသည်။ Animation production စတင်ပြီးသည်နှင့် structural ပြောင်းလဲမှုများ မပြုနိုင်တော့ပါ။"
        },
        revision: {
            title: "Revision Policy",
            items: [
                { stage: "Script", allowed: "Dialog၊ tone နှင့် ဇာတ်ကြောင်းပြောင်းလဲမှုများ။ အတည်ပြုမတိုင်မီ ကန့်သတ်မှုမရှိ — storyboard သို့ မတိုင်မီ သေချာစွာ အတည်ပြုပါ။" },
                { stage: "Storyboard", allowed: "Scene ဖွဲ့စည်းမှု၊ flow နှင့် pace ပြောင်းလဲမှုများ။ သေးငယ်သောပြောင်းလဲမှု: ၅ ကြိမ်အထိ။ အဓိကဦးတည်ချက်ပြောင်းမှု: ၂ ကြိမ်အထိ (ထို့ကျော်ပါက redraw fee ကောက်သည်)။" },
                { stage: "Character & Background Art", allowed: "အရောင်နှင့် သေးငယ်သောအသေးစိတ်ချိန်ညှိမှုများသာ။ art အတည်ပြုပြီးနောက် ပြန်ဒီဇိုင်းဆွဲမှု မပြုနိုင်ပါ။" },
                { stage: "Animation Production", allowed: "Structural ပြောင်းလဲမှု မပြုနိုင်ပါ။ Timing နှင့် speed ချိန်ညှိမှုများသာ ဆောင်ရွက်နိုင်သည်။" },
                { stage: "Sound & Music", allowed: "အသံပမာဏ၊ music track ပြောင်းလဲမှု (budget အတွင်း)၊ voiceover line ပြင်ဆင်မှုများသာ ဆောင်ရွက်နိုင်သည်။" },
                { stage: "Final Review", allowed: "အရောင်ပြင်ဆင်မှုနှင့် အသံပမာဏချိန်ညှိမှုများသာ ဆောင်ရွက်နိုင်သည်။ နောက်ဆုံးအတည်ပြုပြီးနောက် scene ပြောင်းလဲမှု မပြုနိုင်ပါ။" }
            ],
            note: "ထပ်တိုးပြင်ဆင်ချက်တစ်ကြိမ်လျှင် $15 / 60,000 MMK ဖြစ်သည်။ Animation production စတင်ပြီးသည်နှင့် အဓိကပြောင်းလဲမှုများ မပြုနိုင်တော့ပါ — ထို့ကြောင့် storyboard အတည်ပြုမှုသည် အရေးကြီးဆုံးအဆင့်ဖြစ်သည်။"
        },
        payment: {
            title: "Payment Terms",
            policies: [
                { title: "Payment Schedule", icon: "fas fa-percentage", content: ["အလုပ်မစမီ 50% deposit ပေးချေရမည်", "Video မထုတ်မပေးမီ 50% နောက်ဆုံးငွေပေးချေရမည်", "ရှည်လျားသော project (၃ မိနစ်အထက်) တွင် milestone ငွေပေးချေမှုကို ကြိုတင်ဆွေးနွေးနိုင်သည်", "Script ရေးသားပြီးသည်နှင့် deposit သည် ပြန်မအမ်း"] },
                { title: "Accepted Methods", icon: "fas fa-credit-card", content: ["KPay / Wave Pay", "Bank Transfer (မြန်မာ)", "PayPal / Wise (နိုင်ငံတကာ)"] },
                { title: "Cancellation Policy", icon: "fas fa-file-contract", content: ["Script မရေးမီ ဖျက်သိမ်းပါက: ငွေအပြည့်ပြန်အမ်းသည်", "Script အတည်ပြုပြီးနောက် ဖျက်သိမ်းပါက: deposit ဆုံးရှုံးသည်", "Production အကြားဖျက်သိမ်းပါက: ထိုအဆင့်အထိ ပြုလုပ်ပြီးသောအလုပ်ပေးပို့မည်၊ ပြုလုပ်ပြီးသောအလုပ်အတွက် ငွေပြန်မအမ်းပါ"] },
                { title: "Rights & Ownership", icon: "fas fa-shield-alt", content: ["နောက်ဆုံးငွေပေးချေပြီးသည်နှင့် commercial rights အပြည့်အဝ လွှဲပြောင်းသည်", "Portfolio display rights ကို BEKYOVerse သိမ်းဆည်းသည်", "လျှို့ဝှက်ရန် private/NDA project ကို တောင်းခံနိုင်သည်", "Music rights သည် ရွေးချယ်သော license အမျိုးအစားပေါ် မူတည်သည်"] }
            ]
        },
        faq: {
            title: "မေးလေ့ရှိသော မေးခွန်းများ",
            items: [
                { question: "အနည်းဆုံး မှာယူမှုမှာ ဘယ်လောက်လဲ?", answer: "အနည်းဆုံး ၃၀ စက္ကန့် ဖြစ်သည်။ ၃၀ စက္ကန့်အောက် project များကို ၃၀ စက္ကန့်နှုန်းဖြင့် တွက်ချက်သည်။ ဥပမာ၊ ၁၅ စက္ကန့်သာ Essential Story ကို $100 / 400,000 MMK (၃၀ စက္ကန့် minimum) ဖြင့် ကောက်ခံသည်။" },
                { question: "Script ကိုယ်တိုင် ရေးသွင်းရမလား?", answer: "မလိုပါ။ Script ရေးသားခြင်းသည် package အားလုံးတွင် ပါဝင်သည်။ သင့်အိုင်ဒီယာ၊ ဇာတ်လမ်း သို့မဟုတ် message ကိုသာ ပြောပြပါ — animation အတွက် script ကို ကျွန်တော်ဖန်တီးပေးမည်။ Script ရှိပြီးသားဆိုပါကလည်း visual storytelling အတွက် ပြန်လည်ဖန်တီးပေးမည်။" },
                { question: "ဘယ် package ကို ရွေးသင့်သလဲ?", answer: "Essential Story သည် ရိုးရှင်းသောရှင်းပြချက်၊ social media content နှင့် cute loop များအတွက် ကောင်းသည်။ Cinematic Story သည် ခံစားချက်ပြင်းသော ဇာတ်လမ်းများ — မင်္ဂလာဆောင်၊ brand story၊ နက်နဲသောကြော်ငြာများအတွက် ကောင်းသည်။ Premium သည် အရည်အသွေးကို ဦးစားပေးသော broadcast-level ကြော်ငြာများအတွက် ဖြစ်သည်။ မသေချာပါကလည်း သင့်အိုင်ဒီယာနှင့် ဆက်သွယ်ပါ — သင့်တော်သော package ကို အကြံပြုပေးမည်။" },
                { question: "Animation production အတောအတွင်း ဘာကြောင့် ပြောင်းလဲ၍မရတာလဲ?", answer: "Animation ကို frame တစ်ချပ်ချင်းစီ တည်ဆောက်သည်။ Scene တစ်ခု animate ပြီးသည်နှင့် ဇာတ်ကောင်နေရာ၊ ဖွဲ့စည်းမှု သို့မဟုတ် ဇာတ်လမ်း flow ပြောင်းလဲမှုသည် ထို frame များအားလုံးကို အစကနဦး ပြန်လုပ်ရသောလုပ်ငန်းဖြစ်သည်။ ထို့ကြောင့် storyboard အတည်ပြုမှုသည် အရေးကြီးဆုံးအဆင့်ဖြစ်ပြီး — production မစမီ အဓိကဆုံးဖြတ်ချက်များ အားလုံး အတည်ပြုထားရမည်။" },
                { question: "နောက်ဆုံး video ကို ဘယ် format နဲ့ ရမလဲ?", answer: "Brief တွင် သဘောတူထားသော resolution နှင့် aspect ratio ဖြင့် MP4 (H.264) ဖော်မတ် ဖြစ်သည်။ Standard မှာ 1920×1080 (16:9) ဖြစ်သည်။ Social media အတွက် Vertical (9:16) နှင့် Square (1:1) တို့ကို add-on အဖြစ် ရနိုင်သည်။" },
                { question: "Animation ကို commercial ရည်ရွယ်ချက်ဖြင့် သုံးနိုင်မလား?", answer: "ဟုတ်ကဲ့။ နောက်ဆုံးငွေပေးချေပြီးသည်နှင့် commercial rights အပြည့်အဝ လွှဲပြောင်းသည်။ ကြော်ငြာ၊ social media၊ TV၊ presentation နှင့် commercial ရည်ရွယ်ချက်မှန်သမျှအတွက် animation ကို အသုံးပြုနိုင်သည်။ မှတ်ချက်: music rights သည် ရွေးချယ်သော license အမျိုးအစားပေါ် မူတည်သည်။" },
                { question: "ဘယ်လောက်ကြိုတင်မှာယူသင့်သလဲ?", answer: "Animation သည် အချိန်ယူသည် — package ပေါ်မူတည်၍ တစ်မိနစ်လျှင် ၂ မှ ၈ ပတ်အထိ ကြာသည်။ သတ်မှတ်ရက်ကန့်သတ်ချက်ရှိသော project (ပွဲများ၊ ကုန်ပစ္စည်းမိတ်ဆက်ပွဲ၊ campaign) အတွက် အနည်းဆုံး ၄-၆ ပတ် ကြိုတင်မှာယူပါ။ Rush delivery ကို +50% surcharge ဖြင့် ရရှိနိုင်သော်လည်း schedule availability ပေါ်တွင် မူတည်သည်။" },
                { question: "နိုင်ငံတကာ client များနှင့် လုပ်ဆောင်နိုင်မလား?", answer: "ဟုတ်ကဲ့။ နိုင်ငံတကာ client များအတွက် PayPal သို့မဟုတ် Wise မှတဆင့် ငွေပေးချေနိုင်သည်။ ဆက်သွယ်ရေးကို အင်္ဂလိပ်ဘာသာဖြင့် ဆောင်ရွက်သည်။ နောက်ဆုံး video ကို Google Drive သို့မဟုတ် WeTransfer မှတဆင့် ပေးပို့သည်။" }
            ]
        }
    }
};
