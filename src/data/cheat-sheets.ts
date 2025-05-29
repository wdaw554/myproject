import type { CheatSheet } from '@/types';

export const CHEAT_SHEETS_DATA: CheatSheet[] = [
  {
    id: 'seo-basics-1',
    title: 'SEO Basics: In-Depth Keyword Research',
    content: "Keyword research is the absolute cornerstone of any successful SEO strategy. It's about understanding the precise language your target audience uses when searching for your products, services, or information. Start by brainstorming core topics related to your business. Then, use tools like Google Keyword Planner (free), Ahrefs, SEMrush, or Ubersuggest to expand these into specific keyword ideas. Analyze metrics like search volume (how often a keyword is searched), keyword difficulty (how hard it is to rank for), and click-through rate (CTR) potential. Crucially, always consider search intent: Is the user looking for information (informational), trying to find a specific website (navigational), ready to make a purchase (transactional), or researching before buying (commercial investigation)? Aligning your content with user intent is key to ranking well and satisfying users.",
    category: 'SEO',
    tags: ['seo', 'keywords', 'research', 'beginner', 'strategy', 'intent'],
    proTip: "Don't just focus on high-volume keywords. Long-tail keywords (typically 3+ words) often have lower competition, target a more specific audience, and can have significantly higher conversion rates because they capture users further down the buying funnel. For example, instead of 'shoes', target 'buy red running shoes for women size 8'. Also, explore 'People Also Ask' boxes and related searches on Google SERPs for content ideas.",
    interactiveElements: [
      { iconName: 'Search', term: 'Keyword Planner', tip: 'Google Keyword Planner is a free tool to discover new keywords, see their search volume, and get bid estimates for Google Ads.' },
      { iconName: 'Target', term: 'Search Intent', tip: 'Understanding if a user wants to learn, find, or buy is crucial for creating content that ranks and converts.' },
      { iconName: 'Filter', term: 'Keyword Difficulty', tip: 'A metric (often 0-100) estimating how hard it is to rank on page 1 for a given keyword. Higher means harder.' },
      { iconName: 'TrendingUp', term: 'Search Volume', tip: 'The average number of times a specific keyword is searched for in a given period (usually monthly).'},
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Deep+Keyword+Dive',
  },
  {
    id: 'social-media-engagement-1',
    title: 'Mastering Instagram Engagement Tactics',
    content: "Boosting Instagram engagement requires a multi-faceted approach. Consistently use Stories with interactive elements like polls, quizzes, Q&A stickers, and countdowns. Reels are powerful for reach; create original, entertaining, or educational short-form video content. Respond to comments and DMs promptly and authentically – treat it like a conversation. Run contests and giveaways that encourage liking, sharing, and tagging friends. Collaborate with relevant influencers or complementary brands in your niche to tap into new audiences. Go live to interact with your followers in real-time.",
    category: 'Social Media',
    tags: ['instagram', 'social media', 'engagement', 'marketing', 'community', 'reels'],
    proTip: "Actively encourage and feature User-Generated Content (UGC). Create a unique brand hashtag and ask followers to share photos or videos using your product/service. UGC builds immense social proof, trust, and a strong sense of community. Regularly reposting UGC (with credit) makes your audience feel valued.",
    interactiveElements: [
      { iconName: 'Instagram', term: 'Reels', tip: 'Instagram Reels are short, engaging videos that can significantly boost visibility and organic reach due to their prominent placement.' },
      { iconName: 'Users', term: 'Influencers', tip: 'Micro-influencers (1K-100K followers) can be more cost-effective and often have a more engaged, niche audience than macro-influencers.' },
      { iconName: 'Sticker', term: 'Interactive Stickers', tip: 'Use polls, quizzes, sliders, and Q&A stickers in Stories to encourage direct interaction and gather feedback.'},
      { iconName: 'MessageSquare', term: 'Prompt Responses', tip: 'Aim to reply to comments and DMs within a few hours to show your audience you value their engagement.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Insta+Engagement+Pro',
  },
  {
    id: 'email-marketing-list-building-1',
    title: 'Strategic Email List Building Techniques',
    content: "A healthy email list is a valuable asset. Grow yours by offering high-value lead magnets such as comprehensive ebooks, exclusive checklists, templates, free tools, or access to webinars/workshops. Place clear, compelling Call-to-Actions (CTAs) on your website, blog posts, and even social media profiles. Implement well-timed exit-intent popups on your website to capture visitors before they leave. Ensure all list-building activities are compliant with data privacy regulations like GDPR and CAN-SPAM, including clear consent mechanisms and easy unsubscribe options. Consider running contests or promotions that require an email signup.",
    category: 'Email Marketing',
    tags: ['email', 'list building', 'leads', 'marketing', 'lead magnet', 'cta'],
    proTip: "Segment your email list from the very beginning. Even simple segmentation (e.g., based on the lead magnet they signed up for, their interests indicated at signup, or their engagement level) allows you to send more targeted, relevant, and ultimately more effective email campaigns. Use welcome emails to ask for preferences.",
    interactiveElements: [
      { iconName: 'Magnet', term: 'Lead Magnets', tip: 'A lead magnet is a valuable free resource or offer given in exchange for a user\'s email address and contact information.' },
      { iconName: 'MousePointerClick', term: 'CTAs', tip: 'A Call-To-Action (e.g., "Download Now", "Subscribe") prompts users to take a specific, desired action.' },
      { iconName: 'FileText', term: 'Ebooks/Guides', tip: 'In-depth guides on topics relevant to your audience make excellent lead magnets.'},
      { iconName: 'ShieldCheck', term: 'GDPR/CAN-SPAM', tip: 'Ensure your email practices comply with anti-spam and data privacy laws in your target regions.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Grow+Email+List',
  },
  {
    id: 'paid-ads-google-1',
    title: 'Comprehensive Google Ads Campaign Setup',
    content: "Setting up a Google Ads campaign involves several key steps. First, clearly define your campaign goals (e.g., increase brand awareness, generate leads, drive sales). Next, choose the right campaign type based on your goals (Search, Display, Video, Shopping, Performance Max). Conduct thorough keyword research for Search campaigns. Organize your campaign into ad groups with tightly themed keywords. Set a realistic daily or lifetime budget and select an appropriate bidding strategy (e.g., Maximize Clicks, Maximize Conversions, Target CPA). Write compelling, benefit-driven ad copy and create multiple ad variations for A/B testing. Use relevant ad extensions (sitelinks, callouts, location) to enhance ad visibility and provide more information. Ensure conversion tracking is properly set up. Monitor campaign performance daily and optimize bids, keywords, and ad copy regularly.",
    category: 'Paid Advertising',
    tags: ['google ads', 'ppc', 'paid search', 'advertising', 'sem', 'campaign setup'],
    proTip: "Make extensive use of negative keywords. These are terms for which you *don't* want your ads to show. Regularly review your Search Terms report to identify irrelevant queries that triggered your ads and add them as negative keywords. This saves budget, improves click-through rates (CTR), and increases Quality Score.",
    interactiveElements: [
      { iconName: 'Target', term: 'Campaign Goals', tip: 'Define if you want leads, sales, website traffic, or brand awareness. This dictates campaign type.' },
      { iconName: 'DollarSign', term: 'Bidding Strategy', tip: 'Choose automated (e.g., Target CPA) or manual bidding. Automated strategies leverage Google\'s AI.' },
      { iconName: 'FilePlus', term: 'Ad Extensions', tip: 'Sitelinks, callouts, structured snippets, etc., provide more info and increase ad size.' },
      { iconName: 'MinusCircle', term: 'Negative Keywords', tip: 'Prevent ads from showing on irrelevant searches, saving money and improving relevance.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Google+Ads+Setup',
  },
  {
    id: 'analytics-ga4-basics-1',
    title: 'Google Analytics 4: Essential Core Metrics & Reports',
    content: "Google Analytics 4 (GA4) uses an event-based data model. Key metrics include: Users (total distinct users), Sessions (periods of active engagement), Engagement Rate (percentage of engaged sessions), Average Engagement Time, Events (user interactions like page_view, click, scroll), and Conversions (key events you define as valuable). Set up event tracking for important user actions beyond the automatically collected ones. Analyze traffic acquisition reports to understand where your users are coming from (Organic, Direct, Referral, Paid). Use Engagement reports to see which content users interact with most. The Monetization reports (if e-commerce) track revenue. Use the Exploration hub to build custom reports and funnels. Data-driven decisions are paramount.",
    category: 'Analytics',
    tags: ['ga4', 'google analytics', 'data', 'metrics', 'reporting', 'event tracking'],
    proTip: "Create custom audiences in GA4 based on specific user behaviors, demographics, or event completions. These audiences can be used for deeper analysis within GA4 or exported to Google Ads for targeted remarketing campaigns, significantly improving ad relevance and ROI.",
    interactiveElements: [
      { iconName: 'Users', term: 'Users & Sessions', tip: 'Users are unique individuals; Sessions are their periods of activity on your site/app.' },
      { iconName: 'BarChart2', term: 'Engagement Rate', tip: 'Percentage of sessions that lasted longer than 10 seconds, had a conversion event, or had 2+ page views.' },
      { iconName: 'MousePointer', term: 'Event Tracking', tip: 'GA4 tracks user interactions as events (e.g., clicks, downloads, video views). Customize these for your needs.' },
      { iconName: 'Settings2', term: 'Explorations', tip: 'A powerful GA4 feature for creating custom reports, funnels, and segment overlap analysis.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=GA4+Insights',
  },
  {
    id: 'seo-onpage-1',
    title: 'Advanced On-Page SEO Checklist',
    content: "Effective on-page SEO goes beyond keywords. Optimize title tags (under 60 characters, include primary keyword). Craft compelling meta descriptions (under 160 characters, include CTA). Use header tags (H1 for main title, H2s for subheadings) to structure content logically. Integrate keywords naturally within your content, avoiding keyword stuffing. Optimize images: use descriptive filenames, provide concise alt text for accessibility and SEO, and compress images for fast loading. Ensure fast page load speed (check with PageSpeed Insights). Implement internal linking, connecting relevant pages within your site to distribute link equity and improve navigation. Use structured data markup (Schema.org) to help search engines understand your content better and enable rich snippets.",
    category: 'SEO',
    tags: ['seo', 'on-page', 'optimization', 'website', 'technical seo', 'schema'],
    proTip: "Prioritize user experience (UX). Google's ranking algorithms increasingly favor sites that offer a great user experience. This includes mobile-friendliness (responsive design), fast load times, intuitive navigation, and high-quality, engaging content. A good UX often leads to lower bounce rates and longer dwell times, which are positive ranking signals. Ensure your site is mobile-first indexed.",
    interactiveElements: [
      { iconName: 'Type', term: 'Title Tags & Meta Descriptions', tip: 'Crucial for CTR from SERPs. Make them compelling and keyword-rich.' },
      { iconName: 'Image', term: 'Image Optimization', tip: 'Use descriptive alt text for all images and compress them to improve page speed.' },
      { iconName: 'Link', term: 'Internal Linking', tip: 'Connect related content on your site to help users and search engines navigate.' },
      { iconName: 'Smartphone', term: 'Mobile-Friendliness', tip: 'Essential for modern SEO as Google uses mobile-first indexing. Test with Google\'s Mobile-Friendly Test.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=On-Page+Mastery',
  },
  {
    id: 'social-media-content-calendar-1',
    title: 'Strategic Social Media Content Calendar',
    content: "A content calendar is vital for consistent and effective social media marketing. Plan your posts weeks or even months in advance. Identify key content pillars or themes relevant to your audience and brand. Map out content for specific campaigns, holidays, or events. Schedule posts for optimal times when your audience is most active (use platform analytics to determine this). Use tools like Buffer, Hootsuite, Sprout Social, or even a simple spreadsheet. Mix content types: educational posts, behind-the-scenes, user-generated content, promotions, questions, videos, images, and stories. Don't forget to allocate time for spontaneous, real-time engagement.",
    category: 'Social Media',
    tags: ['social media', 'content strategy', 'planning', 'schedule', 'organization'],
    proTip: "Regularly analyze your social media performance (reach, engagement, clicks) for different content types and posting times. Use these insights to refine your content calendar, doubling down on what works best and experimenting with new approaches for underperforming areas. Your calendar should be a living document.",
    interactiveElements: [
      { iconName: 'CalendarDays', term: 'Planning Ahead', tip: 'Scheduling content saves time and ensures a consistent presence.' },
      { iconName: 'ListChecks', term: 'Content Pillars', tip: 'Core topics or themes your content will revolve around, ensuring brand consistency.' },
      { iconName: 'Share2', term: 'Content Mix', tip: 'Vary your content types (e.g., informational, entertaining, promotional) to keep your audience engaged.' },
      { iconName: 'PieChart', term: 'Performance Analysis', tip: 'Use analytics to see which posts perform best and adjust your strategy accordingly.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Social+Content+Plan',
  },
  {
    id: 'email-marketing-automation-1',
    title: 'Powerful Email Automation Workflows',
    content: "Email automation saves time and nurtures leads effectively. Key workflows include: Welcome Series for new subscribers (introduce your brand, offer value, set expectations). Abandoned Cart Recovery emails for e-commerce (remind users of items left, offer incentive to complete purchase). Birthday/Anniversary emails (build loyalty with personalized offers). Lead Nurturing Drip Campaigns (educate leads based on their interests or lifecycle stage, moving them towards conversion). Post-Purchase Follow-ups (thank customers, ask for reviews, suggest related products). Re-engagement Campaigns for inactive subscribers (try to win them back or clean your list).",
    category: 'Email Marketing',
    tags: ['email', 'automation', 'workflows', 'drip campaign', 'nurturing', 'retention'],
    proTip: "Hyper-personalize your automated emails using dynamic content and merge tags based on subscriber data (name, purchase history, website behavior, preferences). The more relevant an email feels to the individual, the higher its engagement and conversion rates will be. Also, A/B test elements within your automations (subject lines, CTAs, timing).",
    interactiveElements: [
      { iconName: 'MailOpen', term: 'Welcome Series', tip: 'A sequence of emails sent to new subscribers to introduce your brand and build a relationship.' },
      { iconName: 'ShoppingCart', term: 'Abandoned Cart', tip: 'Automated emails sent to users who added items to their cart but didn\'t complete the purchase.' },
      { iconName: 'Droplets', term: 'Drip Campaigns', tip: 'A set of pre-written emails sent out on a specific schedule to nurture leads or onboard users.' },
      { iconName: 'RefreshCw', term: 'Re-engagement', tip: 'Campaigns designed to reactivate subscribers who haven\'t interacted with your emails recently.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Automated+Emails',
  },
  {
    id: 'paid-ads-facebook-1',
    title: 'Advanced Facebook Ads Targeting Strategies',
    content: "Facebook (Meta) Ads offer robust targeting. Core Audiences allow targeting by demographics (age, gender, location, language), interests (pages liked, ad interactions), and behaviors (purchase behavior, device usage). Custom Audiences are highly effective: create them from your website visitors (using the Meta Pixel), customer lists (email addresses, phone numbers), or app users. Lookalike Audiences expand your reach by finding new users similar to your best existing customers or website visitors. Use detailed targeting expansion judiciously. Layer targeting options to refine your audience, but avoid making it too narrow. Always A/B test different audience segments.",
    category: 'Paid Advertising',
    tags: ['facebook ads', 'meta ads', 'social ads', 'targeting', 'custom audience', 'lookalike'],
    proTip: "Leverage the Meta Pixel to its full potential. Track standard events (ViewContent, AddToCart, Purchase) and create custom conversions for specific actions on your site. This data not only fuels powerful Custom Audiences for retargeting but also helps Facebook's algorithm optimize ad delivery to users most likely to convert.",
    interactiveElements: [
      { iconName: 'Users2', term: 'Custom Audiences', tip: 'Target people who have already interacted with your business (e.g., website visitors, email list).' },
      { iconName: 'UserPlus', term: 'Lookalike Audiences', tip: 'Find new people on Facebook who are similar to your existing best customers.' },
      { iconName: 'Code2', term: 'Meta Pixel', tip: 'A piece of code on your website that helps you track conversions, optimize ads, and build targeted audiences.' },
      { iconName: 'Layers', term: 'Audience Layering', tip: 'Combine multiple targeting criteria (e.g., interests AND behaviors) to create a more specific audience.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Facebook+Targeting',
  },
  {
    id: 'analytics-kpi-1',
    title: 'Defining & Tracking Marketing KPIs',
    content: "Key Performance Indicators (KPIs) are measurable values that demonstrate how effectively a company is achieving key business objectives. For marketing, common KPIs include: Conversion Rate (e.g., lead form completions, sales), Customer Acquisition Cost (CAC), Customer Lifetime Value (CLV), Return on Ad Spend (ROAS), Website Traffic, Bounce Rate, Average Session Duration, Social Media Engagement Rate, Email Open/Click-Through Rates. Identify KPIs that directly align with your specific marketing goals. Track them consistently using analytics tools. Use dashboards (e.g., in GA4, Google Data Studio) to visualize KPI trends over time. Regularly review KPIs to measure progress, identify areas for improvement, and make informed decisions.",
    category: 'Analytics',
    tags: ['kpi', 'metrics', 'business goals', 'performance', 'tracking', 'dashboard'],
    proTip: "Don't just track KPIs; set SMART (Specific, Measurable, Achievable, Relevant, Time-bound) targets for them. For example, instead of 'increase website traffic', aim for 'increase organic website traffic by 15% in Q3'. This provides clear benchmarks for success and helps focus your marketing efforts. Also, understand the difference between vanity metrics and actionable metrics.",
    interactiveElements: [
      { iconName: 'Goal', term: 'SMART Goals', tip: 'Set Specific, Measurable, Achievable, Relevant, Time-bound goals for your KPIs.' },
      { iconName: 'TrendingDown', term: 'CAC (Customer Acquisition Cost)', tip: 'The total cost of acquiring a new customer. Aim to keep this lower than CLV.' },
      { iconName: 'Repeat', term: 'CLV (Customer Lifetime Value)', tip: 'The total revenue a business can expect from a single customer account throughout their relationship.' },
      { iconName: 'Gauge', term: 'Dashboards', tip: 'Visual tools that display your most important KPIs in one place for easy monitoring.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Marketing+KPIs',
  },
  {
    id: 'seo-link-building-1',
    title: 'Sustainable Link Building Strategies',
    content: "Link building, or acquiring backlinks from other websites to yours, is a crucial off-page SEO factor. Focus on quality over quantity. Create high-value, shareable content (e.g., original research, comprehensive guides, infographics, free tools) that naturally attracts links – this is known as 'link earning'. Guest blog on authoritative, relevant websites in your niche. Use the 'broken link building' technique: find broken external links on other sites and suggest your relevant content as a replacement. Reach out to influencers, journalists, and webmasters for mentions or collaborations. Monitor your backlink profile using tools like Ahrefs or SEMrush to disavow toxic links if necessary. HARO (Help A Reporter Out) can be a good source for quality links.",
    category: 'SEO',
    tags: ['seo', 'link building', 'backlinks', 'off-page', 'domain authority'],
    proTip: "Focus on building topical relevance through your link building efforts. Links from websites that are thematically related to your own industry or niche carry more weight with search engines than links from irrelevant sites. Also, diversify your anchor text naturally; avoid over-optimizing with exact match keywords.",
    interactiveElements: [
      { iconName: 'Edit3', term: 'Guest Blogging', tip: 'Writing articles for other relevant websites in exchange for a backlink and exposure.' },
      { iconName: 'LinkBroken', term: 'Broken Link Building', tip: 'Finding dead links on other sites and offering your content as a replacement.' },
      { iconName: 'Award', term: 'Authoritative Sites', tip: 'Aim for links from websites with high domain authority/rating and good reputations.'},
      { iconName: 'Anchor', term: 'Anchor Text', tip: 'The clickable text of a hyperlink. Strive for natural and varied anchor text.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Link+Building+Tactics',
  },
  {
    id: 'social-media-linkedin-1',
    title: 'LinkedIn B2B Marketing Excellence',
    content: "LinkedIn is the premier platform for B2B marketing. Fully optimize your LinkedIn Company Page with a compelling description, branding, and relevant keywords. Regularly share valuable industry insights, original articles, case studies, and company news. Encourage employees to create professional profiles and act as brand advocates by sharing company content and engaging in relevant discussions. Actively participate in relevant LinkedIn Groups to network and establish expertise. Use LinkedIn Ads for highly targeted B2B campaigns, leveraging its professional demographic data (job titles, industries, company size). Publish native articles directly on LinkedIn to showcase thought leadership.",
    category: 'Social Media',
    tags: ['linkedin', 'b2b', 'social media', 'professional networking', 'lead generation', 'ads'],
    proTip: "Utilize LinkedIn's Sales Navigator (if budget allows) for advanced lead prospecting and outreach. For organic efforts, consistently engage with the posts of your target audience and industry leaders. Personalized connection requests and thoughtful comments can be more effective than generic outreach.",
    interactiveElements: [
      { iconName: 'Building', term: 'Company Page', tip: 'Your brand\'s official presence on LinkedIn. Keep it updated and informative.' },
      { iconName: 'Users', term: 'Employee Advocacy', tip: 'Encourage employees to share company content and engage, expanding your reach.' },
      { iconName: 'Megaphone', term: 'LinkedIn Ads', tip: 'Target professionals by job title, industry, skills, company size, and more.' },
      { iconName: 'Newspaper', term: 'Native Articles', tip: 'Publish long-form content directly on LinkedIn to position yourself as a thought leader.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=LinkedIn+for+B2B',
  },
  {
    id: 'email-marketing-subject-lines-1',
    title: 'Crafting Irresistible Email Subject Lines',
    content: "Your subject line is often the first (and sometimes only) impression your email makes. Keep it concise and clear, ideally under 50 characters for mobile visibility. Use personalization (e.g., recipient's name, location, past purchases) where appropriate. Create a sense of urgency or curiosity to encourage opens (e.g., 'Last Chance:', 'You won't believe...'). A/B test different subject lines relentlessly to see what resonates with your audience. Avoid spam trigger words (e.g., 'free money', '!!!', ALL CAPS) and excessive punctuation. Use emojis sparingly and ensure they render correctly across email clients. Clearly indicate the email's value proposition.",
    category: 'Email Marketing',
    tags: ['email', 'subject lines', 'open rates', 'engagement', 'copywriting', 'a/b testing'],
    proTip: "Use numbers and statistics in your subject lines to make them more specific and credible (e.g., 'Increase your sales by 25% with this tip'). Also, asking a compelling question can pique interest and drive opens. Always preview your subject lines on different devices.",
    interactiveElements: [
      { iconName: 'Sparkles', term: 'Curiosity & Urgency', tip: 'Subject lines that evoke curiosity or a fear of missing out (FOMO) often perform well.' },
      { iconName: 'User', term: 'Personalization', tip: 'Using the recipient\'s name or other relevant data can significantly boost open rates.' },
      { iconName: 'ShieldAlert', term: 'Spam Triggers', tip: 'Avoid words and practices that might land your email in the spam folder (e.g., excessive caps, misleading claims).' },
      { iconName: 'Smile', term: 'Emojis', tip: 'Can help your subject line stand out, but use them relevantly and test their appearance on various clients.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Catchy+Subjects',
  },
  {
    id: 'paid-ads-budget-optimization-1',
    title: 'Strategic Ad Spend & Budget Optimization',
    content: "Efficiently managing your ad spend is crucial for maximizing ROI. Set clear daily or campaign-level budget caps. Monitor ad performance closely across key metrics: Click-Through Rate (CTR), Cost Per Click (CPC), Cost Per Acquisition/Conversion (CPA), and Return On Ad Spend (ROAS). Dynamically allocate more budget to high-performing ad sets, campaigns, or keywords. Pause or thoroughly re-evaluate underperforming ads – don't let them drain your budget. Use ad scheduling to show ads during peak performance times or days. Regularly test different bidding strategies. For e-commerce, ensure your product feed is optimized if running Shopping ads.",
    category: 'Paid Advertising',
    tags: ['ad spend', 'budget', 'roi', 'optimization', 'ppc', 'cpa', 'roas'],
    proTip: "Implement a tiered bidding strategy based on audience temperature. Bid more aggressively for warm audiences (e.g., website retargeting, existing customers) who are more likely to convert, and more conservatively for cold audiences (e.g., interest-based targeting) who are new to your brand. Also, regularly analyze your attribution models.",
    interactiveElements: [
      { iconName: 'Coins', term: 'ROAS (Return On Ad Spend)', tip: 'Measures the revenue generated for every dollar spent on advertising. (Revenue / Ad Cost)' },
      { iconName: 'Target', term: 'CPA (Cost Per Acquisition)', tip: 'How much it costs, on average, to acquire one customer or lead through your ads.' },
      { iconName: 'Clock', term: 'Ad Scheduling', tip: 'Show your ads only during specific times or days of the week when they perform best.' },
      { iconName: 'Sliders', term: 'Budget Allocation', tip: 'Shift budget towards your best-performing campaigns, ad groups, and keywords.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Optimize+Ad+Budget',
  },
  {
    id: 'analytics-conversion-tracking-1',
    title: 'Mastering Conversion Tracking Setup',
    content: "Accurate conversion tracking is fundamental to measuring ad campaign success and website performance. Clearly define what a 'conversion' means for your business (e.g., a sale, a lead form submission, an app download, a newsletter sign-up). Implement tracking pixels/tags from ad platforms (e.g., Meta Pixel, Google Ads Tag, LinkedIn Insight Tag) on your website, typically on 'thank you' pages or via event triggers. For Google Analytics 4, configure key user interactions as conversion events. Test your conversion tracking setup thoroughly to ensure data is being collected accurately. Use UTM parameters consistently for all your marketing campaigns to track their performance in analytics platforms.",
    category: 'Analytics',
    tags: ['conversion tracking', 'pixels', 'tags', 'utm', 'goals', 'measurement'],
    proTip: "Track micro-conversions in addition to macro-conversions. Micro-conversions are smaller steps a user takes on the path to a main conversion (e.g., adding an item to cart, watching a product video, downloading a brochure). Tracking these provides deeper insights into the user journey and helps identify areas for optimization even if users don't complete the primary goal.",
    interactiveElements: [
      { iconName: 'CheckCircle', term: 'Macro Conversions', tip: 'The primary goals of your website/campaign, like a sale or a lead submission.' },
      { iconName: 'MoreHorizontal', term: 'Micro Conversions', tip: 'Smaller actions that indicate user engagement and progress towards a macro conversion.' },
      { iconName: 'Tag', term: 'Tracking Tags/Pixels', tip: 'Code snippets from ad platforms or analytics tools that track user actions on your site.' },
      { iconName: 'Link2', term: 'UTM Parameters', tip: 'Tags added to URLs to track the source, medium, and campaign name of your website traffic.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Track+Conversions',
  },
   {
    id: 'content-marketing-strategy-1',
    title: 'Building a Robust Content Marketing Strategy',
    content: "A content marketing strategy aligns your content creation efforts with business goals. Start by deeply understanding your target audience: their pain points, interests, and where they consume content (buyer personas). Set clear content goals: Are you aiming for brand awareness, lead generation, customer education, or thought leadership? Choose appropriate content formats: blog posts, long-form articles, videos, podcasts, infographics, case studies, white papers, webinars. Create an editorial calendar to plan content themes, topics, keywords, and publishing frequency. Crucially, have a content promotion plan: share across social media, email newsletters, relevant communities, and consider paid promotion. Measure content performance using KPIs like traffic, engagement, leads generated, and conversions.",
    category: 'SEO', // Often overlaps with SEO
    tags: ['content marketing', 'strategy', 'planning', 'seo', 'audience', 'promotion'],
    proTip: "Focus on creating 'pillar content' and 'topic clusters'. Pillar content is a comprehensive piece on a broad topic, which then links out to (and from) multiple 'cluster' pieces that delve into specific subtopics in more detail. This structure helps with SEO, user navigation, and establishing authority on a subject.",
    interactiveElements: [
      { iconName: 'Users', term: 'Target Audience/Personas', tip: 'Detailed profiles of your ideal customers, crucial for creating relevant and engaging content.' },
      { iconName: 'CalendarDays', term: 'Editorial Calendar', tip: 'A schedule that helps in consistent content publishing, topic management, and team coordination.' },
      { iconName: 'Megaphone', term: 'Content Promotion', tip: 'Actively distributing your content through various channels to maximize its reach and impact.' },
      { iconName: 'BookOpen', term: 'Pillar Content', tip: 'A substantial piece of content covering a core topic, acting as a central hub for related subtopics.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Content+Strategy+Hub',
  },
  {
    id: 'social-media-tiktok-1',
    title: 'TikTok Marketing: Explosive Growth Guide',
    content: "TikTok thrives on short, highly engaging video content. Participate actively in trending challenges and use popular sounds/music to increase discoverability. Authenticity and relatability are key; avoid overly polished or corporate content. Use a mix of relevant and trending hashtags. Collaborate with TikTok creators (influencers) who align with your brand. Experiment with TikTok's native ad platform for targeted campaigns. Engage with comments and other creators' content. Consistency is important for algorithm favorability. Analyze your TikTok analytics to understand what resonates with your audience.",
    category: 'Social Media',
    tags: ['tiktok', 'video marketing', 'short-form video', 'trends', 'influencer', 'viral'],
    proTip: "The first 3 seconds of your TikTok video are critical. Hook viewers immediately with something intriguing, visually appealing, or by posing a question. Also, focus on storytelling, even in short formats. Tutorials, behind-the-scenes, and humorous skits perform well.",
    interactiveElements: [
      { iconName: 'TrendingUp', term: 'Trending Challenges/Sounds', tip: 'Participating in trends can expose your content to a much wider audience on TikTok.' },
      { iconName: 'Video', term: 'Short-Form Video', tip: 'TikTok videos are typically 15-60 seconds, though longer formats are available. Keep them snappy!' },
      { iconName: 'Hash', term: 'Hashtag Strategy', tip: 'Use a mix of broad, niche, and trending hashtags to improve discoverability.' },
      { iconName: 'Users', term: 'Creator Collaborations', tip: 'Partnering with TikTok influencers can introduce your brand to their engaged followers.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=TikTok+Growth+Hacks',
  },
  {
    id: 'email-marketing-segmentation-1',
    title: 'Mastering Advanced Email Segmentation',
    content: "Email segmentation involves dividing your email list into smaller, more targeted groups. This allows for highly personalized messaging, leading to better engagement and conversions. Segment based on: Demographics (age, gender, location), Purchase History (past purchases, average order value), Engagement Level (opens, clicks, inactivity), Website Activity (pages visited, content downloaded), Psychographics (interests, lifestyle), Signup Source (e.g., specific lead magnet). Use dynamic content within your emails to tailor sections of the message to different segments automatically. Regularly review and refine your segments.",
    category: 'Email Marketing',
    tags: ['email segmentation', 'personalization', 'targeting', 'dynamic content', 'audience'],
    proTip: "Implement behavioral segmentation triggered by real-time user actions. For example, if a user visits a specific product category page multiple times but doesn't purchase, trigger an automated email sequence related to that category, perhaps offering more information or a small incentive. This level of timeliness and relevance can be extremely effective.",
    interactiveElements: [
      { iconName: 'PieChart', term: 'Demographic Segmentation', tip: 'Grouping subscribers by age, gender, location, income, etc.' },
      { iconName: 'Eye', term: 'Engagement Segmentation', tip: 'Categorizing users by how they interact with your emails (e.g., frequent openers, inactive).' },
      { iconName: 'Shuffle', term: 'Dynamic Content', tip: 'Email sections that change automatically based on the recipient\'s segment or data.' },
      { iconName: 'History', term: 'Purchase History', tip: 'Segmenting based on what and how often customers buy to send relevant offers.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Email+Segmentation+Pro',
  },
  {
    id: 'paid-ads-retargeting-1',
    title: 'High-Conversion Retargeting Campaigns',
    content: "Retargeting (or remarketing) allows you to show ads to people who have previously interacted with your website or app but didn't convert. This is a highly effective strategy as you're reaching an already warm audience. Segment your retargeting audiences based on specific actions or pages visited (e.g., viewed product page, abandoned cart, visited pricing page). Create tailored ad creatives and offers for each segment. Set frequency caps to avoid ad fatigue and annoying users. Exclude users who have already converted. Use retargeting across multiple platforms like Google Ads (Search & Display) and social media (Facebook, Instagram, LinkedIn).",
    category: 'Paid Advertising',
    tags: ['retargeting', 'remarketing', 'ad creatives', 'conversion', 'warm audience', 'pixel'],
    proTip: "Implement time-delayed retargeting sequences. For example, show a general brand awareness ad for 1-3 days after a site visit, then a more specific product ad for days 4-7, and perhaps an offer/discount ad for days 8-14 if they still haven't converted. This gradual approach can be less intrusive and more effective.",
    interactiveElements: [
      { iconName: 'RotateCcw', term: 'Website Visitors', tip: 'The most common retargeting group. Target users who visited your site but didn\'t convert.' },
      { iconName: 'ShoppingCart', term: 'Cart Abandoners', tip: 'A high-intent audience. Remind them of their cart and offer incentives to complete purchase.' },
      { iconName: 'ListFilter', term: 'Audience Segmentation', tip: 'Create different retargeting lists based on user behavior (e.g., visited X page, spent Y time).' },
      { iconName: 'EyeOff', term: 'Frequency Caps', tip: 'Limit how many times a user sees your retargeting ad in a given period to prevent ad fatigue.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Retargeting+Mastery',
  },
  {
    id: 'analytics-funnel-analysis-1',
    title: 'In-Depth Sales Funnel Analysis & Optimization',
    content: "Sales funnel analysis involves tracking and optimizing the customer journey through various stages, typically: Awareness (user discovers your brand), Interest (user engages and learns more), Decision/Consideration (user evaluates options), and Action/Conversion (user makes a purchase or completes a goal). Map out your specific funnel stages. Track conversion rates between each stage using analytics tools like GA4 (Funnel Exploration). Identify bottlenecks or drop-off points where a significant percentage of users leave the funnel. Hypothesize reasons for drop-offs (e.g., confusing navigation, unclear value proposition, technical issues) and A/B test solutions to optimize underperforming stages.",
    category: 'Analytics',
    tags: ['sales funnel', 'customer journey', 'conversion optimization', 'bottleneck', 'aida', 'ga4'],
    proTip: "Segment your funnel analysis. Don't just look at the overall funnel performance; analyze how different traffic sources (e.g., organic search vs. paid social), device types (desktop vs. mobile), or user demographics move through the funnel. This can reveal specific issues affecting particular user groups.",
    interactiveElements: [
      { iconName: 'Filter', term: 'Funnel Stages', tip: 'Typical stages: Awareness, Interest, Consideration, Conversion (AIDA is a common model).' },
      { iconName: 'TrendingDown', term: 'Drop-off Points', tip: 'Identify where users are exiting your funnel to focus optimization efforts.' },
      { iconName: 'Lightbulb', term: 'A/B Testing', tip: 'Test changes to pages or CTAs at bottleneck stages to improve conversion rates.' },
      { iconName: 'Route', term: 'User Journey Mapping', tip: 'Visually outline the steps customers take from first interaction to conversion.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Funnel+Optimization',
  },
  // NEW CHEAT SHEETS START HERE
  {
    id: 'seo-local-seo-1',
    title: 'Mastering Local SEO for Businesses',
    content: "Local SEO helps businesses promote their products and services to local customers. Optimize your Google Business Profile (GBP) completely: accurate NAP (Name, Address, Phone), business hours, categories, services, photos, and posts. Encourage customer reviews on GBP and other local directories. Build local citations (mentions of your NAP on other websites like Yelp, local chamber of commerce). Create location-specific pages on your website if you have multiple branches. Use local keywords in your website content and GBP. Ensure your website is mobile-friendly, as many local searches happen on the go.",
    category: 'SEO',
    tags: ['local seo', 'google business profile', 'gbp', 'citations', 'reviews', 'small business'],
    proTip: "Regularly use Google Posts within your Google Business Profile to share updates, offers, events, and new products. This keeps your profile fresh and engaging, and these posts appear directly in local search results and Maps, increasing visibility.",
    interactiveElements: [
      { iconName: 'MapPin', term: 'Google Business Profile', tip: 'A free tool from Google that helps businesses manage their online presence across Google Search and Maps.' },
      { iconName: 'Star', term: 'Customer Reviews', tip: 'Positive reviews significantly impact local rankings and customer trust. Actively request and respond to them.' },
      { iconName: 'List', term: 'Local Citations', tip: 'Mentions of your business\'s Name, Address, and Phone (NAP) on other websites and directories.' },
      { iconName: 'Building', term: 'Location Pages', tip: 'If you have multiple physical locations, create unique, optimized pages for each on your website.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Local+SEO+Boost',
  },
  {
    id: 'social-media-video-strategy-1',
    title: 'Developing a Winning Video Marketing Strategy',
    content: "Video content is highly engaging and effective across social media. Define your video goals (awareness, education, lead gen, sales). Understand your target audience's preferences for video length and style. Choose platforms wisely (e.g., TikTok/Reels for short-form, YouTube for longer tutorials, LinkedIn for B2B). Plan your video content types: tutorials, product demos, customer testimonials, behind-the-scenes, Q&As, live streams. Invest in decent audio and lighting. Optimize video titles, descriptions, and thumbnails for searchability. Include clear CTAs. Track video performance metrics (views, watch time, engagement, CTR).",
    category: 'Social Media',
    tags: ['video marketing', 'content strategy', 'youtube', 'tiktok', 'reels', 'engagement'],
    proTip: "Add captions or subtitles to all your videos. Many users watch videos with the sound off, especially on mobile or in public places. Captions make your content accessible to a wider audience, including those with hearing impairments, and can improve comprehension and engagement.",
    interactiveElements: [
      { iconName: 'Youtube', term: 'Platform Choice', tip: 'Select platforms where your target audience spends time (e.g., YouTube for how-tos, Instagram for visual stories).' },
      { iconName: 'Clapperboard', term: 'Content Types', tip: 'Vary your video formats: explainers, interviews, user-generated content, live video, etc.' },
      { iconName: 'Captions', term: 'Subtitles/Captions', tip: 'Crucial for accessibility and for users watching with sound off. Improves engagement.' },
      { iconName: 'ThumbsUp', term: 'Call to Action (CTA)', tip: 'Tell viewers what to do next (e.g., subscribe, visit website, comment).'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Video+Strategy+Pro',
  },
  {
    id: 'email-marketing-deliverability-1',
    title: 'Improving Email Deliverability Rates',
    content: "Email deliverability is crucial; if your emails don't reach the inbox, your campaigns fail. Maintain a clean email list: regularly remove inactive subscribers, hard bounces, and spam traps. Use double opt-in for new subscribers to confirm their interest. Authenticate your sending domain with SPF, DKIM, and DMARC records. Avoid using spam trigger words in subject lines and content. Send relevant, engaging content that your subscribers value to maintain a good sender reputation. Monitor your sender score. Make it easy to unsubscribe. Gradually warm up new IP addresses.",
    category: 'Email Marketing',
    tags: ['email deliverability', 'inbox placement', 'spf', 'dkim', 'dmarc', 'sender reputation'],
    proTip: "Monitor your email engagement metrics closely (opens, clicks, bounces, spam complaints). Internet Service Providers (ISPs) use these as indicators of your sending reputation. Low engagement and high complaints can lead to your emails being filtered to spam or blocked entirely. Address issues proactively.",
    interactiveElements: [
      { iconName: 'MailCheck', term: 'SPF, DKIM, DMARC', tip: 'Email authentication protocols that help verify you are a legitimate sender and prevent spoofing.' },
      { iconName: 'UserX', term: 'List Cleaning', tip: 'Regularly removing invalid or unengaged subscribers to improve deliverability and metrics.' },
      { iconName: 'ShieldQuestion', term: 'Sender Reputation', tip: 'A score ISPs assign to senders, influencing whether emails land in the inbox or spam folder.' },
      { iconName: 'Thermometer', term: 'IP Warm-up', tip: 'Gradually increasing send volume from a new IP address to build a positive sender reputation.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Email+Inbox+Success',
  },
  {
    id: 'paid-ads-quality-score-1',
    title: 'Understanding & Improving Google Ads Quality Score',
    content: "Quality Score (QS) is Google's rating of the quality and relevance of your keywords and PPC ads. It's a crucial factor in determining your ad rank and cost per click. QS is influenced by three main components: Expected Click-Through Rate (eCTR), Ad Relevance, and Landing Page Experience. To improve QS: ensure tight keyword-to-ad group-to-ad copy relevance. Write compelling ad copy that matches user intent. Create high-quality, relevant, and fast-loading landing pages. Use ad extensions. Regularly review and refine keywords and ad copy.",
    category: 'Paid Advertising',
    tags: ['quality score', 'google ads', 'ppc', 'ad rank', 'ctr', 'landing page'],
    proTip: "Focus heavily on improving your landing page experience. Ensure your landing page content is highly relevant to the ad copy and keywords, loads quickly (especially on mobile), is easy tonavigate, and provides a clear path to conversion. A poor landing page experience is a common reason for low Quality Scores.",
    interactiveElements: [
      { iconName: 'CheckSquare', term: 'Expected CTR (eCTR)', tip: 'Google\'s prediction of how likely your ad is to be clicked when shown for a keyword.' },
      { iconName: 'FileText', term: 'Ad Relevance', tip: 'How closely your ad copy matches the intent behind a user\'s search query.' },
      { iconName: 'Laptop', term: 'Landing Page Experience', tip: 'How relevant, transparent, and easy-to-navigate your landing page is for users who click your ad.' },
      { iconName: 'ArrowUpRightSquare', term: 'Ad Rank', tip: 'Determines your ad position. Calculated as: Max CPC Bid x Quality Score (+ Ad Extension impact).'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=Quality+Score+Tips',
  },
  {
    id: 'analytics-ab-testing-1',
    title: 'Effective A/B Testing for Marketing Optimization',
    content: "A/B testing (or split testing) is a method of comparing two versions of a webpage, email, or ad against each other to determine which one performs better. Formulate a clear hypothesis (e.g., 'Changing the CTA button color from blue to green will increase clicks by 10%'). Test one variable at a time to isolate its impact. Ensure a sufficient sample size and test duration for statistically significant results. Use A/B testing tools (Google Optimize (sunsetting), Optimizely, VWO, or built-in platform features). Analyze results and implement the winning variation. Continuously iterate and test.",
    category: 'Analytics',
    tags: ['a/b testing', 'split testing', 'conversion optimization', 'cro', 'experimentation', 'data-driven'],
    proTip: "Don't stop at the first statistically significant result if the test duration is short. Run tests long enough to account for variations in user behavior across different days of the week or times of the month. Also, document all your tests, learnings, and outcomes to build a knowledge base for future optimization.",
    interactiveElements: [
      { iconName: 'FlaskConical', term: 'Hypothesis', tip: 'A clear statement about what you believe will happen when you make a specific change.' },
      { iconName: 'Users', term: 'Sample Size', tip: 'The number of users or impressions needed to get statistically reliable test results.' },
      { iconName: 'Replace', term: 'Variable Testing', tip: 'Change only one element at a time (e.g., headline, image, CTA text) between versions A and B.' },
      { iconName: 'Percent', term: 'Statistical Significance', tip: 'Ensures that the observed difference between variations is likely not due to random chance.'}
    ],
    imageUrl: 'https://placehold.co/400x250.png?text=A/B+Testing+Guide',
  }
];
