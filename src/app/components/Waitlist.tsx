"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Implement your actual API endpoint here
    // For now, this is a placeholder that simulates an API call
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Basic email validation
      if (!email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      setStatus("success");
      setMessage("Thanks for joining! Check your email for confirmation.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-foreground/10 rounded-3xl p-8 sm:p-12 text-center">
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Be the first to know when we launch. Get early access and exclusive
            benefits.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-foreground/20 bg-background text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-foreground text-background px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold disabled:opacity-50 whitespace-nowrap"
              >
                {status === "loading" ? "Joining..." : "Join Now"}
              </button>
            </div>

            {/* Status Message */}
            {message && (
              <div
                className={`mt-4 p-4 rounded-xl ${
                  status === "success"
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : "bg-red-500/10 text-red-600 dark:text-red-400"
                }`}
              >
                {message}
              </div>
            )}
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-foreground/60">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              <span className="font-medium">No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span className="font-medium">Early bird benefits</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔔</span>
              <span className="font-medium">Launch updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
