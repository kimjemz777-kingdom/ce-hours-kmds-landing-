import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0b0f14] mt-12">
      <div className="max-w-[1120px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted">© {new Date().getFullYear()} KMDSM. All rights reserved.</p>
          <a href="mailto:openloop@kingdommindset.community" className="text-sm text-sky-400 hover:text-sky-300 mt-1 block">
            openloop@kingdommindset.community
          </a>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#program" className="hover:text-white">Program</a>
          <a href="#apply" className="hover:text-white">Apply</a>
          <a href="https://kingdommindsetcommunity.as.me/kmdsm" target="_blank" className="hover:text-white">Book Call</a>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto px-5 mt-8 pt-8 border-t border-white/5">
        <p className="text-[10px] text-muted/50 leading-relaxed text-center max-w-3xl mx-auto">
          Disclaimer: KMDSM provides continuing education and implementation support. It does not provide medical diagnosis or replace professional judgment. We do not guarantee exam outcomes, board status, or clinical results. KMDSM is not affiliated with, endorsed by, or sponsored by any association, credentialing body, or board.
        </p>
      </div>
    </footer>
  );
};