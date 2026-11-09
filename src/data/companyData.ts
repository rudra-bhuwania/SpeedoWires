import { CompanyInfo, ManufacturingStage, IndustryType } from '../types';

export const DISPLAY_PHONE = '+91 85000 00077';
export const RAW_PHONE = '8500000077';

export const companyData: CompanyInfo = {
  brandName: 'Speedo Wires',
  legalEntityName: 'Maruti Udyog',
  isLegalEntityVerified: false, // Flagged for confirmation before launch
  experienceYears: 30,
  installedAnnualCapacity: 'Up to 10 Million Plug Cords / Year',
  phone: DISPLAY_PHONE,
  isPhoneVerified: true, // Verified by business owner
  email: 'marutifans@yahoo.co.in',
  isEmailVerified: false, // Flagged for confirmation before launch (pending new email IDs from user)
  address: 'Maruti Udyog, # 5-35/275/A, Plot No.11, Shaktipuram, Kukatpally, Hyderabad, Telangana, INDIA – 500072',
  isAddressVerified: false, // Flagged for confirmation before launch
  certifications: [
    'ISO 9001:2019 Certified Quality Management System',
    'BIS Licensed (Bureau of Indian Standards)',
    'In-House Laboratory Testing Compliance'
  ],
  standards: [
    'IS 1293 (Plugs and Socket-Outlets of Rated Voltage up to and including 250 Volts)',
    'IS 694 (PVC Insulated Cables for Working Voltages up to and including 1100 V)'
  ],
  leafLetReference: 'Company Leaflet Data Source: 30 Years Experience, 10M Cords/Yr Capacity, In-House Drawing & Compounding'
};

export const manufacturingStages: ManufacturingStage[] = [
  {
    id: 'drawing',
    stepNumber: '01',
    title: 'Copper Conductor Drawing',
    subtitle: 'High-purity electrolytic copper processed to exact micrometer tolerances',
    description: 'Incoming electrolytic grade copper wire rod is drawn through precision tungsten carbide and polycrystalline diamond dies. Continuous in-line tension monitoring guarantees uniform diameter, smooth surface finish, and minimal mechanical stress.',
    keyCapability: 'In-house drawing from raw rod to ultra-fine strand diameters',
    processDetails: [
      'Electrolytic grade 99.9% pure copper input',
      'Multi-die progressive reduction',
      'Continuous diameter laser micrometer verification',
      'Surface oxidation protection'
    ]
  },
  {
    id: 'annealing',
    stepNumber: '02',
    title: 'Controlled Annealing',
    subtitle: 'Thermal treatment for optimal elongation, conductivity, and flexibility',
    description: 'Drawn copper strands undergo continuous electrical resistance annealing in an oxygen-free protective atmosphere. This restores microcrystalline grain structure, delivering maximum conductivity and high flexibility necessary for repeated mechanical bending in consumer and industrial appliances.',
    keyCapability: 'Protective atmosphere prevents copper discoloration & brittleness',
    processDetails: [
      'In-line electric resistance annealing',
      'Uniform elongation testing across batches',
      'Enhanced conductivity conforming to IS 8130 / IS 694',
      'Superior bend fatigue resistance'
    ]
  },
  {
    id: 'compounding',
    stepNumber: '03',
    title: 'In-House PVC Compounding',
    subtitle: 'Formulating virgin PVC resin for heat resistance, flexibility, and insulation',
    description: 'Unlike assemblers who buy generic third-party PVC, Speedo Wires compounds virgin suspension PVC resin in-house with plasticizers, thermal stabilizers, and flame-retardant additives. This ensures consistent dielectric breakdown strength, UV stability, and exact sheath colors.',
    keyCapability: 'Complete control over thermal rating, hardness, and flame retardancy',
    processDetails: [
      'High-speed batch thermokinetic mixing',
      'Lead-free and RoHS compliant formulations available',
      'Custom shore hardness for flexible appliance cords',
      'Formulated for thermal stability under prolonged current loads'
    ]
  },
  {
    id: 'extrusion',
    stepNumber: '04',
    title: 'Extrusion & Core Insulation',
    subtitle: 'Precision concentric extrusion with continuous spark testing',
    description: 'Stranded copper conductors pass through precision cross-head extrusion lines where compounded PVC insulation is applied with uniform concentric wall thickness. In-line high-voltage spark testers immediately detect any microscopic pinhole imperfections.',
    keyCapability: 'Concentric wall geometry with 100% in-line spark detection',
    processDetails: [
      'Controlled thermal gradient barrel zones',
      'Continuous non-contact spark testing at 6kV to 10kV',
      'Clear, indelible core color identification',
      'Consistent diameter and easy stripping for OEM assembly'
    ]
  },
  {
    id: 'assembly',
    stepNumber: '05',
    title: 'Molding & Final Assembly',
    subtitle: 'High-speed automated insert molding for plugs, terminals, and strain reliefs',
    description: 'Insulated cores are stripped, crimped to solid brass pins or terminals with monitored crimp height, and insert-molded using heavy-duty vertical injection molding machines. Strain reliefs are engineered to withstand rigorous pull-out and flexing forces.',
    keyCapability: 'Up to 10 million plug cords per annum high-volume OEM throughput',
    processDetails: [
      'Solid nickel-plated / brass terminal pins',
      'Precision insert molding with integral cord grip',
      'Custom angled or straight strain relief geometry',
      'Custom pre-stripped, tinned, or quick-connect ends for OEMs'
    ]
  },
  {
    id: 'testing',
    stepNumber: '06',
    title: 'Laboratory Testing & Quality Control',
    subtitle: 'In-house routine and type testing verifying IS 1293 and IS 694 adherence',
    description: 'Every production batch is sampled and tested in our in-house testing facility. Tests include high-voltage dielectric withstand, conductor resistance, insulation resistance, plug pin retention, tensile strength, and flex fatigue life.',
    keyCapability: 'In-house testing facility for routine, type, and OEM-custom parameters',
    processDetails: [
      'High Voltage (HV) breakdown testing',
      'Conductor resistance testing via Kelvin bridge',
      'Insulation resistance megohm verification',
      'Cord flexing and pull-out mechanical endurance tests'
    ]
  }
];

