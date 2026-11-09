import React, { useState } from 'react';
import { ShieldCheck, FileCheck, Award, FileText, CheckCircle2, Download, AlertCircle, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

interface QualityComplianceProps {
  onRequestQuote: () => void;
}

export const QualityCompliance: React.FC<QualityComplianceProps> = ({ onRequestQuote }) => {
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const testProtocols = [
    {
      title: 'High-Voltage Spark & Dielectric Breakdown',
      standard: 'IS 694 / IS 1293',
      description: 'Continuous 100% in-line spark testing up to 10 kV during extrusion, followed by water bath dielectric withstand test at 2000V AC for 5 minutes without breakdown.',
      frequency: '100% In-Line + Batch Sampled'
    },
    {
      title: 'Conductor Resistance Measurement',
      standard: 'IS 8130',
      description: 'Conductor resistance verified at 20°C using precision micro-ohm Kelvin double bridge, guaranteeing that copper purity meets resistance limits.',
      frequency: 'Every Drawn Lot'
    },
    {
      title: 'Insulation Resistance (IR)',
      standard: 'IS 5831',
      description: 'Core insulation resistance measured at ambient and 70°C water bath conditions to verify dielectric longevity under continuous electrical load.',
      frequency: 'Batch Routine Test'
    },
    {
      title: 'Tensile Strength & Elongation',
      standard: 'IS 5831',
      description: 'PVC compound samples tested before and after accelerated thermal aging in an air oven to verify tensile strength retention (>85%) and elongation at break.',
      frequency: 'Per Compound Batch'
    },
    {
      title: 'Cord Flexing & Pull-Out Retention',
      standard: 'IS 1293 Cl. 23',
      description: 'Plug cords subjected to 10,000+ continuous flexing cycles under 1kg mechanical weight and 100N straight terminal pull force without conductor damage or core displacement.',
      frequency: 'Type & Periodic Test'
    },
    {
      title: 'Socket Insertion & Pin Gauge Testing',
      standard: 'IS 1293 Go / No-Go Gauges',
      description: 'Every molded plug variant is verified against precision hardened steel Go / No-Go dimensional gauges for accurate pin diameter, pin length, and center-to-center spacing.',
      frequency: 'Routine Molding QC'
    }
  ];

  const documents = [
    {
      id: 'doc-1',
      title: 'Speedo Wires - General Product Catalogue 2026',
      type: 'Technical Brochure',
      fileSize: '1.6 MB',
      status: 'available',
      fileUrl: '/assets/aistudio/Speedo_Wires_Product_Catalogue_80039953.png'
    },
    {
      id: 'doc-2',
      title: 'IS 1293 Molded Plug Cords Technical Spec Sheet',
      type: 'Specification Sheet',
      fileSize: 'PDF - 420 KB',
      status: 'available',
      fileUrl: '#'
    },
    {
      id: 'doc-3',
      title: 'IS 694 PVC Insulated Wires Technical Datasheet',
      type: 'Specification Sheet',
      fileSize: 'PDF - 380 KB',
      status: 'available',
      fileUrl: '#'
    },
    {
      id: 'doc-4',
      title: 'ISO 9001:2019 Quality System Certificate',
      type: 'Official Certification',
      fileSize: 'Certificate PDF',
      status: 'pending-verification', // Discretely flagged as instructed in Section 14
      fileUrl: null
    },
    {
      id: 'doc-5',
      title: 'Bureau of Indian Standards (BIS) License Copy',
      type: 'Government Compliance',
      fileSize: 'License PDF',
      status: 'pending-verification', // Discretely flagged as instructed in Section 14
      fileUrl: null
    }
  ];

  const handleDownload = (doc: typeof documents[0]) => {
    if (doc.status === 'pending-verification') {
      setDownloadSuccessMessage(`"${doc.title}" is currently undergoing final document upload review. Available upon OEM client request.`);
      setTimeout(() => setDownloadSuccessMessage(null), 4000);
      return;
    }

    if (doc.fileUrl && doc.fileUrl !== '#') {
      window.open(doc.fileUrl, '_blank');
    } else {
      setDownloadSuccessMessage(`Downloading specifications for "${doc.title}"... (Demo format)`);
      setTimeout(() => setDownloadSuccessMessage(null), 3000);
    }
  };

  return (
    <section className="bg-[#0A0D12] text-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              QUALITY IS BUILT IN.
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            PRECISION YOU CAN <span className="text-[#E31B23]">VERIFY.</span>
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Speedo Wires operates a disciplined quality system conforming to applicable Indian Standards (IS 1293 and IS 694) with an in-house laboratory for routine and customer-specific test protocols.
          </p>
        </div>

        {/* Quality Badges / Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: IS 1293 */}
          <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#161C24] border border-white/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#E31B23]" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#E31B23] uppercase">Standard Associated</div>
              <h3 className="text-xl font-bold text-white mt-1">IS 1293 Compliance</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Plugs and socket-outlets of rated voltage up to and including 250V and rated current up to 16A. Governs solid pin retention, insulation thickness, and mechanical endurance.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              Applies to: 2-Pin &amp; 3-Pin Plug Cords
            </div>
          </div>

          {/* Card 2: IS 694 */}
          <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#161C24] border border-white/10 flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-[#E31B23]" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#E31B23] uppercase">Standard Associated</div>
              <h3 className="text-xl font-bold text-white mt-1">IS 694 Compliance</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              PVC insulated cables for working voltages up to and including 1100V. Enforces conductor resistance, flame retardance, dielectric breakdown, and sheath aging limits.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              Applies to: PVC Wires &amp; Multi-Core Cables
            </div>
          </div>

          {/* Card 3: ISO 9001:2019 & BIS */}
          <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#161C24] border border-white/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-[#E31B23]" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#E31B23] uppercase">Management System</div>
              <h3 className="text-xl font-bold text-white mt-1">ISO 9001:2019 &amp; BIS</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standardized production workflows, raw material lot inspection, calibrated laboratory apparatus, and full traceability for high-volume OEM manufacturing.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              Applies to: Entire Manufacturing Facility
            </div>
          </div>
        </div>

        {/* Laboratory Testing Protocols */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-[#E31B23] uppercase">In-House Verification Laboratory</span>
              <h3 className="text-2xl font-bold text-white mt-0.5">Routine &amp; Type Testing Protocols</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Calibrated Instruments &amp; In-Line Controls</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testProtocols.map((proto, idx) => (
              <div
                key={idx}
                className="bg-[#11161C] border border-white/5 hover:border-white/15 rounded-lg p-5 space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#E31B23] font-semibold">{proto.standard}</span>
                  <span className="text-[11px] font-mono bg-[#161C24] px-2 py-0.5 rounded text-slate-300">
                    {proto.frequency}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{proto.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{proto.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Documentation Library */}
        <div className="bg-[#11161C] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#E31B23]" />
                <span>Technical Documentation &amp; Compliance Repository</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Official datasheets, brochures, and compliance records for procurement engineers.
              </p>
            </div>
            <button
              onClick={onRequestQuote}
              className="bg-[#161C24] hover:bg-[#252C34] text-white text-xs font-medium px-4 py-2 rounded border border-white/10 transition-colors shrink-0"
            >
              Request Custom OEM Test Report
            </button>
          </div>

          {/* Feedback banner */}
          {downloadSuccessMessage && (
            <div className="bg-[#161C24] border border-[#E31B23] p-3 rounded-lg text-xs text-slate-200 flex items-center gap-2 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-[#E31B23] shrink-0" />
              <span>{downloadSuccessMessage}</span>
            </div>
          )}

          <div className="divide-y divide-white/5">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#161C24] text-[#E31B23] mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{doc.title}</div>
                    <div className="flex items-center gap-2 text-slate-400 mt-0.5 font-mono text-[11px]">
                      <span>{doc.type}</span>
                      <span>·</span>
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  {doc.status === 'pending-verification' ? (
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-950/30 border border-amber-900/40 px-2 py-0.5 rounded">
                      Documentation to be provided
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-2 py-0.5 rounded">
                      Verified Document
                    </span>
                  )}
                  <button
                    onClick={() => handleDownload(doc)}
                    className="text-xs bg-[#161C24] hover:bg-[#E31B23] text-slate-200 hover:text-white px-3 py-1.5 rounded border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Access</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
