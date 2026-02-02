import { Sparkles } from "lucide-react";

const wittyLines = [
  { text: "कहानियाँ जो दिल छू जाएं", lang: "Hindi" }, // Stories that touch hearts
  { text: "కథలు గుండెలు తాకుతాయి", lang: "Telugu" }, // Stories touch hearts
  { text: "कथा म्हणजे जादू", lang: "Marathi" }, // Stories are magic
  { text: "ಕಥೆಗಳು ಮಾಯವನ್ನು ಸೃಷ್ಟಿಸುತ್ತವೆ", lang: "Kannada" }, // Stories create magic
  { text: "கதைகள் மாயம் செய்கின்றன", lang: "Tamil" }, // Stories do magic
  { text: "વાર્તાઓ જાદુઈ છે", lang: "Gujarati" }, // Stories are magical
  { text: "গল্পে জাদু আছে", lang: "Bengali" }, // Stories have magic
  { text: "हर ब्रांड की एक कहानी है", lang: "Hindi" }, // Every brand has a story
  { text: "మీ కథను చెప్పండి", lang: "Telugu" }, // Tell your story
  { text: "ब्रँडची गोष्ट सांगा", lang: "Marathi" }, // Tell the brand's story
];

export default function SocialProofBar() {
  return (
    <section className="bg-walnut text-white py-6 border-y-4 border-walnut overflow-hidden">
      <div className="relative">
        {/* Static scrolling effect with CSS */}
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {[...wittyLines, ...wittyLines, ...wittyLines].map((line, index) => (
            <div key={index} className="flex items-center gap-3 px-4">
              <Sparkles className="w-5 h-5 text-accent2" />
              <span className="font-bold text-lg">{line.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
