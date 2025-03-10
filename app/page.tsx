export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Eudemonia LLC
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Crafting delightful iPhone experiences
          </p>
        </div>

        {/* About Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Founded by three friends with a passion for creating innovative mobile experiences.
            We specialize in developing thoughtfully designed iPhone applications that make a difference.
          </p>

          {/* Team Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Bobby */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bobby Becker
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Co-founder</p>
            </div>

            {/* Reid */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Reid Wilson
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Co-founder</p>
            </div>

            {/* Jack */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Jack Yonover
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Co-founder</p>
            </div>
          </div>
        </section>

        {/* Our Apps Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Coming Soon
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                SelfHelp AI
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Your personal AI-powered companion for mental wellness and self-improvement.
                Join our waitlist to be among the first to experience a new way of personal growth.
              </p>
              <div className="inline-flex items-center justify-center space-x-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Launching Soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Interested in working with us? Let&apos;s connect.
          </p>
          <a
            href="mailto:bobby@eudemoniallc.com"
            className="inline-block mt-6 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-gray-900 dark:hover:text-white">
                Terms of Service
              </a>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Eudemonia LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
