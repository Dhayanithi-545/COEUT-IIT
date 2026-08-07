import {
  Home,
  FlaskConical,
  Cpu,
  Users,
  Download,
  Target,
  Building2,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Newspaper,
  Mail,
  FileText,
  Navigation,
  Radio,
  CalendarDays,
  Gamepad2,
  CarFront,
  Truck,
  HardDrive,
  Code2,
  Database,
  Images,
  Award,
  BookOpen,
} from 'lucide-react';

// Navigation Data for Mega Menu
export const navigationItems = [
  {
    id: 'about',
    label: 'About COE',
    path: '/about',
    icon: Home,
    description: 'Centre overview, partner institutes, governing council, newsletters, and contact information.',
    sections: [
      {
        id: 'about-info',
        label: 'Centre Information',
        icon: Target,
        children: [
          { id: 'overview', label: 'Overview & Mission', path: '/about', hash: 'overview', icon: Target, desc: 'Background, objectives & research thrusts' },
          { id: 'partners', label: 'Partner Institutes', path: '/about', hash: 'partners', icon: Building2, desc: '8 national partner academic institutions' },
          { id: 'council', label: 'Governing Council', path: '/about', hash: 'council', icon: Award, desc: 'Leadership council & Coordinators' },
        ],
      },
      {
        id: 'about-stakeholders',
        label: 'Stakeholders & Contact',
        icon: Users,
        children: [
          { id: 'industry', label: 'User Agencies & Industry', path: '/about', hash: 'industry', icon: Briefcase, desc: 'Advisory, solutions & industry benefits' },
          { id: 'students', label: 'Students & Professionals', path: '/about', hash: 'students', icon: GraduationCap, desc: 'Research opportunities, MS/PhD' },
          { id: 'newsletters', label: 'Newsletters', path: '/about', hash: 'newsletters', icon: Newspaper, desc: 'Periodical research publications' },
          { id: 'contacts', label: 'Office Contacts', path: '/about', hash: 'contacts', icon: Mail, desc: 'Location, phone & email' },
        ],
      },
    ],
  },
  {
    id: 'research',
    label: 'Research & Corridors',
    path: '/research',
    icon: FlaskConical,
    description: 'Funded research projects, technical synthesis reports, study corridors, events, and opportunities.',
    sections: [
      {
        id: 'research-output',
        label: 'Research Output & Projects',
        icon: FlaskConical,
        children: [
          { id: 'overview', label: 'Research Focus Areas', path: '/research', hash: 'overview', icon: FlaskConical, desc: 'ITS, Planning, Congestion & Safety' },
          { id: 'projects', label: 'Funded Research Projects', path: '/research', hash: 'projects', icon: Briefcase, desc: '16 national research projects' },
          { id: 'reports', label: 'Reports & Publications', path: '/research', hash: 'reports', icon: FileText, desc: 'Synthesis reports & 47+ papers' },
        ],
      },
      {
        id: 'research-field',
        label: 'Field Studies & Engagement',
        icon: Navigation,
        children: [
          { id: 'corridors', label: 'Study Corridors', path: '/research', hash: 'corridors', icon: Navigation, desc: '15 km Chennai testbed & ATIS' },
          { id: 'events', label: 'Events & Training', path: '/research', hash: 'events', icon: CalendarDays, desc: 'Workshops, safety audits & seminars' },
          { id: 'opportunities', label: 'Career Opportunities', path: '/research', hash: 'opportunities', icon: Briefcase, desc: 'Openings for researchers & developers' },
        ],
      },
    ],
  },
  {
    id: 'labs',
    label: 'Laboratories',
    path: '/labs',
    icon: Cpu,
    description: 'National research facilities for ITS, driving simulation, connected autonomous vehicles, and freight logistics.',
    sections: [
      {
        id: 'labs-facilities',
        label: 'Research Facilities',
        icon: Cpu,
        children: [
          { id: 'its-lab', label: 'ITS & Traffic Monitoring Lab', path: '/labs', hash: 'its-lab', icon: Cpu, desc: 'Real-time traffic evaluation & sensing' },
          { id: 'caev-lab', label: 'Connected & Autonomous Vehicles', path: '/labs', hash: 'caev-lab', icon: CarFront, desc: 'V2X, CAV algorithms & EV' },
          { id: 'simulator-lab', label: 'Driving Simulator Lab', path: '/labs', hash: 'simulator-lab', icon: Gamepad2, desc: 'Full-vehicle cockpit & HMI testbed' },
          { id: 'logniti-lab', label: 'LogNiti Freight Logistics Lab', path: '/labs', hash: 'logniti-lab', icon: Truck, desc: 'Sustainable last-mile & city freight' },
        ],
      },
      {
        id: 'labs-equipment',
        label: 'Equipment & Software',
        icon: HardDrive,
        children: [
          { id: 'hardware', label: 'Hardware Equipment', path: '/labs', hash: 'hardware', icon: HardDrive, desc: 'GPS, Radar, Bluetooth, Tirtl & Loops' },
          { id: 'software', label: 'Software Suite', path: '/labs', hash: 'software', icon: Code2, desc: 'VISSIM, TransCAD, Cube, MCME & more' },
        ],
      },
    ],
  },
  {
    id: 'people',
    label: 'People',
    path: '/people',
    icon: Users,
    description: 'Faculty coordinators, research scholars, MS/PhD students, and administrative staff at COE-UT.',
    sections: [
      {
        id: 'people-directory',
        label: 'People Directory',
        icon: Users,
        children: [
          { id: 'faculty', label: 'Faculty Members', path: '/people', hash: 'faculty', icon: GraduationCap, desc: 'Coordinating faculty from IIT Madras' },
          { id: 'students', label: 'Research Scholars', path: '/people', hash: 'students', icon: Users, desc: 'MS, PhD & M.Tech researchers' },
          { id: 'staff', label: 'Staff Directory', path: '/people', hash: 'staff', icon: Briefcase, desc: 'Current & former project staff' },
        ],
      },
    ],
  },
  {
    id: 'downloads',
    label: 'Downloads & Tools',
    path: '/downloads',
    icon: Download,
    description: 'Open research datasets, MCME software tool, publications, and photo gallery.',
    sections: [
      {
        id: 'downloads-resources',
        label: 'Downloads & Software',
        icon: Database,
        children: [
          { id: 'datasets', label: 'Data Repositories', path: '/downloads', hash: 'datasets', icon: Database, desc: 'ITS, trajectory & congestion datasets' },
          { id: 'software', label: 'MCME Software Tool', path: '/downloads', hash: 'software', icon: Code2, desc: 'Speech-recognition count tool & manual' },
          { id: 'publications', label: 'Publications & Reports', path: '/downloads', hash: 'publications', icon: FileText, desc: 'Synthesis reports PDF downloads' },
          { id: 'gallery', label: 'Photo Gallery', path: '/downloads', hash: 'gallery', icon: Images, desc: 'Lab, equipment & event photographs' },
        ],
      },
    ],
  },
];

