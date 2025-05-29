
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl bg-card p-6 md:p-10 rounded-xl shadow-2xl">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to App
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-foreground/90 prose prose-sm md:prose-base max-w-none prose-headings:text-primary prose-strong:text-foreground">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>Welcome to MarkSpark ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our MarkSpark application (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the app.</p>

          <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect via the App includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Usage Data:</strong> We may automatically collect information about your device and how you use the App, such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information. This is standard for many mobile applications.</li>
            <li><strong>Data from In-App Interactions:</strong> We may collect information about your interactions within the App, such as which cheat sheets you view, features you use (e.g., bookmarks, theme preferences), and your interactions with simulated ads or pro tip unlocks. This data is collected to improve App functionality and user experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Improve our App and offerings.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the App.</li>
            <li>Understand which features are popular and how they are used.</li>
            <li>(If ads were real) Display advertisements. Our current app uses simulated ads, but if real ads were implemented via a third-party provider like AdMob, they would collect data as per their own privacy policies.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold">Disclosure of Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our App, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>
          <p>However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
          
          <h2 className="text-2xl font-semibold">Advertising (Simulated)</h2>
          <p>Our App currently features simulated advertisements for demonstration purposes. If we were to implement real advertisements from third-party networks like Google AdMob, these networks might use cookies or other tracking technologies to collect information about your use of our App and other websites to provide you with targeted advertisements. The collection and use of your information by these third-party ad networks would be governed by their respective privacy policies.</p>
          <p>Data Collection Disclaimer for Ads: If real ads are implemented, data will be collected by ad providers to serve personalized ads. This may include device identifiers, IP address, and app usage information. Please refer to the ad provider's privacy policy for more details (e.g., Google AdMob).</p>

          <h2 className="text-2xl font-semibold">Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@markspark.app" className="text-accent hover:underline">support@markspark.app</a> (This is a placeholder email).</p>
        </div>
      </div>
    </div>
  );
}
