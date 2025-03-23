import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using the Self Help AI mobile application ("App") and related services provided by Eudemonia LLC, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Subscription Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Self Help AI is a subscription-based service with the following terms:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-300">
              <li>Free Trial Period: New users are eligible for a 3-day free trial</li>
              <li>Subscription Cost: $5.99 USD per week</li>
              <li>Billing Cycle: Weekly, automatically renewed unless cancelled</li>
              <li>Payment will be charged to your iTunes Account at confirmation of purchase</li>
              <li>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period</li>
              <li>Account will be charged for renewal within 24-hours prior to the end of the current period</li>
              <li>You can manage and cancel your subscription through your iTunes Account Settings</li>
              <li>No refund for unused portion of the term if cancelled during active subscription period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              With an active subscription, you are granted a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-300">
              <li>Access and use the Self Help AI app for personal use</li>
              <li>Store and process personal data in accordance with our Privacy Policy</li>
              <li>Receive automatic updates and improvements to the service</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-300">
              <li>Modify, adapt, or hack the App or modify any other website to falsely imply association with Self Help AI</li>
              <li>Use the App for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained in the App</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer your account or subscription to another person</li>
              <li>Use the App in any way that violates applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. User Responsibilities and Conduct
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              As a user of Self Help AI, you agree to:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-300">
              <li>Provide accurate and complete information when using the App</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not share your account or subscription with others</li>
              <li>Use the App responsibly and in accordance with these terms</li>
              <li>Not use the App for emergency mental health situations</li>
              <li>Not engage in any activity that could harm, disable, or impair the App's functionality</li>
              <li>Report any security vulnerabilities or violations you discover</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Age Restrictions and Parental Consent
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The App is intended for users who are 18 years of age or older. Users under 18 must have parental or legal guardian consent to use the App. Parents or legal guardians who consent to their minor's use of the App are responsible for monitoring their use and ensuring compliance with these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Eudemonia LLC or its licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Data Usage and Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By using Self Help AI, you agree to our data collection and usage practices as outlined in our Privacy Policy. We collect and process personal data to provide and improve our services, including but not limited to user preferences, usage patterns, and interaction data. Your data is handled in accordance with our Privacy Policy and applicable data protection laws.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              You retain ownership of any content you provide through the App. By submitting content, you grant Eudemonia LLC a worldwide, non-exclusive, royalty-free license to use, copy, modify, and distribute such content for the purpose of providing and improving our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to suspend or terminate your access to the App at any time, without prior notice or liability, for any reason, including without limitation if you breach these Terms of Service. Upon termination, your right to use the App will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Emergency Services Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Self Help AI is not an emergency service. If you are experiencing thoughts of self-harm, suicide, or require immediate medical attention, please contact emergency services immediately:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-300">
              <li>Emergency Services: 911 (United States)</li>
              <li>National Suicide Prevention Lifeline: 988 or 1-800-273-8255</li>
              <li>Crisis Text Line: Text HOME to 741741</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Indemnification
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You agree to indemnify, defend, and hold harmless Eudemonia LLC, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms of Service or any activity related to your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be exclusively brought in the federal or state courts located in California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify these terms at any time. We will notify users of any material changes through the App or via email. Continued use of the App after such modifications constitutes acceptance of the updated terms. It is your responsibility to review these Terms periodically for changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms of Service or the App, please contact us at:{" "}
              <a href="mailto:bobby@eudemoniallc.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                bobby@eudemoniallc.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 