export function buildNavHref(item) {
  if (!item.path) return '#';
  const hashParts = [item.hash, item.subHash].filter(Boolean);
  if (hashParts.length === 0) return item.path;
  return `${item.path}#${hashParts.join('-')}`;
}

// Partner Institutes
export const partnerInstitutes = [
  { name: "Indian Institute of Technology Madras", location: "Chennai", code: "IITM" },
  { name: "Anna University", location: "Chennai", code: "AU" },
  { name: "National Institute of Technology", location: "Tiruchirappalli", code: "NITT" },
  { name: "National Institute of Technology", location: "Calicut", code: "NITC" },
  { name: "Osmania University", location: "Hyderabad", code: "OU" },
  { name: "VIT University", location: "Vellore", code: "VIT" },
  { name: "BMS College of Engineering", location: "Bengaluru", code: "BMSCE" },
  { name: "College of Engineering", location: "Trivandrum", code: "CET" }
];

// Governing Council Members
export const councilMembers = [
  { name: "Dr. Krishnan Balasubramanian", role: "Chairman", designation: "Professor, Dept. of Mechanical Engineering & Dean IC&SR, IIT Madras, Chennai" },
  { name: "Dr. S. Ragava Chari", role: "Member", designation: "Professor (Retd) – NIT Warangal, Saleem Nagar, Malakpet, Hyderabad" },
  { name: "Shri. S. K. Lohia", role: "Member", designation: "Officer on Special Duty (UT) & E.O Joint Secretary, Ministry of Urban Development (MoUD), New Delhi" },
  { name: "Dr. Partha Chakroborty", role: "Member", designation: "Professor, Department of Civil Engineering, IIT Kanpur" },
  { name: "Principal Secretary to Government", role: "Member", designation: "Transport Department, Govt. of Tamil Nadu, Secretariat, Chennai" },
  { name: "Dr. S. R. Gandhi", role: "Member", designation: "Professor & Head, Department of Civil Engineering, IIT Madras, Chennai" },
  { name: "Dr. H. M. Shivanand Swamy", role: "Member", designation: "Professor & Associate Director, CEPT University, Ahmedabad" },
  { name: "Dr. C. S. R. K. Prasad", role: "Member", designation: "Professor, Civil Engineering Department, NIT Warangal" },
  { name: "Dr. S. R. Kale", role: "Member", designation: "Professor, Department of Mechanical Engineering, IIT Delhi, New Delhi" },
  { name: "Shri. R. Sudalaikannan, I.A.S.", role: "Member", designation: "Managing Director, Tamil Nadu Road Development Company Ltd. (TNRDC), Chennai" },
  { name: "Dr. M. S. Srinivasan", role: "Member", designation: "Advisor, Tamil Nadu Urban Infrastructure Financial Services Ltd. (TNUIFSL), Chennai" },
  { name: "Dr. Aravind Bharadwaj", role: "Member", designation: "CEO, Automotive Infotronics (JV Ashok Leyland & Continental AG), Chennai" }
];

