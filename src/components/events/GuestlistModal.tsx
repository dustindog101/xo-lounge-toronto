"use client";

import { Check, Sparkles, X } from "lucide-react";
import { useState } from "react";

interface GuestlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
  language: "en" | "am";
}

export default function GuestlistModal({
  isOpen,
  onClose,
  eventTitle = "Weekend Night",
  language,
}: GuestlistModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#0f1118] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#151824] text-[#9ca3af] hover:text-white hover:bg-[#1c2030] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white">You're on the Guestlist!</h3>

            <p className="text-xs sm:text-sm text-[#9ca3af] max-w-sm mx-auto">
              Confirmed for <strong className="text-white">{fullName}</strong> (+{guests - 1}{" "}
              guests) for {eventTitle}.
            </p>

            <div className="p-4 rounded-xl bg-[#151824] border border-white/10 text-xs text-[#d8b4fe] space-y-1 text-left">
              <div>
                • <strong>Arrival Window:</strong> Free entry before 11:00 PM.
              </div>
              <div>
                • <strong>Location:</strong> 364 Queen St East, Toronto.
              </div>
              <div>
                • <strong>Dress Code:</strong> Upscale Nightlife Chic. 19+ physical ID mandatory.
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white text-xs font-bold shadow-lg"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-mono text-[#a855f7] uppercase tracking-wider font-bold block mb-1">
                FREE ENTRY BEFORE 11:00 PM
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {language === "en" ? "Join Weekend Guestlist" : "የእንግዳ ዝርዝር ውስጥ ይመዝገቡ"}
              </h3>
              <p className="text-xs text-[#9ca3af] mt-1">
                {eventTitle
                  ? `Registering for: ${eventTitle}`
                  : "Sign up for quick priority door entry."}
              </p>
            </div>

            <div>
              <label
                htmlFor="gl-fullname"
                className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase"
              >
                Full Name *
              </label>
              <input
                id="gl-fullname"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Jordan Miller"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="gl-phone"
                  className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase"
                >
                  Mobile Phone *
                </label>
                <input
                  id="gl-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (437) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="gl-guests"
                  className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase"
                >
                  Total Guests
                </label>
                <select
                  id="gl-guests"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
                >
                  <option value={1}>1 Person (Just me)</option>
                  <option value={2}>2 People (+1)</option>
                  <option value={3}>3 People (+2)</option>
                  <option value={4}>4 People (+3)</option>
                  <option value={5}>5 People (+4)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="gl-date"
                className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase"
              >
                Select Date *
              </label>
              <input
                id="gl-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#c026d3] to-[#f43f5e] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#a855f7]/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Guestlist Pass</span>
              </button>
            </div>

            <div className="text-[11px] text-[#6b7280] text-center">
              Guestlist subject to venue capacity. Arrive early to guarantee entry.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
