// src/pages/HowItWorks.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Droplets,
  Smartphone,
  Receipt,
  Cpu,
  CalendarDays,
} from "lucide-react";

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

/** Steps for the timeline */
const steps = [
  {
    icon: Droplets,
    title: "Save Your Used Oil",
    description:
      "After frying or cooking, let the oil cool and pour it into our provided sealed drum.",
    step: "01",
    anchor: "step-1",
  },
  {
    icon: Cpu,
    title: "Automatic Monitoring",
    description:
      "Real-time sensors track oil levels—no manual checks needed.",
    step: "02",
    anchor: "step-2",
  },
  {
    icon: Smartphone,
    title: "Cloud Dashboard",
    description:
      "You see live updates and collection history anytime, anywhere.",
    step: "03",
    anchor: "step-3",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description:
      "Pickups are triggered at the right time—no overflows or delays.",
    step: "04",
    anchor: "step-4",
  },
  {
    icon: Receipt,
    title: "Transparent Handover",
    description:
      "Our team collects, and you receive a digital weight slip instantly.",
    step: "05",
    anchor: "step-5",
  },
];

const HowItWorks = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 bg-white text-gray-900">
        <section
          id="how-it-works"
          className="relative py-10 sm:py-14 overflow-x-hidden"
        >
          {/* Background accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-xs sm:text-sm bg-blue-100 text-blue-800 border border-blue-200"
              >
                Simple • Transparent • Impactful
              </Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                How It{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
                A clean, compliant way to handle your used cooking oil—end to
                end.
              </p>
            </div>

            {/* Desktop timeline – full width, bigger elements */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-28 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full" />
                <div className="grid grid-cols-5 gap-8 items-stretch">
                  {steps.map((s, i) => (
                    <div
                      key={s.step}
                      id={s.anchor}
                      className="relative flex flex-col h-full [animation:fadeIn_.6s_ease_forwards] opacity-0"
                      style={{ animationDelay: `${i * 140}ms` }}
                    >
                      <div
                        className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-8 shadow-[0_10px_30px_rgba(37,99,235,0.4)] ${GRAD}`}
                      >
                        {s.step}
                      </div>

                      <Card className="flex flex-col h-full min-h-[260px] p-7 text-center backdrop-blur border border-blue-100 hover:border-blue-300/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 rounded-2xl bg-white">
                        <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5 shadow-inner">
                          <s.icon className="h-10 w-10 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {s.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {s.description}
                        </p>
                        <div className="mt-auto" />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile / tablet vertical timeline – big cards full width */}
            <div className="lg:hidden space-y-5 sm:space-y-7">
              {steps.map((s, i) => (
                <Card
                  key={s.step}
                  id={s.anchor}
                  className="p-5 sm:p-6 bg-white/95 backdrop-blur border border-blue-100 rounded-2xl [animation:fadeIn_.5s_ease_forwards] opacity-0"
                  style={{ animationDelay: `${i * 110}ms` }}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-[0_8px_24px_rgba(37,99,235,0.4)] ${GRAD}`}
                      >
                        {s.step}
                      </div>
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                        <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-xl font-semibold mb-1.5 sm:mb-2">
                        {s.title}
                      </h3>
                      <p className="text-[13px] sm:text-base text-gray-600 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* After pickup section – big full-width card */}
            <div className="mt-16 sm:mt-20 flex justify-center">
              <div className="w-full max-w-4xl flex flex-col h-full rounded-2xl border border-blue-200/70 backdrop-blur p-8 sm:p-10 bg-blue-50/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-gray-900">
                  What Happens After Pickup
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Sealed drums are transported to authorized recyclers.",
                    "Full traceability with chain-of-custody records.",
                    "Recyclers perform testing and processing as per regulations.",
                    "You retain receipts and compliance notes for your records.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto" />
              </div>
            </div>
          </div>

          {/* keyframes */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