// CoE Coordinators
export const coeCoordinators = [
  { name: "Prof. R. Sivanandan", designation: "Professor", department: "Department of Civil Engineering, IIT Madras" },
  { name: "Prof. A. Veeraragavan", designation: "Professor", department: "Department of Civil Engineering, IIT Madras" },
  { name: "Dr. Karthik K. Srinivasan", designation: "Professor", department: "Department of Civil Engineering, IIT Madras" },
  { name: "Dr. V. Lelitha Devi", designation: "Professor", department: "Department of Civil Engineering, IIT Madras" },
  { name: "Dr. Gitakrishnan Ramadurai", designation: "Professor", department: "Department of Civil Engineering, IIT Madras" }
];

// Funded Research Projects Table
export const projects = [
  { title: "Improving Transit System Performance through Automatic Data Collection Systems", pi: "Dr. K. Gunasekaran", institute: "Anna University, Chennai" },
  { title: "Study on Safety at Work Zones in Urban Areas", pi: "Dr. K. Gunasekaran", institute: "Anna University, Chennai" },
  { title: "Comprehensive Transportation Planning for Selected Zones in Bangalore City", pi: "Dr. H. S. Jagadeesh", institute: "BMS College of Engineering, Bangalore" },
  { title: "Development of Pavement Deterioration Models for Urban Roads", pi: "Dr. H. S. Jagadeesh", institute: "BMS College of Engineering, Bangalore" },
  { title: "Developing Tools and Methods to Support Advanced Traveller Information Systems (ATIS) in Indian Cities", pi: "Dr. M. Satya Kumar", institute: "College of Engineering, Trivandrum" },
  { title: "Evaluation of Traffic Data Collection Techniques for Indian Conditions", pi: "Dr. V. Lelitha Devi", institute: "IIT Madras" },
  { title: "Bus Arrival Time Prediction under Indian Traffic Conditions", pi: "Dr. V. Lelitha Devi", institute: "IIT Madras" },
  { title: "Dynamic Network Modeling under Mixed-Traffic", pi: "Dr. Gitakrishnan Ramadurai", institute: "IIT Madras" },
  { title: "Urban Congestion Mitigation", pi: "Dr. R. Sivanandan", institute: "IIT Madras" },
  { title: "Tools for Transportation Planning", pi: "Dr. Karthik K. Srinivasan", institute: "IIT Madras" },
  { title: "Urban Pavement Management Systems (PMS)", pi: "Dr. A. Veeraragavan", institute: "IIT Madras" },
  { title: "Urban Safety Management", pi: "Dr. A. Veeraragavan", institute: "IIT Madras" },
  { title: "Development of Activity-based Models for Forecasting Travel Demand", pi: "Dr. M. V. L. R. Anjaneyulu", institute: "NIT Calicut" },
  { title: "Development of a Toolbox for Evaluation and Identification of Urban Road Safety Improvement Measures", pi: "Dr. M. V. L. R. Anjaneyulu", institute: "NIT Calicut" },
  { title: "Urban Speed Management Using ITS", pi: "Dr. S. Moses Santhakumar", institute: "NIT Tiruchirappalli" },
  { title: "Urban Pavement Maintenance Management Systems (UPMMS)", pi: "Dr. Samson Mathew", institute: "NIT Tiruchirappalli" }
];

