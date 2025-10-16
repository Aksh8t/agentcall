"use client";

import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

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
      <div className="max-w-6xl mx-auto">
        {/* Black section with sparkles */}
        <div className="bg-black flex flex-col items-center justify-center overflow-hidden rounded-3xl py-16 px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20 mb-8">
            Join Waitlist
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        {/* Form section below */}
        <div className="mt-12 text-center">
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