export const industriesList: {
  id: IndustryType;
  title: string;
  tagline: string;
  description: string;
  applications: string[];
  keyRequirements: string[];
}[] = [
  {
    id: 'Fans',
    title: 'Ceiling, Table & Exhaust Fans',
    tagline: 'High-flexibility plug cords and motor lead wires for premier fan OEMs',
    description: 'Speedo Wires has deep specialization serving leading fan manufacturers. Our plug cords feature vibration-resistant molded strain reliefs, consistent color matching, and optimized stripping lengths for automated production lines.',
    applications: ['Ceiling fan motor internal lead wires', 'Table and pedestal fan plug cords', 'Wall-mounted oscillating fans', 'Industrial exhaust fans'],
    keyRequirements: ['High flex fatigue endurance', 'IS 1293 compliant 2-pin / 3-pin plugs', 'Fast-strip lead ends']
  },
  {
    id: 'Air Coolers',
    title: 'Air Coolers & Evaporative Systems',
    tagline: 'Moisture-resistant cables and water-pump electrical wiring',
    description: 'Evaporative air coolers require cables that withstand high humidity, water splash, and continuous summertime operation. Our PVC jackets are formulated for superior water and moisture barrier performance.',
    applications: ['Submersible pump power cords', 'Blower motor supply cables', 'Main 3-pin power cords with earth continuity'],
    keyRequirements: ['Moisture and splash resistant sheath', 'Solid earth pin continuity', 'Outdoor UV resistance']
  },
  {
    id: 'Electrical Appliances',
    title: 'Home & Kitchen Appliances',
    tagline: 'Durable, heat-resistant cords for irons, mixer grinders, and heaters',
    description: 'From mixer grinders and toasters to electric irons and water heaters, our cords provide safe thermal dissipation, robust strain reliefs, and compliance with national safety standards.',
    applications: ['Mixer grinders and food processors', 'Electric irons & room heaters', 'Induction cooktops & ovens', 'Washing machines and refrigerators'],
    keyRequirements: ['Heat resistant grade PVC options', 'IS 1293 safety certified', 'High tensile strain relief']
  },
  {
    id: 'Electronic Equipment',
    title: 'Electronics & Audio-Visual',
    tagline: 'Clean power delivery for sensitive electronics and power supplies',
    description: 'Precision molded 2-pin and 3-pin cords engineered with high conductor purity to eliminate voltage drops, supplying clean power to computing, audio, and office electronics.',
    applications: ['Desktop computers & monitors', 'Audio amplifiers & studio gear', 'UPS and inverter connections', 'Office printers and copiers'],
    keyRequirements: ['Low contact resistance', 'Snug socket engagement', 'RoHS compliant PVC']
  },
  {
    id: 'LED Products',
    title: 'LED Lighting & Drivers',
    tagline: 'Compact internal wiring and external driver supply cables',
    description: 'Modern architectural and commercial LED fixtures require compact, clean wires that thread through narrow luminaire extrusions and connect reliably to constant-current LED drivers.',
    applications: ['Streetlight luminaire power cables', 'High-bay warehouse LED lights', 'Driver input/output lead wires', 'Architectural linear luminaires'],
    keyRequirements: ['Compact cross-section', 'Clean wire stripping', 'Flame retardant insulation']
  },
  {
    id: 'Stabilizers & Adapters',
    title: 'Voltage Stabilizers & Adapters',
    tagline: 'Heavy-gauge input power cords for voltage regulation systems',
    description: 'Stabilizers experience continuous electrical loads during grid voltage fluctuations. Our heavy-gauge plug cords ensure safety without overheating during prolonged high current draw.',
    applications: ['Air conditioner voltage stabilizers', 'Refrigerator voltage regulators', 'Benchtop power adapters', 'Industrial transformers'],
    keyRequirements: ['1.5 & 2.5 sq.mm copper conductors', 'Strict temperature index', 'IS 694 compliant multi-core']
  },
  {
    id: 'Power Tools',
    title: 'Power Tools & Workshop Equipment',
    tagline: 'Heavy-duty impact and oil resistant power cables',
    description: 'Workshop drills, angle grinders, and saws require flexible cables that can withstand abrasion, foot traffic, and motor vibration without sheath cracking.',
    applications: ['Handheld rotary drills', 'Angle grinders and polishers', 'Electric mowers & trimmers', 'Portable workbench tools'],
    keyRequirements: ['High abrasion resistance', 'Reinforced molded strain boot', 'Superior flex cycle rating']
  },
  {
    id: 'Others',
    title: 'Custom OEM Wire Harnesses',
    tagline: 'Bespoke wire processing, crimping, and packaging for volume manufacturing',
    description: 'Speedo Wires offers bespoke engineering for OEMs needing non-standard cable lengths, custom terminal lugs, specialized outer jacket colors, or specific packaging formats.',
    applications: ['Industrial automation cabinets', 'HVAC internal wiring', 'Custom power distribution units', 'Specialized test equipment'],
    keyRequirements: ['Custom print markings', 'OEM specific crimp terminals', 'Batch traceability']
  }
];
