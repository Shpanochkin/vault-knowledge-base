const fs = require('fs');
const path = require('path');

const {
  LOGO_WHITE, LOGO_COLOR, LOGO_MARK,
  ICONS,
  generateWaveSVG, generateFooterWaveSVG,
  esc, renderContent, generateHTML
} = require('./render.js');


// ═══════════════════════════════════════════
// DOCUMENT DATA
// ═══════════════════════════════════════════

const documents = [
  // ────────────────────────────────────────
  // 1. CODE OF CONDUCT
  // ────────────────────────────────────────
  {
    id: 'Code_of_Conduct',
    title: 'Code of Conduct',
    heroTitle: 'Code of<br>Conduct',
    badge: 'Company Policy',
    subtitle: 'Vault Group — Guidelines for a healthy, inclusive, and productive workplace.',
    icon: ICONS.shield,
    seed: 0,
    intro: 'As a global and diverse team, it is essential that we maintain a positive and respectful work environment. Below are the guidelines we follow to ensure a healthy, inclusive, and productive workplace.',
    closing: "Let's work together to maintain a positive and collaborative environment where everyone can thrive!",
    sections: [
      {
        number: '01', title: 'Respect and Inclusivity',
        content: [
          { type: 'list', items: [
            'Treat all team members with respect, regardless of their background, gender, race, religion, or personal beliefs.',
            'Embrace diversity and create an environment where everyone feels valued and heard.'
          ]}
        ]
      },
      {
        number: '02', title: 'Professionalism',
        content: [
          { type: 'list', items: [
            'Maintain a professional tone in all communications, whether on Slack, email, or during meetings.',
            'Be mindful of your language and always communicate in a clear and constructive manner.'
          ]}
        ]
      },
      {
        number: '03', title: 'No Tolerance for Harassment',
        content: [
          { type: 'list', items: [
            'Harassment, bullying, or any form of disrespectful behavior will not be tolerated. If you witness or experience inappropriate behavior, please report it to HR or a team leader.',
            'This includes but is not limited to: discriminatory language, personal attacks, inappropriate jokes, or offensive content.'
          ]}
        ]
      },
      {
        number: '04', title: 'Collaboration and Teamwork',
        content: [
          { type: 'list', items: [
            'Be supportive of your colleagues. Help when needed, share knowledge, and contribute positively to discussions.',
            'Use channels and meetings as spaces for collaborative problem-solving, not for individual complaints or negative remarks.'
          ]}
        ]
      },
      {
        number: '05', title: 'Accountability and Integrity',
        content: [
          { type: 'list', items: [
            'Take responsibility for your actions, both individually and as part of the team.',
            'Be honest, transparent, and respectful when providing feedback or addressing mistakes.'
          ]}
        ]
      },
      {
        number: '06', title: 'Privacy and Confidentiality',
        content: [
          { type: 'list', items: [
            'Respect the privacy of colleagues and company information.',
            'Do not share sensitive information in public channels or outside the company unless authorized.'
          ]}
        ]
      },
      {
        number: '07', title: 'Work-Life Balance',
        content: [
          { type: 'list', items: [
            'Respect others\u2019 time. Do not expect immediate responses outside of working hours unless it is an urgent matter.',
            'Acknowledge the importance of maintaining a balance between work and personal life for overall well-being.'
          ]}
        ]
      },
      {
        number: '08', title: 'Constructive Communication',
        content: [
          { type: 'list', items: [
            'If you have a concern or disagreement, address it respectfully and constructively. Focus on finding solutions, not placing blame.',
            'Encourage open dialogue and avoid assumptions.'
          ]}
        ]
      },
      {
        number: '09', title: 'Encourage Fun and Positivity',
        content: [
          { type: 'list', items: [
            'While we take our work seriously, we also encourage fun and positive interactions.',
            'Use the appropriate channels for non-work conversations, share jokes, stories, and celebrate milestones.'
          ]}
        ]
      },
      {
        number: '10', title: 'Lead by Example',
        content: [
          { type: 'list', items: [
            'Be a role model for others in terms of behavior, attitude, and professionalism.',
            'By following these guidelines, we create a culture that promotes mutual respect and success.'
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 2. COMMUNICATION GUIDELINES
  // ────────────────────────────────────────
  {
    id: 'Communication_Guidelines',
    title: 'Communication Guidelines',
    heroTitle: 'Communication<br>Guidelines',
    badge: 'Standards & Best Practices',
    subtitle: 'Vault Group — How we maintain efficient and respectful communication across all platforms.',
    icon: ICONS.chat,
    seed: 2.5,
    intro: 'As a globally distributed team, clear communication is essential to our success. Here is how we maintain efficient and respectful communication across all platforms.',
    closing: "Let's keep communication clear, collaborative, and fun!",
    sections: [
      {
        number: '01', title: 'General Guidelines',
        content: [
          { type: 'list', items: [
            '<strong>Language:</strong> Our primary language for communication is English to ensure inclusivity and understanding for everyone.',
            '<strong>For priority requests:</strong> Use email. For everyday matters: Slack channels.',
            '<strong>Be clear and concise:</strong> Whether writing an email, Slack message, or preparing for a meeting, aim for clarity and brevity.',
            '<strong>Be respectful:</strong> Always maintain a professional and respectful tone in all communications.',
            '<strong>Review the Vault Code of Conduct:</strong> Ensure you are familiar with and follow the Vault Code of Conduct to help maintain a respectful and professional work environment.'
          ]}
        ]
      },
      {
        number: '02', title: 'Email Communication',
        content: [
          { type: 'list', items: [
            'Use clear subject lines to indicate the purpose of your email (e.g., "[ACTION REQUIRED] Team Feedback" or "[FYI] New Process Update").',
            'Always address the recipient(s) and close with a polite signature. Do not forget CC.',
            'Keep emails focused and avoid overly long messages. If multiple topics need to be discussed, use bullet points for structure.',
            'For urgent matters, consider using Slack or scheduling a meeting. Emails are better suited for formal or non-urgent communication.'
          ]}
        ]
      },
      {
        number: '03', title: 'Slack Communication',
        content: [
          { type: 'list', items: [
            '<strong>Public channels &gt; DMs:</strong> Whenever possible, use public channels to keep conversations transparent and inclusive.',
            '<strong>@here and @channel:</strong> Use these mentions sparingly to avoid unnecessary disruptions. Only use them for critical updates.',
            '<strong>Thread replies:</strong> Use threads to keep conversations organized and prevent flooding the channel.',
            '<strong>Be mindful of time zones:</strong> Our distributed team spans various time zones, so be considerate when expecting responses.',
            '<strong>React with emojis:</strong> Use emojis to acknowledge posts/requests. It is a simple way to show you have seen the message without needing to reply.',
            '<strong>Set your status:</strong> When on vacation, sick, commuting, or away from your desk. This helps everyone know your availability and manage expectations for response times.'
          ]}
        ]
      },
      {
        number: '04', title: 'Deadlines for Replies',
        content: [
          { type: 'table', headers: ['Type', 'Response Time'], rows: [
            ['Urgent cases', 'Within 2 hours during working hours'],
            ['Non-urgent cases', 'Within 1 business day']
          ]},
          { type: 'p', text: 'If you are unable to respond in time, kindly let your team know when you will be available.' }
        ]
      },
      {
        number: '05', title: 'Meeting Etiquette',
        content: [
          { type: 'list', items: [
            '<strong>Preparation:</strong> Share an agenda in advance to give participants time to prepare.',
            '<strong>Time Management:</strong> Start and end meetings on time. Respect everyone\u2019s schedule.',
            '<strong>Active Participation:</strong> Use video whenever possible for better engagement. Stay focused and minimize distractions.',
            '<strong>Follow-Up:</strong> Summarize key decisions and next steps in Slack. Put tasks in Task Tracker during the call.'
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 3. EQUIPMENT POLICY
  // ────────────────────────────────────────
  {
    id: 'Equipment_Policy',
    title: 'Equipment Policy',
    heroTitle: 'Equipment<br>Policy',
    badge: 'IT Hardware Guidelines',
    subtitle: 'Vault Group — Procedures for requesting, using, maintaining, and returning company equipment.',
    icon: ICONS.laptop,
    seed: 5,
    intro: 'This policy outlines the procedures for requesting, using, maintaining, and returning company equipment at Vault. It applies to employees who require company-issued hardware for their work.',
    sections: [
      {
        number: '01', title: 'Equipment Issuance',
        content: [
          { type: 'subsection', title: 'For New Employees', content: [
            { type: 'list', items: [
              'During the hiring process, the Recruiter will confirm whether the new employee requires company equipment.',
              'If equipment is needed, the Recruiter will submit a request to the IT Admin, specifying the required equipment.',
              'The IT Admin will check the available stock and process the request.'
            ]}
          ]},
          { type: 'subsection', title: 'For Current Employees', content: [
            { type: 'p', text: 'If an existing team member requires additional or replacement equipment, they must submit a request directly to the IT Admin.' }
          ]},
          { type: 'callout', variant: 'important', html: '<strong>Important:</strong> Equipment can only be provided to employees located in Moscow.' }
        ]
      },
      {
        number: '02', title: 'Equipment Repairs',
        content: [
          { type: 'subsection', title: 'Non-Mechanical Damage (Company Covers Repair Cost)', content: [
            { type: 'p', text: 'If the damage is not caused by external impact, the employee covers the cost upfront, and the company fully reimburses the expense.' },
            { type: 'list', items: [
              'Software malfunctions: system crashes, frequent errors, or performance issues not caused by external damage.',
              'Hardware failures: internal component issues (e.g., motherboard, SSD, battery degradation) without visible physical damage.',
              'Overheating issues due to internal defects rather than misuse.',
              'Charging or power problems due to internal faults, not damaged ports or cables.',
              'Network or connectivity failures unrelated to physical damage.'
            ]}
          ]},
          { type: 'subsection', title: 'Mechanical Damage (Employee Covers Repair Cost)', content: [
            { type: 'p', text: 'If the damage is due to misuse, external impact, or improper handling, the employee is responsible for the full repair cost.' },
            { type: 'list', items: [
              'Cracked or broken screen.',
              'Liquid spills causing malfunction.',
              'Damaged ports or keyboard due to improper handling.'
            ]}
          ]}
        ]
      },
      {
        number: '03', title: 'Equipment Return Upon Termination',
        content: [
          { type: 'p', text: 'Employees leaving Vault have two options:' },
          { type: 'list', items: [
            '<strong>Return to IT Admin:</strong> The IT Admin will inspect the equipment and return it to inventory.',
            '<strong>Request to Purchase:</strong> Employees can submit a buyout request. If approved, the IT Admin will determine a fair price based on the device\u2019s age and specifications. The buyout amount will be deducted from the final salary payout.'
          ]}
        ]
      },
      {
        number: '04', title: 'Final Provisions',
        content: [
          { type: 'list', items: [
            'Employees are responsible for using company equipment properly and securely.',
            'The IT Admin reserves the right to inspect and audit company-issued equipment.'
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 4. SALARY INVOICE SUBMISSION
  // ────────────────────────────────────────
  {
    id: 'Salary_Invoice_Submission',
    title: 'Salary Invoice Submission',
    heroTitle: 'Salary Invoice<br>Submission',
    badge: 'Payment Process Guide',
    subtitle: 'Vault Group — Everything you need to know about salary payments and invoice submission.',
    icon: ICONS.invoice,
    seed: 7.5,
    intro: 'At Vault, salaries are processed once a month, specifically on the <strong>10th of each month</strong>. If the 10th falls on a weekend or public holiday, payments will be processed on the next working day.',
    sections: [
      {
        number: '01', title: 'Salary Payment Method',
        content: [
          { type: 'list', items: [
            'Payments are made in cryptocurrency (<strong>USDT</strong>).',
            'Funds are transferred to the crypto wallet specified by the employee.',
            'You may use any platform of your choice, as long as it is secure and convenient.',
          ]},
          { type: 'callout', variant: 'important', html: '<strong>Important:</strong> Your wallet must support the <strong>TRC-20 network</strong> to receive payments.' }
        ]
      },
      {
        number: '02', title: 'Invoice Submission Process',
        content: [
          { type: 'subsection', title: 'Step 1: Invoice Request', content: [
            { type: 'p', text: '1\u20132 days before the payment date, the accounting team will contact you to request an invoice submission. A sample invoice template will be provided.' }
          ]},
          { type: 'subsection', title: 'Step 2: How to Fill Out Your Invoice', content: [
            { type: 'list', items: [
              'In the <strong>Bank Details</strong> field, enter only your crypto wallet address and the network (TRC-20).',
              'In the <strong>Description</strong> field, specify the services you provide, as outlined in your contract.',
              'Update the <strong>date</strong> each month.',
              'Add your <strong>signature</strong> at the bottom before submitting.'
            ]}
          ]},
          { type: 'subsection', title: 'Step 3: Invoice Submission', content: [
            { type: 'p', text: 'Once completed, submit your invoice promptly to avoid payment delays.' }
          ]},
          { type: 'callout', variant: 'tip', html: '<strong>Tip:</strong> Double-check your wallet address and ensure it supports TRC-20 to prevent transaction issues.' }
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 5. VAULT BUSINESS GLOSSARY
  // ────────────────────────────────────────
  {
    id: 'Vault_Business_Glossary',
    title: 'Vault Business Glossary',
    heroTitle: 'Business<br>Glossary',
    badge: 'Key Terms & Definitions',
    subtitle: 'Vault Group — Core concepts and terminology across IT, Fintech, Crypto, and more.',
    icon: ICONS.book,
    seed: 10,
    intro: 'Below is a categorized glossary to help team members understand core concepts and terminology used at Vault across IT, Fintech, Crypto, and more.',
    closing: 'If you come across any terms or concepts that you believe should be included here, let the HR team know!',
    sections: [
      {
        number: '01', title: 'Banking and Payments',
        content: [
          { type: 'definitions', items: [
            { term: 'IBAN', desc: '(International Bank Account Number) \u2014 A special number that helps banks identify your account for sending or receiving money internationally.' },
            { term: 'SWIFT Code', desc: '\u2014 A unique code used by banks for international transfers to make sure the money gets to the right place.' },
            { term: 'KYC', desc: '(Know Your Customer) \u2014 A process where companies check who you are by asking for your ID or other documents to avoid fraud.' },
            { term: 'KYB', desc: '(Know Your Business) \u2014 A process to verify businesses just like KYC for individuals. Helps prevent fraud and money laundering.' },
            { term: 'AML', desc: '(Anti-Money Laundering) \u2014 Rules to stop bad actors from using money they got illegally.' },
            { term: 'PSP', desc: '(Payment Service Provider) \u2014 A company that helps businesses accept payments, like PayPal or Stripe.' },
            { term: 'On-Ramp', desc: '\u2014 Converting regular money (like dollars or euros) into cryptocurrency.' },
            { term: 'Off-Ramp', desc: '\u2014 Changing cryptocurrency back into regular money.' },
            { term: 'SEPA', desc: '(Single Euro Payments Area) \u2014 A system to make sending money across Europe simple and fast.' },
            { term: 'CVC', desc: '(Card Verification Code) \u2014 The 3-digit number on the back of your card used for secure online payments.' },
          ]}
        ]
      },
      {
        number: '02', title: 'Blockchain and Crypto',
        content: [
          { type: 'definitions', items: [
            { term: 'Blockchain', desc: '\u2014 A secure digital ledger for keeping records of transactions. Everyone can see it, but no one can change past entries.' },
            { term: 'Crypto Exchange', desc: '\u2014 A platform to buy, sell, or trade cryptocurrencies like Bitcoin or Ethereum.' },
            { term: 'Token', desc: '\u2014 A digital asset that can represent money, a piece of a company, or access to services.' },
            { term: 'Utility Token', desc: '\u2014 A token that gives access to a specific service (like a gift card).' },
            { term: 'Security Token', desc: '\u2014 Like a digital stock representing ownership in a company.' },
            { term: 'Governance Token', desc: '\u2014 A token that lets you vote on decisions for a blockchain project.' },
            { term: 'Stablecoin', desc: '\u2014 A cryptocurrency designed to match the value of regular money, like USD.' },
            { term: 'NFT', desc: '(Non-Fungible Token) \u2014 A one-of-a-kind digital item, like art, music, or collectibles.' },
            { term: 'DeFi', desc: '(Decentralized Finance) \u2014 Financial services (like loans or savings) without banks, built on blockchain.' },
            { term: 'Swaps', desc: '\u2014 Exchanging one cryptocurrency for another.' },
            { term: 'Liquidity Pool', desc: '\u2014 A shared pot of crypto that helps make trading easier.' },
            { term: 'Gas Fees', desc: '\u2014 Small payments to process your transaction on the blockchain.' },
            { term: 'Perpetual Contracts', desc: '\u2014 Crypto deals to bet on prices without owning the coins, with no expiry date.' },
            { term: 'DAO', desc: '(Decentralized Autonomous Organization) \u2014 A blockchain project run by its users using smart contracts, without a boss.' },
            { term: 'Layer 1 Blockchain', desc: '\u2014 The main blockchain, like Bitcoin or Ethereum.' },
            { term: 'Layer 2 Solution', desc: '\u2014 Upgrades that work on top of Layer 1 to make transactions faster and cheaper.' },
            { term: 'Ecosystem', desc: '\u2014 The network of people, tools, and services that support a blockchain project.' },
          ]}
        ]
      },
      {
        number: '03', title: 'Technology and Development',
        content: [
          { type: 'definitions', items: [
            { term: 'API', desc: '(Application Programming Interface) \u2014 A tool that lets apps talk to each other (like when Uber uses Google Maps).' },
            { term: 'SDK', desc: '(Software Development Kit) \u2014 A set of tools developers use to build apps or features.' },
            { term: 'Wallet', desc: '\u2014 A digital tool for storing and using cryptocurrency. Hot wallets are online (convenient), cold wallets are offline (safer).' },
            { term: 'Smart Contract', desc: '\u2014 A computer program that automatically does something (like sending money) when conditions are met.' },
            { term: 'Hashing', desc: '\u2014 Turning data into a unique code to keep it secure.' },
            { term: 'Mining', desc: '\u2014 Using computers to process blockchain transactions and earn cryptocurrency rewards.' },
            { term: 'Proof-of-Work (PoW)', desc: '\u2014 A system where miners solve puzzles to secure the blockchain.' },
            { term: 'Proof-of-Stake (PoS)', desc: '\u2014 A system where people stake their crypto to help secure the blockchain.' },
            { term: 'White Label', desc: '\u2014 Ready-made products (like crypto wallets) that companies can rebrand and sell as their own.' },
          ]}
        ]
      },
      {
        number: '04', title: 'Operations and Metrics',
        content: [
          { type: 'definitions', items: [
            { term: 'CAC', desc: '(Customer Acquisition Cost) \u2014 How much it costs to get one customer.' },
            { term: 'LTV', desc: '(Lifetime Value) \u2014 The total money a customer brings to the company during their time as a client.' },
            { term: 'Fiat', desc: '\u2014 Regular government-issued money, like dollars or euros.' },
            { term: 'Liquidity', desc: '\u2014 How easy it is to turn an asset (like crypto) into cash.' },
            { term: 'Airdrop', desc: '\u2014 Free tokens given to users to promote a project.' },
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 7. SALES — ZOHO ECOSYSTEM USAGE REGULATION
  //    (Commercial Department, strict mode)
  // ────────────────────────────────────────
  {
    id: 'Sales_Zoho_Regulation',
    title: 'Zoho Ecosystem Usage Regulation — Sales',
    heroTitle: 'Zoho Ecosystem<br>Usage Regulation',
    badge: 'Commercial Department · Mandatory',
    subtitle: 'Vault Group — Mandatory rules for the Sales Department on using Zoho CRM, Cliq, Voice, Desk, People, and Calendar.',
    icon: ICONS.shield,
    seed: 15,
    style: 'strict',
    department: 'commercial',
    lang: 'en',
    backHref: 'commercial-department.html',
    backLabel: 'Back to Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'This Regulation establishes mandatory rules for the use of the Zoho ecosystem (the "Systems") by employees of the Sales Department in the performance of their duties. Violation of this Regulation triggers disciplinary action in accordance with Section 14.',
    signatureBlock: {
      stampLabel: 'Approved',
      intro: 'Issued and approved by the Chief Commercial Operations Officer of Vault Group.',
      name: 'Sviatoslav Shpanochkin',
      title: 'Chief Commercial Operations Officer',
      date: 'May 1, 2026',
      dateLabel: 'Effective date',
      method: 'Signed via Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'General Provisions',
        content: [
          { type: 'subsection', number: '1.1', title: 'Purpose', content: [
            { type: 'p', text: 'This Regulation establishes mandatory rules for the use of the Zoho ecosystem (the "Systems") by employees of the Sales Department in the performance of their duties.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Scope', content: [
            { type: 'p', text: 'This Regulation applies to all employees of the Sales Department, including Sales Managers, Business Developers, Partnerships Associates, Marketing Growth and Lead Generation Managers, as well as interns and temporarily engaged contractors.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Principles', content: [
            { type: 'list', items: [
              '<strong>Single source of truth — Zoho CRM.</strong> Any client information not recorded in CRM is considered to not exist.',
              '<strong>Transparency</strong> — every action with a client is reflected in the system and accessible to the supervisor.',
              '<strong>Cadence and rhythm</strong> — work is performed as a continuous task cycle with no blind spots.'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Liability', content: [
            { type: 'p', text: 'Violation of this Regulation triggers disciplinary action in accordance with Section 14.' }
          ]}
        ]
      },
      {
        number: '02', title: 'Employee Profile and Onboarding',
        content: [
          { type: 'subsection', number: '2.1', title: 'Mandatory Setup', content: [
            { type: 'p', text: 'Before starting client work, each employee must:' },
            { type: 'list', items: [
              'Connect their corporate Gmail mailbox to Zoho CRM.',
              'Connect their work calendar to Zoho Calendar.',
              'Set a current photo in their Zoho CRM profile (a business portrait, face clearly visible).',
              'Complete their Zoho CRM profile: full name, position, work phone, messengers (Cliq), short bio if applicable.',
              'Install and authorize Zoho CRM, Cliq, and Voice on their work device and/or browser.'
            ]}
          ]},
          { type: 'subsection', number: '2.2', title: 'Check-in and Check-out', content: [
            { type: 'p', text: 'Each employee must check in via Zoho Cliq at the start of the workday and check out at its end. Failure to check in without prior approval from the supervisor is treated as a late arrival or no-show.' }
          ]}
        ]
      },
      {
        number: '03', title: 'CRM Entity Hierarchy',
        content: [
          { type: 'subsection', number: '3.1', title: '“Account is the Root” Principle', content: [
            { type: 'list', items: [
              '<strong>Account</strong> — the root entity.',
              '<strong>Contact</strong> — belongs to an Account.',
              '<strong>Deal</strong> — belongs to an Account; <strong>exactly one</strong> Contact is attached to each Deal as the primary Contact for that Deal.'
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: 'Lead and Lead Conversion', content: [
            { type: 'olist', items: [
              'Every initial prospect is first recorded as a Lead.',
              'A Lead is converted <strong>only via the Blueprint</strong> in the Lead record.',
              'Conversion creates three entities at once: Account + Contact + Deal.',
              'It is prohibited to manually create an Account, Contact, or Deal bypassing the Lead Blueprint when the prospect originated as a Lead.'
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: 'Adding Additional Contacts', content: [
            { type: 'olist', items: [
              'If an Account already exists and a new Contact must be added — the Contact is created <strong>only from the Account record</strong> (Related → Contacts).',
              'A duplicate check by email and phone is mandatory before creation.',
              'Creating a Contact "standalone" via the Contacts module is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: 'Adding Additional Deals', content: [
            { type: 'olist', items: [
              'A new Deal under an existing Account is created <strong>only from the Account record</strong> (Related → Deals).',
              'A Contact must be attached to the Deal.',
              'Creating a Deal "standalone" via the Deals module is prohibited.'
            ]}
          ]}
        ]
      },
      {
        number: '04', title: 'Working with Tasks',
        content: [
          { type: 'subsection', number: '4.1', title: 'The Task Cycle', content: [
            { type: 'p', text: 'Each employee’s work follows a continuous cycle:' },
            { type: 'olist', items: [
              '<strong>Take the task into work.</strong>',
              '<strong>Perform the action</strong> — call, email, meeting, etc.',
              '<strong>Close the task with a result</strong> — the Description field must be filled: what happened, what was agreed, the next step.',
              '<strong>Create the next task</strong> — if work on the Deal is not complete, the next task is created with a specific date and action.'
            ]}
          ]},
          { type: 'subsection', number: '4.2', title: 'No Empty Closures', content: [
            { type: 'p', text: 'Closing a task without a result is prohibited. A description such as "ok", "done", "-", "." is treated as non-completion.' }
          ]},
          { type: 'subsection', number: '4.3', title: 'No Date Postponement', content: [
            { type: 'olist', items: [
              'Postponing a task’s due date is prohibited. Any rescheduling has a reason — and that reason becomes the result of closing the current task (e.g. "client asked to revisit in a week").',
              'A <strong>new</strong> task is created for the new date. The previous task is closed with the postponement reason recorded.'
            ]}
          ]},
          { type: 'subsection', number: '4.4', title: 'Daily "Set Next Step" Task', content: [
            { type: 'olist', items: [
              'Each morning, an automated process creates a "Set Next Step" task for the employee on every Deal that has no open active task.',
              'A "Set Next Step" task must be closed within the same day.',
              '"Set Next Step" can only be closed after a real next task on that Deal has been created.'
            ]}
          ]},
          { type: 'subsection', number: '4.5', title: 'Every Active Deal Has an Open Task', content: [
            { type: 'p', text: 'Every Deal in an active stage (not Closed Won / Closed Lost) must have at least one open task. A Deal without an open task for the current or next workday is considered abandoned and recorded as a violation.' }
          ]},
          { type: 'subsection', number: '4.6', title: 'Tasks Live on the Deal', content: [
            { type: 'p', html: 'Tasks, events, calls, and emails are created <strong>strictly inside the Deal</strong>. Creating activities at the Contact or Account level is prohibited (the only exception is pre-sales activity before a Deal exists, agreed with the supervisor).' }
          ]},
          { type: 'subsection', number: '4.7', title: 'Minimum Daily Output', content: [
            { type: 'olist', items: [
              'The minimum number of tasks completed per day is set in the KPI regulation for the relevant role.',
              'A day with less than 30% of the daily task quota completed is not counted in the calculation of worked days (unless agreed with the supervisor — sick leave, training, business trip, etc.).'
            ]}
          ]}
        ]
      },
      {
        number: '05', title: 'Client Communication Channels',
        content: [
          { type: 'subsection', number: '5.1', title: 'Voice Calls', content: [
            { type: 'olist', items: [
              'All inbound and outbound calls with clients are placed <strong>only through Zoho Voice</strong>.',
              'Using a personal mobile phone for client voice calls is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '5.2', title: 'WhatsApp', content: [
            { type: 'olist', items: [
              'WhatsApp communication is conducted <strong>only through the WhatsApp channel embedded in Zoho CRM</strong>.',
              'Conducting client WhatsApp communication from a personal account is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Email', content: [
            { type: 'olist', items: [
              'The corporate Gmail mailbox is connected to CRM.',
              'All Deal-related correspondence must land in the Deal record. The Email field on the Deal must be filled correctly — this is a hard requirement for synchronization.',
              'Communicating with the client from a personal mailbox or from any mailbox not connected to CRM is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '5.4', title: 'Telegram, LinkedIn, and Other Non-integrated Channels', content: [
            { type: 'olist', items: [
              'Such channels may be used only when no alternative is available.',
              'Every meaningful exchange in a non-integrated channel must be <strong>copied into the Deal Notes</strong> with the channel, date, and a brief summary.',
              'Documents received through such channels are attached to the Deal Attachments.'
            ]}
          ]}
        ]
      },
      {
        number: '06', title: 'Data Hygiene',
        content: [
          { type: 'subsection', number: '6.1', title: 'Naming Conventions for Proper Nouns', content: [
            { type: 'olist', items: [
              'Names, surnames, company names, product names, city names, etc. are written <strong>in English</strong> (if the original is in Latin script or has a commonly used Latin transliteration), starting with a capital letter unless the official spelling explicitly requires lowercase (<code>iPhone</code>, <code>eBay</code>, <code>dYdX</code>).',
              'Writing names in all caps, all lowercase, or in arbitrary transliteration is prohibited.',
              'Hyphenated surnames are written with a hyphen and no spaces: <code>Smith-Jones</code>.',
              '<strong>Source of truth — the questionnaire completed by the client.</strong> Once a completed questionnaire is received, the company name and the contact’s first/last name are taken in the spelling provided by the client — provided there are no obvious typos and no contradiction with a precisely known spelling (e.g. the company’s official LinkedIn page).'
            ]}
          ]},
          { type: 'subsection', number: '6.2', title: 'Data Formats', content: [
            { type: 'list', items: [
              'Phone numbers — international format <code>+CountryCode Number</code> (e.g. <code>+1 415 555 0123</code>).',
              'Emails — lowercase.',
              'Dates — the CRM format (use the dropdown; free-form manual input is prohibited where the field does not require it).',
              'Amounts — in US dollars (USD).'
            ]}
          ]},
          { type: 'subsection', number: '6.3', title: 'Field Completeness', content: [
            { type: 'olist', items: [
              'Fields mandatory for the role must be filled at 100% before the Deal is moved to the next Pipeline stage.',
              'The list of mandatory fields per stage is defined in the Layout of the relevant Pipeline.',
              'The fields Industry, Country, Source, Owner, Stage, and Closing Date are mandatory in every case.'
            ]}
          ]},
          { type: 'subsection', number: '6.4', title: 'Status Accuracy', content: [
            { type: 'p', text: 'The Deal Stage, Contact status, and Lead status must reflect actual reality. A Deal is moved to the next stage only when there is documented evidence (an email, a call recording, a meeting note).' }
          ]},
          { type: 'subsection', number: '6.5', title: 'Duplicates', content: [
            { type: 'p', text: 'A duplicate check by email, phone, and website domain is mandatory before creating any entity. If a duplicate is found, work continues on the existing record.' }
          ]}
        ]
      },
      {
        number: '07', title: 'Documents and Products on the Deal',
        content: [
          { type: 'subsection', number: '7.1', title: 'Documents', content: [
            { type: 'olist', items: [
              'All documents received from the client (NDA, contracts, decks, completed questionnaires, screenshots) are attached to the Deal <strong>Attachments</strong>.',
              'The file name must include the document type and the date: <code>NDA_2026-05-01.pdf</code>, <code>Questionnaire_2026-05-01.pdf</code>.'
            ]}
          ]},
          { type: 'subsection', number: '7.2', title: 'Products and Deal Amount', content: [
            { type: 'olist', items: [
              'Once the client has indicated the chosen product/plan, the product is added to the <strong>Products</strong> section of the Deal.',
              'After products are added or changed, the employee must press the <strong>Recalculate Amount</strong> button to recompute the Deal amount.',
              'A Deal Amount that does not match the attached products is considered an error and must be fixed immediately.'
            ]}
          ]}
        ]
      },
      {
        number: '08', title: 'Owner Reassignment',
        content: [
          { type: 'subsection', number: '8.1', title: 'Cascade Principle', content: [
            { type: 'p', html: 'Owner reassignment is performed <strong>only from the Account record</strong>. After the Account Owner changes, the Owner is updated on all related Contacts and Deals.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Notification', content: [
            { type: 'p', text: 'An Owner change is accompanied by:' },
            { type: 'list', items: [
              'A Note on the Account with the handover date, the reason, and confirmation from both employees.',
              'A notification in the relevant Zoho Cliq channel.',
              'A handover of open tasks: the previous Owner closes their tasks with results; the new Owner creates their own.'
            ]}
          ]},
          { type: 'subsection', number: '8.3', title: 'No "Silent" Handover', content: [
            { type: 'p', text: 'Changing the Owner of a Deal or Contact bypassing the Account is prohibited; changing the Owner without notification and a written record is prohibited.' }
          ]}
        ]
      },
      {
        number: '09', title: 'Communication SLAs',
        content: [
          { type: 'subsection', number: '9.1', title: 'Inbound Calls', content: [
            { type: 'olist', items: [
              'During working hours, the employee must answer an incoming client call via Zoho Voice immediately.',
              'A missed call is acceptable only when one of the following holds: the employee’s calendar shows a confirmed meeting at that time; or the Zoho Voice logs show the employee was on another active call at the moment of the miss.',
              'Any other missed call is recorded as an SLA violation.',
              'The employee must call back within 15 minutes of becoming available.'
            ]}
          ]},
          { type: 'subsection', number: '9.2', title: 'Cliq Messages', content: [
            { type: 'olist', items: [
              'A work message in Zoho Cliq must be acknowledged <strong>within one hour</strong> during working hours.',
              'Ignoring <code>@user</code>, <code>@channel</code>, mentions, and reactions is prohibited.',
              'The detailed Cliq usage rules are defined in a separate regulation.'
            ]}
          ]},
          { type: 'subsection', number: '9.3', title: 'Client Email', content: [
            { type: 'p', text: 'The client must receive an email reply within 4 hours during working hours. If a substantive reply is not yet possible, an interim message must be sent stating the deadline for the full reply.' }
          ]}
        ]
      },
      {
        number: '10', title: 'Technical Requests (Bugs, Improvements, Suggestions)',
        content: [
          { type: 'subsection', number: '10.1', title: 'The Only Channel Is Zoho Desk', content: [
            { type: 'olist', items: [
              'Every request regarding a system bug, an improvement, or a process suggestion must be filed <strong>strictly as a Zoho Desk ticket</strong>.',
              'A request via Cliq, email, voice, or any other channel is not considered accepted into work until a ticket is created.',
              'The ticket must include: title (a short summary); type (Bug / Feature Request / Suggestion); description (context, steps to reproduce, expected vs. actual); a screenshot or a recording link.'
            ]}
          ]},
          { type: 'subsection', number: '10.2', title: 'No Duplicates', content: [
            { type: 'p', text: 'Creating duplicate tickets, bypassing the ticket channel, or escalating to chat before a ticket reply is received is prohibited.' }
          ]}
        ]
      },
      {
        number: '11', title: 'Notifications',
        content: [
          { type: 'subsection', number: '11.1', title: 'Cliq', content: [
            { type: 'olist', items: [
              'The employee must monitor notifications in every Cliq channel they are a member of.',
              'Member of a channel = obliged to read it. Muting a channel is allowed only with the supervisor’s approval.',
              'Leaving work channels in Cliq without approval is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '11.2', title: 'CRM', content: [
            { type: 'p', text: 'CRM notifications (overdue tasks, mentions, approval requests) are processed at the start of the workday and continuously throughout the day as they arrive.' }
          ]}
        ]
      },
      {
        number: '12', title: 'Prohibitions (Consolidated List)',
        content: [
          { type: 'p', text: 'The following is prohibited:' },
          { type: 'olist', items: [
            'Any client communication outside the Zoho ecosystem without copying it into CRM.',
            'Creating an Account, Contact, or Deal outside the established hierarchy (see Section 3).',
            'Closing tasks without a result.',
            'Postponing a task’s due date (instead, close the current one with a result and create a new one).',
            'Leaving active Deals without an open task.',
            'Using a personal phone, personal WhatsApp, or personal mailbox for client communication.',
            'Changing the Owner bypassing the Account record.',
            'Creating activities (tasks, calls, emails, meetings) outside the Deal.',
            'Ignoring incoming calls and messages outside the regulated grounds.',
            'Filing improvement/bug requests outside Zoho Desk.',
            'Storing client documents outside the Deal Attachments (on a personal PC, in Telegram, on a USB drive).'
          ]}
        ]
      },
      {
        number: '13', title: 'Monitoring and Audit',
        content: [
          { type: 'subsection', number: '13.1', title: 'Regular Audits', content: [
            { type: 'p', text: 'The Department head (or a designated auditor) performs:' },
            { type: 'list', items: [
              'A daily express dashboard audit: today’s tasks, missed calls, Cliq SLA.',
              'A weekly data hygiene audit: duplicates, empty fields, abandoned Deals.',
              'A monthly full audit of compliance with this Regulation.'
            ]}
          ]},
          { type: 'subsection', number: '13.2', title: 'Violation Notice', content: [
            { type: 'p', text: 'On a confirmed violation, the employee receives a Cliq notice indicating: the Regulation clause violated; the specific violation (a link to the CRM record); the deadline to remediate.' }
          ]}
        ]
      },
      {
        number: '14', title: 'Liability for Violations',
        content: [
          { type: 'subsection', number: '14.1', title: 'Escalation Scale', content: [
            { type: 'olist', items: [
              '<strong>First violation</strong> — verbal warning, recorded in Cliq.',
              '<strong>Second violation of the same clause within 30 days</strong> — written warning, monthly bonus reduced by 5–15%.',
              '<strong>Third violation of the same clause within 90 days</strong> — monthly bonus reduced by 25–50%, conversation with the direct supervisor.',
              '<strong>Systematic violations</strong> (more than 5 records in a month across different clauses, or 3 records of the same clause within a quarter) — grounds for terminating the contractor agreement at the company’s initiative.'
            ]}
          ]},
          { type: 'subsection', number: '14.2', title: 'Gross Violations', content: [
            { type: 'p', text: 'Each of the following triggers a 50% bonus reduction on a single occurrence and may serve as grounds for immediate termination of the contractor relationship:' },
            { type: 'list', items: [
              'Concealing client correspondence from the company.',
              'Running a client via a personal channel to bypass CRM.',
              'Disclosing client data to third parties.',
              'Deleting CRM records without approval.',
              'Systematic falsification of task results.'
            ]}
          ]},
          { type: 'subsection', number: '14.3', title: 'Day Not Counted Toward Compensation', content: [
            { type: 'p', text: 'A day on which the minimum task quota (Section 4.7) is not met without a valid reason (sick leave, time off, business trip, training) is not counted in the compensation calculation.' }
          ]}
        ]
      },
      {
        number: '15', title: 'Final Provisions',
        content: [
          { type: 'subsection', number: '15.1', title: 'Effective Date', content: [
            { type: 'p', text: 'This Regulation takes effect on the date of approval and applies to all current and new employees of the Sales Department.' }
          ]},
          { type: 'subsection', number: '15.2', title: 'Acknowledgement', content: [
            { type: 'p', text: 'Each employee confirms acknowledgement of this Regulation by ticking the corresponding checkbox in Zoho People. Until the acknowledgement is recorded, access to CRM client work is not granted.' }
          ]},
          { type: 'subsection', number: '15.3', title: 'Amendments', content: [
            { type: 'p', text: 'Amendments are introduced by publishing an updated version of the document in Zoho People with notification to employees and a mandatory re-acknowledgement.' }
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 9. SALES MANAGER — KPI STANDARDS (EN)
  //    (Commercial Department, strict mode)
  // ────────────────────────────────────────
  {
    id: 'Sales_Manager_KPI_Standards',
    title: 'Sales Manager — KPI Standards',
    heroTitle: 'Sales Manager<br>KPI Standards',
    badge: 'Commercial Department · Mandatory',
    subtitle: 'Vault Group — KPI structure, Sales Plan, measurement, and accountability rules for Sales Managers.',
    icon: ICONS.chart,
    seed: 20,
    style: 'strict',
    department: 'commercial',
    lang: 'en',
    backHref: 'commercial-department.html',
    backLabel: 'Back to Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'This document establishes the structure of KPIs and the Sales Plan for a Sales Manager, the measurement procedure, and the accountability scale for non-performance. The actual numeric values (plan targets and KPI quotas) are set in a monthly Order of the Head of the Sales Department and are not fixed in this document.',
    signatureBlock: {
      stampLabel: 'Approved',
      intro: 'Issued and approved by the Chief Commercial Operations Officer of Vault Group.',
      name: 'Sviatoslav Shpanochkin',
      title: 'Chief Commercial Operations Officer',
      date: 'May 1, 2026',
      dateLabel: 'Effective date',
      method: 'Signed via Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'General Provisions',
        content: [
          { type: 'subsection', number: '1.1', title: 'Purpose', content: [
            { type: 'p', text: 'This document establishes the structure of the KPIs and the Sales Plan for a Sales Manager, the measurement procedure, and the accountability scale for non-performance. The actual numeric values (plan targets and KPI quotas) are set in a monthly Order of the Head of the Sales Department (Section 2) and are not fixed in this document.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Scope', content: [
            { type: 'p', text: 'The document applies to all employees in the role of Sales Manager, including those acting in the role on a temporary basis.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Measurement Principles', content: [
            { type: 'olist', items: [
              'All metrics are pulled automatically from Zoho CRM based on data entered by the employee in line with the underlying <strong>Zoho Ecosystem Usage Regulation for the Sales Department</strong>.',
              'If CRM data does not match reality, the corresponding metric is treated as failed regardless of the employee’s actual performance.',
              'The measurement period depends on the metric (day / week / month). The final reckoning of the Plan and of violations is performed on the 1st business day of the following month.'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Two Independent Accountability Tracks', content: [
            { type: 'p', html: 'Non-performance triggers measures along two <strong>independent</strong> tracks (Section 7):' },
            { type: 'list', items: [
              '<strong>Sales Plan</strong> — escalation by consecutive months of failure.',
              '<strong>KPI / Underlying Regulation</strong> — escalation by the count of violations within a rolling window.'
            ]}
          ]},
          { type: 'subsection', number: '1.5', title: 'What This Document Sets vs. What the Order Sets', content: [
            { type: 'list', items: [
              '<strong>The document</strong> fixes the structure: what is measured, how, in which period, and with what consequences. Signed once.',
              '<strong>The Order</strong> sets the actual numeric values for each month: the individual Sales Plan, the KPI quotas, the limits, and the parameters of the disciplinary scale.'
            ]}
          ]}
        ]
      },
      {
        number: '02', title: 'Composition of the Monthly Order',
        content: [
          { type: 'p', text: 'The monthly Order from the Head of the Sales Department sets, for each calendar month:' },
          { type: 'subsection', title: '1. Sales Plan', content: [
            { type: 'list', items: [
              'Plan revenue in USD for the employee.',
              'Plan number of new clients broken down <strong>by each product / tariff</strong>.',
              'List of mandatory products (those for which the Plan must be met without exception).'
            ]}
          ]},
          { type: 'subsection', title: '2. KPI Standards', content: [
            { type: 'list', items: [
              'Concrete values for "Activity" (tasks/day, meetings/week, new deals/month).',
              'Concrete intervals for "SLA" where the Order defines them (e.g., time to first touch on a new Lead).',
              'Limits for permissible deviations under "Pipeline Hygiene" and "Quality of Work".'
            ]}
          ]},
          { type: 'subsection', title: '3. Parameters of the Disciplinary Scale (Section 7.2)', content: [
            { type: 'list', items: [
              'Length of the rolling window for the violations counter.',
              'Violation count thresholds for each of the 5 steps of the scale.'
            ]}
          ]},
          { type: 'subsection', number: '2.1', title: 'Publication Date', content: [
            { type: 'p', html: 'The Order is published in Zoho People <strong>no later than the 1st business day</strong> of the month it applies to. Until a new Order is published, the values from the previous Order remain in effect.' }
          ]},
          { type: 'subsection', number: '2.2', title: 'Acknowledgement', content: [
            { type: 'p', html: 'Every Sales Manager must acknowledge the Order (checkbox in Zoho People) within <strong>2 business days</strong> of its publication.' }
          ]},
          { type: 'subsection', number: '2.3', title: 'Force of the Order', content: [
            { type: 'p', text: 'The Order has the same binding force as the present document.' }
          ]}
        ]
      },
      {
        number: '03', title: 'KPI Standards Structure',
        content: [
          { type: 'subsection', number: '3.1', title: '“Activity” Group', content: [
            { type: 'table', headers: ['Metric', 'Period', 'Description'], rows: [
              ['Closed tasks', 'day', 'Tasks closed with the Description field filled (Underlying Regulation 4.1). "Set Next Step" counts when, on closure, a real next task on the Deal has been created.'],
              ['New deals in Sales', 'month', 'A Deal in the Sales Manager’s Owner that first entered the Sales pipeline and advanced at least one stage during the month.'],
              ['Qualified meetings', 'week', 'New meetings at stage Discovery / QLF / Demo or beyond, marked in CRM as "Held" with a filled Result / Notes.']
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: '“Response SLA” Group', content: [
            { type: 'table', headers: ['Metric', 'SLA', 'Description'], rows: [
              ['First touch on a new Lead / Deal in Owner', 'set by the Order', 'During working hours — close the first task or take the inbound within the interval set by the Order. Outside of working hours — within the first business hour.'],
              ['Missed call callback', '15 minutes', 'Per Underlying Regulation 9.1.4 — after becoming available.'],
              ['Reply to a client on WhatsApp (via Zoho CRM)', '<strong>5 minutes</strong>', 'During working hours. Personal WhatsApp is prohibited by Underlying Regulation 5.2.'],
              ['Reply to a client by Email', '4 hours', 'Per Underlying Regulation 9.3 — during working hours.'],
              ['Logging activity result in CRM', '30 minutes', 'After completing a client activity (call, meeting, email, message).']
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: '“Pipeline Hygiene” Group', content: [
            { type: 'table', headers: ['Metric', 'Period', 'Description'], rows: [
              ['Overdue tasks', 'continuous', 'Overdue tasks <strong>must not exist at all</strong> — neither during the day nor at end of day. Each occurrence is a violation.'],
              ['Open tasks at end of day', 'day', 'At end of day <strong>no overdue and no tasks scheduled for today</strong> may remain. All today’s tasks are closed with a result, or closed with a postponement reason and a fresh task created for the next day.'],
              ['"Abandoned" Deals', 'day', 'An active Deal without an open task for the current or next business day is a violation (Underlying Regulation 4.5).'],
              ['"Set Next Step" closed within 24 hours', 'day', 'The "Set Next Step" task is closed within 24 hours of creation, after a real next task has been set.'],
              ['Mandatory field completeness', 'per deal', 'All mandatory fields for the current Pipeline stage are filled to 100% on every active Deal (Underlying Regulation 6.3).'],
              ['Duplicates', 'per occurrence', 'Creating a duplicate Account / Contact / Deal is a violation.']
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: '“Quality of Work” Group', content: [
            { type: 'table', headers: ['Metric', 'Period', 'Description'], rows: [
              ['Closed Won documentation', 'per deal', 'Full set of documents in Attachments: completed questionnaire, signed SLA / SOW, payment confirmations.'],
              ['Deal result write-up', 'per deal', 'Closed Won / Disqualified/Rejected — a summary in the Deal’s Description: what happened, what worked or did not, takeaways.'],
              ['Manager review score', 'month', 'Once a month the direct supervisor performs a sample review of calls and notes. Scale 1–5 on: preparation, conversation handling, objection handling, follow-up, accuracy of CRM data.']
            ]}
          ]},
          { type: 'subsection', number: '3.5', title: 'Conversions (informational)', content: [
            { type: 'p', text: 'Sales pipeline stages (Layout "Sales" in Zoho CRM):' },
            { type: 'callout', variant: 'important', html: 'Assigned/Outreach → Discovery / QLF / Demo → Docs Request → Docs Pending → Pre-Compliance Check → Offer Preparation → CFO Pricing Approval → Offer Sent &amp; Follow-up → KYB Invoiced → Compliance Review → SLA/SOW Signing → Setup Fee Invoiced &amp; Awaiting Payment → Closed Won (or, in parallel — Disqualified/Rejected).' },
            { type: 'p', html: 'Conversions across these stages are <strong>tracked on the Sales Manager’s and the supervisor’s dashboards</strong> as pipeline diagnostics. However:' },
            { type: 'list', items: [
              'The Sales Manager’s goal is <strong>meeting the Sales Plan</strong>, not the conversions themselves.',
              '<strong>Conversions are not subject to disciplinary action.</strong>',
              'The quality of the inbound leads is not the Sales Manager’s responsibility.'
            ]}
          ]}
        ]
      },
      {
        number: '04', title: 'Sales Plan Structure',
        content: [
          { type: 'subsection', number: '4.1', title: 'Composition of the Plan', content: [
            { type: 'p', text: 'The monthly Sales Plan is set in the Order and consists of:' },
            { type: 'olist', items: [
              '<strong>Plan revenue in USD</strong> — the total Closed Won amount for the employee.',
              '<strong>Plan number of new clients per product / tariff</strong> — for each product on Vault’s current price list.',
              '<strong>List of mandatory products</strong> — those for which the Plan must be met without exception.'
            ]}
          ]},
          { type: 'subsection', number: '4.2', title: 'What Counts as Plan Achieved', content: [
            { type: 'p', html: 'The Sales Plan is considered <strong>met</strong> for the month when the employee has:' },
            { type: 'list', items: [
              'Reached the plan revenue in USD, <strong>AND</strong>',
              'Met the client-count plan for <strong>every</strong> mandatory product.'
            ]},
            { type: 'p', html: 'Failing either condition is a Plan failure. The Plan is reckoned against <code>Closed Won</code> deals dated within the calendar month (Stage = Closed Won).' }
          ]},
          { type: 'subsection', number: '4.3', title: 'What Counts as Plan Overachieved (for Section 7.3)', content: [
            { type: 'p', html: 'The Sales Plan is considered <strong>overachieved by 20% or more</strong> when the actual revenue <strong>and</strong> the actual client count for every mandatory product <strong>simultaneously</strong> exceed the plan by 20% or more.' }
          ]}
        ]
      },
      {
        number: '05', title: 'Source of Data and Calculation',
        content: [
          { type: 'subsection', number: '5.1', title: 'Source', content: [
            { type: 'p', text: 'All metrics are pulled automatically from Zoho CRM Dashboards (Sales KPI Monitor → Sales Manager). Manual adjustments to the calculation are prohibited.' }
          ]},
          { type: 'subsection', number: '5.2', title: 'Transparency', content: [
            { type: 'list', items: [
              'The Sales Manager has access to a personal real-time dashboard.',
              'A monthly report is sent to the employee in Cliq no later than the <strong>3rd business day</strong> of the following month. The report covers separately: the Sales Plan status, the violations status, and the current position on the 7.2 counter.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Disputing the Calculation', content: [
            { type: 'list', items: [
              'A disagreement is raised by filing a Zoho Desk ticket (type: <strong>KPI Dispute</strong>) within <strong>5 business days</strong> of receiving the report.',
              'After 5 business days the calculation is considered accepted.'
            ]}
          ]}
        ]
      },
      {
        number: '06', title: 'Relation to Bonus',
        content: [
          { type: 'p', text: 'The actual size of the bonus, the formula, and the conditions of payment are set by the individual agreement between the employee and the company and are not fixed in this document. Withholding of the bonus is possible as one of the measures under Section 7.2.' }
        ]
      },
      {
        number: '07', title: 'Accountability',
        content: [
          { type: 'subsection', number: '7.1', title: 'Sales Plan Scale (by consecutive months)', content: [
            { type: 'table', headers: ['Step', 'Trigger', 'Measure'], rows: [
              ['1', 'First month with a failed Plan', '<strong>Written reprimand</strong> — placed in the employee’s record in Zoho People with a specific note: which plan target was missed and by how much.'],
              ['2', 'Second consecutive month with a failed Plan', '<strong>Termination of the contractor agreement</strong> at the company’s initiative.']
            ]},
            { type: 'p', text: 'A single full month with the Plan met resets the consecutive-failure counter.' }
          ]},
          { type: 'subsection', number: '7.2', title: 'KPI / Underlying Regulation Violations Scale (by count)', content: [
            { type: 'p', html: 'Every recorded violation of the KPI Standards (Section 3) or of the underlying Regulation is added to a <strong>rolling window</strong>. The length of the window and the count thresholds for moving to each step are set by the Order.' },
            { type: 'table', headers: ['Step', 'Trigger', 'Measure'], rows: [
              ['1', 'First threshold reached', '<strong>Verbal warning</strong> with a record in Cliq and in the employee’s profile.'],
              ['2', 'Second threshold reached', '<strong>Written reprimand</strong> listing the violations.'],
              ['3', 'Third threshold reached', '<strong>Withholding of the monthly bonus</strong> with a stated rationale.'],
              ['4', 'Fourth threshold reached', '<strong>Second written reprimand</strong>.'],
              ['5', 'Fifth threshold reached', '<strong>Termination of the contractor agreement</strong>.']
            ]},
            { type: 'p', html: 'Steps 1–5 are climbed sequentially. Recorded warnings and reprimands stay in the employee’s profile for <strong>12 months</strong> and may be considered in subsequent reviews.' }
          ]},
          { type: 'subsection', number: '7.3', title: 'Plan Overachievement as a Mitigating Factor', content: [
            { type: 'p', text: 'If, for the month:' },
            { type: 'list', items: [
              'The Sales Plan is <strong>overachieved by 20% or more</strong> (see 4.3), <strong>AND</strong>',
              'KPI / Regulation violations have been recorded in the same month,'
            ]},
            { type: 'p', html: '— then the violations of that month are <strong>not added</strong> to the 7.2 counter. At the same time:' },
            { type: 'olist', items: [
              'The recorded violations are flagged in the employee’s profile as <strong>"deferred"</strong> (with type and date).',
              'Should <strong>new violations</strong> be recorded over the <strong>next 90 days</strong>, the 7.2 escalation <strong>skips one step</strong> — for example, on reaching the first threshold the Step 2 measure (Reprimand) is applied directly instead of the Step 1 measure (Verbal warning).',
              'A single full calendar month with no new violations and no deferred flags clears the deferred flags.'
            ]},
            { type: 'callout', variant: 'tip', html: '<strong>The intent:</strong> an overachieved Plan is an amnesty, not an indulgence. Continued violations after the amnesty meet a stricter response.' }
          ]},
          { type: 'subsection', number: '7.4', title: 'Right to Submit Explanations', content: [
            { type: 'p', html: 'Before each step from the second (Reprimand) onward, the employee is given <strong>3 business days</strong> to submit a written explanation. The explanation is taken into account but does not erase the recorded fact when it is supported by the CRM data.' }
          ]}
        ]
      },
      {
        number: '08', title: 'Final Provisions',
        content: [
          { type: 'subsection', number: '8.1', title: 'Relation to the Underlying Regulation', content: [
            { type: 'p', html: 'The present Standards are an annex to the <strong>Zoho Ecosystem Usage Regulation for the Sales Department</strong>. Behavioural violations not covered here are handled under the underlying Regulation.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Acknowledgement', content: [
            { type: 'p', text: 'Every Sales Manager confirms acknowledgement of these Standards by ticking the corresponding checkbox in Zoho People. Until the acknowledgement is recorded, access to the Sales CRM pipeline is not granted.' }
          ]},
          { type: 'subsection', number: '8.3', title: 'Amendments', content: [
            { type: 'list', items: [
              '<strong>The structure</strong> (Sections 2–4), <strong>the measurement procedure</strong> (Section 5), and <strong>the accountability scale</strong> (Section 7) are reviewed as needed and republished in Zoho People with mandatory re-acknowledgement.',
              '<strong>The numeric values</strong> are changed by the monthly Order and <strong>do not require re-signing</strong> of the present document.'
            ]}
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 10. SALES MANAGER — НОРМАТИВЫ KPI (RU)
  //     (Commercial Department, strict mode, Russian, PDF only)
  // ────────────────────────────────────────
  {
    id: 'Sales_Manager_KPI_Standards_RU',
    title: 'Нормативы KPI — Sales Manager',
    heroTitle: 'Нормативы KPI<br>Sales Manager',
    badge: 'Департамент продаж · Обязательно',
    subtitle: 'Vault Group — Структура KPI, Sales Plan, порядок измерения и ответственность для Sales Manager.',
    icon: ICONS.chart,
    seed: 22.5,
    style: 'strict',
    department: 'commercial',
    webHidden: true,
    lang: 'ru',
    backHref: 'commercial-department.html',
    backLabel: 'Назад в Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'Настоящий документ устанавливает структуру KPI и Плана продаж Sales Manager, порядок измерения и шкалу ответственности за невыполнение. Конкретные числовые значения (плановые показатели и нормативы) устанавливаются ежемесячным Приказом руководителя Департамента продаж и в данном документе не фиксируются.',
    signatureBlock: {
      stampLabel: 'Утверждено',
      intro: 'Издано и утверждено Chief Commercial Operations Officer Vault Group.',
      name: 'Святослав Шпаночкин',
      title: 'Chief Commercial Operations Officer',
      date: '1 мая 2026 г.',
      dateLabel: 'Дата вступления в силу',
      method: 'Подписано через Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'Общие положения',
        content: [
          { type: 'subsection', number: '1.1', title: 'Назначение', content: [
            { type: 'p', text: 'Настоящий документ устанавливает структуру KPI и Плана продаж Sales Manager, порядок измерения и шкалу ответственности за невыполнение. Конкретные числовые значения (плановые показатели и нормативы) устанавливаются ежемесячным Приказом руководителя Департамента продаж (раздел 2) и в данном документе не фиксируются.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Область применения', content: [
            { type: 'p', text: 'Документ распространяется на всех сотрудников в роли Sales Manager, включая временно исполняющих обязанности.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Принципы измерения', content: [
            { type: 'olist', items: [
              'Все метрики снимаются автоматически из Zoho CRM на основании данных, занесённых в соответствии с базовым <strong>Регламентом использования экосистемы Zoho в Департаменте продаж</strong>.',
              'Если данные в CRM не соответствуют действительности — норматив или план считается проваленным вне зависимости от фактической работы сотрудника.',
              'Период измерения зависит от метрики (день / неделя / месяц). Итоговый зачёт по Плану и нарушениям производится на 1-й рабочий день следующего месяца.'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Два независимых трека ответственности', content: [
            { type: 'p', html: 'Невыполнение влечёт меры по двум <strong>независимым</strong> трекам (раздел 7):' },
            { type: 'list', items: [
              '<strong>Sales Plan</strong> — шкала по подряд идущим месяцам провала.',
              '<strong>KPI / базовый Регламент</strong> — шкала по количеству нарушений в скользящем окне.'
            ]}
          ]},
          { type: 'subsection', number: '1.5', title: 'Что устанавливает настоящий документ, а что — Приказ', content: [
            { type: 'list', items: [
              '<strong>Документ</strong> фиксирует структуру: что измеряется, как, в какой период, с какими последствиями. Подписывается единожды.',
              '<strong>Приказ</strong> на каждый месяц устанавливает конкретные числовые значения: индивидуальный План продаж, нормативы KPI, лимиты, параметры дисциплинарной шкалы.'
            ]}
          ]}
        ]
      },
      {
        number: '02', title: 'Состав ежемесячного Приказа',
        content: [
          { type: 'p', text: 'Приказ руководителя Департамента продаж на каждый календарный месяц устанавливает:' },
          { type: 'subsection', title: '1. Sales Plan', content: [
            { type: 'list', items: [
              'Плановая сумма продаж сотрудника в USD.',
              'Плановое количество новых клиентов в разбивке <strong>по каждому продукту / тарифу</strong>.',
              'Список обязательных продуктов (тех, по которым План должен быть выполнен в обязательном порядке).'
            ]}
          ]},
          { type: 'subsection', title: '2. Нормативы KPI', content: [
            { type: 'list', items: [
              'Конкретные значения по группе «Активность» (задачи/день, встречи/неделя, новые сделки/месяц).',
              'Конкретные интервалы по группе «SLA», где Приказ их задаёт (например, время первого контакта по новому Лиду).',
              'Лимиты допустимых отклонений по группе «Гигиена воронки» и «Качество».'
            ]}
          ]},
          { type: 'subsection', title: '3. Параметры дисциплинарной шкалы (раздел 7.2)', content: [
            { type: 'list', items: [
              'Длина скользящего окна счётчика нарушений.',
              'Пороги количества нарушений для каждого из 5 шагов шкалы.'
            ]}
          ]},
          { type: 'subsection', number: '2.1', title: 'Срок публикации', content: [
            { type: 'p', html: 'Приказ публикуется в Zoho People <strong>не позднее 1-го рабочего дня</strong> месяца, к которому применяется. До публикации нового Приказа действуют значения предыдущего.' }
          ]},
          { type: 'subsection', number: '2.2', title: 'Ознакомление', content: [
            { type: 'p', html: 'Каждый Sales Manager обязан ознакомиться с Приказом (отметка в Zoho People) в течение <strong>2 рабочих дней</strong> с момента публикации.' }
          ]},
          { type: 'subsection', number: '2.3', title: 'Сила Приказа', content: [
            { type: 'p', text: 'Приказ имеет ту же обязательную силу, что и настоящий документ.' }
          ]}
        ]
      },
      {
        number: '03', title: 'Структура нормативов KPI',
        content: [
          { type: 'subsection', number: '3.1', title: 'Группа «Активность»', content: [
            { type: 'table', headers: ['Метрика', 'Период', 'Описание'], rows: [
              ['Закрытые задачи', 'день', 'Задачи, закрытые с заполненным Description (базовый Регламент 4.1). «Set Next Step» засчитывается, если по её закрытии создана актуальная следующая задача.'],
              ['Новые сделки в Sales', 'месяц', 'Deal в Owner Sales Manager, впервые попавшие в воронку Sales и продвинувшиеся хотя бы на один этап в течение месяца.'],
              ['Квалифицированные встречи', 'неделя', 'Новые встречи в стадии Discovery / QLF / Demo или последующих, помеченные в CRM как «Held» с заполненным Result / Notes.']
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: 'Группа «SLA скорости реакции»', content: [
            { type: 'table', headers: ['Метрика', 'SLA', 'Описание'], rows: [
              ['Первый контакт по новому Лиду / Сделке в Owner', 'устанавливается Приказом', 'В рабочее время — закрыть первую задачу или принять входящий в течение интервала, заданного Приказом. Вне рабочего времени — в течение первого рабочего часа.'],
              ['Возврат пропущенного звонка', '15 минут', 'По базовому Регламенту 9.1.4 — после освобождения.'],
              ['Ответ клиенту в WhatsApp (через Zoho CRM)', '<strong>5 минут</strong>', 'В рабочее время. Личный WhatsApp запрещён базовым Регламентом 5.2.'],
              ['Ответ клиенту по Email', '4 часа', 'По базовому Регламенту 9.3 — в рабочее время.'],
              ['Внесение результата в CRM', '30 минут', 'После завершения клиентской активности.']
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: 'Группа «Гигиена воронки»', content: [
            { type: 'table', headers: ['Метрика', 'Период', 'Описание'], rows: [
              ['Просроченные задачи', 'непрерывно', 'Просроченных задач <strong>не должно быть в принципе</strong> — ни в течение дня, ни на конец дня. Каждый случай — нарушение.'],
              ['Открытые задачи на конец рабочего дня', 'день', 'На конец дня <strong>ни просроченных, ни запланированных на сегодня</strong>. Все задачи дня закрыты с результатом, либо закрыты с указанием причины переноса и созданием новой задачи на следующий день.'],
              ['«Брошенные» Сделки', 'день', 'Активная Сделка без открытой задачи на текущий или ближайший рабочий день — нарушение (базовый Регламент 4.5).'],
              ['Закрытие «Set Next Step» в течение суток', 'день', 'Задача «Set Next Step» закрывается в течение 24 часов после постановки реальной следующей задачи.'],
              ['Заполненность обязательных полей', 'сделка', 'Для всех активных Сделок обязательные по этапу Pipeline поля заполнены на 100% (базовый Регламент 6.3).'],
              ['Дубликаты', 'случай', 'Создание дубликата Account / Contact / Deal — нарушение.']
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: 'Группа «Качество работы»', content: [
            { type: 'table', headers: ['Метрика', 'Период', 'Описание'], rows: [
              ['Документация Closed Won', 'сделка', 'Полный комплект документов в Attachments: заполненный опросник, подписанный SLA / SOW, подтверждения оплаты.'],
              ['Описание результата сделки', 'сделка', 'Closed Won / Disqualified/Rejected — заполненное саммари в Description Сделки.'],
              ['Оценка руководителя по ревью', 'месяц', 'Раз в месяц непосредственный руководитель проводит выборочное ревью звонков и заметок. Шкала 1–5 по критериям: подготовка, ведение, отработка возражений, follow-up, точность данных в CRM.']
            ]}
          ]},
          { type: 'subsection', number: '3.5', title: 'Конверсии (информативно)', content: [
            { type: 'p', text: 'Этапы воронки Sales (Layout «Sales» в Zoho CRM):' },
            { type: 'callout', variant: 'important', html: 'Assigned/Outreach → Discovery / QLF / Demo → Docs Request → Docs Pending → Pre-Compliance Check → Offer Preparation → CFO Pricing Approval → Offer Sent &amp; Follow-up → KYB Invoiced → Compliance Review → SLA/SOW Signing → Setup Fee Invoiced &amp; Awaiting Payment → Closed Won (либо параллельно — Disqualified/Rejected).' },
            { type: 'p', html: 'Конверсии по этим этапам <strong>отслеживаются на дашбордах</strong> Sales Manager и руководителя для диагностики работы воронки. При этом:' },
            { type: 'list', items: [
              'Целью Sales Manager является <strong>выполнение Sales Plan</strong>, а не конверсии как таковые.',
              '<strong>Конверсии не являются предметом дисциплинарной ответственности.</strong>',
              'Качество входящих лидов на ответственность Sales Manager не относится.'
            ]}
          ]}
        ]
      },
      {
        number: '04', title: 'Структура Sales Plan',
        content: [
          { type: 'subsection', number: '4.1', title: 'Состав Плана', content: [
            { type: 'p', text: 'Sales Plan на месяц задаётся Приказом и состоит из:' },
            { type: 'olist', items: [
              '<strong>Сумма продаж в USD</strong> — общая сумма Closed Won сотрудника.',
              '<strong>Количество новых клиентов по каждому продукту / тарифу</strong> — для каждого продукта из актуального прайса Vault.',
              '<strong>Перечень обязательных продуктов</strong> — тех, по которым План должен быть выполнен без исключений.'
            ]}
          ]},
          { type: 'subsection', number: '4.2', title: 'Что считается выполнением', content: [
            { type: 'p', html: 'Sales Plan считается <strong>выполненным</strong> по итогам месяца, если:' },
            { type: 'list', items: [
              'Достигнута плановая сумма в USD, <strong>И</strong>',
              'Выполнен план по количеству клиентов по <strong>всем</strong> обязательным продуктам.'
            ]},
            { type: 'p', html: 'Невыполнение хотя бы одного условия — провал Плана. План считается по сделкам в стадии <code>Closed Won</code> с датой закрытия в пределах календарного месяца (Stage = Closed Won).' }
          ]},
          { type: 'subsection', number: '4.3', title: 'Что считается перевыполнением (для раздела 7.3)', content: [
            { type: 'p', html: 'Sales Plan считается <strong>перевыполненным на 20% и более</strong>, если фактическая сумма продаж <strong>и</strong> фактическое количество клиентов по обязательным продуктам <strong>одновременно</strong> превышают плановые на 20% или больше.' }
          ]}
        ]
      },
      {
        number: '05', title: 'Источник данных и расчёт',
        content: [
          { type: 'subsection', number: '5.1', title: 'Источник', content: [
            { type: 'p', text: 'Все метрики снимаются автоматически из Zoho CRM Dashboards (Sales KPI Monitor → Sales Manager). Ручные корректировки расчёта запрещены.' }
          ]},
          { type: 'subsection', number: '5.2', title: 'Прозрачность', content: [
            { type: 'list', items: [
              'Sales Manager имеет доступ к личному дашборду в реальном времени.',
              'Ежемесячный отчёт направляется сотруднику в Cliq не позднее <strong>3-го рабочего дня</strong> следующего месяца. В отчёте отдельно: статус Sales Plan, статус нарушений, текущая позиция в счётчике 7.2.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Спор по расчёту', content: [
            { type: 'list', items: [
              'При несогласии — тикет в Zoho Desk (тип: <strong>KPI Dispute</strong>) в течение <strong>5 рабочих дней</strong> с момента получения отчёта.',
              'После 5 дней — расчёт считается принятым.'
            ]}
          ]}
        ]
      },
      {
        number: '06', title: 'Связь с бонусом',
        content: [
          { type: 'p', text: 'Конкретный размер бонуса, формула и условия выплаты определяются индивидуальным соглашением между сотрудником и компанией и в настоящем документе не фиксируются. Лишение бонуса возможно как одна из мер по разделу 7.2.' }
        ]
      },
      {
        number: '07', title: 'Ответственность',
        content: [
          { type: 'subsection', number: '7.1', title: 'Шкала по Sales Plan (по подряд идущим месяцам)', content: [
            { type: 'table', headers: ['Шаг', 'Триггер', 'Мера'], rows: [
              ['1', 'Первый месяц провала Плана', '<strong>Письменный выговор</strong> — размещается в личной карточке сотрудника в Zoho People с указанием конкретно: какой плановый показатель не достигнут и насколько.'],
              ['2', 'Второй месяц провала Плана подряд', '<strong>Расторжение соглашения о сотрудничестве</strong> по инициативе компании.']
            ]},
            { type: 'p', text: 'Один полный месяц с выполнением Плана обнуляет счётчик подряд идущих провалов.' }
          ]},
          { type: 'subsection', number: '7.2', title: 'Шкала по нарушениям KPI / базового Регламента (по количеству)', content: [
            { type: 'p', html: 'Каждое зафиксированное нарушение нормативов KPI (раздел 3) или базового Регламента засчитывается в <strong>скользящее окно</strong>. Длина окна и пороги количества для перехода на каждый шаг устанавливаются Приказом.' },
            { type: 'table', headers: ['Шаг', 'Триггер', 'Мера'], rows: [
              ['1', 'Достигнут первый порог', '<strong>Устное предупреждение</strong> с фиксацией в Cliq и в личной карточке сотрудника.'],
              ['2', 'Достигнут второй порог', '<strong>Письменный выговор</strong> с указанием перечня нарушений.'],
              ['3', 'Достигнут третий порог', '<strong>Лишение бонуса за этот месяц</strong> с обоснованием.'],
              ['4', 'Достигнут четвёртый порог', '<strong>Второй выговор</strong>.'],
              ['5', 'Достигнут пятый порог', '<strong>Расторжение соглашения о сотрудничестве</strong>.']
            ]},
            { type: 'p', html: 'Шаги 1–5 проходятся по нарастающей. Зафиксированные предупреждения и выговоры остаются в карточке сотрудника <strong>12 месяцев</strong> и могут учитываться при последующих разборах.' }
          ]},
          { type: 'subsection', number: '7.3', title: 'Перевыполнение Sales Plan как нивелирующий фактор', content: [
            { type: 'p', text: 'Если по итогам месяца:' },
            { type: 'list', items: [
              'Sales Plan <strong>перевыполнен на 20% и более</strong> (см. 4.3), <strong>И</strong>',
              'В этом же месяце были зафиксированы нарушения KPI / Регламента,'
            ]},
            { type: 'p', html: '— то нарушения этого месяца <strong>не учитываются</strong> в счётчике для шкалы 7.2. При этом:' },
            { type: 'olist', items: [
              'Зафиксированные нарушения помечаются в карточке сотрудника как <strong>«отложенные»</strong> (с типом и датой).',
              'При <strong>новых нарушениях</strong> в течение <strong>следующих 90 дней</strong> эскалация по шкале 7.2 идёт <strong>с пропуском одного шага</strong> — например, при достижении первого порога сразу применяется мера второго шага (Выговор вместо Устного предупреждения).',
              'Один полный календарный месяц без новых нарушений и без отложенных пометок снимает «отложенные» пометки.'
            ]},
            { type: 'callout', variant: 'tip', html: '<strong>Идея:</strong> перевыполнение Плана — это амнистия, а не индульгенция. Если сотрудник продолжает нарушать после прощения, реакция строже.' }
          ]},
          { type: 'subsection', number: '7.4', title: 'Право на пояснения', content: [
            { type: 'p', html: 'Перед каждым шагом, начиная со второго (Выговор), сотруднику предоставляется <strong>3 рабочих дня</strong> на письменные пояснения. Пояснения учитываются, но не отменяют сам факт фиксации, если он подтверждён данными из CRM.' }
          ]}
        ]
      },
      {
        number: '08', title: 'Заключительные положения',
        content: [
          { type: 'subsection', number: '8.1', title: 'Связь с базовым Регламентом', content: [
            { type: 'p', html: 'Настоящие Нормативы — приложение к <strong>Регламенту использования экосистемы Zoho в Департаменте продаж</strong>. Поведенческие нарушения, не покрытые здесь, разбираются по базовому Регламенту.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Ознакомление', content: [
            { type: 'p', text: 'Каждый Sales Manager подтверждает ознакомление отметкой (галочкой) в Zoho People. Без подтверждения допуск к работе с CRM-воронкой Sales не производится.' }
          ]},
          { type: 'subsection', number: '8.3', title: 'Изменения', content: [
            { type: 'list', items: [
              '<strong>Структура</strong> (разделы 2–4), <strong>порядок измерения</strong> (раздел 5) и <strong>шкала ответственности</strong> (раздел 7) пересматриваются по необходимости и публикуются в Zoho People с обязательным повторным ознакомлением.',
              '<strong>Конкретные числовые значения</strong> меняются ежемесячным Приказом и <strong>не требуют переподписи</strong> настоящего документа.'
            ]}
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 11. BUSINESS DEVELOPER — KPI STANDARDS (EN)
  //     (Commercial Department, strict mode)
  // ────────────────────────────────────────
  {
    id: 'Business_Developer_KPI_Standards',
    title: 'Business Developer — KPI Standards',
    heroTitle: 'Business Developer<br>KPI Standards',
    badge: 'Commercial Department · Mandatory',
    subtitle: 'Vault Group — KPI structure, BD Plan, measurement, and accountability rules for Business Developers.',
    icon: ICONS.chart,
    seed: 25,
    style: 'strict',
    department: 'commercial',
    lang: 'en',
    backHref: 'commercial-department.html',
    backLabel: 'Back to Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'This document establishes the structure of KPIs and the BD Plan for a Business Developer, the measurement procedure, and the accountability scale for non-performance. The actual numeric values are set in a monthly Order of the Chief Commercial Operations Officer and are not fixed in this document.',
    signatureBlock: {
      stampLabel: 'Approved',
      intro: 'Issued and approved by the Chief Commercial Operations Officer of Vault Group.',
      name: 'Sviatoslav Shpanochkin',
      title: 'Chief Commercial Operations Officer',
      date: 'May 1, 2026',
      dateLabel: 'Effective date',
      method: 'Signed via Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'General Provisions',
        content: [
          { type: 'subsection', number: '1.1', title: 'Purpose', content: [
            { type: 'p', html: 'This document establishes the structure of KPIs and the BD Plan for a Business Developer, the measurement procedure, and the accountability scale for non-performance. The actual numeric values are set in a monthly Order of the <strong>Chief Commercial Operations Officer</strong> (the "CCOO"; Section 2) and are not fixed in this document.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Scope', content: [
            { type: 'p', text: 'The document applies to all employees of the Commercial Department in the role of Business Developer (BD), including those acting in the role on a temporary basis.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Measurement Principles', content: [
            { type: 'olist', items: [
              'All metrics are pulled automatically from Zoho CRM based on data entered by the employee in line with the underlying <strong>Zoho Ecosystem Usage Regulation for the Sales Department</strong>.',
              'If CRM data does not match reality, the corresponding metric is treated as failed regardless of the employee’s actual performance.',
              'The measurement period depends on the metric (day / week / month). The final reckoning of the Plan and of violations is performed on the 1st business day of the following month.'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Two Independent Accountability Tracks', content: [
            { type: 'list', items: [
              '<strong>BD Plan</strong> — escalation by consecutive months of failure (Section 7.1).',
              '<strong>KPI / Underlying Regulation</strong> — escalation by the count of violations within a rolling window (Section 7.2).'
            ]}
          ]},
          { type: 'subsection', number: '1.5', title: 'What This Document Sets vs. What the Order Sets', content: [
            { type: 'list', items: [
              '<strong>The document</strong> fixes the structure: what is measured, how, in which period, and with what consequences. Signed once.',
              '<strong>The Order</strong> sets the actual numeric values for each month: the individual BD Plan, the KPI quotas, the limits, and the parameters of the disciplinary scale.'
            ]}
          ]}
        ]
      },
      {
        number: '02', title: 'Composition of the Monthly Order',
        content: [
          { type: 'p', text: 'The monthly Order from the CCOO sets, for each calendar month:' },
          { type: 'subsection', title: '1. BD Plan', content: [
            { type: 'list', items: [
              'Plan number of meetings booked per employee.'
            ]}
          ]},
          { type: 'subsection', title: '2. KPI Standards', content: [
            { type: 'list', items: [
              'Concrete values for "Activity".',
              'Concrete intervals for "SLA" where the Order defines them.',
              'Limits for permissible deviations under "Pipeline Hygiene".',
              '<strong>Maximum permitted return rate</strong> (see 3.4).'
            ]}
          ]},
          { type: 'subsection', title: '3. Parameters of the Disciplinary Scale (Section 7.2)', content: [
            { type: 'list', items: [
              'Length of the rolling window for the violations counter.',
              'Violation count thresholds for each of the 5 steps of the scale.'
            ]}
          ]},
          { type: 'subsection', number: '2.1', title: 'Publication Date', content: [
            { type: 'p', html: 'The Order is published in Zoho People <strong>no later than the 1st business day</strong> of the month it applies to.' }
          ]},
          { type: 'subsection', number: '2.2', title: 'Acknowledgement', content: [
            { type: 'p', html: 'Every Business Developer must acknowledge the Order (checkbox in Zoho People) within <strong>2 business days</strong> of its publication.' }
          ]},
          { type: 'subsection', number: '2.3', title: 'Force of the Order', content: [
            { type: 'p', text: 'The Order has the same binding force as the present document.' }
          ]}
        ]
      },
      {
        number: '03', title: 'KPI Standards Structure',
        content: [
          { type: 'subsection', number: '3.1', title: '“Activity” Group', content: [
            { type: 'table', headers: ['Metric', 'Period', 'Description'], rows: [
              ['Closed tasks', 'day', 'Tasks closed with the Description field filled (Underlying Regulation 4.1).'],
              ['New companies in BD pipeline', 'month', 'An Account for which the BD created a Deal in the <code>BD Deal Layout</code>.'],
              ['New contacts', 'month', 'A Contact added by the BD to an Account in the BD’s pipeline.']
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: '“Response SLA” Group', content: [
            { type: 'table', headers: ['Metric', 'SLA', 'Description'], rows: [
              ['First outreach to a new company', 'set by the Order', 'The first touch on the client after a Deal is created in the BD pipeline.'],
              ['Missed call callback', '15 minutes', 'Per Underlying Regulation 9.1.4.'],
              ['Reply to a client on WhatsApp (via Zoho CRM)', '<strong>5 minutes</strong>', 'During working hours.'],
              ['Reply to a client by Email', '4 hours', 'Per Underlying Regulation 9.3.'],
              ['Logging activity result in CRM', '30 minutes', 'After completing a client activity.']
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: '“Pipeline Hygiene” Group', content: [
            { type: 'table', headers: ['Metric', 'Period', 'Description'], rows: [
              ['Overdue tasks', 'continuous', 'Overdue tasks <strong>must not exist at all</strong>. Each occurrence is a violation.'],
              ['Open tasks at end of day', 'day', 'At end of day <strong>no overdue and no tasks scheduled for today</strong> may remain.'],
              ['"Abandoned" Deals', 'day', 'An active Deal without an open task for the current or next business day is a violation (Underlying Regulation 4.5).'],
              ['"Set Next Step" closed within 24 hours', 'day', 'Per Underlying Regulation 4.4.'],
              ['Mandatory field completeness', 'per deal', 'All mandatory fields for the current Pipeline stage are filled to 100% on every active Deal.'],
              ['Duplicates', 'per occurrence', 'Creating a duplicate Account / Contact / Deal is a violation.']
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: '“Quality of Work” Group', content: [
            { type: 'table', headers: ['Metric', 'Period', 'Description'], rows: [
              ['Briefing for the receiving party', 'per deal', 'Before the meeting is recorded as booked, the Deal contains: a company summary, ICP criteria, the client’s need, agreements from the meeting, and links to materials.'],
              ['Documentation', 'per deal', 'The Attachments contain a completed questionnaire or its equivalent and screenshots of correspondence from non-integrated channels (if any).'],
              ['Deal result write-up', 'per deal', 'Closed Won / Disqualified/Rejected — a summary in the Deal’s Description.'],
              ['<strong>% of returns to BD</strong>', 'month', 'The share of meetings booked by the BD on which the Sales Manager / Partnerships Associate flagged the Deal as <strong>"Return to BD"</strong> within <strong>N days</strong> (set by the Order). The maximum permitted return rate is set by the Order; exceeding the limit in a month = 1 violation in the 7.2 counter.'],
              ['Receiving-party score', 'month', 'Once a month the SM / PA scores the quality of handed-off leads on a 1–5 scale. An average below <strong>3.0</strong> is grounds for a conversation with the direct supervisor.']
            ]}
          ]},
          { type: 'subsection', number: '3.5', title: 'Conversions (informational)', content: [
            { type: 'p', html: 'BD pipeline stages per Layout <code>BD Deal Layout</code> in Zoho CRM:' },
            { type: 'callout', variant: 'important', html: 'BD Outreach → BD Qualification → Meeting Pending → Closed Won (or, in parallel — Disqualified/Rejected).' },
            { type: 'p', html: 'Conversions are <strong>tracked on the dashboards</strong> as pipeline diagnostics. <strong>Conversions are not subject to disciplinary action.</strong>' }
          ]}
        ]
      },
      {
        number: '04', title: 'BD Plan Structure',
        content: [
          { type: 'subsection', number: '4.1', title: 'Composition of the Plan', content: [
            { type: 'p', html: 'The monthly BD Plan is set in the Order and consists of <strong>a single metric — the plan number of meetings booked</strong>.' },
            { type: 'p', html: 'A "booked meeting" = a Deal in the BD pipeline moved to the <code>Closed Won</code> stage within the calendar month.' }
          ]},
          { type: 'subsection', number: '4.2', title: 'What Counts as Plan Achieved', content: [
            { type: 'p', html: 'The BD Plan is considered <strong>met</strong> for the month when the actual number of <code>Closed Won</code> deals in the BD pipeline is greater than or equal to the plan.' }
          ]},
          { type: 'subsection', number: '4.3', title: 'What Counts as Plan Overachieved (for Section 7.3)', content: [
            { type: 'p', html: 'The BD Plan is considered <strong>overachieved by 20% or more</strong> when the actual number of meetings booked exceeds the plan by 20% or more.' }
          ]}
        ]
      },
      {
        number: '05', title: 'Source of Data and Calculation',
        content: [
          { type: 'subsection', number: '5.1', title: 'Source', content: [
            { type: 'p', text: 'All metrics are pulled automatically from Zoho CRM Dashboards (BD KPI Monitor → Business Developer). Manual adjustments to the calculation are prohibited.' }
          ]},
          { type: 'subsection', number: '5.2', title: 'Transparency', content: [
            { type: 'list', items: [
              'The BD has access to a personal real-time dashboard.',
              'A monthly report is sent to the employee in Cliq no later than the <strong>3rd business day</strong> of the following month. The report covers: BD Plan status, violations status, current 7.2 counter position, % of returns.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Disputing the Calculation', content: [
            { type: 'p', html: 'A Zoho Desk ticket (type: <strong>KPI Dispute</strong>) within <strong>5 business days</strong> of receiving the report. After 5 business days the calculation is considered accepted.' }
          ]}
        ]
      },
      {
        number: '06', title: 'Relation to Bonus',
        content: [
          { type: 'p', text: 'The actual size of the bonus, the formula, and the conditions of payment are set by the individual agreement and are not fixed in this document. Withholding of the bonus is possible as one of the measures under Section 7.2.' }
        ]
      },
      {
        number: '07', title: 'Accountability',
        content: [
          { type: 'subsection', number: '7.1', title: 'BD Plan Scale (by consecutive months)', content: [
            { type: 'table', headers: ['Step', 'Trigger', 'Measure'], rows: [
              ['1', 'First month with a failed Plan', '<strong>Written reprimand</strong> — placed in the employee’s record in Zoho People with a note on the gap to the plan number.'],
              ['2', 'Second consecutive month with a failed Plan', '<strong>Termination of the contractor agreement</strong> at the company’s initiative.']
            ]},
            { type: 'p', text: 'A single full month with the Plan met resets the consecutive-failure counter.' }
          ]},
          { type: 'subsection', number: '7.2', title: 'KPI / Underlying Regulation Violations Scale (by count)', content: [
            { type: 'p', html: 'Every recorded violation is added to a <strong>rolling window</strong>. The length of the window and the count thresholds are set by the Order.' },
            { type: 'table', headers: ['Step', 'Trigger', 'Measure'], rows: [
              ['1', 'First threshold reached', '<strong>Verbal warning</strong> with a record.'],
              ['2', 'Second threshold reached', '<strong>Written reprimand</strong>.'],
              ['3', 'Third threshold reached', '<strong>Withholding of the current monthly bonus</strong> with a stated rationale.'],
              ['4', 'Fourth threshold reached', '<strong>Second written reprimand</strong>.'],
              ['5', 'Fifth threshold reached', '<strong>Termination of the contractor agreement</strong>.']
            ]},
            { type: 'p', html: 'Recorded warnings and reprimands stay in the employee’s profile for <strong>12 months</strong>.' }
          ]},
          { type: 'subsection', number: '7.3', title: 'Plan Overachievement as a Mitigating Factor', content: [
            { type: 'p', html: 'If the BD Plan is overachieved by 20% or more for the month (see 4.3), violations recorded in that month are <strong>not added</strong> to the 7.2 counter. At the same time:' },
            { type: 'olist', items: [
              'The recorded violations are flagged in the employee’s profile as <strong>"deferred"</strong>.',
              'Should new violations be recorded over the <strong>next 90 days</strong>, the 7.2 escalation <strong>skips one step</strong>.',
              'A single full calendar month with no new violations and no deferred flags clears the deferred flags.'
            ]}
          ]},
          { type: 'subsection', number: '7.4', title: 'Right to Submit Explanations', content: [
            { type: 'p', html: 'Before each step from the second (Reprimand) onward, the employee is given <strong>3 business days</strong> to submit a written explanation.' }
          ]}
        ]
      },
      {
        number: '08', title: 'Final Provisions',
        content: [
          { type: 'subsection', number: '8.1', title: 'Relation to the Underlying Regulation', content: [
            { type: 'p', html: 'The present Standards are an annex to the <strong>Zoho Ecosystem Usage Regulation for the Sales Department</strong>.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Acknowledgement', content: [
            { type: 'p', text: 'Every Business Developer confirms acknowledgement by ticking the corresponding checkbox in Zoho People. Until the acknowledgement is recorded, access to the BD CRM pipeline is not granted.' }
          ]},
          { type: 'subsection', number: '8.3', title: 'Amendments', content: [
            { type: 'list', items: [
              '<strong>The structure</strong> (Sections 2–4), <strong>the measurement procedure</strong> (Section 5), and <strong>the accountability scale</strong> (Section 7) are reviewed as needed and republished with mandatory re-acknowledgement.',
              '<strong>The numeric values</strong> are changed by the monthly Order and <strong>do not require re-signing</strong> of the document.'
            ]}
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 12. BUSINESS DEVELOPER — НОРМАТИВЫ KPI (RU)
  //     (Commercial Department, strict mode, Russian, PDF only)
  // ────────────────────────────────────────
  {
    id: 'Business_Developer_KPI_Standards_RU',
    title: 'Нормативы KPI — Business Developer',
    heroTitle: 'Нормативы KPI<br>Business Developer',
    badge: 'Commercial Department · Обязательно',
    subtitle: 'Vault Group — Структура KPI, BD Plan, порядок измерения и ответственность для Business Developer.',
    icon: ICONS.chart,
    seed: 27.5,
    style: 'strict',
    department: 'commercial',
    webHidden: true,
    lang: 'ru',
    backHref: 'commercial-department.html',
    backLabel: 'Назад в Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'Настоящий документ устанавливает структуру KPI и Плана Business Developer, порядок измерения и шкалу ответственности за невыполнение. Конкретные числовые значения устанавливаются ежемесячным Приказом Chief Commercial Operations Officer и в данном документе не фиксируются.',
    signatureBlock: {
      stampLabel: 'Утверждено',
      intro: 'Издано и утверждено Chief Commercial Operations Officer Vault Group.',
      name: 'Святослав Шпаночкин',
      title: 'Chief Commercial Operations Officer',
      date: '1 мая 2026 г.',
      dateLabel: 'Дата вступления в силу',
      method: 'Подписано через Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'Общие положения',
        content: [
          { type: 'subsection', number: '1.1', title: 'Назначение', content: [
            { type: 'p', html: 'Настоящий документ устанавливает структуру KPI и Плана Business Developer, порядок измерения и шкалу ответственности за невыполнение. Конкретные числовые значения устанавливаются ежемесячным <strong>Приказом Chief Commercial Operations Officer</strong> (далее — CCOO; раздел 2) и в данном документе не фиксируются.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Область применения', content: [
            { type: 'p', text: 'Документ распространяется на всех сотрудников Commercial Department в роли Business Developer (BD), включая временно исполняющих обязанности.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Принципы измерения', content: [
            { type: 'olist', items: [
              'Все метрики снимаются автоматически из Zoho CRM на основании данных, занесённых в соответствии с базовым <strong>Регламентом использования экосистемы Zoho в Департаменте продаж</strong>.',
              'Если данные в CRM не соответствуют действительности — норматив или план считается проваленным вне зависимости от фактической работы.',
              'Период измерения зависит от метрики (день / неделя / месяц). Итоговый зачёт по Плану и нарушениям производится на 1-й рабочий день следующего месяца.'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Два независимых трека ответственности', content: [
            { type: 'list', items: [
              '<strong>BD Plan</strong> — шкала по подряд идущим месяцам провала (раздел 7.1).',
              '<strong>KPI / базовый Регламент</strong> — шкала по количеству нарушений в скользящем окне (раздел 7.2).'
            ]}
          ]},
          { type: 'subsection', number: '1.5', title: 'Что устанавливает настоящий документ, а что — Приказ', content: [
            { type: 'list', items: [
              '<strong>Документ</strong> фиксирует структуру: что измеряется, как, в какой период, с какими последствиями. Подписывается единожды.',
              '<strong>Приказ</strong> на каждый месяц устанавливает конкретные числовые значения: индивидуальный BD Plan, нормативы KPI, лимиты, параметры дисциплинарной шкалы.'
            ]}
          ]}
        ]
      },
      {
        number: '02', title: 'Состав ежемесячного Приказа',
        content: [
          { type: 'p', text: 'Приказ CCOO на каждый календарный месяц устанавливает:' },
          { type: 'subsection', title: '1. BD Plan', content: [
            { type: 'list', items: [
              'Плановое <strong>количество назначенных встреч</strong> на сотрудника.'
            ]}
          ]},
          { type: 'subsection', title: '2. Нормативы KPI', content: [
            { type: 'list', items: [
              'Конкретные значения по группе «Активность».',
              'Конкретные интервалы по группе «SLA», где Приказ их задаёт.',
              'Лимиты допустимых отклонений по группе «Гигиена воронки».',
              '<strong>Максимально допустимый процент возвратов</strong> (см. 3.4).'
            ]}
          ]},
          { type: 'subsection', title: '3. Параметры дисциплинарной шкалы (раздел 7.2)', content: [
            { type: 'list', items: [
              'Длина скользящего окна счётчика нарушений.',
              'Пороги количества нарушений для каждого из 5 шагов шкалы.'
            ]}
          ]},
          { type: 'subsection', number: '2.1', title: 'Срок публикации', content: [
            { type: 'p', html: 'Приказ публикуется в Zoho People <strong>не позднее 1-го рабочего дня</strong> месяца, к которому применяется.' }
          ]},
          { type: 'subsection', number: '2.2', title: 'Ознакомление', content: [
            { type: 'p', html: 'Каждый Business Developer обязан ознакомиться с Приказом (отметка в Zoho People) в течение <strong>2 рабочих дней</strong> с момента публикации.' }
          ]},
          { type: 'subsection', number: '2.3', title: 'Сила Приказа', content: [
            { type: 'p', text: 'Приказ имеет ту же обязательную силу, что и настоящий документ.' }
          ]}
        ]
      },
      {
        number: '03', title: 'Структура нормативов KPI',
        content: [
          { type: 'subsection', number: '3.1', title: 'Группа «Активность»', content: [
            { type: 'table', headers: ['Метрика', 'Период', 'Описание'], rows: [
              ['Закрытые задачи', 'день', 'Задачи, закрытые с заполненным Description (базовый Регламент 4.1).'],
              ['Новые компании в BD-воронке', 'месяц', 'Account, по которому BD создал Сделку в Layout <code>BD Deal Layout</code>.'],
              ['Новые контакты', 'месяц', 'Contact, добавленный BD к Account из своей воронки.']
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: 'Группа «SLA скорости реакции»', content: [
            { type: 'table', headers: ['Метрика', 'SLA', 'Описание'], rows: [
              ['Первый outreach по новой компании', 'устанавливается Приказом', 'Первое касание клиента после создания Сделки в воронке BD.'],
              ['Возврат пропущенного звонка', '15 минут', 'По базовому Регламенту 9.1.4.'],
              ['Ответ клиенту в WhatsApp (через Zoho CRM)', '<strong>5 минут</strong>', 'В рабочее время.'],
              ['Ответ клиенту по Email', '4 часа', 'По базовому Регламенту 9.3.'],
              ['Внесение результата в CRM', '30 минут', 'После завершения клиентской активности.']
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: 'Группа «Гигиена воронки»', content: [
            { type: 'table', headers: ['Метрика', 'Период', 'Описание'], rows: [
              ['Просроченные задачи', 'непрерывно', 'Просроченных задач <strong>не должно быть в принципе</strong>. Каждый случай — нарушение.'],
              ['Открытые задачи на конец рабочего дня', 'день', 'На конец дня <strong>ни просроченных, ни запланированных на сегодня</strong>.'],
              ['«Брошенные» Сделки', 'день', 'Активная Сделка без открытой задачи на текущий или ближайший рабочий день — нарушение (базовый Регламент 4.5).'],
              ['Закрытие «Set Next Step» в течение суток', 'день', 'По базовому Регламенту 4.4.'],
              ['Заполненность обязательных полей', 'сделка', 'Для всех активных Сделок обязательные по этапу поля заполнены на 100%.'],
              ['Дубликаты', 'случай', 'Создание дубликата Account / Contact / Deal — нарушение.']
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: 'Группа «Качество работы»', content: [
            { type: 'table', headers: ['Метрика', 'Период', 'Описание'], rows: [
              ['Briefing для принимающей стороны', 'сделка', 'Перед фиксацией назначенной встречи в карточке Сделки заполнено: саммари по компании, ICP-критерии, потребность клиента, договорённости со встречи, ссылки на материалы.'],
              ['Документация', 'сделка', 'В Attachments — заполненный опросник или его эквивалент, скриншоты переписки из неинтегрированных каналов (если были).'],
              ['Описание результата сделки', 'сделка', 'Closed Won / Disqualified/Rejected — заполненное саммари в Description.'],
              ['<strong>% возвратов в BD</strong>', 'месяц', 'Доля назначенных BD встреч, по которым Sales Manager / Partnerships Associate в течение <strong>N дней</strong> (устанавливается Приказом) пометил Сделку флагом <strong>«Return to BD»</strong>. Лимит максимально допустимого процента устанавливается Приказом; превышение лимита за месяц = 1 нарушение в счётчике шкалы 7.2.'],
              ['Оценка принимающей стороной', 'месяц', 'SM / PA по итогам каждого месяца оценивает качество переданных лидов по шкале 1–5. Средняя ниже <strong>3.0</strong> — основание для разговора с непосредственным руководителем.']
            ]}
          ]},
          { type: 'subsection', number: '3.5', title: 'Конверсии (информативно)', content: [
            { type: 'p', html: 'Этапы воронки BD соответствуют Layout <code>BD Deal Layout</code> в Zoho CRM:' },
            { type: 'callout', variant: 'important', html: 'BD Outreach → BD Qualification → Meeting Pending → Closed Won (либо параллельно — Disqualified/Rejected).' },
            { type: 'p', html: 'Конверсии <strong>отслеживаются на дашбордах</strong> для диагностики работы воронки. <strong>Конверсии не являются предметом дисциплинарной ответственности.</strong>' }
          ]}
        ]
      },
      {
        number: '04', title: 'Структура BD Plan',
        content: [
          { type: 'subsection', number: '4.1', title: 'Состав Плана', content: [
            { type: 'p', html: 'BD Plan на месяц задаётся Приказом и состоит из <strong>одного показателя — планового количества назначенных встреч</strong>.' },
            { type: 'p', html: '«Назначенная встреча» = Сделка в воронке BD, переведённая в стадию <code>Closed Won</code> в течение календарного месяца.' }
          ]},
          { type: 'subsection', number: '4.2', title: 'Что считается выполнением', content: [
            { type: 'p', html: 'BD Plan считается <strong>выполненным</strong> по итогам месяца, если фактическое количество <code>Closed Won</code> в воронке BD равно или превышает плановое.' }
          ]},
          { type: 'subsection', number: '4.3', title: 'Что считается перевыполнением (для раздела 7.3)', content: [
            { type: 'p', html: 'BD Plan считается <strong>перевыполненным на 20% и более</strong>, если фактическое количество назначенных встреч превышает плановое на 20% или больше.' }
          ]}
        ]
      },
      {
        number: '05', title: 'Источник данных и расчёт',
        content: [
          { type: 'subsection', number: '5.1', title: 'Источник', content: [
            { type: 'p', text: 'Все метрики снимаются автоматически из Zoho CRM Dashboards (BD KPI Monitor → Business Developer). Ручные корректировки расчёта запрещены.' }
          ]},
          { type: 'subsection', number: '5.2', title: 'Прозрачность', content: [
            { type: 'list', items: [
              'BD имеет доступ к личному дашборду в реальном времени.',
              'Ежемесячный отчёт направляется сотруднику в Cliq не позднее <strong>3-го рабочего дня</strong> следующего месяца. В отчёте: статус BD Plan, статус нарушений, текущая позиция в счётчике 7.2, % возвратов.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Спор по расчёту', content: [
            { type: 'p', html: 'Тикет в Zoho Desk (тип: <strong>KPI Dispute</strong>) в течение <strong>5 рабочих дней</strong> с момента получения отчёта. После 5 дней — расчёт считается принятым.' }
          ]}
        ]
      },
      {
        number: '06', title: 'Связь с бонусом',
        content: [
          { type: 'p', text: 'Конкретный размер бонуса, формула и условия выплаты определяются индивидуальным соглашением и в настоящем документе не фиксируются. Лишение бонуса возможно как одна из мер по разделу 7.2.' }
        ]
      },
      {
        number: '07', title: 'Ответственность',
        content: [
          { type: 'subsection', number: '7.1', title: 'Шкала по BD Plan (по подряд идущим месяцам)', content: [
            { type: 'table', headers: ['Шаг', 'Триггер', 'Мера'], rows: [
              ['1', 'Первый месяц провала Плана', '<strong>Письменный выговор</strong> — размещается в личной карточке сотрудника в Zoho People с указанием насколько не достигнуто плановое количество.'],
              ['2', 'Второй месяц провала Плана подряд', '<strong>Расторжение соглашения о сотрудничестве</strong> по инициативе компании.']
            ]},
            { type: 'p', text: 'Один полный месяц с выполнением Плана обнуляет счётчик подряд идущих провалов.' }
          ]},
          { type: 'subsection', number: '7.2', title: 'Шкала по нарушениям KPI / базового Регламента (по количеству)', content: [
            { type: 'p', html: 'Каждое зафиксированное нарушение засчитывается в <strong>скользящее окно</strong>. Длина окна и пороги устанавливаются Приказом.' },
            { type: 'table', headers: ['Шаг', 'Триггер', 'Мера'], rows: [
              ['1', 'Достигнут первый порог', '<strong>Устное предупреждение</strong> с фиксацией.'],
              ['2', 'Достигнут второй порог', '<strong>Письменный выговор</strong>.'],
              ['3', 'Достигнут третий порог', '<strong>Лишение бонуса за текущий месяц</strong> с обоснованием.'],
              ['4', 'Достигнут четвёртый порог', '<strong>Второй выговор</strong>.'],
              ['5', 'Достигнут пятый порог', '<strong>Расторжение соглашения о сотрудничестве</strong>.']
            ]},
            { type: 'p', html: 'Зафиксированные предупреждения и выговоры остаются в карточке сотрудника <strong>12 месяцев</strong>.' }
          ]},
          { type: 'subsection', number: '7.3', title: 'Перевыполнение BD Plan как нивелирующий фактор', content: [
            { type: 'p', html: 'Если по итогам месяца BD Plan перевыполнен на 20% и более (см. 4.3), зафиксированные в этом месяце нарушения KPI / Регламента <strong>не учитываются</strong> в счётчике для шкалы 7.2. При этом:' },
            { type: 'olist', items: [
              'Нарушения помечаются в карточке сотрудника как <strong>«отложенные»</strong>.',
              'При новых нарушениях в течение <strong>следующих 90 дней</strong> эскалация по шкале 7.2 идёт <strong>с пропуском одного шага</strong>.',
              'Один полный календарный месяц без новых нарушений и без отложенных пометок снимает «отложенные» пометки.'
            ]}
          ]},
          { type: 'subsection', number: '7.4', title: 'Право на пояснения', content: [
            { type: 'p', html: 'Перед каждым шагом, начиная со второго (Выговор), сотруднику предоставляется <strong>3 рабочих дня</strong> на письменные пояснения.' }
          ]}
        ]
      },
      {
        number: '08', title: 'Заключительные положения',
        content: [
          { type: 'subsection', number: '8.1', title: 'Связь с базовым Регламентом', content: [
            { type: 'p', html: 'Настоящие Нормативы — приложение к <strong>Регламенту использования экосистемы Zoho в Департаменте продаж</strong>.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Ознакомление', content: [
            { type: 'p', text: 'Каждый Business Developer подтверждает ознакомление отметкой в Zoho People. Без подтверждения допуск к работе с CRM-воронкой BD не производится.' }
          ]},
          { type: 'subsection', number: '8.3', title: 'Изменения', content: [
            { type: 'list', items: [
              '<strong>Структура</strong> (разделы 2–4), <strong>порядок измерения</strong> (раздел 5) и <strong>шкала ответственности</strong> (раздел 7) пересматриваются по необходимости с обязательным повторным ознакомлением.',
              '<strong>Конкретные числовые значения</strong> меняются ежемесячным Приказом и <strong>не требуют переподписи</strong> документа.'
            ]}
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 8. SALES — РЕГЛАМЕНT ИСПОЛЬЗОВАНИЯ ZOHO (RU)
  //    (Commercial Department, strict mode, Russian)
  // ────────────────────────────────────────
  {
    id: 'Sales_Zoho_Regulation_RU',
    title: 'Регламент использования Zoho — Sales',
    heroTitle: 'Регламент<br>использования Zoho',
    badge: 'Департамент продаж · Обязательно',
    subtitle: 'Vault Group — Обязательные правила использования Zoho CRM, Cliq, Voice, Desk, People и Calendar для сотрудников Департамента продаж.',
    icon: ICONS.shield,
    seed: 17.5,
    style: 'strict',
    department: 'commercial',
    webHidden: true,
    lang: 'ru',
    backHref: 'commercial-department.html',
    backLabel: 'Назад в Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'Настоящий Регламент устанавливает обязательные правила использования экосистемы Zoho (далее — «Системы») сотрудниками Департамента продаж при выполнении служебных обязанностей. Нарушение настоящего Регламента влечёт меры дисциплинарного воздействия согласно разделу 14.',
    signatureBlock: {
      stampLabel: 'Утверждено',
      intro: 'Издано и утверждено Chief Commercial Operations Officer Vault Group.',
      name: 'Святослав Шпаночкин',
      title: 'Chief Commercial Operations Officer',
      date: '1 мая 2026 г.',
      dateLabel: 'Дата вступления в силу',
      method: 'Подписано через Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'Общие положения',
        content: [
          { type: 'subsection', number: '1.1', title: 'Назначение', content: [
            { type: 'p', text: 'Настоящий Регламент устанавливает обязательные правила использования экосистемы Zoho (далее — «Системы») сотрудниками Департамента продаж при выполнении служебных обязанностей.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Область применения', content: [
            { type: 'p', text: 'Регламент распространяется на всех сотрудников Департамента продаж, включая Sales Managers, Business Developers, Partnerships Associates, Marketing Growth and Lead Generation Managers, а также на стажёров и временно привлечённых лиц.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Принципы', content: [
            { type: 'list', items: [
              '<strong>Единый источник истины — Zoho CRM.</strong> Любая информация о клиенте, не зафиксированная в CRM, считается отсутствующей.',
              '<strong>Прозрачность</strong> — все действия с клиентом отражаются в системе и доступны руководителю.',
              '<strong>Регулярность и ритм</strong> — работа ведётся по непрерывному циклу задач без «слепых зон».'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Ответственность', content: [
            { type: 'p', text: 'Нарушение настоящего Регламента влечёт меры дисциплинарного воздействия согласно разделу 14.' }
          ]}
        ]
      },
      {
        number: '02', title: 'Профиль сотрудника и подготовка к работе',
        content: [
          { type: 'subsection', number: '2.1', title: 'Обязательные настройки', content: [
            { type: 'p', text: 'До начала работы с клиентами сотрудник обязан:' },
            { type: 'list', items: [
              'Привязать корпоративную Gmail-почту к Zoho CRM.',
              'Подключить рабочий календарь к Zoho Calendar.',
              'Установить актуальное фото в профиле Zoho CRM (деловой портрет, лицо различимо).',
              'Заполнить профиль в Zoho CRM: ФИО, должность, рабочий телефон, мессенджеры (Cliq), краткая биография при наличии.',
              'Установить и авторизовать Zoho CRM, Cliq и Voice на рабочем устройстве и/или в браузере.'
            ]}
          ]},
          { type: 'subsection', number: '2.2', title: 'Чек-ин и чек-аут', content: [
            { type: 'p', text: 'Сотрудник обязан выполнять чек-ин в Zoho Cliq в начале рабочего дня и чек-аут — по завершении. Отсутствие чек-ина без согласования с руководителем приравнивается к опозданию или невыходу.' }
          ]}
        ]
      },
      {
        number: '03', title: 'Иерархия сущностей в CRM',
        content: [
          { type: 'subsection', number: '3.1', title: 'Принцип «Компания — корень»', content: [
            { type: 'list', items: [
              '<strong>Account (Компания)</strong> — корневая сущность.',
              '<strong>Contact (Контакт)</strong> — принадлежит Компании.',
              '<strong>Deal (Сделка)</strong> — принадлежит Компании; к каждой Сделке привязывается <strong>ровно один</strong> Контакт — основной для этой Сделки.'
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: 'Лид и его конверсия', content: [
            { type: 'olist', items: [
              'Любой первичный клиент сначала фиксируется как Lead.',
              'Конверсия Лида производится <strong>только через Blueprint</strong> в карточке Лида.',
              'При конверсии создаются три сущности одновременно: Account + Contact + Deal.',
              'Запрещено создавать Account, Contact или Deal вручную, минуя Blueprint Лида, если первичная заявка пришла как Лид.'
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: 'Создание дополнительных Контактов', content: [
            { type: 'olist', items: [
              'Если Компания уже существует и к ней нужно добавить Контакт — Контакт создаётся <strong>только из карточки Компании</strong> (Related → Contacts).',
              'Перед созданием обязательна проверка дубликатов по email и телефону.',
              'Запрещено создавать Контакт «отдельно» через модуль Contacts.'
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: 'Создание дополнительных Сделок', content: [
            { type: 'olist', items: [
              'Новая Сделка по существующей Компании создаётся <strong>только из карточки Компании</strong> (Related → Deals).',
              'К Сделке обязательна привязка Контакта.',
              'Запрещено создавать Сделку «отдельно» через модуль Deals.'
            ]}
          ]}
        ]
      },
      {
        number: '04', title: 'Работа по задачам',
        content: [
          { type: 'subsection', number: '4.1', title: 'Цикл задачи', content: [
            { type: 'p', text: 'Работа сотрудника представляет собой непрерывный цикл:' },
            { type: 'olist', items: [
              '<strong>Взятие задачи в работу.</strong>',
              '<strong>Выполнение действия</strong> — звонок, отправка письма, встреча и т. д.',
              '<strong>Закрытие задачи с результатом</strong> — обязательное заполнение Description: что произошло, договорённости, следующий шаг.',
              '<strong>Постановка следующей задачи</strong> — если работа со Сделкой не завершена, создаётся следующая задача с конкретной датой и действием.'
            ]}
          ]},
          { type: 'subsection', number: '4.2', title: 'Запрет на пустые закрытия', content: [
            { type: 'p', text: 'Закрывать задачу без указания результата запрещено. Закрытие с описанием вида «ок», «сделано», «-», «.» приравнивается к её невыполнению.' }
          ]},
          { type: 'subsection', number: '4.3', title: 'Запрет на перенос сроков', content: [
            { type: 'olist', items: [
              'Перенос сроков задачи запрещён. У переноса всегда есть причина — она же является результатом закрытия текущей задачи (например, «клиент попросил вернуться через неделю»).',
              'На новый срок создаётся <strong>новая</strong> задача. Прежняя закрывается с указанием причины переноса.'
            ]}
          ]},
          { type: 'subsection', number: '4.4', title: 'Ежедневная задача «Set Next Step»', content: [
            { type: 'olist', items: [
              'Каждое утро автоматический процесс ставит сотруднику задачу «Set Next Step» по каждой Сделке без открытой актуальной задачи.',
              'Задача «Set Next Step» обязана быть закрыта в течение текущих суток.',
              'Закрытие «Set Next Step» производится только после того, как поставлена актуальная следующая задача по этой Сделке.'
            ]}
          ]},
          { type: 'subsection', number: '4.5', title: 'У активной Сделки всегда есть открытая задача', content: [
            { type: 'p', text: 'Каждая Сделка в активных стадиях (не Closed Won / Closed Lost) обязана иметь как минимум одну открытую задачу. Сделка без открытой задачи на текущий или ближайший рабочий день считается «брошенной» и фиксируется как нарушение.' }
          ]},
          { type: 'subsection', number: '4.6', title: 'Привязка задач к Сделке', content: [
            { type: 'p', html: 'Задачи, события, звонки, письма создаются <strong>строго внутри Сделки</strong>. Создание активностей на уровне Контакта или Компании запрещено (исключение — pre-sales активности до возникновения Deal, согласованные с руководителем).' }
          ]},
          { type: 'subsection', number: '4.7', title: 'Минимальная продуктивность дня', content: [
            { type: 'olist', items: [
              'Норматив количества выполненных задач в день устанавливается отдельным регламентом KPI для роли.',
              'День, в котором выполнено менее 30% дневного норматива задач, не учитывается в расчёте отработанных дней (если иное не согласовано с руководителем — больничный, обучение, командировка и т. п.).'
            ]}
          ]}
        ]
      },
      {
        number: '05', title: 'Каналы коммуникации с клиентом',
        content: [
          { type: 'subsection', number: '5.1', title: 'Голосовая связь', content: [
            { type: 'olist', items: [
              'Все исходящие и входящие звонки клиентам производятся <strong>только через Zoho Voice</strong>.',
              'Запрещено использовать личный мобильный телефон для голосовых звонков клиентам.'
            ]}
          ]},
          { type: 'subsection', number: '5.2', title: 'WhatsApp', content: [
            { type: 'olist', items: [
              'Переписка ведётся <strong>только через встроенный канал WhatsApp в Zoho CRM</strong>.',
              'Запрещено вести переписку с клиентом из личного WhatsApp.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Email', content: [
            { type: 'olist', items: [
              'Корпоративная Gmail-почта подключена к CRM.',
              'Вся переписка по сделке должна попадать в карточку Сделки. Поле Email клиента в Сделке должно быть заполнено корректно — это обязательное условие синхронизации.',
              'Запрещено вести переписку с клиентом с личной почты или с почтового ящика, не подключённого к CRM.'
            ]}
          ]},
          { type: 'subsection', number: '5.4', title: 'Telegram, LinkedIn и другие неинтегрированные каналы', content: [
            { type: 'olist', items: [
              'Использование таких каналов допустимо только при отсутствии альтернативы.',
              'Каждый значимый эпизод переписки <strong>обязательно копируется в Notes Сделки</strong> с указанием канала, даты и краткого содержания.',
              'Документы, полученные через такие каналы, прикрепляются в Attachments Сделки.'
            ]}
          ]}
        ]
      },
      {
        number: '06', title: 'Гигиена данных',
        content: [
          { type: 'subsection', number: '6.1', title: 'Правила написания имён собственных', content: [
            { type: 'olist', items: [
              'Имена, фамилии, названия компаний, продуктов, городов и т. п. пишутся <strong>на английском языке</strong> (если оригинал на латинице или имеет общепринятую латинскую транслитерацию), с заглавной буквы — если только официальное написание не требует строчной (<code>iPhone</code>, <code>eBay</code>, <code>dYdX</code>).',
              'Запрещено писать имена капсом, в нижнем регистре или с произвольной транслитерацией.',
              'Двойная фамилия — через дефис без пробела: <code>Smith-Jones</code>.',
              '<strong>Источник истины — заполненный клиентом опросник.</strong> После получения опросника название компании, имя и фамилия контакта берутся в том написании, которое указал клиент, — если оно не содержит явных опечаток и не противоречит точно известному написанию (например, официальной странице компании в LinkedIn).'
            ]}
          ]},
          { type: 'subsection', number: '6.2', title: 'Форматы данных', content: [
            { type: 'list', items: [
              'Телефоны — в международном формате <code>+КодСтраны Номер</code> (например, <code>+1 415 555 0123</code>).',
              'Email — в нижнем регистре.',
              'Даты — формат CRM (выпадающий выбор; ручной свободный ввод запрещён, если поле его не требует).',
              'Суммы — в долларах США (USD).'
            ]}
          ]},
          { type: 'subsection', number: '6.3', title: 'Заполненность полей', content: [
            { type: 'olist', items: [
              'Обязательные для роли поля заполняются на 100% до перевода Сделки на следующий этап Pipeline.',
              'Список обязательных полей по этапам определяется в Layout соответствующего Pipeline.',
              'Поля Industry, Country, Source, Owner, Stage, Closing Date — обязательны во всех случаях.'
            ]}
          ]},
          { type: 'subsection', number: '6.4', title: 'Актуальность статусов', content: [
            { type: 'p', text: 'Stage Сделки, статус Контакта, статус Лида должны соответствовать реальному положению дел. Перевод Сделки на следующий этап производится только при наличии задокументированного основания (письмо, запись звонка, заметка о встрече).' }
          ]},
          { type: 'subsection', number: '6.5', title: 'Дубликаты', content: [
            { type: 'p', text: 'Перед созданием любой сущности обязателен поиск дубликата по email, телефону, домену сайта. При обнаружении дубликата работа продолжается с существующей записью.' }
          ]}
        ]
      },
      {
        number: '07', title: 'Документы и продукты в Сделке',
        content: [
          { type: 'subsection', number: '7.1', title: 'Документы', content: [
            { type: 'olist', items: [
              'Все документы, полученные от клиента (NDA, договоры, презентации, заполненные опросники, скриншоты), прикрепляются к <strong>Attachments</strong> Сделки.',
              'Имя файла должно содержать тип документа и дату: <code>NDA_2026-05-01.pdf</code>, <code>Questionnaire_2026-05-01.pdf</code>.'
            ]}
          ]},
          { type: 'subsection', number: '7.2', title: 'Продукты и сумма Сделки', content: [
            { type: 'olist', items: [
              'После получения от клиента информации о выбранном продукте/тарифе продукт добавляется в раздел <strong>Products</strong> Сделки.',
              'После добавления/изменения продуктов сотрудник обязан нажать кнопку <strong>Recalculate Amount</strong> для пересчёта суммы Сделки.',
              'Сумма Сделки, не соответствующая привязанным продуктам, считается ошибкой и подлежит немедленному исправлению.'
            ]}
          ]}
        ]
      },
      {
        number: '08', title: 'Смена ответственного (Owner)',
        content: [
          { type: 'subsection', number: '8.1', title: 'Принцип каскада', content: [
            { type: 'p', html: 'Смена ответственного производится <strong>только через карточку Компании</strong>. После смены Owner Компании ответственный обновляется во всех связанных Контактах и Сделках.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Уведомление', content: [
            { type: 'p', text: 'Смена ответственного сопровождается:' },
            { type: 'list', items: [
              'Записью в Note Компании с датой передачи, причиной и согласием обоих сотрудников.',
              'Уведомлением в соответствующем канале Zoho Cliq.',
              'Передачей открытых задач: старый Owner закрывает свои задачи с результатом, новый Owner создаёт собственные.'
            ]}
          ]},
          { type: 'subsection', number: '8.3', title: 'Запрет на «тихий» переход', content: [
            { type: 'p', text: 'Запрещено менять Owner у Сделки или Контакта в обход Компании; менять Owner без уведомления и письменной фиксации.' }
          ]}
        ]
      },
      {
        number: '09', title: 'SLA по реакции на коммуникации',
        content: [
          { type: 'subsection', number: '9.1', title: 'Входящие звонки', content: [
            { type: 'olist', items: [
              'В рабочее время сотрудник обязан немедленно реагировать на входящий звонок клиента через Zoho Voice.',
              'Пропущенный звонок допустим только при одном из следующих условий: в календаре сотрудника на это время стоит подтверждённая встреча; в логах Zoho Voice зафиксирован активный разговор сотрудника на момент пропуска.',
              'Любой иной пропущенный звонок фиксируется как нарушение SLA.',
              'На пропущенный звонок сотрудник обязан перезвонить в течение 15 минут после освобождения.'
            ]}
          ]},
          { type: 'subsection', number: '9.2', title: 'Сообщения в Cliq', content: [
            { type: 'olist', items: [
              'На рабочее сообщение в Zoho Cliq сотрудник обязан отреагировать <strong>не позднее, чем через 1 час</strong> в рабочее время.',
              'Игнорирование тегов <code>@user</code>, <code>@channel</code>, упоминаний и реакций запрещено.',
              'Подробный регламент работы в Cliq устанавливается отдельным документом.'
            ]}
          ]},
          { type: 'subsection', number: '9.3', title: 'Email клиента', content: [
            { type: 'p', text: 'Ответ клиенту по email — в течение 4 часов в рабочее время. При невозможности дать содержательный ответ отправляется промежуточный с указанием срока полного ответа.' }
          ]}
        ]
      },
      {
        number: '10', title: 'Технические запросы (ошибки, доработки, предложения)',
        content: [
          { type: 'subsection', number: '10.1', title: 'Единственный канал — Zoho Desk', content: [
            { type: 'olist', items: [
              'Все обращения по ошибкам в системе, запросам на доработку и предложениям по улучшению процессов оформляются <strong>строго в виде тикета в Zoho Desk</strong>.',
              'Запрос в чате Cliq, по email, устно или иным способом не считается принятым в работу до создания тикета.',
              'Сотрудник обязан указать в тикете: заголовок (краткая суть); тип (Bug / Feature Request / Suggestion); описание (контекст, шаги воспроизведения, ожидание/реальность); скриншот или ссылку на запись.'
            ]}
          ]},
          { type: 'subsection', number: '10.2', title: 'Запрет на дублирование', content: [
            { type: 'p', text: 'Запрещено создавать тикеты-дубли, обходить установленный канал, эскалировать в чат до получения ответа по тикету.' }
          ]}
        ]
      },
      {
        number: '11', title: 'Работа с уведомлениями',
        content: [
          { type: 'subsection', number: '11.1', title: 'Cliq', content: [
            { type: 'olist', items: [
              'Сотрудник обязан следить за уведомлениями во всех каналах Cliq, в которые включён.',
              'Включён в канал = обязан читать. Право на «mute» канала возникает только после согласования с руководителем.',
              'Покидать рабочие каналы Cliq без согласования запрещено.'
            ]}
          ]},
          { type: 'subsection', number: '11.2', title: 'CRM', content: [
            { type: 'p', text: 'Уведомления CRM (просроченные задачи, упоминания, запросы апрува) обрабатываются в начале рабочего дня и далее по мере поступления.' }
          ]}
        ]
      },
      {
        number: '12', title: 'Запреты (сводный перечень)',
        content: [
          { type: 'p', text: 'Запрещено:' },
          { type: 'olist', items: [
            'Вести любую коммуникацию с клиентом вне Zoho-экосистемы без копирования в CRM.',
            'Создавать Account, Contact или Deal вне установленной иерархии (см. раздел 3).',
            'Закрывать задачи без указания результата.',
            'Переносить срок задачи (вместо этого закрыть текущую с результатом и создать новую).',
            'Оставлять активные Сделки без открытой задачи.',
            'Использовать личный телефон, личный WhatsApp, личную почту для общения с клиентом.',
            'Менять Owner в обход карточки Компании.',
            'Создавать активности (задачи, звонки, письма, встречи) вне Сделки.',
            'Игнорировать входящие звонки и сообщения вне регламентных оснований.',
            'Подавать запросы на доработку/баги вне Zoho Desk.',
            'Хранить документы клиента вне Attachments Сделки (на личном ПК, в Telegram, на флешке).'
          ]}
        ]
      },
      {
        number: '13', title: 'Контроль и аудит',
        content: [
          { type: 'subsection', number: '13.1', title: 'Регулярные аудиты', content: [
            { type: 'p', text: 'Руководитель Департамента (или назначенный аудитор) проводит:' },
            { type: 'list', items: [
              'Ежедневный экспресс-аудит дашбордов: задачи дня, пропущенные звонки, SLA Cliq.',
              'Еженедельный аудит чистоты данных: дубликаты, пустые поля, «брошенные» Сделки.',
              'Ежемесячный полный аудит соблюдения настоящего Регламента.'
            ]}
          ]},
          { type: 'subsection', number: '13.2', title: 'Уведомление о нарушении', content: [
            { type: 'p', text: 'По факту выявленного нарушения сотруднику направляется уведомление в Cliq с указанием: пункта Регламента; конкретного нарушения (ссылка на запись в CRM); срока на исправление.' }
          ]}
        ]
      },
      {
        number: '14', title: 'Ответственность за нарушение',
        content: [
          { type: 'subsection', number: '14.1', title: 'Шкала', content: [
            { type: 'olist', items: [
              '<strong>Первое нарушение</strong> — устное замечание, фиксация в Cliq.',
              '<strong>Второе нарушение того же пункта в течение 30 дней</strong> — письменное предупреждение, депремирование на 5–15% от месячного бонуса.',
              '<strong>Третье нарушение того же пункта в течение 90 дней</strong> — депремирование на 25–50% от месячного бонуса, разговор с непосредственным руководителем.',
              '<strong>Систематические нарушения</strong> (более 5 фиксаций в месяц по разным пунктам или 3 фиксации одного пункта в течение квартала) — основание для расторжения соглашения о сотрудничестве по инициативе компании.'
            ]}
          ]},
          { type: 'subsection', number: '14.2', title: 'Грубые нарушения', content: [
            { type: 'p', text: 'Однократно влекут депремирование 50% и могут быть основанием для немедленного прекращения сотрудничества:' },
            { type: 'list', items: [
              'Сокрытие переписки с клиентом от компании.',
              'Ведение клиента в личном канале с целью обхода CRM.',
              'Передача данных клиента третьим лицам.',
              'Удаление записей в CRM без согласования.',
              'Систематический обман в результатах задач.'
            ]}
          ]},
          { type: 'subsection', number: '14.3', title: 'День, не засчитанный в оплату труда', content: [
            { type: 'p', text: 'День, в котором не выполнен минимальный норматив задач (раздел 4.7) и нет уважительной причины (больничный, отгул, командировка, обучение), не учитывается в расчёте оплаты труда.' }
          ]}
        ]
      },
      {
        number: '15', title: 'Заключительные положения',
        content: [
          { type: 'subsection', number: '15.1', title: 'Вступление в силу', content: [
            { type: 'p', text: 'Регламент вступает в силу с даты утверждения и распространяется на всех действующих и новых сотрудников Департамента продаж.' }
          ]},
          { type: 'subsection', number: '15.2', title: 'Ознакомление', content: [
            { type: 'p', text: 'Каждый сотрудник подтверждает ознакомление с Регламентом отметкой (галочкой) в Zoho People. Без подтверждения ознакомления допуск к работе с CRM не производится.' }
          ]},
          { type: 'subsection', number: '15.3', title: 'Изменения', content: [
            { type: 'p', text: 'Изменения вносятся путём размещения обновлённой версии документа в Zoho People с оповещением сотрудников и обязательным повторным ознакомлением.' }
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 6. LEAVE AND TIME OFF POLICY
  // ────────────────────────────────────────
  {
    id: 'Leave_and_Time_Off_Policy',
    title: 'Leave and Time Off Policy',
    heroTitle: 'Leave &<br>Time Off',
    badge: 'Company Policy',
    subtitle: 'Vault Group \u2014 Annual leave, day offs, public holidays, and how to request time off.',
    icon: ICONS.calendar,
    seed: 12.5,
    intro: 'This policy outlines the rules for annual leave, day offs, public holidays, and the process for requesting time off at Vault.',
    closing: 'To request leave or sick days, please submit a request via the HR Portal. For any questions regarding calculations or accruals, contact <strong>work@vault.ist</strong>.',
    sections: [
      {
        number: '01', title: 'Annual Leave (Paid Time Off)',
        content: [
          { type: 'list', items: [
            '<strong>24 working days</strong> per year.',
            'Accrued proportionally at <strong>2 working days per month</strong>.',
            'Working days do not include weekends or public holidays.',
            'First leave is available after <strong>6 months</strong> of employment. In exceptional cases, earlier leave may be granted with manager approval.'
          ]}
        ]
      },
      {
        number: '02', title: 'Day Offs (Not Included in Annual Leave)',
        content: [
          { type: 'list', items: [
            '<strong>10 paid day offs</strong> per year.',
            'Provided due to the absence of a unified national holiday calendar across our international team.',
            'Used for national, cultural, or religious holidays personal to the employee.',
            'Not included in the 24 days of annual leave.',
            'Require approval from your direct manager.',
            'Do not carry over to the next year and are not compensated monetarily.'
          ]}
        ]
      },
      {
        number: '03', title: 'Public Holidays',
        content: [
          { type: 'p', text: 'National holidays in the employee\u2019s country of residence that do not coincide with the company calendar are taken using annual leave or day offs.' }
        ]
      },
      {
        number: '04', title: 'Unused Days',
        content: [
          { type: 'list', items: [
            'Unused annual leave and day offs <strong>expire at the end of the calendar year</strong>.',
            'No monetary compensation is provided for unused days.'
          ]}
        ]
      },
      {
        number: '05', title: 'Upon Termination',
        content: [
          { type: 'p', text: 'If more days have been used than accrued at the time of termination, the difference will be deducted from the final salary payment.' }
        ]
      },
      {
        number: '06', title: 'Requesting Leave',
        content: [
          { type: 'list', items: [
            'Agree on the dates with your direct manager.',
            'Submit a request through <strong>Vacation | Sick Leave Request</strong> in the HR Portal.',
            'Update your <strong>Out-of-Office Schedule</strong>.'
          ]},
          { type: 'callout', variant: 'important', html: '<strong>Important:</strong> All leave and day offs are granted subject to operational needs. It is recommended to plan your leave in advance (at least 3 months ahead). Failure to submit a timely request does not guarantee that leave will be approved.' },
          { type: 'callout', variant: 'tip', html: '<strong>Note:</strong> If you are employed through a Russian legal entity, leave and days off are governed by the Labor Code of the Russian Federation.' }
        ]
      },
    ]
  },
];

// ═══════════════════════════════════════════
// DEPARTMENT LANDING PAGE (Commercial, etc.)
// ═══════════════════════════════════════════

const DEPARTMENTS = {
  commercial: {
    id: 'commercial-department',
    title: 'Commercial Department',
    heroLine1: 'Commercial',
    heroLine2: 'Department',
    subtitle: 'Mandatory regulations, KPI standards, and process documents for the Sales, Business Development, Partnerships, and Marketing teams.',
    badge: 'Department Knowledge Base',
    label: 'Regulations'
  }
};

function generateDepartmentPage(deptKey, docsInDept) {
  const dept = DEPARTMENTS[deptKey];
  const cards = docsInDept.map(d => {
    const badge = d.badge || 'Regulation';
    return `
        <a href="${d.id}.html" class="card">
          <div class="card-inner">
            <div class="card-top">
              <div class="card-icon">${(d.icon || ICONS.shield).replace(/rgba\(255,255,255,0.6\)/g, 'rgba(255,255,255,0.7)').replace(/rgba\(255,255,255,0.8\)/g, 'rgba(255,255,255,0.9)')}</div>
              <div class="card-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M5 12H19M12 5l7 7-7 7"/></svg></div>
            </div>
            <h3>${d.title}</h3>
            <p>${d.subtitle.replace(/^Vault Group\s*[—\-]\s*/, '')}</p>
            <div class="card-badge">${badge}</div>
          </div>
        </a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${dept.title} — Vault Knowledge Base</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --deep-blue: #0019FF;
      --neon-blue: #6152F4;
      --white: #FFFFFF;
      --black: #191B20;
      --g100: #F5F6F8;
      --g200: #E8E9ED;
      --g500: #8B8D94;
      --g700: #4A4C52;
      --g900: #2A2C32;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--black);
      color: var(--white);
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }
    #bgCanvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
    .page { position: relative; z-index: 1; }
    .header {
      padding: 48px 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header .logo svg { height: 32px; width: auto; display: block; }
    .header-right { display: flex; align-items: center; gap: 16px; }
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 20px;
      border-radius: 100px;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.6);
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.25s ease;
    }
    .back-link:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.9);
    }
    .back-link svg { width: 16px; height: 16px; stroke: currentColor; transition: transform 0.2s ease; }
    .back-link:hover svg { transform: translateX(-3px); }
    .header-badge {
      padding: 8px 18px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 100px;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }
    .hero { padding: 40px 80px 80px; max-width: 980px; }
    .hero h1 {
      font-size: clamp(44px, 6vw, 72px);
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.04em;
      margin-bottom: 20px;
    }
    .hero h1 .gradient {
      background: linear-gradient(135deg, var(--deep-blue), var(--neon-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero p { font-size: 18px; color: rgba(255,255,255,0.5); line-height: 1.7; max-width: 620px; }
    .cards-section { padding: 0 80px 100px; }
    .cards-label {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.3);
      margin-bottom: 32px;
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 20px;
    }
    .card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 20px;
      padding: 36px 32px;
      text-decoration: none;
      color: var(--white);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }
    .card::before {
      content: '';
      position: absolute; top: 0; left: 0;
      width: 100%; height: 100%;
      background: linear-gradient(135deg, rgba(0,25,255,0.06), rgba(97,82,244,0.03));
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .card:hover {
      border-color: rgba(0,25,255,0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(0,25,255,0.12);
    }
    .card:hover::before { opacity: 1; }
    .card-inner { position: relative; z-index: 1; }
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 28px;
    }
    .card-icon {
      width: 48px; height: 48px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,25,255,0.1);
      border-radius: 14px;
      flex-shrink: 0;
    }
    .card-icon svg { width: 26px; height: 26px; }
    .card-arrow {
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      transition: all 0.3s ease;
      flex-shrink: 0;
    }
    .card:hover .card-arrow { background: var(--deep-blue); transform: translateX(2px); }
    .card-arrow svg { width: 16px; height: 16px; stroke: rgba(255,255,255,0.4); transition: stroke 0.3s ease; }
    .card:hover .card-arrow svg { stroke: white; }
    .card h3 { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 10px; line-height: 1.2; }
    .card p { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.65; }
    .card-badge {
      display: inline-block;
      margin-top: 20px;
      padding: 5px 14px;
      border-radius: 100px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      background: rgba(97,82,244,0.12);
      color: rgba(255,255,255,0.55);
      border: 1px solid rgba(97,82,244,0.2);
    }
    .footer {
      padding: 40px 80px;
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-text { font-size: 13px; color: rgba(255,255,255,0.2); }
    .footer .logo svg { height: 20px; width: auto; opacity: 0.3; }
    @media (max-width: 768px) {
      .header, .hero, .cards-section, .footer { padding-left: 24px; padding-right: 24px; }
      .cards-grid { grid-template-columns: 1fr; }
      .hero h1 { font-size: 36px; }
    }
  </style>
</head>
<body>
  <canvas id="bgCanvas"></canvas>
  <div class="page">
    <header class="header">
      <div class="logo">${LOGO_WHITE}</div>
      <div class="header-right">
        <a href="index.html" class="back-link"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Knowledge Base</a>
        <div class="header-badge">${dept.badge}</div>
      </div>
    </header>

    <section class="hero">
      <h1>${dept.heroLine1}<br><span class="gradient">${dept.heroLine2}</span></h1>
      <p>${dept.subtitle}</p>
    </section>

    <section class="cards-section">
      <div class="cards-label">${dept.label}</div>
      <div class="cards-grid">
${cards}
      </div>
    </section>

    <footer class="footer">
      <div class="footer-text">Vault Group &copy; 2026 &middot; Confidential &middot; Internal Use Only</div>
      <div class="logo">${LOGO_WHITE}</div>
    </footer>
  </div>

  <script>
    (function() {
      const canvas = document.getElementById('bgCanvas');
      const ctx = canvas.getContext('2d');
      let dpr = window.devicePixelRatio || 1;
      let w, h, time = 0;
      function resize() {
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      function draw() {
        ctx.clearRect(0, 0, w, h);
        const lineCount = 25;
        const centerY = h * 0.4;
        for (let i = 0; i < lineCount; i++) {
          const p = i / lineCount;
          const r = Math.floor(p * 60);
          const g = Math.floor(15 + p * 40);
          const b = Math.floor(200 - p * 10);
          const a = (0.03 + p * 0.1).toFixed(3);
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
          ctx.lineWidth = 1;
          for (let x = 0; x <= w; x += 4) {
            const xN = x / w;
            const y = centerY
              + Math.sin(xN * Math.PI * 2 + time * 0.4 + i * 0.25) * (30 + i * 3)
              + Math.sin(xN * Math.PI * 4.5 + time * 0.2 + i * 0.12) * (15 + i)
              + (i - lineCount / 2) * 7;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        for (let g = 0; g < 2; g++) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 25, 255, 0.15)';
          ctx.lineWidth = 1.5;
          ctx.shadowColor = 'rgba(0, 25, 255, 0.3)';
          ctx.shadowBlur = 10;
          const off = g * 15;
          for (let x = 0; x <= w; x += 4) {
            const xN = x / w;
            const y = centerY
              + Math.sin(xN * Math.PI * 2.5 + time * 0.35 + off) * 60
              + Math.cos(xN * Math.PI * 1.5 + time * 0.2 + off * 0.5) * 30;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
        time += 0.005;
        requestAnimationFrame(draw);
      }
      resize();
      window.addEventListener('resize', resize);
      draw();
    })();

    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = \`all 0.6s cubic-bezier(0.16, 1, 0.3, 1) \${i * 0.08}s\`;
      observer.observe(card);
    });
  </script>
</body>
</html>`;
}

// ═══════════════════════════════════════════
// BUILD
// ═══════════════════════════════════════════

const args = process.argv.slice(2);
const htmlOnly = args.includes('--html-only');
const pdfOnly = args.includes('--pdf-only');

const outputDir = path.join(__dirname, '..', 'output');
const docsDir = path.join(__dirname, '..', 'Docs');
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(docsDir, { recursive: true });

// Group docs by department (skip webHidden — those don't appear on the site)
const docsByDept = {};
for (const doc of documents) {
  if (doc.department && !doc.webHidden) {
    docsByDept[doc.department] = docsByDept[doc.department] || [];
    docsByDept[doc.department].push(doc);
  }
}

// Generate HTML files
if (!pdfOnly) {
  console.log('\n  Generating HTML files...\n');
  for (const doc of documents) {
    const html = generateHTML(doc);
    fs.writeFileSync(path.join(outputDir, `${doc.id}.html`), html, 'utf-8');
    if (!doc.webHidden) {
      fs.writeFileSync(path.join(docsDir, `${doc.id}.html`), html, 'utf-8');
    }
    console.log(`  ✓ ${doc.id}.html${doc.webHidden ? ' (output only — webHidden)' : ''}`);
  }
  console.log(`\n  ${documents.length} HTML files written\n`);

  // Generate department landing pages
  for (const deptKey of Object.keys(docsByDept)) {
    const html = generateDepartmentPage(deptKey, docsByDept[deptKey]);
    const fileName = `${DEPARTMENTS[deptKey].id}.html`;
    fs.writeFileSync(path.join(outputDir, fileName), html, 'utf-8');
    fs.writeFileSync(path.join(docsDir, fileName), html, 'utf-8');
    console.log(`  ✓ ${fileName} (department landing page)`);
  }

  // Generate content.json — merge with existing HR edits
  const contentJsonPath = path.join(docsDir, 'content.json');
  let existingContent = {};
  try {
    existingContent = JSON.parse(fs.readFileSync(contentJsonPath, 'utf-8'));
  } catch {}

  const contentData = {};
  for (const doc of documents) {
    const defaults = {
      intro: doc.intro || '',
      closing: doc.closing || '',
      sections: doc.sections.map(s => ({
        number: s.number,
        title: s.title,
        html: renderContent(s.content)
      }))
    };

    const existing = existingContent[doc.id];
    if (existing) {
      // Preserve HR edits: use existing values, only add new sections from build
      contentData[doc.id] = {
        intro: existing.intro || defaults.intro,
        closing: existing.closing || defaults.closing,
        sections: defaults.sections.map((defSec, i) => {
          const exSec = existing.sections && existing.sections[i];
          if (exSec && exSec.number === defSec.number) {
            return { number: defSec.number, title: exSec.title, html: exSec.html };
          }
          return defSec; // new section — use default
        })
      };
      console.log(`  ↔ ${doc.id}: merged with existing HR edits`);
    } else {
      contentData[doc.id] = defaults;
      console.log(`  + ${doc.id}: new document, using defaults`);
    }
  }

  fs.writeFileSync(contentJsonPath, JSON.stringify(contentData, null, 2), 'utf-8');
  console.log('  ✓ content.json written to docs/\n');
}

// Generate PDFs
if (!htmlOnly) {
  (async () => {
    console.log('  Generating PDF files...\n');
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const doc of documents) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });

      const htmlPath = path.join(outputDir, `${doc.id}.html`);
      // If HTML wasn't just generated, generate it now
      if (pdfOnly && !fs.existsSync(htmlPath)) {
        fs.writeFileSync(htmlPath, generateHTML(doc), 'utf-8');
      }

      await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0',
        timeout: 60000
      });

      // Wait for fonts
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 1500));

      // Switch to PDF mode
      await page.evaluate(() => {
        document.body.classList.add('pdf-mode');
      });

      const pdfPath = path.join(outputDir, `${doc.id}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
        displayHeaderFooter: false
      });

      // Mirror PDF into Docs/ only for department documents (kb.vault.ist download)
      if (doc.department) {
        try {
          fs.copyFileSync(pdfPath, path.join(docsDir, `${doc.id}.pdf`));
        } catch (e) {
          console.error(`    ! could not copy PDF to Docs/: ${e.message}`);
        }
      }

      await page.close();
      console.log(`  ✓ ${doc.id}.pdf`);
    }

    await browser.close();
    console.log(`\n  ${documents.length} PDF files written to output/\n`);
  })().catch(err => {
    console.error('PDF generation failed:', err.message);
    process.exit(1);
  });
}
