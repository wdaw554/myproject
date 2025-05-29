import type { CheatSheet } from '@/types';

// This is a placeholder. In a real scenario, this data would be more extensive
// and potentially fetched or generated. For MVP, we use a static list.
// The content below is illustrative and would be generated using the AI flows.

export const CHEAT_SHEETS_DATA: CheatSheet[] = [
  {
    id: 'seo-basics-1',
    title: 'SEO Basics: Keyword Research',
    content: "Keyword research is the foundation of SEO. Identify terms your audience uses to find services/products like yours. Use tools like Google Keyword Planner, Ahrefs, or SEMrush. Focus on search intent: informational, navigational, transactional, commercial.",
    category: 'SEO',
    tags: ['seo', 'keywords', 'research', 'beginner'],
    proTip: "Long-tail keywords (3+ words) often have lower competition and higher conversion rates. Target them!",
    interactiveElements: [
      { iconName: 'Search', term: 'Keyword Planner', tip: 'Google Keyword Planner is a free tool to discover new keywords and see their search volume.' },
      { iconName: 'Target', term: 'Search Intent', tip: 'Understanding user intent helps create relevant content that ranks higher.' },
    ],
  },
  {
    id: 'social-media-engagement-1',
    title: 'Boost Instagram Engagement',
    content: "Engage your audience on Instagram by using stories, reels, and interactive stickers (polls, quizzes). Respond to comments and DMs promptly. Run contests and giveaways. Collaborate with influencers in your niche.",
    category: 'Social Media',
    tags: ['instagram', 'social media', 'engagement', 'marketing'],
    proTip: "Use user-generated content (UGC) to build trust and community. Encourage followers to share photos with your product using a specific hashtag.",
    interactiveElements: [
      { iconName: 'Instagram', term: 'Reels', tip: 'Instagram Reels are short-form videos that can significantly boost visibility and engagement.' },
      { iconName: 'Users', term: 'Influencers', tip: 'Micro-influencers can be more cost-effective and have a highly engaged niche audience.' },
    ],
  },
  {
    id: 'email-marketing-list-building-1',
    title: 'Effective Email List Building',
    content: "Grow your email list by offering valuable lead magnets (e.g., ebooks, checklists, webinars). Use clear call-to-actions (CTAs) on your website. Implement exit-intent popups. Ensure GDPR/CAN-SPAM compliance.",
    category: 'Email Marketing',
    tags: ['email', 'list building', 'leads', 'marketing'],
    proTip: "Segment your email list based on user behavior or demographics to send more targeted and effective campaigns.",
    interactiveElements: [
      { iconName: 'Magnet', term: 'Lead Magnets', tip: 'A lead magnet is a free resource offered in exchange for contact information.' },
      { iconName: 'MousePointerClick', term: 'CTAs', tip: 'A Call-To-Action prompts the user to take a specific action, like signing up for a newsletter.' },
    ],
  },
  {
    id: 'paid-ads-google-1',
    title: 'Google Ads Campaign Setup',
    content: "Define campaign goals (awareness, leads, sales). Choose the right campaign type (Search, Display, Video). Set a budget and bidding strategy. Write compelling ad copy and use relevant keywords. Monitor and optimize regularly.",
    category: 'Paid Advertising',
    tags: ['google ads', 'ppc', 'paid search', 'advertising'],
    proTip: "Use negative keywords to prevent your ads from showing for irrelevant searches, saving budget and improving CTR.",
  },
  {
    id: 'analytics-ga4-basics-1',
    title: 'Google Analytics 4: Core Metrics',
    content: "Understand key GA4 metrics: Users, Sessions, Engagement Rate, Conversions. Set up event tracking for important user actions. Analyze traffic sources to understand where your users come from. Use reports to make data-driven decisions.",
    category: 'Analytics',
    tags: ['ga4', 'google analytics', 'data', 'metrics', 'reporting'],
    proTip: "Create custom audiences in GA4 to retarget specific user segments or analyze their behavior more deeply.",
  },
  // Add 15-20 more diverse cheat sheets
  {
    id: 'seo-onpage-1',
    title: 'On-Page SEO Checklist',
    content: "Optimize title tags, meta descriptions, header tags (H1-H6). Use keywords naturally in content. Optimize images with alt text. Ensure fast page load speed. Internal linking to relevant pages.",
    category: 'SEO',
    tags: ['seo', 'on-page', 'optimization', 'website'],
    proTip: "Ensure your website is mobile-friendly, as Google uses mobile-first indexing."
  },
  {
    id: 'social-media-content-calendar-1',
    title: 'Content Calendar for Social Media',
    content: "Plan your social media posts in advance. Identify key themes and topics. Schedule posts for optimal times. Use tools like Buffer, Hootsuite, or Sprout Social. Mix content types (text, image, video).",
    category: 'Social Media',
    tags: ['social media', 'content strategy', 'planning', 'schedule'],
    proTip: "Analyze your social media performance to understand what content resonates most with your audience and adjust your calendar accordingly."
  },
  {
    id: 'email-marketing-automation-1',
    title: 'Email Automation Workflows',
    content: "Set up welcome email series for new subscribers. Create abandoned cart recovery emails. Send birthday/anniversary emails. Nurture leads with drip campaigns based on their interests.",
    category: 'Email Marketing',
    tags: ['email', 'automation', 'workflows', 'drip campaign'],
    proTip: "Personalize automated emails using subscriber data (name, purchase history) to increase engagement."
  },
  {
    id: 'paid-ads-facebook-1',
    title: 'Facebook Ads Targeting',
    content: "Utilize Facebook's diverse targeting options: demographics, interests, behaviors. Create custom audiences from your website visitors or customer lists. Use lookalike audiences to find new potential customers.",
    category: 'Paid Advertising',
    tags: ['facebook ads', 'social ads', 'targeting', 'custom audience'],
    proTip: "Regularly test different ad creatives and targeting parameters to optimize your Facebook Ad campaigns for better ROI."
  },
  {
    id: 'analytics-kpi-1',
    title: 'Key Performance Indicators (KPIs)',
    content: "Identify KPIs relevant to your business goals (e.g., conversion rate, customer acquisition cost, lifetime value). Track KPIs consistently. Use dashboards to visualize KPI trends. Regularly review KPIs to measure progress.",
    category: 'Analytics',
    tags: ['kpi', 'metrics', 'business goals', 'performance'],
    proTip: "Don't just track KPIs; set realistic targets for them and develop strategies to achieve those targets."
  },
  {
    id: 'seo-link-building-1',
    title: 'Effective Link Building Strategies',
    content: "Create high-quality, shareable content. Guest blog on authoritative sites in your niche. Broken link building. Reach out to influencers and webmasters for mentions. Monitor your backlink profile.",
    category: 'SEO',
    tags: ['seo', 'link building', 'backlinks', 'off-page'],
    proTip: "Focus on acquiring high-quality, relevant links from reputable sources rather than a large quantity of low-quality links."
  },
  {
    id: 'social-media-linkedin-1',
    title: 'LinkedIn Marketing for B2B',
    content: "Optimize your LinkedIn company page. Share valuable industry insights and articles. Engage with relevant groups. Encourage employees to be brand advocates. Use LinkedIn Ads for targeted B2B campaigns.",
    category: 'Social Media',
    tags: ['linkedin', 'b2b', 'social media', 'professional networking'],
    proTip: "Publish native articles on LinkedIn to establish thought leadership and reach a wider audience."
  },
  {
    id: 'email-marketing-subject-lines-1',
    title: 'Crafting Compelling Subject Lines',
    content: "Keep subject lines concise and clear. Use personalization. Create a sense of urgency or curiosity. A/B test different subject lines. Avoid spam trigger words. Use emojis sparingly and appropriately.",
    category: 'Email Marketing',
    tags: ['email', 'subject lines', 'open rates', 'engagement'],
    proTip: "Analyze your email open rates for different subject line styles to understand what works best for your audience."
  },
  {
    id: 'paid-ads-budget-optimization-1',
    title: 'Optimizing Ad Spend',
    content: "Set clear budget caps for campaigns. Monitor ad performance closely (CTR, CPC, CPA). Allocate more budget to high-performing ads and campaigns. Pause or adjust underperforming ads. Use ad scheduling for optimal timing.",
    category: 'Paid Advertising',
    tags: ['ad spend', 'budget', 'roi', 'optimization', 'ppc'],
    proTip: "Use automated bidding strategies offered by ad platforms but monitor them closely to ensure they align with your goals."
  },
  {
    id: 'analytics-conversion-tracking-1',
    title: 'Setting Up Conversion Tracking',
    content: "Define what a conversion means for your business (e.g., sale, lead, sign-up). Implement tracking pixels/tags (e.g., Google Ads tag, Facebook Pixel). Test your conversion tracking setup thoroughly. Use UTM parameters for campaign tracking.",
    category: 'Analytics',
    tags: ['conversion tracking', 'pixels', 'tags', 'utm', 'goals'],
    proTip: "Track micro-conversions (e.g., adding to cart, video views) to understand the user journey better, even if they don't complete a macro-conversion."
  },
   {
    id: 'content-marketing-strategy-1',
    title: 'Developing a Content Marketing Strategy',
    content: "Define your target audience and their needs. Set clear content goals (e.g., brand awareness, lead generation). Choose appropriate content formats (blog posts, videos, infographics). Create an editorial calendar. Promote your content across multiple channels.",
    category: 'SEO', // Often overlaps with SEO
    tags: ['content marketing', 'strategy', 'planning', 'seo'],
    proTip: "Repurpose your existing content into different formats (e.g., a blog post into a video or infographic) to maximize its reach and value.",
    interactiveElements: [
      { iconName: 'Users', term: 'Target Audience', tip: 'Understanding your audience personas is crucial for creating relevant content.' },
      { iconName: 'CalendarDays', term: 'Editorial Calendar', tip: 'Helps in consistent content publishing and managing topics.' },
    ],
  },
  {
    id: 'social-media-tiktok-1',
    title: 'TikTok Marketing Quick Guide',
    content: "Focus on short, engaging video content. Participate in trending challenges and use popular sounds. Be authentic and relatable. Use relevant hashtags to increase discoverability. Collaborate with TikTok creators.",
    category: 'Social Media',
    tags: ['tiktok', 'video marketing', 'short-form video', 'trends'],
    proTip: "Experiment with TikTok's built-in editing tools and effects to make your videos more visually appealing and engaging.",
  },
  {
    id: 'email-marketing-segmentation-1',
    title: 'Advanced Email Segmentation',
    content: "Segment your audience based on demographics, purchase history, engagement level, website activity, or psychographics. Tailor email content and offers to each segment. Use dynamic content to personalize emails at scale.",
    category: 'Email Marketing',
    tags: ['email segmentation', 'personalization', 'targeting', 'dynamic content'],
    proTip: "Start with simple segmentation (e.g., new subscribers vs. loyal customers) and gradually implement more complex segments as you gather more data.",
  },
  {
    id: 'paid-ads-retargeting-1',
    title: 'Effective Retargeting Campaigns',
    content: "Retarget website visitors who didn't convert. Segment retargeting audiences based on pages visited or actions taken. Create specific ad creatives for retargeting campaigns. Set frequency caps to avoid ad fatigue.",
    category: 'Paid Advertising',
    tags: ['retargeting', 'remarketing', 'ad creatives', 'conversion'],
    proTip: "Offer a special discount or incentive in your retargeting ads to encourage users to complete their purchase or desired action.",
  },
  {
    id: 'analytics-funnel-analysis-1',
    title: 'Sales Funnel Analysis',
    content: "Map out your customer journey and sales funnel stages (Awareness, Interest, Decision, Action). Track conversion rates between each stage. Identify bottlenecks where users drop off. Optimize underperforming stages of the funnel.",
    category: 'Analytics',
    tags: ['sales funnel', 'customer journey', 'conversion optimization', 'bottleneck'],
    proTip: "Use GA4's funnel exploration reports to visualize and analyze user progression through defined steps on your website.",
  }
];