// Road Safety Audit Training Programs
export const roadSafetyAudits = [
  { location: "Chennai", date: "23 - 24 February 2010", participants: 28 },
  { location: "Villupuram", date: "18 - 19 March 2010", participants: 22 },
  { location: "Tiruchirappalli", date: "22 – 23 April 2010", participants: 41 },
  { location: "Salem", date: "06 – 07 May 2010", participants: 33 },
  { location: "Madurai", date: "31 May – 01 June 2010", participants: 43 },
  { location: "Tirunelveli", date: "03 - 04 June 2010", participants: 29 },
  { location: "Coimbatore", date: "21 - 22 July 2010", participants: 31 }
];

// Continuing Education & Training Programs
export const trainingPrograms = [
  { title: "Indo-US Workshop on Emerging Trends in Intelligent Transportation Systems (ETITS)", date: "11-13 Feb 2010", participants: "150+ delegates from academia, industry & government", details: "Sponsored by Indo-US Science and Technology Forum. Highlighted low-cost data collection and user requirements for ITS." },
  { title: "Road Safety Audit Training Programs", date: "Feb - Jul 2010", participants: "229 Highways Engineers (Govt. of Tamil Nadu)", details: "7 intensive 2-day workshops conducted across Chennai, Villupuram, Trichy, Salem, Madurai, Tirunelveli, and Coimbatore." },
  { title: "Training Program on MXROADS for Geometric Design", date: "August 2010", participants: "15 participants from COE", details: "Hands-on string-based road modeling training." },
  { title: "Urban Transportation Modeling with CUBE", date: "Aug 30 - Sep 1, 2010", participants: "5 students & 1 faculty", details: "Travel demand and supply modeling scripting." },
  { title: "LabVIEW Software Training by National Instruments", date: "August 2010", participants: "1 Project Associate", details: "Hardware integration and data acquisition." },
  { title: "Traffic Simulation & Transportation Planning Software Training", date: "Oct - Nov 2010", participants: "13 students", details: "Hands-on VISSIM & TransCAD simulation." },
  { title: "Short Term Course in Urban Transportation Planning - KNUST Ghana", date: "September 2010", participants: "International faculty & students", details: "Funded by World Bank at Kwame Nkrumah University of Science and Technology, Ghana." },
  { title: "Lecture Series on Sustainable Urban Transport - KNUST Ghana", date: "December 2010", participants: "International delegates", details: "Funded by World Bank." }
];

// Guest Lectures & Seminars Organized
export const guestLectures = [
  { speaker: "Dr. Steven Boyle", org: "Univ. of Wyoming, USA", topic: "Optimal information location for adaptive routing", date: "Dec 28, 2009" },
  { speaker: "Dr. Laurence Rilett", org: "Director, Transportation Centre, Univ. of Nebraska Lincoln", topic: "ITS activities in Nebraska", date: "Feb 9, 2010" },
  { speaker: "Mr. Ravi Kumar", org: "Joint Director, CDAC Thiruvananthapuram", topic: "Area Traffic Control Implementation", date: "Feb 10, 2010" },
  { speaker: "Mr. G. Satheesh", org: "Deputy Director, CDAC Thiruvananthapuram", topic: "Data Communication Issues in ITS field implementation", date: "Feb 10, 2010" },
  { speaker: "Mr. K. Kumar", org: "Chief Urban Planner, CMDA", topic: "CMDA's role in Urban Transport", date: "Mar 17, 2010" },
  { speaker: "Dr. Naveen Eluru", org: "McGill University, Canada", topic: "Copula-based models for analysis of self-selection in Residential Choice Decisions", date: "July 26, 2010" },
  { speaker: "Deputy Commissioner of Police, South (Traffic)", org: "Chennai Traffic Police", topic: "Issues related to ITS implementation in Chennai corridor", date: "Aug 3, 2010" },
  { speaker: "Dr. Sumeeta Srinivasan", org: "Kennedy School of Government, Harvard University", topic: "Incorporating Spatial Methods in Travel Models", date: "Aug 20, 2010" },
  { speaker: "Commissioner of Corporation", org: "Corporation of Chennai", topic: "ITS implementation in city corridor", date: "Sep 7, 2010" },
  { speaker: "Transport Secretary", org: "Govt. of Tamil Nadu", topic: "GPS implementation in MTC buses", date: "Nov 2, 2010" },
  { speaker: "Kritikal Labs Noida Visit", org: "Kritikal Labs", topic: "Video image processing techniques for Indian traffic", date: "Nov-Dec 2010" },
  { speaker: "Dr. Lavanya Marla", org: "Carnegie Mellon University, USA", topic: "Robust Resource Allocation under Uncertainty in Transportation Operations", date: "Dec 13, 2010" },
  { speaker: "Dr. Indrajit Ghosh", org: "Wayne State University, USA", topic: "Impacts of Dynamically Activated Emergency Vehicle Warning Sign on Driver Behaviour", date: "Jan 8, 2011" }
];

