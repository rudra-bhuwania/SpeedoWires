import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

interface VerificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationDrawer: React.FC<VerificationDrawerProps> = ({ isOpen, onClose }) => {
  const [checklist, setChecklist] = useState([
    {
      id: 'brand-relationship',
      title: 'Brand vs Legal Entity Name Confirmation',
      description: 'The public website brand is "Speedo Wires", while the printed leaflet references "Maruti Udyog" (# 5-35/275/A, Plot No.11, Shaktipuram, Kukatpally, Hyderabad). Confirm if Maruti Udyog is the parent/manufacturing entity or registered trade licensee.',
      status: 'pending',
      action: 'Confirm entity relationship'
    },
    {
      id: 'contact-details',
      title: 'Official Contact Phone (+91 85000 00077) & Email',
      description: 'Phone direct line confirmed as +91 85000 00077. Email marutifans@yahoo.co.in is active, awaiting user update regarding new corporate email IDs.',
      status: 'verified',
      action: 'Phone confirmed (+91 85000 00077)'
    },
    {
      id: 'logo-asset',
      title: 'Official Red Speedo Logo Asset Integration',
      description: 'The exact uploaded original red logo asset (speedo-logo-red_e1b59f0d.png) is integrated without recreation, recoloring or modification.',
      status: 'verified',
      action: 'Exact asset in use'
    },
    {
      id: 'certifications',
      title: 'ISO 9001:2019 & BIS License Number Documentation',
      description: 'Leaflet states ISO 9001:2019 and BIS licensed. Exact certificate registration numbers and validity periods should be confirmed before publishing official certificate downloads.',
      status: 'pending',
      action: 'Provide certificate files'
    },
    {
      id: 'capacity',
      title: '10 Million Cords / Year Capacity Claim',
      description: 'Leaflet explicitly claims installed capacity of up to 10 million plug cords per annum with in-house drawing, annealing, and PVC compounding.',
      status: 'verified',
      action: 'Verified against leaflet'
    },
    {
      id: 'standards',
      title: 'Applicable Standards: IS 1293 & IS 694',
      description: 'Plug cords mapped to IS 1293 (up to 250V); PVC insulated wires and cables mapped to IS 694 (up to 1100V).',
      status: 'verified',
      action: 'Verified against standards'
    },
    {
      id: 'product-specs',
      title: 'Product-Specific Technical Datasheets',
      description: 'Six core product lines configured (2-Pin Cords, 3-Pin Cords, PVC Wire, PVC Cable, Angled Cord, Custom Solutions). Public specs reflect confirmed values; unknown fields omitted.',
      status: 'verified',
      action: 'Schema configured'
    },
    {
      id: 'crm-backend',
      title: 'Quotation Form Submission Destination',
      description: 'Currently running safe client-side logging and copy-to-clipboard simulation. Wire to company SMTP server, Webhook, or Cloud Firestore when live credentials provided.',
      status: 'pending',
      action: 'Configure live webhook'
    }
  ]);

  if (!isOpen) return null;

  const toggleStatus = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'verified' ? 'pending' : 'verified',
            }
          : item
      )
    );
  };

  const verifiedCount = checklist.filter((i) => i.status === 'verified').length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="verification-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end"
    >
      <div
        className="w-full max-w-lg bg-[#11161C] border-l border-white/10 text-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-[#161C24] border-b border-white/10 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#E31B23]" />
            <div>
              <h2 id="verification-drawer-title" className="text-base font-bold text-white">
                Business Verification Checklist
              </h2>
              <p className="text-[11px] text-slate-400">
                Audited against Prompt Section 14 (Claims &amp; Entity Integrity)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close verification drawer"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status progress bar */}
        <div className="px-6 py-3 bg-[#0A0D12] border-b border-white/5 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">
            Readiness Status: <strong className="text-white">{verifiedCount}/{checklist.length} verified</strong>
          </span>
          <span className={`px-2 py-0.5 rounded text-[11px] ${
            verifiedCount === checklist.length ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'
          }`}>
            {verifiedCount === checklist.length ? 'Ready to Deploy' : 'Review Required Before Go-Live'}
          </span>
        </div>

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <p className="text-xs text-slate-300 leading-relaxed">
            Per the brand constitution, the website never presents unverified assumptions as confirmed facts. Use this checklist to audit claims, contact endpoints, and entity records.
          </p>

          <div className="space-y-3">
            {checklist.map((item) => {
              const isVerified = item.status === 'verified';
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-colors ${
                    isVerified
                      ? 'bg-[#161C24]/60 border-emerald-900/40 text-slate-200'
                      : 'bg-[#161C24] border-amber-900/40 text-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {isVerified ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      )}
                      <h3 className="text-xs font-bold text-white">{item.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleStatus(item.id)}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 hover:border-white/30 text-slate-300 cursor-pointer"
                    >
                      {isVerified ? 'Mark Pending' : 'Mark Verified'}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="bg-[#161C24] border-t border-white/10 p-5 flex items-center justify-between text-xs">
          <span className="text-slate-400">All data editable in <code>/src/data/</code></span>
          <button
            onClick={onClose}
            className="bg-[#E31B23] hover:bg-[#C6141B] text-white font-semibold px-4 py-2 rounded transition-all cursor-pointer"
          >
            Done Reviewing
          </button>
        </div>
      </div>
    </div>
  );
};
