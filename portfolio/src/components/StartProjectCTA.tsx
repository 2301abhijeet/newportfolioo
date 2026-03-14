import { ArrowRight } from 'lucide-react';

const StartProjectCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
      <a 
        href="https://api.whatsapp.com/send/?phone=919708250314&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-6 px-4 py-2 md:pl-8 md:pr-2 md:py-2 rounded-full border-[2px] border-[#ea580c] hover:bg-[#ea580c]/10 transition-colors backdrop-blur-sm bg-black/50 cursor-pointer w-[280px]"
      >
        <span className="text-[#ea580c] font-bold text-[13px] tracking-widest uppercase">
          START A PROJECT
        </span>
        <div className="w-[42px] h-[42px] rounded-full bg-[#ea580c] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
          <ArrowRight className="text-white w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
        </div>
      </a>
    </div>
  );
};

export default StartProjectCTA;