// Hardware Equipment
export const hardwareEquipment = [
  { name: "GPS in MTC Buses", qty: "40 Units", desc: "Global Positioning System units installed on MTC buses to provide location and time data for real-time traffic monitoring, probe-vehicle speed tracking, and travel time forecasting under all weather conditions." },
  { name: "Bluetooth Receivers", qty: "2 Units", desc: "Procured to detect Bluetooth-enabled vehicles and calculate travel times and speeds between fixed corridor check-points." },
  { name: "Video Cameras", qty: "2 Units", desc: "High-definition video cameras for automated traffic count, headway evaluation, speed estimation, and incident detection." },
  { name: "Traficam Collect - R", qty: "Video Sensor", desc: "Virtual loop-based video sensor with embedded hardware for automatic incident detection, traffic data acquisition, and intersection control." },
  { name: "Tirtl (Infra-Red Traffic Logger)", qty: "Multi-purpose Sensor", desc: "Infra-Red sensor used as traffic counter, speed sensor, red-light camera sensor, and vehicle classifier for variable message signs." },
  { name: "Wavetronix SmartSensor", qty: "Radar Sensor", desc: "Radar-based vehicle detection system to detect altitude, direction, and speed of moving and stationary objects." },
  { name: "Loop Detector for Mixed Traffic", qty: "IIT Madras Innovation", desc: "Electromagnetic loop detection system specifically designed and developed at IIT Madras to accurately count vehicles under non-lane-based heterogeneous traffic flow." }
];

// Software Suite
export const softwareList = [
  { name: "TRANSYT", desc: "Traffic Network Study Tool for assessing and optimizing signal networks by minimizing stops and delays." },
  { name: "VISSIM", desc: "Microscopic simulation software for multi-modal traffic flow modeling (PTV AG, Germany)." },
  { name: "CORSIM", desc: "Microscopic traffic simulation for integrated signalized surface streets and freeway networks." },
  { name: "TransCAD", desc: "GIS software for transportation planning, routing, network optimization, and 4-step travel demand modeling." },
  { name: "Cube", desc: "Flexible travel demand forecasting software package using customized scripting language." },
  { name: "Dynasmart", desc: "Dynamic network assignment and simulation software for ITS deployment evaluation." },
  { name: "HDM4", desc: "Highway Development & Management software for pavement maintenance prioritization and budget optimization." },
  { name: "mxRoad", desc: "Bentley string-based road design and geometric modeling software." },
  { name: "SPSS", desc: "Statistical analysis package for descriptive statistics, multivariate regression, and predictive modeling." },
  { name: "Gauss", desc: "Matrix programming language for complex econometrics, time-series, and 3D visualization." },
  { name: "GAMS", desc: "High-level algebraic modeling system for large-scale mathematical optimization." },
  { name: "CPLEX", desc: "High-performance optimization solver for linear, mixed-integer, and quadratic programming." },
  { name: "GPS Tracking Software", desc: "Software for processing GPS trajectories, speed calculation, and route tracing." },
  { name: "AIMSUN", desc: "Multi-scale traffic simulation software supporting microscopic, mesoscopic, and macroscopic modeling." },
  { name: "Dynameq", desc: "Dynamic Traffic Assignment software with mesoscopic simulation for equilibrium traffic assignment." },
  { name: "MCME (Manual Count Made Easy)", desc: "In-house GUI software developed at IIT Madras utilizing speech recognition to simplify manual traffic counts from video feeds." }
];

