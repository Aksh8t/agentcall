export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
            <span className="text-sm font-medium text-foreground/80">
              🚀 Launching Soon
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              With Our SaaS
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
            Streamline your workflow, boost productivity, and scale your
            business with our powerful all-in-one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist"
              className="bg-foreground text-background px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-lg w-full sm:w-auto"
            >
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full hover:border-foreground/40 transition-colors font-semibold text-lg w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-foreground/60">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-medium">10,000+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-medium">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
