import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/WaitlistModal";
import { Clock, Shield, Star, Settings, FileText, ClipboardList, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import offerReadyLogo from "@/assets/offer-ready-logo.png";

const AnimatedSection = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src={offerReadyLogo} alt="Offer Ready" className="h-10" />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Join the Waitlist</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-light/50 to-background" />
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl font-heading">
              Pre-Approval Letters & Loan Estimates.{" "}
              <span className="text-accent">Done in Minutes.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Built for loan officers who want their time back.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
              Offer Ready is a modern platform that helps loan officers generate
              compliant loan estimates and pre-approval letters on the go—while
              staying fully in control.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="rounded-lg bg-secondary px-6 py-4 text-center">
                <p className="text-base font-medium text-foreground md:text-lg">
                  Your Realtors move faster. Your clients feel confident.{" "}
                  <span className="text-primary">You get your evenings back.</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-8 text-lg"
            >
              Join the Waitlist
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Offer Ready Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl font-heading">
              Why Offer Ready
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Save Time */}
            <AnimatedSection delay={100}>
              <div className="rounded-xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md h-full">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-heading">Save Time</h3>
                <p className="mt-3 text-muted-foreground">
                  Create loan estimates and pre-approval letters in minutes on the
                  go. No more late-night fire drills or constant back-and-forth.
                </p>
              </div>
            </AnimatedSection>

            {/* Stay in Control */}
            <AnimatedSection delay={200}>
              <div className="rounded-xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md h-full">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  Stay in Control
                </h3>
                <p className="mt-3 text-muted-foreground">
                  You set the guardrails. Every letter is branded, compliant, and
                  logged—so nothing goes out without your parameters.
                </p>
              </div>
            </AnimatedSection>

            {/* Serve Better */}
            <AnimatedSection delay={300}>
              <div className="rounded-xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md h-full">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Star className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  Serve Better
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Give Realtors and clients instant confidence and responsiveness,
                  without being on call 24/7.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Built for Modern Loan Officer Section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl font-heading">
              Built for the Modern Loan Officer
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/90">
              Offer Ready is designed for loan officers who are juggling production,
              partnerships, and real life—and want smarter systems that work as hard
              as they do.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-foreground/80">
              Whether you're a top producer, team leader, or growing your business
              while raising a family, Offer Ready helps you scale your impact without
              sacrificing your time.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-8 text-lg"
            >
              Join the Waitlist
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl font-heading">
              How It Works
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <AnimatedSection delay={100}>
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground font-heading">
                  1
                </div>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  You set the rules
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Define loan limits, purchase price ranges, and expiration dates.
                </p>
              </div>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection delay={200}>
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground font-heading">
                  2
                </div>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  Letters are generated instantly
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Loan estimates and pre-approval letters are created on
                  demand—fully branded and compliant.
                </p>
              </div>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection delay={300}>
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground font-heading">
                  3
                </div>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                  <ClipboardList className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  Everything stays organized
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Every action is logged with a clear audit trail, so you're always
                  protected.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Built by Loan Officers Section */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl font-heading">
              Built by Loan Officers. Powered by Real Life.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Offer Ready was created by top-producing loan officers and working moms
              who understand the pressure of always being "on." We built the platform
              we wished existed—one that brings speed, simplicity, and balance back
              into the mortgage process.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-primary">
              Because success shouldn't come at the expense of your time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon / CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl font-heading">
              Coming Soon
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We're launching soon and inviting a limited number of loan officers to
              join our founding group.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-8 max-w-md rounded-xl border bg-card p-8 shadow-sm">
              <p className="mb-4 font-medium text-foreground">
                Join the waitlist to receive:
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Early access to the platform
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">Founder pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Product updates and launch details
                  </span>
                </li>
              </ul>
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="mt-6 w-full text-lg"
              >
                Get Early Access
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <img src={offerReadyLogo} alt="Offer Ready" className="mx-auto h-12 mb-4" />
            <p className="text-2xl font-bold text-primary font-heading">Be Offer Ready.</p>
            <p className="mt-4 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Offer Ready. All rights reserved.
            </p>
          </AnimatedSection>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;