// Labs Data
export const labs = [
  {
    id: "its-lab",
    name: "Intelligent Transportation Systems & Traffic Monitoring Lab",
    shortName: "ITS & Traffic Monitoring Lab",
    tagline: "First-of-its-kind national research facility showcasing advanced ITS technologies and real-time traffic evaluation.",
    description: "The state-of-the-art ITS lab serves as a primary hub for real-time traffic monitoring, data archiving, sensor testing, and traffic simulation under heterogeneous Indian traffic conditions.",
    capabilities: [
      "Advanced traffic detection technologies: video, radar, infra-red, GPS, and inductive loops",
      "Software for video detection, network and traffic modeling, simulation and optimization",
      "Real-time communication, data transfer, and information dissemination",
      "Advanced hardware, traffic controllers, workstations/servers, and display devices",
      "Data archiving capabilities including storage servers, storage media, and portable systems"
    ]
  },
  {
    id: "caev-lab",
    name: "Connected, Autonomous & Electric Vehicles Lab",
    shortName: "CAEV Lab",
    tagline: "Pioneering research in connected vehicle networks, autonomous navigation algorithms, and EV transport infrastructure.",
    description: "Research facility dedicated to testing V2X communication, automated vehicle guidance in mixed traffic, and electric vehicle fleet optimization.",
    capabilities: [
      "Vehicle-to-Everything (V2X) communication protocol testing",
      "Autonomous vehicle algorithm development and hardware-in-the-loop validation",
      "EV fleet charging infrastructure and energy management modeling"
    ]
  },
  {
    id: "simulator-lab",
    name: "Driving Simulator Lab",
    shortName: "Driving Simulator Lab",
    tagline: "Advanced human-in-the-loop driving simulator testbed for driver behavior, safety, and vehicle dynamics.",
    description: "State-of-the-art simulator facility equipped with full-vehicle cockpits and motion platforms to conduct groundbreaking research on driver behavior, safety interventions, and autonomous transition.",
    capabilities: [
      "Driver behavior analysis under varied traffic and weather conditions",
      "Human-machine interface (HMI) evaluation for connected vehicles",
      "Surrogate safety measure evaluation and crash risk scenario testing"
    ]
  },
  {
    id: "logniti-lab",
    name: "LogNiti Lab: Sustainable & Resilient Freight Logistics",
    shortName: "LogNiti Freight Lab",
    tagline: "Data-driven decisions for sustainable city logistics, supply chain resilience, and freight decarbonization.",
    description: "Specialized lab focusing on freight flow modeling, urban freight distribution, multi-modal transport optimization, and policy frameworks for sustainable freight movement.",
    capabilities: [
      "Urban freight movement tracking and trip generation modeling",
      "Sustainable last-mile delivery and EV freight integration",
      "Freight corridor resilience and supply chain optimization"
    ]
  }
];

// People Data
export const faculty = [
  {
    id: "ksrinivasan",
    name: "Dr. Karthik K. Srinivasan",
    designation: "Professor",
    department: "Department of Civil Engineering, IIT Madras",
    interests: "Travel Demand Modeling, Transportation Network Optimization, Behavioral Modeling",
    email: "karthikks@iitm.ac.in"
  },
  {
    id: "vlelitha",
    name: "Dr. V. Lelitha Devi (Vanajakshi)",
    designation: "Professor",
    department: "Department of Civil Engineering, IIT Madras",
    interests: "Traffic Flow Modeling, Intelligent Transportation Systems (ITS), Traffic Operations",
    email: "lelitha@iitm.ac.in"
  },
  {
    id: "bchilukuri",
    name: "Dr. Bhargava Rama Chilukuri",
    designation: "Associate Professor",
    department: "Department of Civil Engineering, IIT Madras",
    interests: "Traffic Flow Theory, Numerical Methods & Simulations for Traffic Control",
    email: "bhargava@iitm.ac.in"
  },
  {
    id: "apahwa",
    name: "Dr. Anmol Pahwa",
    designation: "Assistant Professor",
    department: "Department of Civil Engineering, IIT Madras",
    interests: "Sustainable Transportation, Freight Transportation, City Logistics",
    email: "anmol.pahwa@iitm.ac.in"
  },
  {
    id: "gramadurai",
    name: "Dr. Gitakrishnan Ramadurai",
    designation: "Professor",
    department: "Department of Civil Engineering, IIT Madras",
    interests: "Dynamic Traffic Assignment, Transportation Network Modeling, Congestion Mitigation",
    email: "gitakrishnan@iitm.ac.in"
  }
];

