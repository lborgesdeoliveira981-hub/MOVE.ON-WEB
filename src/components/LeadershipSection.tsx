import React from 'react';
import { Award, Briefcase, Linkedin, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';
import { LEADERSHIP_DATA } from '../data/content';

export const LeadershipSection: React.FC = () => {
  const founder = LEADERSHIP_DATA.find(l => l.isFounder) || LEADERSHIP_DATA[0];
  const otherLeaders = LEADERSHIP_DATA.filter(l => !l.isFounder);

  return (
    <section id="lideranca" className="py-16 bg-[#070B14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              06. Liderança Executiva
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Liderança sênior com autoridade em grandes transformações.
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
              Mais de 20 anos de experiência em tecnologia, processos e governança corporativa.
            </p>
          </div>

          {/* Social Channels Link */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <a
              href="https://www.instagram.com/moveonconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-2 transition-colors group"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>@moveonconsulting</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Founder Spotlight Card (High-Impact Editorial Split) */}
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Portrait Image */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[460px] bg-slate-900">
              <img
                src={founder.image}
                alt={founder.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1220] hidden lg:block" />
              
              {/* Seniority badge on photo */}
              <div className="absolute top-4 left-4 p-2 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-mono text-cyan-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>{founder.experienceYears} de Experiência</span>
              </div>
            </div>

            {/* Founder Biography & Details */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                      Fundador & Liderança Estratégica
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-400">
                      {founder.role}
                    </p>
                  </div>

                  <a
                    href="https://www.linkedin.com/company/moveon-consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    aria-label="LinkedIn da MOVE.ON Consulting"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Specialties / Core Pillars */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Áreas de Atuação & Domínio Executivo
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {founder.expertise.map((exp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                        <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Endorsement Note */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Especialista em Metodologia BTO & Ecossistema SAP</span>
                <span className="text-slate-500 font-mono">São Paulo · Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherLeaders.map((leader) => (
            <div
              key={leader.id}
              className="p-6 rounded-2xl glass-panel border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-mono font-semibold text-cyan-400">
                    {leader.experienceYears} no Mercado Corporativo
                  </div>
                  <div className="p-2 rounded-lg bg-blue-950/60 text-cyan-400 border border-blue-500/20">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {leader.name}
                </h4>
                <div className="text-xs font-semibold text-slate-400 mb-3">
                  {leader.role}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {leader.bio}
                </p>

                <div className="space-y-1.5 mb-4">
                  {leader.expertise.map((item, idx) => (
                    <div key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500">
                Governança e Metodologia Integrada BTO
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
