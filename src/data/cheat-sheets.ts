
import type { CheatSheet } from '@/types';

export const CHEAT_SHEETS_DATA: CheatSheet[] = [
  {
    id: 'seo-basics-1',
    title: 'SEO Basics: In-Depth Keyword Research',
    content: "Keyword research is the absolute cornerstone of any successful SEO strategy. It's about understanding the precise language your target audience uses when searching for your products, services, or information. Start by brainstorming core topics related to your business. Then, use tools like Google Keyword Planner (free), Ahrefs, SEMrush, or Ubersuggest to expand these into specific keyword ideas. Analyze metrics like search volume (how often a keyword is searched), keyword difficulty (how hard it is to rank for), and click-through rate (CTR) potential. Crucially, always consider search intent: Is the user looking for information (informational), trying to find a specific website (navigational), ready to make a purchase (transactional), or researching before buying (commercial investigation)? Aligning your content with user intent is key to ranking well and satisfying users. Dive deep into competitor keyword strategies to find gaps and opportunities. Also explore related searches and 'People Also Ask' sections on Google for content ideas and long-tail variations. Regularly update your keyword research as market trends and user behavior evolve.",
    category: 'SEO',
    tags: ['seo', 'keywords', 'research', 'beginner', 'strategy', 'intent'],
    proTip: "Don't just focus on high-volume keywords. Long-tail keywords (typically 3+ words) often have lower competition, target a more specific audience, and can have significantly higher conversion rates because they capture users further down the buying funnel. For example, instead of 'shoes', target 'buy red running shoes for women size 8'. Also, explore 'People Also Ask' boxes and related searches on Google SERPs for content ideas. Analyze the SERP features for your target keywords (e.g., featured snippets, video carousels) to understand content format opportunities.",
    interactiveElements: [
      { iconName: 'Search', term: 'Keyword Planner', tip: 'Google Keyword Planner is a free tool to discover new keywords, see their search volume, and get bid estimates for Google Ads.' },
      { iconName: 'Target', term: 'Search Intent', tip: 'Understanding if a user wants to learn, find, or buy is crucial for creating content that ranks and converts.' },
      { iconName: 'Filter', term: 'Keyword Difficulty', tip: 'A metric (often 0-100) estimating how hard it is to rank on page 1 for a given keyword. Higher means harder.' },
      { iconName: 'TrendingUp', term: 'Search Volume', tip: 'The average number of times a specific keyword is searched for in a given period (usually monthly).'},
      { iconName: 'Users', term: 'Competitor Analysis', tip: 'Analyze keywords your competitors rank for to find opportunities you might be missing.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Deep+Keyword+Dive',
    learningObjectives: [
      "Understand the importance of keyword research in SEO.",
      "Learn methods for discovering relevant keywords.",
      "Identify key metrics for evaluating keywords (volume, difficulty, intent).",
      "Recognize the value of long-tail keywords."
    ],
    keyTakeaways: [
      "Keyword research is foundational to SEO success.",
      "Align content with user search intent.",
      "Long-tail keywords often have higher conversion rates.",
      "Continuously monitor and update your keyword strategy."
    ],
    quiz: [
      {
        question: "What is 'search intent' in keyword research?",
        options: ["How many people search for a keyword", "The user's goal when typing a query", "How difficult it is to rank for a keyword", "The length of a keyword phrase"],
        correctAnswerIndex: 1,
        explanation: "Search intent refers to the underlying reason or goal a user has when they type a search query into a search engine."
      },
      {
        question: "Which of the following is an example of a long-tail keyword?",
        options: ["shoes", "running shoes", "best red running shoes for flat feet women", "red shoes"],
        correctAnswerIndex: 2,
        explanation: "Long-tail keywords are longer, more specific phrases that users search for, often indicating they are closer to a purchase or have a very specific need."
      }
    ],
    caseStudies: [
      {
        title: "Fictional Bakery Boosts Local Orders via Keyword Research",
        description: "A small local bakery, 'Sweet Treats Corner,' struggled to attract online orders. They primarily targeted broad keywords like 'bakery' and 'cakes.' After conducting thorough local keyword research, they identified terms like 'custom birthday cakes [City Name]' and 'fresh bread delivery [Neighborhood].'",
        outcome: "By optimizing their website and Google Business Profile for these specific, local long-tail keywords, 'Sweet Treats Corner' saw a 150% increase in online order inquiries from their target local area within three months and a 70% rise in foot traffic citing online discovery."
      }
    ]
  },
  {
    id: 'social-media-engagement-1',
    title: 'Mastering Instagram Engagement Tactics',
    content: "Boosting Instagram engagement requires a multi-faceted approach. Consistently use Stories with interactive elements like polls, quizzes, Q&A stickers, and countdowns. Reels are powerful for reach; create original, entertaining, or educational short-form video content. Respond to comments and DMs promptly and authentically – treat it like a conversation. Run contests and giveaways that encourage liking, sharing, and tagging friends. Collaborate with relevant influencers or complementary brands in your niche to tap into new audiences. Go live to interact with your followers in real-time. Utilize user-generated content (UGC) by encouraging followers to share their experiences with your brand and re-sharing the best submissions (with credit). Experiment with different post formats like carousels, guides, and saved content.",
    category: 'Social Media',
    tags: ['instagram', 'social media', 'engagement', 'marketing', 'community', 'reels'],
    proTip: "Actively encourage and feature User-Generated Content (UGC). Create a unique brand hashtag and ask followers to share photos or videos using your product/service. UGC builds immense social proof, trust, and a strong sense of community. Regularly reposting UGC (with credit) makes your audience feel valued. Also, analyze your Instagram Insights to see when your audience is most active and tailor your posting schedule accordingly.",
    interactiveElements: [
      { iconName: 'Instagram', term: 'Reels', tip: 'Instagram Reels are short, engaging videos that can significantly boost visibility and organic reach due to their prominent placement.' },
      { iconName: 'Users', term: 'Influencers', tip: 'Micro-influencers (1K-100K followers) can be more cost-effective and often have a more engaged, niche audience than macro-influencers.' },
      { iconName: 'Sticker', term: 'Interactive Stickers', tip: 'Use polls, quizzes, sliders, and Q&A stickers in Stories to encourage direct interaction and gather feedback.'},
      { iconName: 'MessageSquare', term: 'Prompt Responses', tip: 'Aim to reply to comments and DMs within a few hours to show your audience you value their engagement.'},
      { iconName: 'Repeat', term: 'User-Generated Content (UGC)', tip: 'Content created by your audience featuring your brand. Highly authentic and builds trust.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Insta+Engagement+Pro',
    learningObjectives: [
        "Identify various methods to increase Instagram engagement.",
        "Understand the role of different Instagram features (Stories, Reels, Live).",
        "Learn how to foster a community through interaction and UGC.",
        "Recognize the importance of analytics in refining engagement strategies."
    ],
    keyTakeaways: [
        "Consistency and interactivity are key to Instagram engagement.",
        "Reels and Stories offer powerful tools for reach and interaction.",
        "Authentic communication and UGC build trust and community.",
        "Responding promptly to comments and DMs is crucial."
    ],
    quiz: [
        {
            question: "What does UGC stand for in the context of social media?",
            options: ["User Growth Content", "User-Generated Content", "Universal Graphic Control", "User Guidance Chat"],
            correctAnswerIndex: 1,
            explanation: "UGC refers to content (photos, videos, reviews) created by users or fans of a brand, rather than the brand itself."
        },
        {
            question: "Which Instagram feature is best for short, entertaining video content designed for wide reach?",
            options: ["Instagram Guides", "Instagram Stories", "Instagram Reels", "IGTV"],
            correctAnswerIndex: 2,
            explanation: "Instagram Reels are specifically designed for short-form video content and are heavily promoted by the platform's algorithm for discovery."
        }
    ],
    caseStudies: [
        {
            title: "Fashion Startup Skyrockets Brand Awareness with Reels Challenge",
            description: "A new sustainable fashion brand, 'EcoThreads,' wanted to quickly build brand awareness on Instagram. They launched a Reels challenge with a unique branded sound, encouraging users to showcase their creative sustainable outfits using #EcoThreadsStyle.",
            outcome: "The challenge went viral, with thousands of users participating. 'EcoThreads' gained over 20,000 new followers in two weeks, and their website traffic from Instagram increased by 300%. They also collected a vast amount of UGC for future marketing."
        }
    ]
  },
  {
    id: 'email-marketing-list-building-1',
    title: 'Strategic Email List Building Techniques',
    content: "A healthy email list is a valuable asset. Grow yours by offering high-value lead magnets such as comprehensive ebooks, exclusive checklists, templates, free tools, or access to webinars/workshops. Place clear, compelling Call-to-Actions (CTAs) on your website, blog posts, and even social media profiles. Implement well-timed exit-intent popups on your website to capture visitors before they leave. Ensure all list-building activities are compliant with data privacy regulations like GDPR and CAN-SPAM, including clear consent mechanisms (double opt-in recommended) and easy unsubscribe options. Consider running contests or promotions that require an email signup. Partner with complementary businesses for cross-promotion opportunities.",
    category: 'Email Marketing',
    tags: ['email', 'list building', 'leads', 'marketing', 'lead magnet', 'cta'],
    proTip: "Segment your email list from the very beginning. Even simple segmentation (e.g., based on the lead magnet they signed up for, their interests indicated at signup, or their engagement level) allows you to send more targeted, relevant, and ultimately more effective email campaigns. Use welcome emails to ask for preferences or to set expectations about email frequency and content.",
    interactiveElements: [
      { iconName: 'Magnet', term: 'Lead Magnets', tip: 'A lead magnet is a valuable free resource or offer given in exchange for a user\'s email address and contact information.' },
      { iconName: 'MousePointerClick', term: 'CTAs', tip: 'A Call-To-Action (e.g., "Download Now", "Subscribe") prompts users to take a specific, desired action.' },
      { iconName: 'FileText', term: 'Ebooks/Guides', tip: 'In-depth guides on topics relevant to your audience make excellent lead magnets.'},
      { iconName: 'ShieldCheck', term: 'GDPR/CAN-SPAM', tip: 'Ensure your email practices comply with anti-spam and data privacy laws in your target regions.'},
      { iconName: 'ChevronsRight', term: 'Exit-Intent Popups', tip: 'Popups that appear when a user shows intent to leave your website, offering a last chance to convert them.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Grow+Email+List',
     learningObjectives: [
      "Understand various techniques for building an email list.",
      "Learn how to create effective lead magnets and CTAs.",
      "Recognize the importance of data privacy compliance (GDPR, CAN-SPAM).",
      "Appreciate the benefits of list segmentation from the start."
    ],
    keyTakeaways: [
      "Offer high value in exchange for email sign-ups.",
      "Clear CTAs and strategic placement are crucial.",
      "Always prioritize user consent and data privacy.",
      "Segmentation improves email relevance and effectiveness."
    ],
    quiz: [
      {
        question: "What is a 'lead magnet'?",
        options: ["A tool to clean email lists", "A free, valuable offer to capture email addresses", "A type of email campaign", "A metric for email engagement"],
        correctAnswerIndex: 1,
        explanation: "A lead magnet is an incentive offered to potential buyers in exchange for their email address or other contact information."
      },
      {
        question: "What does 'double opt-in' mean in email marketing?",
        options: ["Users must opt-in twice on the same form", "Users confirm their subscription via a confirmation email", "Two people must approve an email before it's sent", "Users subscribe to two different lists simultaneously"],
        correctAnswerIndex: 1,
        explanation: "Double opt-in requires subscribers to confirm their email address after initially signing up, ensuring higher list quality and explicit consent."
      }
    ],
    caseStudies: [
      {
        title: "SaaS Startup Grows Demo Requests with Targeted Webinar Lead Magnet",
        description: "A B2B SaaS company, 'AnalytiCo,' wanted to increase demo requests for their new analytics software. They created a free, in-depth webinar showcasing how to solve common industry pain points using their tool, promoted via their blog and LinkedIn.",
        outcome: "The webinar attracted hundreds of sign-ups. By nurturing these leads with a follow-up email sequence offering a personalized demo, 'AnalytiCo' increased their qualified demo requests by 60% in one quarter, significantly boosting their sales pipeline."
      }
    ]
  },
  {
    id: 'paid-ads-google-1',
    title: 'Comprehensive Google Ads Campaign Setup',
    content: "Setting up a Google Ads campaign involves several key steps. First, clearly define your campaign goals (e.g., increase brand awareness, generate leads, drive sales). Next, choose the right campaign type based on your goals (Search, Display, Video, Shopping, Performance Max). Conduct thorough keyword research for Search campaigns. Organize your campaign into ad groups with tightly themed keywords. Set a realistic daily or lifetime budget and select an appropriate bidding strategy (e.g., Maximize Clicks, Maximize Conversions, Target CPA). Write compelling, benefit-driven ad copy and create multiple ad variations for A/B testing. Use relevant ad extensions (sitelinks, callouts, location, image) to enhance ad visibility and provide more information. Ensure conversion tracking is properly set up using Google Analytics 4 and the Google Ads tag. Monitor campaign performance daily and optimize bids, keywords, ad copy, and targeting regularly. Utilize audience targeting options to refine who sees your ads.",
    category: 'Paid Advertising',
    tags: ['google ads', 'ppc', 'paid search', 'advertising', 'sem', 'campaign setup'],
    proTip: "Make extensive use of negative keywords. These are terms for which you *don't* want your ads to show. Regularly review your Search Terms report to identify irrelevant queries that triggered your ads and add them as negative keywords. This saves budget, improves click-through rates (CTR), and increases Quality Score. Also, create separate campaigns for different match types (e.g., exact, phrase) for better control.",
    interactiveElements: [
      { iconName: 'Target', term: 'Campaign Goals', tip: 'Define if you want leads, sales, website traffic, or brand awareness. This dictates campaign type.' },
      { iconName: 'DollarSign', term: 'Bidding Strategy', tip: 'Choose automated (e.g., Target CPA) or manual bidding. Automated strategies leverage Google\'s AI.' },
      { iconName: 'FilePlus', term: 'Ad Extensions', tip: 'Sitelinks, callouts, structured snippets, image extensions, etc., provide more info and increase ad size.' },
      { iconName: 'MinusCircle', term: 'Negative Keywords', tip: 'Prevent ads from showing on irrelevant searches, saving money and improving relevance.'},
      { iconName: 'Group', term: 'Ad Groups', tip: 'Organize your campaign with tightly themed ad groups, each containing relevant keywords and ads.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Google+Ads+Setup',
  },
  {
    id: 'analytics-ga4-basics-1',
    title: 'Google Analytics 4: Essential Core Metrics & Reports',
    content: "Google Analytics 4 (GA4) uses an event-based data model. Key metrics include: Users (total distinct users), Sessions (periods of active engagement), Engagement Rate (percentage of engaged sessions), Average Engagement Time per session, Events (user interactions like page_view, click, scroll, file_download), and Conversions (key events you define as valuable). Set up event tracking for important user actions beyond the automatically collected ones (e.g., form submissions, video views). Analyze traffic acquisition reports to understand where your users are coming from (Organic, Direct, Referral, Paid). Use Engagement reports to see which content users interact with most. The Monetization reports (if e-commerce) track revenue and purchase behavior. Use the Exploration hub to build custom reports, funnels, and path explorations for deeper analysis. Understand the differences between GA4 and Universal Analytics if migrating.",
    category: 'Analytics',
    tags: ['ga4', 'google analytics', 'data', 'metrics', 'reporting', 'event tracking'],
    proTip: "Create custom audiences in GA4 based on specific user behaviors, demographics, or event completions. These audiences can be used for deeper analysis within GA4 or exported to Google Ads for targeted remarketing campaigns, significantly improving ad relevance and ROI. Also, explore the 'Comparisons' feature to segment data directly within standard reports.",
    interactiveElements: [
      { iconName: 'Users', term: 'Users & Sessions', tip: 'Users are unique individuals; Sessions are their periods of activity on your site/app.' },
      { iconName: 'BarChart2', term: 'Engagement Rate', tip: 'Percentage of sessions that lasted longer than 10 seconds, had a conversion event, or had 2+ page views.' },
      { iconName: 'MousePointer', term: 'Event Tracking', tip: 'GA4 tracks user interactions as events (e.g., clicks, downloads, video views). Customize these for your needs.' },
      { iconName: 'Settings2', term: 'Explorations', tip: 'A powerful GA4 feature for creating custom reports, funnels, and segment overlap analysis.'},
      { iconName: 'Shuffle', term: 'Conversions', tip: 'Key user actions defined as valuable, such as purchases or lead form submissions.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=GA4+Insights',
  },
  {
    id: 'seo-onpage-1',
    title: 'Advanced On-Page SEO Checklist',
    content: "Effective on-page SEO goes beyond keywords. Optimize title tags (under 60 characters, include primary keyword, compelling). Craft compelling meta descriptions (under 160 characters, include CTA, keyword). Use header tags (H1 for main title, H2s for subheadings with secondary keywords) to structure content logically. Integrate keywords naturally within your content, avoiding keyword stuffing; focus on semantic relevance. Optimize images: use descriptive filenames, provide concise alt text for accessibility and SEO, and compress images for fast loading using modern formats like WebP. Ensure fast page load speed (check with PageSpeed Insights, aim for good Core Web Vitals). Implement internal linking, connecting relevant pages within your site to distribute link equity and improve navigation. Use structured data markup (Schema.org) to help search engines understand your content better and enable rich snippets (e.g., FAQ, HowTo, Product).",
    category: 'SEO',
    tags: ['seo', 'on-page', 'optimization', 'website', 'technical seo', 'schema'],
    proTip: "Prioritize user experience (UX). Google's ranking algorithms increasingly favor sites that offer a great user experience. This includes mobile-friendliness (responsive design), fast load times, intuitive navigation, and high-quality, engaging content that satisfies search intent. A good UX often leads to lower bounce rates and longer dwell times, which are positive ranking signals. Ensure your site is mobile-first indexed and easily crawlable by search engines.",
    interactiveElements: [
      { iconName: 'Type', term: 'Title Tags & Meta Descriptions', tip: 'Crucial for CTR from SERPs. Make them compelling and keyword-rich.' },
      { iconName: 'Image', term: 'Image Optimization', tip: 'Use descriptive alt text for all images and compress them to improve page speed.' },
      { iconName: 'Link', term: 'Internal Linking', tip: 'Connect related content on your site to help users and search engines navigate and distribute authority.' },
      { iconName: 'Smartphone', term: 'Mobile-Friendliness', tip: 'Essential for modern SEO as Google uses mobile-first indexing. Test with Google\'s Mobile-Friendly Test.'},
      { iconName: 'Zap', term: 'Page Speed (Core Web Vitals)', tip: 'Fast loading times are critical for user experience and SEO. LCP, FID, CLS are key metrics.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=On-Page+Mastery',
  },
  {
    id: 'social-media-content-calendar-1',
    title: 'Strategic Social Media Content Calendar',
    content: "A content calendar is vital for consistent and effective social media marketing. Plan your posts weeks or even months in advance. Identify key content pillars or themes relevant to your audience and brand. Map out content for specific campaigns, holidays, or events. Schedule posts for optimal times when your audience is most active (use platform analytics to determine this). Use tools like Buffer, Hootsuite, Sprout Social, or even a simple spreadsheet/Airtable. Mix content types: educational posts, behind-the-scenes, user-generated content, promotions, questions, videos, images, and stories. Don't forget to allocate time for spontaneous, real-time engagement and community management. Include a process for content approval if working in a team.",
    category: 'Social Media',
    tags: ['social media', 'content strategy', 'planning', 'schedule', 'organization'],
    proTip: "Regularly analyze your social media performance (reach, engagement, clicks, conversions) for different content types and posting times. Use these insights to refine your content calendar, doubling down on what works best and experimenting with new approaches for underperforming areas. Your calendar should be a living document, adaptable to current trends and audience feedback. Also, batch create content to save time.",
    interactiveElements: [
      { iconName: 'CalendarDays', term: 'Planning Ahead', tip: 'Scheduling content saves time and ensures a consistent presence.' },
      { iconName: 'ListChecks', term: 'Content Pillars', tip: 'Core topics or themes your content will revolve around, ensuring brand consistency.' },
      { iconName: 'Share2', term: 'Content Mix', tip: 'Vary your content types (e.g., informational, entertaining, promotional) to keep your audience engaged.' },
      { iconName: 'PieChart', term: 'Performance Analysis', tip: 'Use analytics to see which posts perform best and adjust your strategy accordingly.'},
      { iconName: 'Clock', term: 'Optimal Posting Times', tip: 'Analyze your audience activity to schedule posts when they are most likely to see and engage with them.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Social+Content+Plan',
  },
  {
    id: 'email-marketing-automation-1',
    title: 'Powerful Email Automation Workflows',
    content: "Email automation saves time and nurtures leads effectively. Key workflows include: Welcome Series for new subscribers (introduce your brand, offer value, set expectations, deliver lead magnet). Abandoned Cart Recovery emails for e-commerce (remind users of items left, offer incentive to complete purchase, use urgency). Birthday/Anniversary emails (build loyalty with personalized offers or messages). Lead Nurturing Drip Campaigns (educate leads based on their interests, lifecycle stage, or specific actions, moving them towards conversion). Post-Purchase Follow-ups (thank customers, ask for reviews, suggest related products, offer support). Re-engagement Campaigns for inactive subscribers (try to win them back with special offers or by asking for preferences, or clean your list by unsubscribing chronically inactive contacts).",
    category: 'Email Marketing',
    tags: ['email', 'automation', 'workflows', 'drip campaign', 'nurturing', 'retention'],
    proTip: "Hyper-personalize your automated emails using dynamic content and merge tags based on subscriber data (name, purchase history, website behavior, preferences, survey responses). The more relevant an email feels to the individual, the higher its engagement and conversion rates will be. Also, A/B test elements within your automations (subject lines, CTAs, timing, email copy) to continuously improve performance.",
    interactiveElements: [
      { iconName: 'MailOpen', term: 'Welcome Series', tip: 'A sequence of emails sent to new subscribers to introduce your brand and build a relationship.' },
      { iconName: 'ShoppingCart', term: 'Abandoned Cart', tip: 'Automated emails sent to users who added items to their cart but didn\'t complete the purchase.' },
      { iconName: 'Droplets', term: 'Drip Campaigns', tip: 'A set of pre-written emails sent out on a specific schedule to nurture leads or onboard users.' },
      { iconName: 'RefreshCw', term: 'Re-engagement', tip: 'Campaigns designed to reactivate subscribers who haven\'t interacted with your emails recently.'},
      { iconName: 'UserCheck', term: 'Personalization', tip: 'Using subscriber data to tailor email content, making it more relevant and effective.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Automated+Emails',
  },
  {
    id: 'paid-ads-facebook-1',
    title: 'Advanced Facebook Ads Targeting Strategies',
    content: "Facebook (Meta) Ads offer robust targeting. Core Audiences allow targeting by demographics (age, gender, location, language, education, job title), interests (pages liked, ad interactions, related topics), and behaviors (purchase behavior, device usage, travel habits). Custom Audiences are highly effective: create them from your website visitors (using the Meta Pixel - track specific events like ViewContent, AddToCart, Purchase), customer lists (email addresses, phone numbers - ensure proper hashing and consent), or app users. Lookalike Audiences expand your reach by finding new users similar to your best existing customers, website visitors, or high-value event completers. Use detailed targeting expansion judiciously, especially when starting. Layer targeting options to refine your audience, but avoid making it too narrow which can limit reach and increase CPMs. Always A/B test different audience segments and creatives.",
    category: 'Paid Advertising',
    tags: ['facebook ads', 'meta ads', 'social ads', 'targeting', 'custom audience', 'lookalike'],
    proTip: "Leverage the Meta Pixel to its full potential. Track standard events (ViewContent, AddToCart, Purchase) and create custom conversions for specific actions on your site (e.g., newsletter sign-up, demo request). This data not only fuels powerful Custom Audiences for retargeting but also helps Facebook's algorithm optimize ad delivery to users most likely to convert. Ensure your pixel is correctly implemented and tracking accurately.",
    interactiveElements: [
      { iconName: 'Users2', term: 'Custom Audiences', tip: 'Target people who have already interacted with your business (e.g., website visitors, email list).' },
      { iconName: 'UserPlus', term: 'Lookalike Audiences', tip: 'Find new people on Facebook who are similar to your existing best customers or converters.' },
      { iconName: 'Code2', term: 'Meta Pixel', tip: 'A piece of code on your website that helps you track conversions, optimize ads, and build targeted audiences.' },
      { iconName: 'Layers', term: 'Audience Layering', tip: 'Combine multiple targeting criteria (e.g., interests AND behaviors OR multiple interests) to create a more specific audience.'},
      { iconName: 'FileBarChart', term: 'Campaign Objectives', tip: 'Choose the right objective (e.g., awareness, traffic, conversions) to align with your goals and Facebook\'s optimization.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Facebook+Targeting',
  },
  {
    id: 'analytics-kpi-1',
    title: 'Defining & Tracking Marketing KPIs',
    content: "Key Performance Indicators (KPIs) are measurable values that demonstrate how effectively a company is achieving key business objectives. For marketing, common KPIs include: Conversion Rate (e.g., lead form completions, sales, sign-ups), Customer Acquisition Cost (CAC), Customer Lifetime Value (CLV), Return on Ad Spend (ROAS), Website Traffic (overall, by source/medium), Bounce Rate (or Engagement Rate in GA4), Average Session Duration (or Average Engagement Time in GA4), Social Media Engagement Rate (likes, comments, shares per post), Email Open/Click-Through Rates, and Lead-to-Customer Rate. Identify KPIs that directly align with your specific marketing goals and overall business objectives. Track them consistently using analytics tools (GA4, CRM, ad platform analytics). Use dashboards (e.g., in GA4, Looker Studio/Google Data Studio, specialized BI tools) to visualize KPI trends over time. Regularly review KPIs to measure progress, identify areas for improvement, and make informed, data-driven decisions.",
    category: 'Analytics',
    tags: ['kpi', 'metrics', 'business goals', 'performance', 'tracking', 'dashboard'],
    proTip: "Don't just track KPIs; set SMART (Specific, Measurable, Achievable, Relevant, Time-bound) targets for them. For example, instead of 'increase website traffic', aim for 'increase organic website traffic by 15% in Q3 from new blog content'. This provides clear benchmarks for success and helps focus your marketing efforts. Also, understand the difference between vanity metrics (look good but don't drive business results) and actionable metrics (provide insight for decisions).",
    interactiveElements: [
      { iconName: 'Goal', term: 'SMART Goals', tip: 'Set Specific, Measurable, Achievable, Relevant, Time-bound goals for your KPIs.' },
      { iconName: 'TrendingDown', term: 'CAC (Customer Acquisition Cost)', tip: 'The total cost of acquiring a new customer. Aim to keep this lower than CLV.' },
      { iconName: 'Repeat', term: 'CLV (Customer Lifetime Value)', tip: 'The total revenue a business can expect from a single customer account throughout their relationship.' },
      { iconName: 'Gauge', term: 'Dashboards', tip: 'Visual tools that display your most important KPIs in one place for easy monitoring and reporting.'},
      { iconName: 'Lightbulb', term: 'Actionable Metrics', tip: 'Metrics that provide insights you can act upon to improve performance, unlike vanity metrics.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Marketing+KPIs',
  },
  {
    id: 'seo-link-building-1',
    title: 'Sustainable Link Building Strategies',
    content: "Link building, or acquiring backlinks from other websites to yours, is a crucial off-page SEO factor that signals authority and trust to search engines. Focus on quality over quantity. Create high-value, shareable content (e.g., original research, comprehensive guides, infographics, free tools, unique data studies) that naturally attracts links – this is known as 'link earning'. Guest blog on authoritative, relevant websites in your niche, providing genuine value to their audience. Use the 'broken link building' technique: find broken external links on other sites and suggest your relevant content as a replacement. Reach out to influencers, journalists, and webmasters for mentions, collaborations, or to share your valuable content. Monitor your backlink profile using tools like Ahrefs or SEMrush to disavow toxic links if necessary. HARO (Help A Reporter Out) can be a good source for quality links from media outlets. Digital PR, creating newsworthy stories or data, can also earn high-quality links.",
    category: 'SEO',
    tags: ['seo', 'link building', 'backlinks', 'off-page', 'domain authority'],
    proTip: "Focus on building topical relevance through your link building efforts. Links from websites that are thematically related to your own industry or niche carry more weight with search engines than links from irrelevant sites. Also, diversify your anchor text naturally; avoid over-optimizing with exact match keywords as this can look manipulative. Aim for a mix of branded, naked URL, and partial match anchors.",
    interactiveElements: [
      { iconName: 'Edit3', term: 'Guest Blogging', tip: 'Writing articles for other relevant websites in exchange for a backlink and exposure.' },
      { iconName: 'LinkBroken', term: 'Broken Link Building', tip: 'Finding dead links on other sites and offering your content as a replacement.' },
      { iconName: 'Award', term: 'Authoritative Sites', tip: 'Aim for links from websites with high domain authority/rating and good reputations.'},
      { iconName: 'Anchor', term: 'Anchor Text', tip: 'The clickable text of a hyperlink. Strive for natural and varied anchor text.'},
      { iconName: 'FilePieChart', term: 'Content for Links (Link Bait)', tip: 'Creating exceptional content (data, tools, guides) specifically designed to attract backlinks.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Link+Building+Tactics',
  },
  {
    id: 'social-media-linkedin-1',
    title: 'LinkedIn B2B Marketing Excellence',
    content: "LinkedIn is the premier platform for B2B marketing. Fully optimize your LinkedIn Company Page with a compelling description, branding, relevant keywords, and a clear call-to-action. Regularly share valuable industry insights, original articles, case studies, company news, and thought leadership content. Encourage employees to create professional profiles and act as brand advocates by sharing company content and engaging in relevant discussions (employee advocacy programs). Actively participate in relevant LinkedIn Groups to network, share expertise, and build relationships. Use LinkedIn Ads for highly targeted B2B campaigns, leveraging its professional demographic data (job titles, industries, company size, skills). Publish native articles directly on LinkedIn to showcase thought leadership and reach a wider audience. Engage with your followers' comments and messages promptly.",
    category: 'Social Media',
    tags: ['linkedin', 'b2b', 'social media', 'professional networking', 'lead generation', 'ads'],
    proTip: "Utilize LinkedIn's Sales Navigator (if budget allows) for advanced lead prospecting, account-based marketing, and personalized outreach. For organic efforts, consistently engage with the posts of your target audience, prospects, and industry leaders. Personalized connection requests (with a note explaining why you want to connect) and thoughtful comments on their content can be more effective than generic outreach. Focus on building genuine relationships.",
    interactiveElements: [
      { iconName: 'Building', term: 'Company Page', tip: 'Your brand\'s official presence on LinkedIn. Keep it updated, professional, and informative.' },
      { iconName: 'Users', term: 'Employee Advocacy', tip: 'Encourage employees to share company content and engage, expanding your reach and credibility.' },
      { iconName: 'Megaphone', term: 'LinkedIn Ads', tip: 'Target professionals by job title, industry, skills, company size, seniority, and more.' },
      { iconName: 'Newspaper', term: 'Native Articles', tip: 'Publish long-form content directly on LinkedIn to position yourself as a thought leader and engage prospects.'},
      { iconName: 'Network', term: 'LinkedIn Groups', tip: 'Participate in relevant industry groups to share insights, ask questions, and connect with peers.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=LinkedIn+for+B2B',
  },
  {
    id: 'email-marketing-subject-lines-1',
    title: 'Crafting Irresistible Email Subject Lines',
    content: "Your subject line is often the first (and sometimes only) impression your email makes, determining whether it gets opened or ignored. Keep it concise and clear, ideally under 50 characters for optimal mobile visibility. Use personalization (e.g., recipient's name, location, past purchases) where appropriate and impactful. Create a sense of urgency or curiosity to encourage opens (e.g., 'Last Chance:', 'You won't believe...', 'Exclusive Offer Inside'). A/B test different subject lines relentlessly to see what resonates with your audience – test length, tone, questions vs. statements, emojis. Avoid spam trigger words (e.g., 'free money', '!!!', ALL CAPS) and excessive punctuation, which can hurt deliverability. Use emojis sparingly and ensure they render correctly across email clients; test them. Clearly indicate the email's value proposition – what's in it for the reader?",
    category: 'Email Marketing',
    tags: ['email', 'subject lines', 'open rates', 'engagement', 'copywriting', 'a/b testing'],
    proTip: "Use numbers and statistics in your subject lines to make them more specific, credible, and attention-grabbing (e.g., 'Increase your sales by 25% with this tip', '5 Easy Ways to...'). Also, asking a compelling, relevant question can pique interest and drive opens. Always preview your subject lines on different devices and email clients before sending.",
    interactiveElements: [
      { iconName: 'Sparkles', term: 'Curiosity & Urgency', tip: 'Subject lines that evoke curiosity or a fear of missing out (FOMO) often perform well.' },
      { iconName: 'User', term: 'Personalization', tip: 'Using the recipient\'s name or other relevant data can significantly boost open rates.' },
      { iconName: 'ShieldAlert', term: 'Spam Triggers', tip: 'Avoid words and practices that might land your email in the spam folder (e.g., excessive caps, misleading claims).' },
      { iconName: 'Smile', term: 'Emojis', tip: 'Can help your subject line stand out, but use them relevantly and test their appearance on various clients.'},
      { iconName: 'BarChart', term: 'A/B Testing', tip: 'Test different subject lines on a small segment of your list before sending to everyone to optimize open rates.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Catchy+Subjects',
  },
  {
    id: 'paid-ads-budget-optimization-1',
    title: 'Strategic Ad Spend & Budget Optimization',
    content: "Efficiently managing your ad spend is crucial for maximizing ROI and achieving campaign goals. Set clear daily or campaign-level budget caps based on your overall marketing budget and objectives. Monitor ad performance closely across key metrics: Click-Through Rate (CTR), Cost Per Click (CPC), Cost Per Acquisition/Conversion (CPA), and Return On Ad Spend (ROAS). Dynamically allocate more budget to high-performing ad sets, campaigns, keywords, or audiences. Pause or thoroughly re-evaluate underperforming ads – don't let them drain your budget without results. Use ad scheduling to show ads during peak performance times or days if your data supports it. Regularly test different bidding strategies (e.g., manual CPC, tCPA, tROAS, Maximize Conversions). For e-commerce, ensure your product feed is optimized if running Shopping ads. Understand the learning phase of ad platforms and avoid making drastic changes too frequently.",
    category: 'Paid Advertising',
    tags: ['ad spend', 'budget', 'roi', 'optimization', 'ppc', 'cpa', 'roas'],
    proTip: "Implement a tiered bidding strategy based on audience temperature or funnel stage. Bid more aggressively for warm audiences (e.g., website retargeting, existing customers who have purchased before) who are more likely to convert, and more conservatively for cold audiences (e.g., interest-based targeting for new prospects) who are new to your brand. Also, regularly analyze your attribution models to understand the full impact of your various campaigns.",
    interactiveElements: [
      { iconName: 'Coins', term: 'ROAS (Return On Ad Spend)', tip: 'Measures the revenue generated for every dollar spent on advertising. (Revenue / Ad Cost)' },
      { iconName: 'Target', term: 'CPA (Cost Per Acquisition)', tip: 'How much it costs, on average, to acquire one customer or lead through your ads.' },
      { iconName: 'Clock', term: 'Ad Scheduling', tip: 'Show your ads only during specific times or days of the week when they perform best, if data supports this.' },
      { iconName: 'Sliders', term: 'Budget Allocation', tip: 'Shift budget towards your best-performing campaigns, ad groups, keywords, or audiences.'},
      { iconName: 'Brain', term: 'Bidding Strategies', tip: 'Choose from manual or automated bidding options based on your goals and control preferences.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Optimize+Ad+Budget',
  },
  {
    id: 'analytics-conversion-tracking-1',
    title: 'Mastering Conversion Tracking Setup',
    content: "Accurate conversion tracking is fundamental to measuring ad campaign success, website performance, and overall marketing ROI. Clearly define what a 'conversion' means for your business (e.g., a sale, a lead form submission, an app download, a newsletter sign-up, a key page view). Implement tracking pixels/tags from ad platforms (e.g., Meta Pixel, Google Ads Tag, LinkedIn Insight Tag) on your website, typically on 'thank you' pages or via event triggers for single-page applications. For Google Analytics 4, configure key user interactions as conversion events. Test your conversion tracking setup thoroughly using platform tools (e.g., Meta Pixel Helper, Google Tag Assistant) to ensure data is being collected accurately. Use UTM parameters consistently for all your marketing campaigns (email, social, ads) to track their performance in analytics platforms and attribute conversions correctly.",
    category: 'Analytics',
    tags: ['conversion tracking', 'pixels', 'tags', 'utm', 'goals', 'measurement'],
    proTip: "Track micro-conversions in addition to macro-conversions. Micro-conversions are smaller steps a user takes on the path to a main conversion (e.g., adding an item to cart, watching a product video, downloading a brochure, spending a certain amount of time on a page). Tracking these provides deeper insights into the user journey and helps identify areas for optimization even if users don't complete the primary goal immediately. They can also be used for retargeting.",
    interactiveElements: [
      { iconName: 'CheckCircle', term: 'Macro Conversions', tip: 'The primary goals of your website/campaign, like a sale or a lead submission.' },
      { iconName: 'MoreHorizontal', term: 'Micro Conversions', tip: 'Smaller actions that indicate user engagement and progress towards a macro conversion.' },
      { iconName: 'Tag', term: 'Tracking Tags/Pixels', tip: 'Code snippets from ad platforms or analytics tools that track user actions on your site.' },
      { iconName: 'Link2', term: 'UTM Parameters', tip: 'Tags added to URLs to track the source, medium, and campaign name of your website traffic for accurate attribution.'},
      { iconName: 'TestTube2', term: 'Testing Tracking', tip: 'Always verify your conversion tracking is working correctly after setup or changes.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Track+Conversions',
  },
   {
    id: 'content-marketing-strategy-1',
    title: 'Building a Robust Content Marketing Strategy',
    content: "A content marketing strategy aligns your content creation efforts with business goals, focusing on attracting, engaging, and retaining a clearly defined audience. Start by deeply understanding your target audience: their pain points, interests, challenges, and where they consume content (develop detailed buyer personas). Set clear content goals (SMART goals are best): Are you aiming for brand awareness, lead generation, customer education, thought leadership, or sales enablement? Choose appropriate content formats based on your audience and goals: blog posts, long-form articles, videos, podcasts, infographics, case studies, white papers, webinars, interactive tools. Create an editorial calendar to plan content themes, topics, keywords, publishing frequency, and responsible team members. Crucially, have a comprehensive content promotion and distribution plan: share across social media, email newsletters, relevant communities, influencer outreach, and consider paid promotion for key pieces. Measure content performance using KPIs like traffic, engagement (time on page, shares, comments), leads generated, conversions, and SEO impact (rankings, backlinks).",
    category: 'SEO', // Often overlaps with SEO
    tags: ['content marketing', 'strategy', 'planning', 'seo', 'audience', 'promotion'],
    proTip: "Focus on creating 'pillar content' and 'topic clusters'. Pillar content is a comprehensive, authoritative piece on a broad topic (e.g., 'The Ultimate Guide to Digital Marketing'). This pillar page then links out to (and is linked from) multiple 'cluster' content pieces that delve into specific subtopics in more detail (e.g., 'SEO Basics', 'Email Marketing Best Practices'). This structure helps with SEO by establishing topical authority, improves user navigation, and keeps users engaged on your site longer.",
    interactiveElements: [
      { iconName: 'Users', term: 'Target Audience/Personas', tip: 'Detailed profiles of your ideal customers, crucial for creating relevant and engaging content.' },
      { iconName: 'CalendarDays', term: 'Editorial Calendar', tip: 'A schedule that helps in consistent content publishing, topic management, and team coordination.' },
      { iconName: 'Megaphone', term: 'Content Promotion', tip: 'Actively distributing your content through various channels to maximize its reach and impact.' },
      { iconName: 'BookOpen', term: 'Pillar Content', tip: 'A substantial piece of content covering a core topic, acting as a central hub for related subtopics.'},
      { iconName: 'TrendingUp', term: 'Content KPIs', tip: 'Metrics like traffic, engagement, leads, and conversions used to measure content effectiveness.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Content+Strategy+Hub',
  },
  {
    id: 'social-media-tiktok-1',
    title: 'TikTok Marketing: Explosive Growth Guide',
    content: "TikTok thrives on short, highly engaging, and authentic video content. Participate actively in trending challenges, use popular sounds/music, and leverage TikTok's creative effects to increase discoverability. Authenticity and relatability are key; avoid overly polished or corporate content unless it fits a specific ironic trend. Use a mix of relevant and trending hashtags (don't overdo it; 3-5 well-chosen ones are often best). Collaborate with TikTok creators (influencers) who align with your brand and have genuine engagement with their audience. Experiment with TikTok's native ad platform for targeted campaigns, including Spark Ads which boost organic posts. Engage with comments on your videos and interact with other creators' content within your niche. Consistency in posting is important for algorithm favorability. Analyze your TikTok analytics to understand what resonates with your audience, best posting times, and video completion rates.",
    category: 'Social Media',
    tags: ['tiktok', 'video marketing', 'short-form video', 'trends', 'influencer', 'viral'],
    proTip: "The first 3 seconds of your TikTok video are critical. Hook viewers immediately with something intriguing, visually appealing, a bold statement, or by posing a question. Also, focus on storytelling, even in short formats. Tutorials ('How to...'), behind-the-scenes, relatable humor, and transformative before-and-after content perform well. Use clear, on-screen text overlays for key messages as many watch with sound off initially.",
    interactiveElements: [
      { iconName: 'TrendingUp', term: 'Trending Challenges/Sounds', tip: 'Participating in trends can expose your content to a much wider audience on TikTok.' },
      { iconName: 'Video', term: 'Short-Form Video', tip: 'TikTok videos are typically 15-60 seconds, though longer formats are available. Keep them snappy!' },
      { iconName: 'Hash', term: 'Hashtag Strategy', tip: 'Use a mix of broad, niche, and trending hashtags to improve discoverability. Research relevant hashtags.' },
      { iconName: 'Users', term: 'Creator Collaborations', tip: 'Partnering with TikTok influencers can introduce your brand to their engaged followers authentically.'},
      { iconName: 'Sparkles', term: 'Hook/First 3 Seconds', tip: 'Capture attention immediately to prevent users from scrolling past your video.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=TikTok+Growth+Hacks',
  },
  {
    id: 'email-marketing-segmentation-1',
    title: 'Mastering Advanced Email Segmentation',
    content: "Email segmentation involves dividing your email list into smaller, more targeted groups based on shared characteristics or behaviors. This allows for highly personalized messaging, leading to better engagement, higher conversion rates, and reduced unsubscribes. Segment based on: Demographics (age, gender, location, job title), Purchase History (past purchases, average order value, product categories bought), Engagement Level (opens, clicks, inactivity – e.g., VIPs, casual readers, inactive), Website Activity (pages visited, content downloaded, forms submitted), Psychographics (interests, lifestyle, values, opinions gathered via surveys or preference centers), Signup Source (e.g., specific lead magnet, webinar registration, contest entry), and Customer Lifecycle Stage (new subscriber, active customer, lapsed customer). Use dynamic content within your emails to tailor sections of the message to different segments automatically. Regularly review and refine your segments as your audience and business evolve.",
    category: 'Email Marketing',
    tags: ['email segmentation', 'personalization', 'targeting', 'dynamic content', 'audience'],
    proTip: "Implement behavioral segmentation triggered by real-time user actions or inactions. For example, if a user visits a specific product category page multiple times but doesn't purchase, trigger an automated email sequence related to that category, perhaps offering more information, social proof, or a small incentive. If a user abandons a cart, send a reminder. This level of timeliness and relevance can be extremely effective in moving users towards conversion.",
    interactiveElements: [
      { iconName: 'PieChart', term: 'Demographic Segmentation', tip: 'Grouping subscribers by age, gender, location, income, etc.' },
      { iconName: 'Eye', term: 'Engagement Segmentation', tip: 'Categorizing users by how they interact with your emails (e.g., frequent openers, inactive).' },
      { iconName: 'Shuffle', term: 'Dynamic Content', tip: 'Email sections that change automatically based on the recipient\'s segment or data.' },
      { iconName: 'History', term: 'Purchase History', tip: 'Segmenting based on what and how often customers buy to send relevant offers and recommendations.'},
      { iconName: 'Map', term: 'Behavioral Segmentation', tip: 'Grouping users based on actions they take (or don\'t take) on your website or with your emails.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Email+Segmentation+Pro',
  },
  {
    id: 'paid-ads-retargeting-1',
    title: 'High-Conversion Retargeting Campaigns',
    content: "Retargeting (or remarketing) allows you to show ads to people who have previously interacted with your website, app, or social media content but didn't convert. This is a highly effective strategy as you're reaching an already warm audience familiar with your brand. Segment your retargeting audiences based on specific actions or pages visited (e.g., viewed product page X, abandoned cart, visited pricing page but not contact page, engaged with specific social posts). Create tailored ad creatives and offers for each segment, reflecting their previous interaction. Set frequency caps to avoid ad fatigue and annoying users. Exclude users who have already converted from general retargeting campaigns (though you might retarget them with complementary offers later). Use retargeting across multiple platforms like Google Ads (Search & Display, YouTube), social media (Facebook, Instagram, LinkedIn), and even email. Ensure your tracking pixels are correctly installed.",
    category: 'Paid Advertising',
    tags: ['retargeting', 'remarketing', 'ad creatives', 'conversion', 'warm audience', 'pixel'],
    proTip: "Implement time-delayed retargeting sequences and vary ad messaging. For example, show a general brand reminder ad for 1-3 days after a site visit, then a more specific product/service ad (related to what they viewed) for days 4-7, and perhaps an offer/discount or testimonial ad for days 8-14 if they still haven't converted. This gradual approach can be less intrusive and more effective at nurturing them through the decision process. Also, test different lookback windows for your audiences.",
    interactiveElements: [
      { iconName: 'RotateCcw', term: 'Website Visitors', tip: 'The most common retargeting group. Target users who visited your site but didn\'t convert.' },
      { iconName: 'ShoppingCart', term: 'Cart Abandoners', tip: 'A high-intent audience. Remind them of their cart and offer incentives to complete purchase.' },
      { iconName: 'ListFilter', term: 'Audience Segmentation', tip: 'Create different retargeting lists based on user behavior (e.g., visited X page, spent Y time).' },
      { iconName: 'EyeOff', term: 'Frequency Caps', tip: 'Limit how many times a user sees your retargeting ad in a given period to prevent ad fatigue.'},
      { iconName: 'Layers', term: 'Sequential Retargeting', tip: 'Show a series of different ads over time to guide users through the funnel.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Retargeting+Mastery',
  },
  {
    id: 'analytics-funnel-analysis-1',
    title: 'In-Depth Sales Funnel Analysis & Optimization',
    content: "Sales funnel analysis involves tracking and optimizing the customer journey through various stages, typically: Awareness (user discovers your brand/product), Interest (user engages and learns more, expresses interest), Decision/Consideration (user evaluates options, compares with competitors), and Action/Conversion (user makes a purchase, signs up, or completes a desired goal). Map out your specific funnel stages as they apply to your business model. Track conversion rates between each stage using analytics tools like GA4 (Funnel Exploration report). Identify bottlenecks or drop-off points where a significant percentage of users leave the funnel. Hypothesize reasons for drop-offs (e.g., confusing navigation, unclear value proposition, technical issues, high price, lack of trust signals) and A/B test solutions (e.g., new CTA, clearer copy, improved page layout, testimonials) to optimize underperforming stages. Continuously monitor and iterate.",
    category: 'Analytics',
    tags: ['sales funnel', 'customer journey', 'conversion optimization', 'bottleneck', 'aida', 'ga4'],
    proTip: "Segment your funnel analysis. Don't just look at the overall funnel performance; analyze how different traffic sources (e.g., organic search vs. paid social), device types (desktop vs. mobile), user demographics, or campaign cohorts move through the funnel. This can reveal specific issues affecting particular user groups and allow for more targeted optimizations. For instance, mobile users might be dropping off at a specific form field that's hard to use on a small screen.",
    interactiveElements: [
      { iconName: 'Filter', term: 'Funnel Stages', tip: 'Typical stages: Awareness, Interest, Consideration, Conversion (AIDA is a common model).' },
      { iconName: 'TrendingDown', term: 'Drop-off Points', tip: 'Identify where users are exiting your funnel to focus optimization efforts.' },
      { iconName: 'Lightbulb', term: 'A/B Testing', tip: 'Test changes to pages or CTAs at bottleneck stages to improve conversion rates.' },
      { iconName: 'Route', term: 'User Journey Mapping', tip: 'Visually outline the steps customers take from first interaction to conversion to understand their experience.'},
      { iconName: 'BarChartHorizontal', term: 'Segmented Analysis', tip: 'Analyze funnel performance for different user groups (e.g., by traffic source, device).'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Funnel+Optimization',
  },
  // NEW CHEAT SHEETS START HERE
  {
    id: 'seo-local-seo-1',
    title: 'Mastering Local SEO for Businesses',
    content: "Local SEO helps businesses promote their products and services to local customers at the exact moment they're searching for them. Optimize your Google Business Profile (GBP) completely: accurate NAP (Name, Address, Phone), consistent business hours, primary and secondary categories, detailed services/products with descriptions, high-quality photos and videos, and regular Google Posts. Encourage customer reviews on GBP and other local directories (e.g., Yelp, TripAdvisor); respond to all reviews, positive and negative. Build local citations (mentions of your NAP on other websites like local chamber of commerce, industry-specific directories, community sites). Create location-specific pages on your website if you have multiple branches, with unique content for each. Use local keywords (e.g., 'plumber in [city]', '[service] near me') in your website content, title tags, meta descriptions, and GBP. Ensure your website is mobile-friendly and loads fast, as many local searches happen on the go.",
    category: 'SEO',
    tags: ['local seo', 'google business profile', 'gbp', 'citations', 'reviews', 'small business'],
    proTip: "Regularly use Google Posts within your Google Business Profile to share updates, offers, events, and new products. This keeps your profile fresh and engaging, and these posts appear directly in local search results (the 'Local Pack') and Maps, significantly increasing visibility and click-through opportunities. Also, utilize the Q&A feature on GBP to proactively answer common customer questions.",
    interactiveElements: [
      { iconName: 'MapPin', term: 'Google Business Profile (GBP)', tip: 'A free tool from Google that helps businesses manage their online presence across Google Search and Maps.' },
      { iconName: 'Star', term: 'Customer Reviews', tip: 'Positive reviews significantly impact local rankings and customer trust. Actively request and respond to them professionally.' },
      { iconName: 'List', term: 'Local Citations', tip: 'Mentions of your business\'s Name, Address, and Phone (NAP) on other websites and directories. Consistency is key.' },
      { iconName: 'Building', term: 'Location Pages', tip: 'If you have multiple physical locations, create unique, optimized pages for each on your website, including local schema.'},
      { iconName: 'MessageSquare', term: 'Google Posts', tip: 'Mini-updates, offers, or event announcements you can publish directly to your GBP listing.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Local+SEO+Boost',
     learningObjectives: [
      "Understand the key components of Local SEO.",
      "Learn how to optimize a Google Business Profile effectively.",
      "Recognize the importance of local citations and customer reviews.",
      "Identify strategies for creating locally relevant website content."
    ],
    keyTakeaways: [
      "A complete and accurate Google Business Profile is foundational for Local SEO.",
      "Consistent NAP information across online directories is crucial.",
      "Positive customer reviews build trust and improve rankings.",
      "Local keywords and location-specific content attract local customers."
    ],
    quiz: [
      {
        question: "What does 'NAP' stand for in Local SEO?",
        options: ["Navigation, Accessibility, Performance", "Name, Address, Phone Number", "New Articles Published", "Network Access Point"],
        correctAnswerIndex: 1,
        explanation: "NAP stands for Name, Address, Phone Number, which are critical pieces of information for local business listings and citations."
      },
      {
        question: "Which of these is NOT a primary factor for Local SEO ranking?",
        options: ["Google Business Profile optimization", "Number of international backlinks", "Online customer reviews", "Local citation consistency"],
        correctAnswerIndex: 1,
        explanation: "While backlinks are important for general SEO, for Local SEO, factors like GBP, reviews, and local citations are typically more impactful than the *number* of *international* backlinks."
      }
    ],
    caseStudies: [
      {
        title: "Fictional Restaurant Dominates Local Search with GBP & Review Strategy",
        description: "'The Savory Spoon,' a local eatery, was struggling to compete with larger chains. They undertook a focused Local SEO effort, fully optimizing their GBP with enticing photos, menus, and daily specials via Google Posts. They also implemented a system to actively request reviews from satisfied diners.",
        outcome: "Within six months, 'The Savory Spoon' ranked in the top 3 of the local map pack for 'best restaurants [city name]' and saw a 40% increase in reservations mentioning they found the restaurant on Google. Their average review score climbed from 3.5 to 4.7 stars."
      }
    ]
  },
  {
    id: 'social-media-video-strategy-1',
    title: 'Developing a Winning Video Marketing Strategy',
    content: "Video content is highly engaging and effective across social media and other digital platforms. Define your video goals: brand awareness, product education, lead generation, customer testimonials, driving sales, or internal training. Understand your target audience's preferences for video length, style (e.g., animated, live-action, user-generated), and platforms they frequent. Choose platforms wisely (e.g., TikTok/Reels for short-form, YouTube for longer tutorials/VOD, LinkedIn for B2B thought leadership/case studies, Instagram for visual storytelling). Plan your video content types: tutorials, product demos, customer testimonials, behind-the-scenes, Q&As, live streams, webinars, explainer videos. Invest in decent audio and lighting – good audio is often more critical than perfect video. Optimize video titles, descriptions, tags, and thumbnails for searchability on platforms like YouTube. Include clear CTAs within or at the end of your videos. Track video performance metrics (views, watch time, audience retention, engagement rate, click-through rate on CTAs, conversions).",
    category: 'Social Media',
    tags: ['video marketing', 'content strategy', 'youtube', 'tiktok', 'reels', 'engagement'],
    proTip: "Add captions or subtitles to all your videos. Many users watch videos with the sound off, especially on mobile or in public places. Captions make your content accessible to a wider audience, including those with hearing impairments, and can significantly improve comprehension, engagement, and watch time. Most platforms offer auto-captioning tools that you can then edit for accuracy.",
    interactiveElements: [
      { iconName: 'Youtube', term: 'Platform Choice', tip: 'Select platforms where your target audience spends time (e.g., YouTube for how-tos, Instagram for visual stories).' },
      { iconName: 'Clapperboard', term: 'Content Types', tip: 'Vary your video formats: explainers, interviews, user-generated content, live video, product demos, etc.' },
      { iconName: 'Captions', term: 'Subtitles/Captions', tip: 'Crucial for accessibility and for users watching with sound off. Improves engagement and SEO on some platforms.' },
      { iconName: 'ThumbsUp', term: 'Call to Action (CTA)', tip: 'Tell viewers what to do next (e.g., subscribe, visit website, comment, download a resource).'},
      { iconName: 'Activity', term: 'Video Analytics', tip: 'Track metrics like view duration, audience retention, and click-through rates to optimize content.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Video+Strategy+Pro',
  },
  {
    id: 'email-marketing-deliverability-1',
    title: 'Improving Email Deliverability Rates',
    content: "Email deliverability is crucial; if your emails don't reach the inbox, your campaigns fail. Maintain a clean email list: regularly remove inactive subscribers, hard bounces, and identify potential spam traps. Use double opt-in for new subscribers to confirm their interest and ensure list quality. Authenticate your sending domain with SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC (Domain-based Message Authentication, Reporting & Conformance) records – these prove your emails are legitimate. Avoid using spam trigger words (e.g., 'free', 'cash', '$$$') excessively in subject lines and content. Send relevant, engaging content that your subscribers value to maintain a good sender reputation. Monitor your sender score with tools like SenderScore.org. Make it easy to unsubscribe with a clear, one-click link in every email. Gradually warm up new IP addresses or sending domains by starting with small volumes to engaged subscribers.",
    category: 'Email Marketing',
    tags: ['email deliverability', 'inbox placement', 'spf', 'dkim', 'dmarc', 'sender reputation'],
    proTip: "Monitor your email engagement metrics closely (opens, clicks, bounces, spam complaints). Internet Service Providers (ISPs) use these as strong indicators of your sending reputation. Low engagement and high complaints can lead to your emails being filtered to spam or blocked entirely. Address issues proactively by segmenting out unengaged users or running re-engagement campaigns before they hurt your overall deliverability.",
    interactiveElements: [
      { iconName: 'MailCheck', term: 'SPF, DKIM, DMARC', tip: 'Email authentication protocols that help verify you are a legitimate sender and prevent spoofing, crucial for deliverability.' },
      { iconName: 'UserX', term: 'List Cleaning (Hygiene)', tip: 'Regularly removing invalid or unengaged subscribers to improve deliverability and sender reputation.' },
      { iconName: 'ShieldQuestion', term: 'Sender Reputation/Score', tip: 'A score ISPs assign to senders, influencing whether emails land in the inbox or spam folder. Monitor and protect it.' },
      { iconName: 'Thermometer', term: 'IP Warm-up', tip: 'Gradually increasing send volume from a new IP address or domain to build a positive sender reputation with ISPs.'},
      { iconName: 'Activity', term: 'Engagement Metrics', tip: 'High opens and clicks signal to ISPs that your emails are wanted, improving deliverability.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Email+Inbox+Success',
  },
  {
    id: 'paid-ads-quality-score-1',
    title: 'Understanding & Improving Google Ads Quality Score',
    content: "Quality Score (QS) is Google's rating (1-10) of the quality and relevance of your keywords and PPC ads. It's a crucial factor in determining your ad rank (where your ad appears) and how much you pay per click (CPC) – higher QS often leads to lower CPCs and better positions. QS is influenced by three main components: Expected Click-Through Rate (eCTR) – Google's prediction of how likely your ad is to be clicked; Ad Relevance – How well your ad copy matches the user's search query intent; and Landing Page Experience – How relevant, transparent, and easy-to-navigate your landing page is for users. To improve QS: ensure tight keyword-to-ad group-to-ad copy relevance. Write compelling, benefit-driven ad copy that directly addresses the search query. Create high-quality, relevant, fast-loading, and mobile-friendly landing pages. Use ad extensions to increase ad visibility and provide more information. Regularly review and refine keywords, ad copy, and landing pages. Pause low QS keywords if they can't be improved and are spending budget.",
    category: 'Paid Advertising',
    tags: ['quality score', 'google ads', 'ppc', 'ad rank', 'ctr', 'landing page'],
    proTip: "Focus heavily on improving your landing page experience. Ensure your landing page content is highly relevant to the ad copy and keywords, loads quickly (especially on mobile – test with PageSpeed Insights), is easy to navigate, offers valuable information, and provides a clear path to conversion. A poor landing page experience is a common and significant reason for low Quality Scores and wasted ad spend.",
    interactiveElements: [
      { iconName: 'CheckSquare', term: 'Expected CTR (eCTR)', tip: 'Google\'s prediction of how likely your ad is to be clicked when shown for a keyword, relative to competitors.' },
      { iconName: 'FileText', term: 'Ad Relevance', tip: 'How closely your ad copy matches the intent behind a user\'s search query and the keywords in the ad group.' },
      { iconName: 'Laptop', term: 'Landing Page Experience', tip: 'How relevant, transparent, trustworthy, and easy-to-navigate your landing page is for users who click your ad.' },
      { iconName: 'ArrowUpRightSquare', term: 'Ad Rank', tip: 'Determines your ad position. Calculated as: Max CPC Bid x Quality Score (+ Ad Extension impact & other factors).'},
      { iconName: 'Sparkles', term: 'Keyword-Ad-Landing Page Alignment', tip: 'Ensure a strong, consistent message from keyword to ad copy to landing page content.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Quality+Score+Tips',
  },
  {
    id: 'analytics-ab-testing-1',
    title: 'Effective A/B Testing for Marketing Optimization',
    content: "A/B testing (or split testing) is a method of comparing two versions of a webpage, email, ad, or app element against each other to determine which one performs better in achieving a specific goal (e.g., higher conversion rate, more clicks). Formulate a clear hypothesis (e.g., 'Changing the CTA button color from blue to green will increase clicks by 10% because green is more visually prominent'). Test one variable at a time (e.g., headline, image, CTA text, layout element) to isolate its impact and understand causality. Ensure a sufficient sample size (number of visitors/impressions) and test duration for statistically significant results – use an A/B test calculator to estimate these. Use A/B testing tools (Google Optimize (sunsetting, consider alternatives like Optimizely, VWO, Convert Experiences), or built-in platform features in email marketing or ad platforms). Analyze results based on your primary KPI and statistical confidence. Implement the winning variation. Document all your tests, learnings, and outcomes to build a knowledge base for future optimization and avoid repeating mistakes. Continuously iterate and test; optimization is an ongoing process.",
    category: 'Analytics',
    tags: ['a/b testing', 'split testing', 'conversion optimization', 'cro', 'experimentation', 'data-driven'],
    proTip: "Don't stop at the first statistically significant result if the test duration is short or if you haven't captured a full business cycle (e.g., a full week to account for weekday/weekend variations). Run tests long enough to account for variations in user behavior. Also, segment your A/B test results by traffic source, device type, or new vs. returning users. A variation might win overall but lose for a specific important segment, or vice-versa, offering deeper insights.",
    interactiveElements: [
      { iconName: 'FlaskConical', term: 'Hypothesis', tip: 'A clear, testable statement about what you believe will happen when you make a specific change and why.' },
      { iconName: 'Users', term: 'Sample Size & Duration', tip: 'The number of users or impressions, and time, needed to get statistically reliable test results.' },
      { iconName: 'Replace', term: 'Variable Testing', tip: 'Change only one element at a time (e.g., headline, image, CTA text) between versions A and B for clear attribution.' },
      { iconName: 'Percent', term: 'Statistical Significance', tip: 'Ensures that the observed difference between variations is likely not due to random chance (typically aiming for 95% confidence).'},
      { iconName: 'ClipboardList', term: 'Documentation', tip: 'Keep detailed records of your tests, hypotheses, results, and learnings for future reference.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=A/B+Testing+Guide',
  }
];