export const currentStaff = [
  { name: "E. Raji", designation: "Sr. Manager (Network & System Admin)" },
  { name: "S. Rekka", designation: "Sr. Project Assistant" },
  { name: "Sathish", designation: "Project Officer" }
];

export const formerStaff = [
  { name: "N.K.Sundararaman", designation: "Consultant Administrator" },
  { name: "T. Arunkumar", designation: "Project Officer" },
  { name: "R. Gayathri Devi", designation: "Sr. Project Officer" },
  { name: "S. Amulraj", designation: "Senior Executive" },
  { name: "Stephen Daniel Mark", designation: "Senior Executive" },
  { name: "Syed Mukhram Ullah", designation: "Junior Executive" },
  { name: "R. Deepan Chakravarthy", designation: "Project Officer" },
  { name: "N. Poornima", designation: "Project Officer" },
  { name: "M. Bharathi Raja", designation: "Project Officer" },
  { name: "Shehna Basheer", designation: "Project Officer" },
  { name: "Liz Mary Paul", designation: "Project Officer" },
  { name: "Vinoth Kumar", designation: "Project Associate" },
  { name: "Dr. Anilkumar Bachu", designation: "Sr. Project Officer" },
  { name: "Mohammed Bhadhrudeen", designation: "Project Officer" },
  { name: "V.V. Bhavesh Reddy", designation: "Project Associate" },
  { name: "Shantanu Chakraborty", designation: "Project Associate" },
  { name: "S.Sivakirubanandhan", designation: "Sr. Project Assistant" },
  { name: "Arivazhagan.G", designation: "Project Technician" },
  { name: "Sita Rami Reddy", designation: "Sr. Project Officer" },
  { name: "S.Saraswathi", designation: "Sr. Project Officer" },
  { name: "M.E.Jaikokila", designation: "Sr. Project Officer" },
  { name: "Indrajit Ghosh", designation: "Sr. Project Officer" },
  { name: "K.Venkatesan", designation: "Sr. Project Officer" },
  { name: "A.Gowri", designation: "Sr. Project Officer" },
  { name: "J.Sivasubramaniam", designation: "Sr. Project Officer" },
  { name: "Sathish Kumar P", designation: "Sr. Project Officer" },
  { name: "P.Naga Swetha", designation: "Sr. Project Officer" },
  { name: "C.Mineetha", designation: "Sr. Project Officer" },
  { name: "Balaji P", designation: "Project Officer" },
  { name: "K.R.Vishnu Vardhan", designation: "Project Officer" },
  { name: "Uppaiah Bonagiri", designation: "Project Officer" },
  { name: "Arul Stephen", designation: "Project Officer" },
  { name: "Nerendra Reddy", designation: "Project Officer" },
  { name: "Anand Ashokan", designation: "Project Officer" },
  { name: "D.Sharan", designation: "Project Officer" },
  { name: "M.Shashikanth Menchu", designation: "Project Officer" },
  { name: "S.Manipriya", designation: "Project Officer" },
  { name: "Rakshith P", designation: "Project Officer" },
  { name: "Subodh Kant Dubey", designation: "Project Officer" },
  { name: "S.Ravi", designation: "Project Officer" },
  { name: "Jithin Raj P.V", designation: "Project Officer" },
  { name: "S.Shaik Mohammed Ali", designation: "Project Officer" },
  { name: "Alima Jafreen", designation: "Project Officer" },
  { name: "Ganesh Ambi Ramakrishnan", designation: "Project Officer" },
  { name: "V.Ramesh", designation: "Project Officer" },
  { name: "Malavika Anand", designation: "Project Associate" },
  { name: "A.Shoba", designation: "Project Associate" },
  { name: "R.Dhivahar", designation: "Project Associate" },
  { name: "N. Yuvashree", designation: "Project Associate" },
  { name: "Vignesh Raja", designation: "Project Associate" },
  { name: "Srijith Balakrishnan", designation: "Project Associate" },
  { name: "R.D.Balakumaran", designation: "Project Associate" },
  { name: "M.Sri Hari Kumaran", designation: "Project Associate" },
  { name: "V.S.Shiva", designation: "Project Associate" },
  { name: "R.Samraj", designation: "Project Associate" },
  { name: "Ashok Kumar", designation: "Project Associate" },
  { name: "Satheesh Reddy Mulka", designation: "Project Associate" },
  { name: "Aravind", designation: "Project Associate" },
  { name: "B.Pavithra", designation: "Project Associate" },
  { name: "Padmavathy J", designation: "Project Associate" },
  { name: "Amala Mohan", designation: "Project Associate" },
  { name: "Sunny Raja Varma.D", designation: "Project Associate" },
  { name: "N.Venkatachalam", designation: "Sr. Project Assistant" },
  { name: "P.S.Madhan", designation: "Sr. Project Assistant" },
  { name: "S.Prabhakaran", designation: "Project Assistant" },
  { name: "G.Devi", designation: "Project Assistant" },
  { name: "P.C.Achutha Narayanan", designation: "Project Attendant" },
  { name: "Sreenidhi", designation: "Project Associate" },
  { name: "Vasanth", designation: "Project Associate" },
  { name: "P.S Vishnu Kumar", designation: "Project Associate" },
  { name: "Alfred marshall", designation: "Project Associate" },
  { name: "Prasana Kumar", designation: "Project Associate" },
  { name: "Priyanka", designation: "Project Officer" },
  { name: "Dr. Divya Bharathi", designation: "Project Officer" },
  { name: "Dr. Maripani Hema Bindu", designation: "Project Officer" },
  { name: "Dipankar Das", designation: "Project Officer" }
];

