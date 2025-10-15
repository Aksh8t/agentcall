export default function AboveFooter() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We're committed to helping you achieve your goals
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats */}
          <div className="space-y-8">
            <div className="bg-background p-6 rounded-2xl border border-foreground/10">
              <div className="text-5xl font-bold text-foreground mb-2">
                10,000+
              </div>
              <p className="text-foreground/70 text-lg">Active Users</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-foreground/10">
              <div className="text-5xl font-bold text-foreground mb-2">
                99.9%
              </div>
              <p className="text-foreground/70 text-lg">Uptime Guarantee</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-foreground/10">
              <div className="text-5xl font-bold text-foreground mb-2">24/7</div>
              <p className="text-foreground/70 text-lg">Customer Support</p>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Built for the Future
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our platform is designed with cutting-edge technology to ensure
              scalability, reliability, and performance. We continuously
              innovate to stay ahead of the curve.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you're a startup or an enterprise, our solution adapts to
              your needs and grows with your business. Join thousands of
              satisfied customers who trust us every day.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-foreground/80">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Easy Setup</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
