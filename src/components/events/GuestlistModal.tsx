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
      <div className="bg-[#0f1117] border border-white/15 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md bg-[#141620] text-[#a1a1aa] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
              Guestlist Registration Confirmed
            </h3>

            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-sm mx-auto">
              Registration received for <strong className="text-white">{fullName}</strong> (+
              {guests - 1} guests) for {eventTitle}.
            </p>

            <div className="p-4 rounded-lg bg-[#12141c] border border-white/10 text-xs text-[#d4d4d8] space-y-1.5 text-left">
              <div>
                • <strong className="text-white">Arrival Courtesy:</strong> Reduced or complimentary
                admission before 11:00 PM.
              </div>
              <div>
                • <strong className="text-white">Address:</strong> 364 Queen St East, Toronto (near
                Parliament).
              </div>
              <div>
                • <strong className="text-white">Etiquette:</strong> Upscale Evening Attire. 19+
                physical ID mandatory at the door.
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full min-h-[44px] py-3 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] text-xs font-semibold uppercase tracking-[0.15em] shadow-md transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest font-bold block mb-1">
                COMPLIMENTARY ADMISSION BEFORE 11:00 PM
              </span>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                {language === "en" ? "Join Weekend Guestlist" : "የእንግዳ ዝርዝር ውስጥ ይመዝገቡ"}
              </h3>
              <p className="text-xs text-[#a1a1aa] mt-1">
                {eventTitle
                  ? `Registering for: ${eventTitle}`
                  : "Register for priority door reception."}
              </p>
            </div>

            <div>
              <label
                htmlFor="gl-fullname"
                className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
              >
                Full Name *
              </label>
              <input
                id="gl-fullname"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Marcus Vance"
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="gl-phone"
                  className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
                >
                  Phone Number *
                </label>
                <input
                  id="gl-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (437) 000-0000"
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="gl-guests"
                  className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
                >
                  Party Size
                </label>
                <select
                  id="gl-guests"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
                >
                  <option value={1}>1 Guest (Just me)</option>
                  <option value={2}>2 Guests (+1)</option>
                  <option value={3}>3 Guests (+2)</option>
                  <option value={4}>4 Guests (+3)</option>
                  <option value={5}>5 Guests (+4)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="gl-date"
                className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
              >
                Date of Visit *
              </label>
              <input
                id="gl-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] font-semibold text-xs uppercase tracking-[0.15em] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Guestlist Pass</span>
              </button>
            </div>

            <div className="text-[11px] text-[#71717a] text-center">
              Guestlist admission is subject to venue capacity. Early arrival is highly recommended.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
