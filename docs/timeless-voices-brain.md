# Timeless Voices: Project Brain

Single source of truth for the project. Only confirmed decisions go under **Confirmed**. Anything unresolved lives under **Open Questions**. Update this file whenever something is decided.

**Rule:** Every question lives in `timeless-voices-questions.md` (IDs Q-xx open, A-xx answered). When a question is answered, update BOTH files: move it to Answered in the questions file, and record the decision and any new feature here. Never let a feature get lost.

Last updated: 2026-10-30

---

## 1. Identity

- **Name:** Timeless Voices (Sir Sander's existing brand is "Timeless Voice by Sander", tagline "Your precious event deserves a timeless voice.")
- **What it is:** A website where people go when they need a voice: event hosting (MC), voice overs, voice acting, ads, scripts, and more.
- **Origin (internal only, not public messaging):** Started from one MC, **Sir Sander**, who gets lots of events and wants (1) a way for people to buy his talent and (2) a place to recommend people he can vouch for when he is fully booked. The public site lists him as one of the talents, not as the curator.
- **Core promise:** A hand-picked roster of trusted voices. Not a marketplace of hundreds. A trusted shortlist.

## 2. Confirmed Decisions

### Roster
- Maximum of **11 talents**, including Sir Sander.
- All talents are **hand-picked**: people Sir Sander trains and/or vouches for (**internal fact only**).
- **MVP focuses on Sir Sander only.** He gathers the other 10 in the meantime; they will be announced later.
- **Sir Sander is listed on the site as one of the talents. Nothing on the site says he personally curates or runs the roster.** He is not shown as founder, curator, or gatekeeper.
- Public wording: "hand-picked" (no attribution to Sir Sander). The roster is **never** presented as Sir Sander's trainees or apprentices, so no one looks like a second choice when he is unavailable.

### Talent Cards (roster view)
Each card shows:
- Who they are (name, photo)
- Their niche(s)
- A button to **view their profile**
- A button to **play a voice sample**

### Talent Profiles
Each talent has their own profile page, scrolling top to bottom, with:
- Personal experiences, achievements, projects, personality, niches
- Voice samples
- Previous events/projects, each expandable or clickable with a short explanation
- Schedule / availability
- Rates
- Talents choose which categories they are available in (Event MC, VO, VA, etc.)

### Homepage Flow
1. Visitor is asked what they are here for (MC, VO, VA, advertising, scripts, and every other possible category).
2. Visitor sees previous works: videos and pictures of past events, films, and projects, plus client testimonials (videos, pictures, text).
3. Visitor sees the talent roster.

### Training
- Training is a **service offered by Sir Sander**, not a roster feature.
- Examples: seminars, personal lectures about VO/MC, mentorship toward becoming his apprentice.
- The second reel (hiring/training) points to this service, not a "Join the Team" roster form.

### Client Handling
- **Coordinators or Sir Sander himself** handle clients.
- Talents wait until a deal or meeting is set. They do not chase inquiries.
- Clients are **free to message talents directly**. The platform is designed to be more convenient and better for both sides than going direct.

### Project Planner (new feature)
A project section where the client plans their booking and gets an immediate response on both sides' requirements.

- Client picks a talent and says what they want to do with them: singing, voice over, MC, or a combination.
- Client answers practical questions: does it require the talent to go physically, how far, and so on.
- The planner **builds the total automatically from each talent's rates and conditions**.
- Client gets an **immediate response** showing the requirements of both the client and the talent.
- **Multi-talent hiring is supported.** Some events need more than one person: for example 2 MCs, or 1 male voice and 1 female voice for a VO.
- Purpose: make it easier for everyone and keep clients on the platform instead of going to direct messages.

- The immediate response is an **estimate**, not a firm price. The coordinator confirms the final price.
- If a picked talent is unavailable on the client's date, the planner **suggests alternatives from the roster**.

Details (pricing inputs, travel rules, multi-talent logic, confirmation flow) are still open: see Q-66 to Q-81 and Q-89 in the questions file. Sir Sander's hosting and VO rates are now known (see "Sir Sander's Rates" below). Travel beyond Cagayan and Isabela (Q-69) and his other service rates (Q-80) still need his input.

### Talent Calendars (new feature)
- Each talent can check and manage their own calendar.
- The calendar is **displayed on the website**, showing clients when each talent can be booked.
- In the Project Planner, the calendar feeds availability for the chosen date(s).
- Calendar details (format, sync, holds, who updates it in the MVP) are open: see Q-82 to Q-88.

### Sir Sander's Rates (given by Sir Sander, 2026-10-30)

**Hosting / emcee**
- ₱10,000 per hosting, usually 3 to 4 hours.
- +₱2,000 if the event is outside Tuguegarao but within Cagayan and Isabela.
- Not yet given: overtime past 4 hours, travel beyond Cagayan and Isabela, deposit, cancellation policy.

**Voice over** (price matrix titled "Voice Over Price Matrix for 2023"; confirm it is still current, see Q-96)

| Duration | Price for VO | Price for edit (add-on) |
|----------|--------------|--------------------------|
| 40 seconds and below | ₱1,200 | +₱500 |
| 41 seconds to 1 minute | ₱1,500 | +₱500 |
| 1:01 to 1:30 | ₱1,800 | +₱600 |
| 1:31 to 2:00 | ₱2,100 | +₱600 |
| 2:01 to 2:30 | ₱2,400 | +₱700 |
| 2:31 to 3:00 | ₱2,700 | +₱700 |
| 3:01 to 3:30 | ₱3,000 | +₱800 |
| 3:31 to 4:00 | ₱3,300 | +₱800 |
| 4:01 to 4:30 | ₱3,600 | +₱900 |
| 4:31 to 5:00 | ₱3,900 | +₱900 |
| 5:01 to 5:30 | ₱4,200 | +₱950 |
| 5:31 to 6:00 | ₱4,500 | +₱950 |
| 6:01 and above | +₱300 for every minute | +₱50 per minute |

Reminders on the matrix:
- Price includes denoising and voice enhancement (bass boost, treble boost, etc.) to the client's liking.
- Client can suggest the pace and mood of the VO.
- Client can request up to 2 revisions of the VO, with no changes in the script.
- Price does not include script writing.
- "Editing" means integration of the background music and sound effects the client wants.

**Planner logic from these rates (draft)**
- Hosting total = ₱10,000, plus ₱2,000 if outside Tuguegarao within Cagayan and Isabela.
- VO total = duration tier price, plus the edit add-on if the client wants music and sound effects. Example: a 90-second VO with editing = ₱1,800 + ₱600 = ₱2,400.
- The VO price steps up ₱300 for every extra 30 seconds, so it can be calculated automatically.

**Existing brand:** the matrix is branded "Timeless Voice by Sander" with the tagline "Your precious event deserves a timeless voice." The site name is Timeless Voices. See Q-94 for how they relate.

**Observations (not decisions)**
- His market appears to be Tuguegarao and the Cagayan Valley, not Metro Manila. Provincial hosts in the research were ₱10,000 to ₱25,000, so ₱10,000 is at the low end.
- His VO prices are well below the national and agency figures in section 3b. Those usually include studio time and commercial usage rights, which his matrix does not mention.

### Rates and Categories
- **Each talent sets their own rates.**
- Talents set their own categories/services.
- A **talent portal** will be built for talents to manage their own profile.

### Build Setup (confirmed 2026-11-01)
- **Project folder:** C:\Users\Admin\VS-IDE\Timeless-Voice
- **Stack:** Next.js + TypeScript + Tailwind, Supabase (database, logins, audio storage), Vercel (hosting).
- **Accounts:** Supabase, GitHub, and Vercel accounts exist. No domain yet. Deploy to a Vercel URL for now. **Building the site is the priority.**
- **Repo:** https://github.com/Dell015/Timeless-Voice (git initialized on branch main, remote origin set, no commits yet). Commit as we go.
- **Docs:** brain and questions files are copied into the project's docs/ folder.
- **Git rule (standing, set 2026-11-01): Claude never pushes to GitHub. The user pushes manually.** Claude may make local commits only.
- **Windows note:** the user's PC is Windows, so Claude never installs packages (node_modules) or build output (.next) inside the project folder. The user runs `npm install` and `npm run dev` on their own PC. Claude tests builds in a scratch copy.
- **Look and feel:** modern, minimalist, clean, and easy for people to use. The design must not be recognizable as AI-made. Base it on researched UI/UX practice, modern design, and creative motion.
- **Rule for gaps:** where something is not answered, Claude decides from what is already confirmed and uses clearly marked placeholders for everything else.

### Design Principles (from research, 2026-11-01)
- Avoid the common tells: one default font used everywhere (Inter), indigo-to-purple gradients, three identical rounded cards in a row, thin interchangeable icons, and headlines that could describe any business.
- Do: pick a typeface pairing with character, build the palette from the brand (black and gold), break the grid once on purpose, use real photos and real names instead of stock, and write specific copy.
- Motion: every animation must help the user understand or act. Micro-interactions of about 100 to 500 ms, animate transform and opacity only, keep motion under about a third of any page, avoid heavy parallax, never autoplay with sound, and respect prefers-reduced-motion.
- Audio player: the play button is the biggest, highest-contrast element with a tap target of at least 44 by 44 px, a draggable progress bar with duration, keyboard and screen-reader support, lazy loading, and test on a mid-range Android phone. Our own rule: only one sample plays at a time.
- Accessibility: contrast of at least 4.5:1 for normal text and 3:1 for large text. First-load page weight kept small.

### Chosen Design Direction (2026-11-01): A and B combined, light and dark mode
- **Dark mode = A (Noir Gold):** background #0F0E0C, surface #16130F, borders #2A2620, text #F3EEE4, muted #B9B1A3 and #8C857A, gold accent #C8A24A. Primary buttons are gold with dark text.
- **Light mode = B (Warm Paper):** background #F5F0E6, surface #EDE5D4, borders #D9D0BE, text #16130F, muted #5C5547, ochre accent #A8741A. Primary buttons are ink with paper-colored text. (Gold is too pale on paper, so the accent shifts to ochre.)
- **Toggle:** a theme switch in the header. It follows the device setting by default and remembers the visitor's choice.
- **Claude's decisions to combine them:** one type pair for both modes (Fraunces for headings, Instrument Sans for body), A's hero with the portrait and floating sample player, B's editorial index list for services, A's talent card, and a waitlist card for "More voices joining soon". Motion stays purposeful and turns off for visitors who prefer reduced motion.

**Options that were shown (for reference)**
- **A. Noir Gold Editorial:** near-black warm background, restrained gold accent used only for actions and highlights, editorial serif headlines with a clean sans for body. Continues his existing black-and-gold brand. Motion: slow fade-up on scroll, gold underline that draws on hover, waveform that moves while a sample plays.
- **B. Warm Paper Minimal:** warm off-white background, near-black ink, one ochre accent, very large serif headlines and lots of whitespace, like a printed program. Motion: line-by-line type reveals, soft image masks, hover that inverts a card.
- **C. Sound-First Kinetic:** charcoal-navy background with one bright amber accent. A large live waveform and play button lead the hero, and type reacts to the audio. Most motion, so it needs performance care on mid-range Android phones.
- **Claude's recommendation:** A, with only the player borrowing C's waveform, because it keeps his brand and keeps the page light. B is the safest if "clean and easy" matters most.

### Content and Media
- Content (audio, photos, videos) must be **collected before building**. A card without a good voice sample looks weak.
- Most videos are **links** (not hosted on the site).
- Previous projects and events are videos **posted by the previous clients**, reused to show new clients.

### Platforms
- Built for **both mobile and web**. Mobile gets priority because most visitors will arrive from boosted reels on phones.

### Marketing: Two Reels (for boosting)
1. **Clients reel:** Hiring a talent is not limited to VO and event MC. They can also do advertisements, songs, trailers, scripts, short films, and more.
2. **Training reel:** Learn from Sir Sander (seminars, lectures, mentorship).

## 3. Planned Services / Categories (working list)

Event MC / Hosting, Voice Over (VO), Voice Acting (VA), Advertising, Scripts, Songs, Trailers, Short Films, Training (Sir Sander only). Full list to be finalized.

## 3b. Market Rate Reference (research, not confirmed pricing)

Researched 2026-10-30 from public listings. Philippine prices vary widely and are mostly negotiable. Use only as a benchmark when setting each talent's rates. Final rates are set by each talent (confirmed).

**Hosting / MC (Philippines)**
- Wedding hosts: about ₱5,000 to ₱150,000+, depending on experience and profile (eventnest.ph).
- Marketplace listings of hosts range roughly ₱2,000 to ₱50,000, with many in the ₱5,000 to ₱35,000 band (kwyzer.com).
- Debut hosts: entry ₱10,000 to ₱18,000; experienced ₱18,000 to ₱35,000; premium ₱35,000 to ₱60,000+ (lumebyrob.com). Another guide: ₱8,000 to ₱15,000 newer, ₱15,000 to ₱30,000 established, ₱30,000 to ₱60,000 senior, ₱60,000+ TV and celebrity hosts (eventnest.ph).
- Sample supplier packages: ₱8,000 for 3 hours, ₱25,000 for 8 hours, ₱35,000 deluxe (eventnest.ph supplier listing).
- Corporate events: talent budgets of ₱25,000 to ₱150,000 per talent were cited for corporate events (strongmediacorp.com).
- Typical payment terms: 30 to 50 percent reservation, balance on event day. Contracts should state coverage hours and overtime rate.
- Hosts book 4 to 8 months ahead for weddings. Peak wedding months: January, February, June, December.

**How hosts price (not purely per event)**
- Hosts usually sell a package with included hours (for example up to 3 hours or up to 8 hours), then charge an overtime rate per extra hour. Contracts should state coverage hours and the overtime rate.
- Reasons: unpaid prep (script, briefing, rehearsal), call time and travel, the date being blocked, and simpler quotes for clients.
- Planner implication: base package + included hours + overtime rate + travel fee. Sir Sander's own hosting is a flat ₱10,000 for usually 3 to 4 hours (A-26); his overtime rule is still open (Q-95).

**Voice over (Philippines)**
- A production house lists voice over with talent and studio from ₱12,000 (strongmediacorp.com).
- Local rate calculator from Filipino voice actors says rates include session and usage, and per-line spiel pricing can run from ₱500 to ₱3,500 (voiceactorsathome.ph; older, beta).
- Online Filipino voice actors on freelance platforms can list around $40 per hour (Fiverr listing) and ElevenLabs-skilled VAs average about $7.88 per hour (low end, AI-assisted).
- Usage rights (radio, TV, web, duration) drive price on top of the recording fee.
- Salary sites (PayScale) show unreliable data for this role; do not use.

**Singing (Philippines)**
- Solo wedding singers start at ₱1,500; typical range ₱1,500 to ₱15,000. Full bands (5 to 6 pieces) ₱22,000 to ₱60,000 (eventnest.ph).
- Live bands overall ₱5,000 to ₱60,000 (nuptials.ph).
- Sample supplier: solo ₱5,000, duo ₱10,000; singer add-on from ₱8,000 (eventnest.ph listings).

**Not found:** reliable Philippine price data for trailers, songs written/produced, scriptwriting, and short film narration. Need Sir Sander's own rates and market knowledge.

## 3c. Client Budget Reference (what people are willing to pay)

Researched 2026-10-30. No Philippine survey measures willingness to pay for hosts or voice talent directly, so these figures come from budget guides, planners, and supplier write-ups. Treat as estimates.

- **Wedding:** most couples land at roughly ₱200,000 to ₱500,000 total (WedPlanner). Entertainment is advised at 3 to 5 percent of the total budget (eventnest.ph). Host fees sit near the bottom of budget spreadsheets and are trimmed first.
- **Wedding host sweet spot:** ₱15,000 to ₱40,000 in Metro Manila; ₱10,000 to ₱25,000 in the provinces (eventnest.ph). Celebrity hosts start around ₱80,000.
- **Wedding checklist range for emcee:** ₱8,000 to ₱65,000 (moneymax.ph).
- **Debut:** most pay ₱15,000 to ₱30,000 for the host; mid-range debuts spend ₱400,000 to ₱800,000 overall (eventnest.ph).
- **Corporate:** host and entertainment typically take 8 to 15 percent of the event budget (eventnest.ph); talent budgets of ₱25,000 to ₱150,000 per talent were cited (strongmediacorp.com).
- **Voice over:** no client budget data found for the Philippines. Supplier floor of about ₱12,000 for talent plus studio. Needs Sir Sander's own client experience.
- **How clients choose vendors (older 2017 survey):** price, portfolio, then reviews.

**What this means for pricing**
- The core market for hosts is about ₱10,000 to ₱40,000. Above ₱35,000 to ₱40,000 it becomes a premium, name-driven sale.
- Because couples cut the host budget first, the site must show value (portfolio, reviews, backup plan) and not only price.
- Corporate and brand clients have bigger budgets and are a better fit for premium talent and multi-talent projects.

## 4. Open Questions

- Homepage opening line (options: "Every event needs the right voice." / "Hand-picked voices. Book the one that fits." / "Hosts and voices you can trust.")
- Should Training be a homepage tile or live on a separate page?
- Who are the coordinators (one person or a team), and what tools do they use?
- Coordinator pay: flat salary or a cut?
- Platform revenue: fee to clients, commission from talents, or neither?
- Payments: online from day one, or inquiry-first then invoice? (Leaning inquiry-first.)
- Sir Sander's deposit and cancellation policy; overtime past 4 hours; rates for singing, trailers, scripts, short films, ads, and training
- Final category list and how a talent requests a new category
- Branding: logo, colors, tone
- Budget and timeline
- Who edits the reels and by when
- Which platform the boost runs on (Facebook, Instagram, TikTok) and the budget
- **To discuss with Sir Sander:** travel beyond Cagayan and Isabela (Q-69), his other service rates (Q-80), overtime (Q-95), whether the 2023 VO matrix is current (Q-96), VO usage rights and rush fees (Q-97), and where his clients are (Q-98)
- How the existing "Timeless Voice by Sander" brand relates to Timeless Voices (Q-94)
- **Website build:** Q-116 to Q-120 answered. Q-121 to Q-142 have Claude's defaults (section 7b); the user can override. Repo confirmed (A-36); Claude never pushes.
- **Pricing questions for Sir Sander:** event-type, season, short and long events, company rates, rush fees, discounts, combos, VO extras, singing, songs, scripts, training, and payment terms (Q-99 to Q-115)
- Calendar details: format, sync, date holds, who updates it in the MVP (Q-82 to Q-88)
- Rules for suggesting alternatives when a talent is unavailable (Q-89)
- Price positioning versus the market: budget, mid, or premium (Q-90) and whether to show rate ranges publicly (Q-91)

## 5. Ideas Under Consideration (not confirmed)

- Category tiles on the homepage instead of a blocking "what are you here for" gate
- "Help me choose" form for clients unsure what they need
- Inquiry button on every profile that creates a request visible to the coordinator
- Platform-hosted message thread so coordinators can see direct client-talent chats
- "From ₱X" starting rates on cards, full rates in profile
- Simple availability status (open / limited / booked) plus blocked dates
- Filters by category and language
- Messenger and Viber contact buttons
- Trust section: client logos, years of experience, events done, testimonials
- Credit and permission requests for client-posted videos; periodic link checks
- Backup guarantee: if a booked talent cancels, the platform replaces them from the roster (Q-02)
- Written "vouched" standard and talent agreement (Q-07, Q-08)
- Launch with Sir Sander plus "More voices joining soon" and a waitlist, not empty slots (Q-11)
- Lead with three core services, show the rest as "also available" (Q-15)
- Dedicated landing page and tracked link per reel (Meta Pixel / UTM), with fast replies to Messenger (Q-44, Q-45)
- Legal basics: privacy notice (Data Privacy Act), booking terms, video permissions, name and domain check (Q-37, Q-59 to Q-61)

## 6. Out of Scope for MVP

- Public talent self-signup
- Open reviews system
- Commission and marketplace features
- Complex talent dashboards (the portal comes after launch)

## 7. Build Order (draft)

1. Collect content: audio samples, photos, video links, testimonials
2. Brand, site map, page content
3. Site: homepage, services, Sir Sander's profile, portfolio, inquiry form
4. Availability and recommended-alternatives flow
5. Reels go live with the boost (site must be live first)
6. Talent portal and onboarding of the other 10 talents
7. Payments

## 7b. Build Defaults (Claude's decisions for the first build, 2026-11-01)

Applied because the user said "you decide for now, base it on what is already answered, use placeholders for the rest." Not confirmed by the user. Any can be changed. Question IDs in brackets.

- **Scope (Q-121):** homepage with category tiles, Sir Sander's profile with a voice sample player, services, portfolio and testimonials, inquiry form, Messenger and Viber buttons, privacy page.
- **Project Planner (Q-122):** after the core site. His hosting and VO rates are known, so the planner can follow.
- **Calendar (Q-123):** simple month view (open / booked) in the first build, data in Supabase, placeholder dates.
- **Admin (Q-124, Q-126):** simple private admin page after the core site; logins come with it.
- **Inquiries (Q-125):** saved to the database from day one; email delivery is a placeholder address until given.
- **Content (Q-127):** bio, photos, testimonials, and video links are clearly marked placeholders.
- **Voice samples (Q-128):** MP3 files in Supabase storage so the card play button is instant; placeholder audio for now.
- **Videos (Q-129):** YouTube and Facebook embeds, placeholder links for now.
- **Contact details (Q-130):** placeholders for Messenger, Viber, phone, email, and social pages.
- **Logo (Q-131):** temporary text wordmark "Timeless Voices"; swap when the logo file arrives (see Q-94).
- **Language (Q-133):** English only, built so Filipino can be added later.
- **Homepage line (Q-134):** option 2, "Hand-picked voices. Book the one that fits."
- **Category tiles (Q-135):** Event Host, Voice Over, Voice Acting, Advertising, Songs, Trailers, Scripts, Short Films, Training. Lead three: Event Host, Voice Over, Voice Acting.
- **Roster at launch (Q-136):** Sir Sander listed as one of the talents, plus "More voices joining soon" and a waitlist. No empty slots. No curator wording anywhere.
- **Prices (Q-137):** show "from" prices publicly (hosting from PHP 10,000, the VO price table).
- **Training (Q-138):** a service page with "inquire for rates."
- **Tracking (Q-139):** Meta Pixel and analytics placeholders.
- **Legal (Q-140):** draft privacy notice and terms for review (not legal advice).
- **Deadline (Q-141):** none set.
- **Review (Q-142):** Vercel preview link.

## 8. People

- **Sir Sander:** Talent, listed publicly as one of the talents (not as founder or curator). Handles clients with coordinators.
- **Coordinators:** Handle client inquiries and bookings. Details TBD.
- **Roster talents (up to 10 more):** Hand-picked, announced later.

## Changelog

- 2026-10-30: Confirmed Sir Sander is listed as one of the talents with no public curator role. Added Project Planner feature (multi-talent hiring, automatic pricing from rates and conditions). Added Q-66 to Q-81.
- 2026-10-30: Confirmed the planner's response is an estimate and that it suggests roster alternatives when a talent is unavailable. Added Talent Calendars (talents manage their own calendars, shown on the site). Travel pricing and Sir Sander's rates deferred to a meeting with him. Added Q-82 to Q-89.
- 2026-10-30: Added Market Rate Reference (section 3b) from web research on PH hosting, voice over, and singing rates. Added Q-90, Q-91.
- 2026-10-30: Added Client Budget Reference (section 3c): what Filipino clients typically budget for hosts, debuts, corporate, and VO. Added Q-92.
- 2026-10-30: Added Sir Sander's confirmed rates: hosting ₱10,000 (3 to 4 hours), +₱2,000 outside Tuguegarao within Cagayan and Isabela, and the 2023 VO price matrix. Noted his existing brand "Timeless Voice by Sander". Added Q-94 to Q-98.
- 2026-10-30: Added the pricing question list for Sir Sander (Q-99 to Q-115). Fixed the People section and two stale references.
- 2026-11-01: Development starts in C:\Users\Admin\VS-IDE\Timeless-Voice (connected, empty). Added the website build questions (Q-116 to Q-142).
- 2026-11-01: Added design principles from research and three proposed design directions (A, B, C). Added Q-143 (which direction) and Q-144 (confirm repo URL).
- 2026-11-01: Design direction chosen: A and B combined, with light and dark mode (A-35). Build of the real site started.
- 2026-11-01: Confirmed the stack, accounts, repo, docs copy, and look direction (A-29 to A-34). Applied defaults for Q-121 to Q-142 (section 7b).
- 2026-10-30: Initial brain file created from planning conversation.
