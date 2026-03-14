import { useState, useEffect } from 'react';

const HeaderInfo = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  const currentMonthYear = new Date().toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  }).toUpperCase();

  return (
    <div className="fixed top-6 right-[6.5rem] md:right-[7.5rem] z-50 hidden lg:flex items-center space-x-8 text-white font-sans pointer-events-auto">
      {/* Availability Block */}
      <div className="flex flex-col items-end">
        <div className="flex items-center space-x-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34a853] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34a853]"></span>
          </span>
          <span className="text-[11px] font-bold tracking-widest text-[#f5f5f5]">AVAILABLE FOR PROJECT</span>
        </div>
        <span className="text-[11px] text-[#ababab] tracking-wider font-semibold mt-0.5">{currentMonthYear}</span>
      </div>

      {/* Time Block */}
      <div className="flex flex-col items-end">
        <span className="text-[11px] font-bold tracking-widest text-[#f5f5f5]">{formatTime(time)}</span>
        <span className="text-[11px] text-[#ababab] tracking-wider font-semibold mt-0.5">(IST — Delhi)</span>
      </div>

      {/* CTA Button */}
      <a 
        href="https://api.whatsapp.com/send/?phone=919708250314&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2.5 rounded-full border border-white/20 text-[11px] font-bold tracking-widest text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md bg-black/40"
      >
        LET'S TALK
      </a>
    </div>
  );
};

export default HeaderInfo;
