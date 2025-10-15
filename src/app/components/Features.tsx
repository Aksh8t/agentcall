export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description:
        "Your data is protected with enterprise-grade security and end-to-end encryption.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description:
        "Intuitive and modern interface designed for the best user experience.",
    },
    {
      icon: "🔄",
      title: "Auto Sync",
      description:
        "Seamlessly sync your data across all devices in real-time.",
    },
    {
      icon: "📊",
      title: "Analytics",
      description:
        "Get deep insights with powerful analytics and reporting tools.",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description:
        "Work together effortlessly with built-in collaboration features.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to succeed, all in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl border border-foreground/10 hover:border-foreground/20 transition-all hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