// Reports Data
export const synthesisReports = [
  {
    category: "Intelligent Transportation Systems (ITS)",
    reports: [
      { id: "its-synth", title: "ITS Synthesis Report", desc: "Comprehensive review of ITS deployments, sensor networks, and traffic management architecture for Indian cities.", fileUrl: "#" },
      { id: "bus-pred", title: "Real Time Bus Arrival Time Prediction System", desc: "Algorithms and field test results for dynamic bus arrival forecasting under mixed traffic flow.", fileUrl: "#" },
      { id: "archive-data", title: "Traffic Archive Data Management System", desc: "Architecture for archiving high-resolution spatio-temporal traffic data streams.", fileUrl: "#" },
      { id: "sensors-eval", title: "Development and Evaluation of Traffic Sensors under Indian Traffic Conditions", desc: "Experimental evaluation of video, radar, IR, and loop detectors under heterogeneous flow.", fileUrl: "#" }
    ]
  },
  {
    category: "Urban Traffic Congestion",
    reports: [
      { id: "congestion-report", title: "Report on Traffic Congestion Mitigation & Bottleneck Measures", desc: "Arterial performance evaluation, delay mitigation, and corridor bottleneck analysis.", fileUrl: "#" }
    ]
  },
  {
    category: "Urban Transportation Planning",
    reports: [
      { id: "planning-challenges", title: "Urban Transportation Planning Challenges and Issues", desc: "Addressing travel demand modeling, mixed traffic parameters, and multi-modal integration.", fileUrl: "#" }
    ]
  },
  {
    category: "Advanced Traveler Information System (ATIS)",
    reports: [
      { id: "atis-after", title: "ATIS After-Study Report for Indian Cities", desc: "Impact analysis of departure time planners and traveler information systems in Trivandrum and Chennai.", fileUrl: "#" }
    ]
  }
];

export const publicationStats = {
  journalPapers: 22,
  journals: [
    "Journal of the Transportation Research Board (TRB)",
    "International Journal of Recent Trends in Engineering",
    "ASCE Journal of Transportation Engineering",
    "ASCE Journal of Materials in Civil Engineering",
    "Journal of Indian Roads Congress (IRC)",
    "Indian Highways"
  ],
  conferencePresentations: 25,
  locations: ["USA", "China", "India"]
};

// Sponsors Data
export const sponsors = [
  {
    id: "moud",
    name: "Ministry of Urban Development",
    subtitle: "Government of India",
    abbr: "MoUD"
  },
  {
    id: "meity",
    name: "Ministry of Electronics and Information Technology",
    subtitle: "Government of India",
    abbr: "MeitY"
  },
  {
    id: "moe",
    name: "Ministry of Education",
    subtitle: "Government of India",
    abbr: "MoE"
  }
];
