/* =====================================================================
   NEX LEGAL — WEBSITE CONTENT FILE
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit for day-to-day updates:
   new articles, new videos, legal guides, partner details and the
   form settings. Edit it on GitHub (pencil icon), click "Commit
   changes", and the live site updates in a minute or two.

   Rules that keep the site working:
   • Every entry sits between { and } and is followed by a comma.
   • Text goes inside quotes " " — or inside backticks ` ` for long
     article bodies (backticks let you use line breaks and HTML).
   • Do not delete the square brackets [ ] that open and close a list.
   ===================================================================== */

window.NEX = {

  /* -------------------------------------------------------------------
     1. FORM SETTINGS
     Get a free access key at https://web3forms.com (enter
     office@nexlegal.in, they email you the key). Paste it below,
     replacing the PASTE-... text. Until you do, the forms open the
     visitor's email app with the message filled in instead.
     ------------------------------------------------------------------- */
  settings: {
    web3formsKey: "71b662c0-79e2-43ad-b124-7a57ab277d36",
    officeEmail: "office@nexlegal.in",
    phoneDisplay: "+91 70424 18698",
    phoneLink: "+917042418698",
    whatsapp: "917042418698"
  },

  /* -------------------------------------------------------------------
     2. PARTNERS  (shown in this order, side by side as equals)
     photo: leave "" to show the monogram, or put a file name such as
     "kunal.jpg" after uploading the photo to the repository.
     email: leave "" to hide it.
     focus: short practice tags shown under the bio.
     ------------------------------------------------------------------- */
  partners: [
    {
      name: "Kunal Singh",
      role: "Partner",
      initials: "KS",
      photo: "",
      email: "",
      bio: "Kunal Singh is an advocate enrolled with the Bar Council of Delhi and a member of the Delhi High Court Bar Association, with a practice devoted entirely to litigation. He regularly appears before the High Court of Delhi, the District Courts across Delhi and Delhi NCR, and various statutory tribunals, handling matters from first filing through trial and appeal. His work spans insurance litigation, criminal defence, and civil and commercial disputes, and includes drafting and arguing complex appellate filings, writ petitions and trial proceedings. He has represented insurance corporations, banking and financial institutions, corporate entities and individual litigants.",
      focus: ["Insurance litigation", "Criminal defence", "Civil & commercial", "Writs & appeals", "Trials"]
    },
    {
      name: "Mahi Sharma",
      role: "Partner",
      initials: "MS",
      photo: "",
      email: "",
      bio: "Mahi Sharma is an advocate enrolled with the Bar Council of Delhi and a member of the Delhi High Court Bar Association. Her practice spans the Supreme Court of India, the High Court of Delhi, the NCLT and NCLAT, the Debts Recovery Tribunals, the family courts and the district courts, across civil, criminal, commercial, regulatory, insolvency, arbitration, intellectual property and real estate litigation. She drafts extensively for matters before the Supreme Court. She has represented a central public sector undertaking, statutory regulators, public sector banks and the Official Liquidator, as well as corporate entities and individual litigants.",
      focus: ["Supreme Court practice", "Insolvency & recovery", "Regulatory", "Commercial & IP", "Real estate"]
    }
  ],

  /* -------------------------------------------------------------------
     3. ARTICLES  (newest first)
     type: "Article" for your own pieces, "Commentary" for a news item
           or judgment with the firm's take. For Commentary you can add
           source: { name: "LiveLaw", url: "https://..." }
     slug: a short unique id with only small letters, numbers and
           hyphens. It becomes the shareable link: nexlegal.in/#slug
     body: write in backticks. Use <p>…</p> for paragraphs,
           <h3>…</h3> for sub-headings, <ul><li>…</li></ul> for lists.
     ------------------------------------------------------------------- */
  articles: [
    {
      slug: "cheque-bounce-section-138-deadlines",
      type: "Article",
      category: "Banking & Recovery",
      title: "Cheque Bounce Under Section 138: The Four Deadlines That Decide Your Case",
      date: "2026-10-01",
      author: "Nex Legal",
      readTime: "4 min read",
      summary: "Most cheque dishonour cases are won or lost on dates, long before anyone argues the merits. Here is the timeline the Negotiable Instruments Act sets, and what happens if you miss it.",
      body: `
<p>A complaint for dishonour of a cheque under Section 138 of the Negotiable Instruments Act, 1881 is one of the quickest remedies available to a creditor in India. It is also one of the most technical. The Act builds the offence out of a chain of steps, and each step carries its own deadline.</p>
<h3>1. Present the cheque while it is valid</h3>
<p>Under the Reserve Bank of India's directions, a cheque is valid for three months from the date written on it. It must be presented to the bank within that period.</p>
<h3>2. Send the demand notice within 30 days</h3>
<p>Once the bank returns the cheque unpaid, the payee must send a written demand notice to the drawer within thirty days of receiving information of the dishonour from the bank.</p>
<h3>3. Give the drawer 15 days to pay</h3>
<p>The drawer has fifteen days from receipt of the notice to make payment. The offence is complete only when this period expires without payment.</p>
<h3>4. File the complaint within one month</h3>
<p>The complaint must be filed within one month of the date on which the cause of action arises, that is, after the fifteen-day period runs out. A court may condone a delay if sufficient cause is shown, but a delay should never be planned for.</p>
<h3>Where to file, and what the court can order early</h3>
<p>Section 142(2) places jurisdiction with the court where the payee's bank branch, at which the cheque was delivered for collection, is situated. Section 143A allows the court to direct interim compensation of up to twenty per cent of the cheque amount, and Section 148 allows the appellate court to require a deposit of at least twenty per cent when the accused appeals a conviction.</p>
<p>If you have received a dishonour memo, keep the original cheque, the return memo and proof of when you received it. These three documents fix every date that follows.</p>
`
    },
    {
      slug: "buying-a-home-delhi-ncr-five-checks",
      type: "Article",
      category: "Real Estate & RERA",
      title: "Buying a Home in Delhi NCR: Five Checks Before You Sign",
      date: "2026-09-20",
      author: "Nex Legal",
      readTime: "4 min read",
      summary: "A short checklist for homebuyers on registration, title, approvals and the payment rules the Real Estate (Regulation and Development) Act, 2016 puts in place.",
      body: `
<p>Most homebuyer disputes we see could have been narrowed, or avoided, by a few checks made before the first payment. These are the five we recommend to every buyer.</p>
<h3>1. Confirm the project is registered with RERA</h3>
<p>Section 3 of the Real Estate (Regulation and Development) Act, 2016 requires a promoter to register a project before advertising or selling units in it, subject to limited exemptions for small projects. Search the project on the relevant state RERA website and download the registration certificate and the disclosed completion date.</p>
<h3>2. Read the title chain, not only the latest deed</h3>
<p>Ask for the chain of title documents and an encumbrance search. Look for mortgages in favour of lenders, pending litigation and any conditions attached to a land allotment.</p>
<h3>3. Match the sanctioned plan to what you are buying</h3>
<p>Check the building plan approval and the specifications in the agreement against the brochure. The promoter cannot change the sanctioned plans without the consent required by Section 14.</p>
<h3>4. Do not pay more than ten per cent before a registered agreement</h3>
<p>Section 13 prohibits a promoter from accepting more than ten per cent of the cost as an advance or application fee without first entering into a written agreement for sale and registering it.</p>
<h3>5. Know your remedy if possession is delayed</h3>
<p>Under Section 18, if the promoter fails to give possession as agreed, the buyer may withdraw and claim a refund with interest, or stay on and receive interest for every month of delay until possession.</p>
<p>A title opinion before you pay is a small cost compared with litigation after you have.</p>
`
    },
    {
      slug: "anticipatory-bail-section-482-bnss",
      type: "Commentary",
      category: "Criminal Law",
      title: "Anticipatory Bail Under Section 482 of the BNSS: What a Client Should Know",
      date: "2026-09-05",
      author: "Nex Legal",
      readTime: "3 min read",
      summary: "Since 1 July 2024, anticipatory bail is sought under Section 482 of the Bharatiya Nagarik Suraksha Sanhita. The settled principles from the old Section 438 continue to guide the courts.",
      body: `
<p>The Bharatiya Nagarik Suraksha Sanhita, 2023 came into force on 1 July 2024 and replaced the Code of Criminal Procedure, 1973. The power to grant anticipatory bail, earlier found in Section 438 of the Code, now sits in Section 482 of the Sanhita. An application lies before the Sessions Court or the High Court.</p>
<h3>Protection need not be limited in time</h3>
<p>In Sushila Aggarwal v. State (NCT of Delhi) (2020), a Constitution Bench of the Supreme Court held that anticipatory bail need not ordinarily be limited to a fixed period and can continue until the end of the trial, though the court may impose conditions suited to the facts of the case.</p>
<h3>Arrest is not automatic when a charge sheet is filed</h3>
<p>In Siddharth v. State of Uttar Pradesh (2021), the Supreme Court held that an investigating officer is not required to arrest every accused at the time of filing the charge sheet, particularly where the accused has cooperated throughout the investigation.</p>
<h3>What strengthens an application</h3>
<ul>
<li>A clear account of the dispute and why custody is not needed for investigation.</li>
<li>Proof of cooperation, such as replies to notices and appearances before the police.</li>
<li>Roots in the community and no history of absconding.</li>
</ul>
<p>Every case turns on its own facts. If you apprehend arrest, speak to counsel before you speak to the investigating agency.</p>
`
    }
  ],

  /* -------------------------------------------------------------------
     4. VIDEOS  (newest first)
     youtubeId: the code after "v=" in a YouTube link. For
       https://www.youtube.com/watch?v=AbCdEf12345  the id is AbCdEf12345
     Copy the example below, remove the // at the start of each line,
     and fill in your details. While this list is empty the site shows
     a "coming soon" panel in the Videos section.
     ------------------------------------------------------------------- */
  videos: [
    // {
    //   youtubeId: "AbCdEf12345",
    //   title: "Cheque bounce cases explained in five minutes",
    //   date: "2026-10-10",
    //   description: "Mahi Sharma walks through the Section 138 timeline."
    // },
  ],

  /* -------------------------------------------------------------------
     5. LEGAL GUIDES  (step-by-step procedures shown as expandable panels)
     ------------------------------------------------------------------- */
  guides: [
    {
      title: "Filing a consumer complaint",
      law: "Consumer Protection Act, 2019",
      steps: [
        "Send the seller or service provider a written complaint and keep proof of delivery. Many disputes settle at this stage.",
        "Choose the forum by the value of goods or services paid for: the District Commission up to ₹50 lakh, the State Commission above ₹50 lakh and up to ₹2 crore, and the National Commission above ₹2 crore.",
        "File within two years of the date the cause of action arose (Section 69). Complaints can be filed online on the e-Daakhil portal.",
        "Attach invoices, correspondence, photographs and any expert report. No fee is payable for claims up to ₹5 lakh."
      ]
    },
    {
      title: "When the police will not register your FIR",
      law: "Bharatiya Nagarik Suraksha Sanhita, 2023",
      steps: [
        "Information about a cognizable offence must be recorded under Section 173, whichever police station it is given at. A station without jurisdiction records it as a Zero FIR and transfers it.",
        "For offences punishable with three to seven years, the officer may conduct a preliminary enquiry for up to fourteen days before registering the FIR (Section 173(3)).",
        "If registration is refused, send the substance of the information in writing, by post, to the Superintendent of Police (Section 173(4)).",
        "If that fails, apply to the Magistrate under Section 175(3), supported by an affidavit and a copy of your application to the Superintendent of Police."
      ]
    },
    {
      title: "Divorce by mutual consent",
      law: "Section 13B, Hindu Marriage Act, 1955",
      steps: [
        "Both spouses must have lived separately for at least one year and agree that the marriage should be dissolved.",
        "Settle alimony, stridhan, child custody and pending cases in a written settlement before filing.",
        "File the joint first motion petition before the Family Court. Statements of both parties are recorded.",
        "The second motion is filed after six months and within eighteen months. The Supreme Court held in Amardeep Singh v. Harveen Kaur (2017) that the six-month period can be waived in suitable cases."
      ]
    },
    {
      title: "A homebuyer's complaint before RERA",
      law: "Real Estate (Regulation and Development) Act, 2016",
      steps: [
        "Check the project's registration and the promised completion date on the state RERA website.",
        "File a complaint before the Authority under Section 31 for refund, interest or other violations. Claims for compensation are decided by the Adjudicating Officer under Section 71.",
        "Keep the allotment letter, builder-buyer agreement, payment receipts and correspondence ready as annexures.",
        "An appeal against an order lies to the Real Estate Appellate Tribunal within sixty days (Section 44). A promoter must first deposit the amount ordered (Section 43(5))."
      ]
    }
  ]
};
