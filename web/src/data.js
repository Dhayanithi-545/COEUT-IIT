import {
  Home,
  FlaskConical,
  Cpu,
  Users,
  Download,
  Building2,
  Briefcase,
  GraduationCap,
  FileText,
  Navigation,
  CalendarDays,
  Gamepad2,
  CarFront,
  Truck,
  Code2,
  Images,
} from 'lucide-react';

// Event photographs — National Workshop on Recent Advances in Pavement &
// Traffic Engineering, IIT Madras, 01-02 December 2023.
const eventImageModules = import.meta.glob('./assets/Event-Tab-images/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const partNumber = (path) => {
  const match = path.match(/PART(\d+)/);
  return match ? Number(match[1]) : 0;
};

export const eventPhotos = Object.entries(eventImageModules)
  .sort(([a], [b]) => partNumber(a) - partNumber(b))
  .map(([path, src], index) => ({
    id: path.split('/').pop().replace('.jpg', ''),
    src,
    caption: `National Workshop 2023 — Photograph ${index + 1}`,
  }));

// Navigation Data — mirrors the tab structure of the Centre's content document
export const navigationItems = [
  {
    id: 'about',
    label: 'About COE',
    path: '/about',
    icon: Home,
    sections: [],
  },
  {
    id: 'research',
    label: 'Research',
    path: '/research',
    icon: FlaskConical,
    sections: [
      {
        id: 'research-output',
        label: 'Research & Documents',
        icon: FlaskConical,
        children: [
          { id: 'overview', label: 'Research Areas', path: '/research', hash: 'overview', icon: FlaskConical },
          { id: 'reports', label: 'Reports & Technical Documents', path: '/research', hash: 'reports', icon: FileText },
        ],
      },
      {
        id: 'research-field',
        label: 'Field Studies & Engagement',
        icon: Navigation,
        children: [
          { id: 'corridors', label: 'Study Corridors', path: '/research', hash: 'corridors', icon: Navigation },
          { id: 'events', label: 'Events', path: '/research', hash: 'events', icon: CalendarDays },
          { id: 'opportunities', label: 'Opportunities', path: '/research', hash: 'opportunities', icon: Briefcase },
        ],
      },
    ],
  },
  {
    id: 'labs',
    label: 'Laboratories',
    path: '/labs',
    icon: Cpu,
    sections: [
      {
        id: 'labs-facilities',
        label: 'Laboratories under the Centre',
        icon: Cpu,
        children: [
          { id: 'its-lab', label: 'ITS & Traffic Monitoring Lab', path: '/labs', hash: 'its-lab', icon: Cpu },
          { id: 'caev-lab', label: 'Connected, Autonomous & Electric Vehicles Lab', path: '/labs', hash: 'caev-lab', icon: CarFront },
          { id: 'simulator-lab', label: 'Simulator Lab', path: '/labs', hash: 'simulator-lab', icon: Gamepad2 },
          { id: 'logniti-lab', label: 'LogNiti Lab', path: '/labs', hash: 'logniti-lab', icon: Truck },
        ],
      },
    ],
  },
  {
    id: 'gallery',
    label: 'Gallery',
    path: '/gallery',
    icon: Images,
    sections: [],
  },
  {
    id: 'people',
    label: 'People',
    path: '/people',
    icon: Users,
    sections: [
      {
        id: 'people-directory',
        label: 'People Directory',
        icon: Users,
        children: [
          { id: 'faculty', label: 'Faculty', path: '/people', hash: 'faculty', icon: GraduationCap },
          { id: 'students', label: 'Students', path: '/people', hash: 'students', icon: Users },
          { id: 'staff', label: 'Staff', path: '/people', hash: 'staff', icon: Briefcase },
        ],
      },
    ],
  },
  {
    id: 'downloads',
    label: 'Download Data',
    path: '/downloads',
    icon: Download,
    sections: [],
  },
  {
    id: 'software',
    label: 'Signal Design Software',
    path: '/software',
    icon: Code2,
    sections: [],
  },
];

export function buildNavHref(item) {
  if (!item.path) return '#';
  const hashParts = [item.hash, item.subHash].filter(Boolean);
  if (hashParts.length === 0) return item.path;
  return `${item.path}#${hashParts.join('-')}`;
}

// Resources developed by the Centre
export const centreResources = [
  'Repository of data for ITS, road safety, urban transport planning, and congestion',
  'Decision support tools and models',
  'Best practices and guidelines',
  'Customized solution methods and advisory services',
  'Continuing education, technology transfer and professional training programmes',
];

// Research, development, education and technology transfer areas
export const researchAreas = [
  { id: 'its', name: 'Intelligent Transportation Systems (ITS)', icon: Navigation },
  { id: 'planning', name: 'Urban Transportation Systems Planning', icon: Building2 },
  { id: 'safety', name: 'Congestion Management and Road Safety', icon: FlaskConical },
];

// Laboratories under the Centre
export const labs = [
  {
    id: 'its-lab',
    name: 'Intelligent Transportation Systems & Traffic Monitoring Lab',
    shortName: 'ITS & Traffic Monitoring Lab',
    description:
      'The state-of-the-art ITS lab currently being set-up will be the first of its kind in the country. The lab will showcase advanced ITS technologies, and enable real-time traffic monitoring and evaluation.',
    capabilities: [
      'Advanced traffic detection technologies: video, radar, infra-red, GPS, and inductive loops',
      'Software for video detection, network and traffic modeling, simulation and optimization',
      'Real-time communication, data transfer and information dissemination',
      'Advanced hardware, traffic controllers, workstations/servers and display devices',
      'Data archiving capabilities including storage servers, storage media, portable systems',
    ],
  },
  {
    id: 'caev-lab',
    name: 'Connected, Autonomous & Electric Vehicles Lab',
    shortName: 'CAEV Lab',
    description: '',
    capabilities: [],
  },
  {
    id: 'simulator-lab',
    name: 'Simulator Lab',
    shortName: 'Simulator Lab',
    description: '',
    capabilities: [],
  },
  {
    id: 'logniti-lab',
    name: 'LogNiti Lab: Sustainable & Resilient Freight Logistics',
    shortName: 'LogNiti Lab',
    description: '',
    capabilities: [],
  },
];

// Faculty associated with the Centre
export const faculty = [
  {
    id: 'karthikks',
    name: 'Dr. Karthik K. Srinivasan',
    designation: 'Professor',
    department: 'Dept. of Civil Engineering',
    interests: 'Travel Demand Modeling, Network Optimization',
    link: 'https://civil.iitm.ac.in/faculty/karthikks/',
  },
  {
    id: 'lelitha',
    name: 'Dr. Lelitha Devi Vanajakshi',
    designation: 'Professor',
    department: 'Dept. of Civil Engineering',
    interests: 'Traffic Flow Modelling, Intelligent Transport Systems, Traffic Operations',
    link: 'https://civil.iitm.ac.in/faculty/lelitha/',
  },
  {
    id: 'bhargava',
    name: 'Dr. Bhargava Rama Chilukuri',
    designation: 'Associate Professor',
    department: 'Dept. of Civil Engineering',
    interests: 'Traffic Flow Theory, Numerical Methods and Simulations to Traffic Control',
    link: 'https://civil.iitm.ac.in/faculty/bhargava/',
  },
  {
    id: 'anmpahwa',
    name: 'Dr. Anmol Pahwa',
    designation: 'Assistant Professor',
    department: 'Dept. of Civil Engineering',
    interests: 'Sustainable Transportation, Freight Transportation, City Logistics',
    link: 'https://civil.iitm.ac.in/faculty/anmpahwa/',
  },
];

export const currentStaff = [
  { name: 'E. Raji', designation: 'Sr. Manager (Network & System Admin)' },
  { name: 'Akshaya V Kumar', designation: 'Project Associate' },
  { name: 'P. Sathish', designation: 'Project Officer' },
  { name: 'S. Rekka', designation: 'Sr. Project Assistant' },
  { name: 'P. Vishnnuu Priya', designation: 'Project Associate' },
  { name: 'M. Bhuvaneswari', designation: 'Project Assistant' },
];

export const formerStaff = [
  { name: 'N. K. Sundararaman', designation: 'Consultant Administrator' },
  { name: 'Santra Thomas', designation: 'Project Associate' },
  { name: 'R. Gayathri Devi', designation: 'Sr. Project Officer' },
  { name: 'S. Amulraj', designation: 'Senior Executive' },
  { name: 'Stephen Daniel Mark', designation: 'Senior Executive' },
  { name: 'Syed Mukhram Ullah', designation: 'Junior Executive' },
  { name: 'R. Deepan Chakravarthy', designation: 'Project Officer' },
  { name: 'N. Poornima', designation: 'Project Officer' },
  { name: 'M. Bharathi Raja', designation: 'Project Officer' },
  { name: 'Shehna Basheer', designation: 'Project Officer' },
  { name: 'Liz Mary Paul', designation: 'Project Officer' },
  { name: 'Vinoth Kumar', designation: 'Project Associate' },
  { name: 'Dr. Anilkumar Bachu', designation: 'Sr. Project Officer' },
  { name: 'Mohammed Bhadhrudeen', designation: 'Project Officer' },
  { name: 'V. V. Bhavesh Reddy', designation: 'Project Associate' },
  { name: 'Shantanu Chakraborty', designation: 'Project Associate' },
  { name: 'S. Sivakirubanandhan', designation: 'Sr. Project Assistant' },
  { name: 'Arivazhagan. G', designation: 'Project Technician' },
  { name: 'V. Harikrishnan', designation: 'Project Officer' },
  { name: 'Sita Rami Reddy', designation: 'Sr. Project Officer' },
  { name: 'S. Saraswathi', designation: 'Sr. Project Officer' },
  { name: 'M. E. Jaikokila', designation: 'Sr. Project Officer' },
  { name: 'Indrajit Ghosh', designation: 'Sr. Project Officer' },
  { name: 'K. Venkatesan', designation: 'Sr. Project Officer' },
  { name: 'A. Gowri', designation: 'Sr. Project Officer' },
  { name: 'J. Sivasubramaniam', designation: 'Sr. Project Officer' },
  { name: 'Sathish Kumar P', designation: 'Sr. Project Officer' },
  { name: 'P. Naga Swetha', designation: 'Sr. Project Officer' },
  { name: 'C. Mineetha', designation: 'Sr. Project Officer' },
  { name: 'Balaji P', designation: 'Project Officer' },
  { name: 'K. R. Vishnu Vardhan', designation: 'Project Officer' },
  { name: 'Uppaiah Bonagiri', designation: 'Project Officer' },
  { name: 'Arul Stephen', designation: 'Project Officer' },
  { name: 'Nerendra Reddy', designation: 'Project Officer' },
  { name: 'Anand Ashokan', designation: 'Project Officer' },
  { name: 'D. Sharan', designation: 'Project Officer' },
  { name: 'M. Shashikanth Menchu', designation: 'Project Officer' },
  { name: 'S. Manipriya', designation: 'Project Officer' },
  { name: 'Rakshith P', designation: 'Project Officer' },
  { name: 'Subodh Kant Dubey', designation: 'Project Officer' },
  { name: 'S. Ravi', designation: 'Project Officer' },
  { name: 'Jithin Raj P. V', designation: 'Project Officer' },
  { name: 'S. Shaik Mohammed Ali', designation: 'Project Officer' },
  { name: 'Alima Jafreen', designation: 'Project Officer' },
  { name: 'Ganesh Ambi Ramakrishnan', designation: 'Project Officer' },
  { name: 'V. Ramesh', designation: 'Project Officer' },
  { name: 'Malavika Anand', designation: 'Project Associate' },
  { name: 'A. Shoba', designation: 'Project Associate' },
  { name: 'R. Dhivahar', designation: 'Project Associate' },
  { name: 'N. Yuvashree', designation: 'Project Associate' },
  { name: 'Vignesh Raja', designation: 'Project Associate' },
  { name: 'Srijith Balakrishnan', designation: 'Project Associate' },
  { name: 'R. D. Balakumaran', designation: 'Project Associate' },
  { name: 'M. Sri Hari Kumaran', designation: 'Project Associate' },
  { name: 'V. S. Shiva', designation: 'Project Associate' },
  { name: 'R. Samraj', designation: 'Project Associate' },
  { name: 'Ashok Kumar', designation: 'Project Associate' },
  { name: 'Satheesh Reddy Mulka', designation: 'Project Associate' },
  { name: 'Aravind', designation: 'Project Associate' },
  { name: 'B. Pavithra', designation: 'Project Associate' },
  { name: 'Padmavathy J', designation: 'Project Associate' },
  { name: 'Amala Mohan', designation: 'Project Associate' },
  { name: 'Sunny Raja Varma. D', designation: 'Project Associate' },
  { name: 'N. Venkatachalam', designation: 'Sr. Project Assistant' },
  { name: 'P. S. Madhan', designation: 'Sr. Project Assistant' },
  { name: 'S. Prabhakaran', designation: 'Project Assistant' },
  { name: 'G. Devi', designation: 'Project Assistant' },
  { name: 'P. C. Achutha Narayanan', designation: 'Project Attendant' },
  { name: 'Sreenidhi', designation: 'Project Associate' },
  { name: 'Vasanth', designation: 'Project Associate' },
  { name: 'P. S. Vishnu Kumar', designation: 'Project Associate' },
  { name: 'Alfred Marshall', designation: 'Project Associate' },
  { name: 'Prasana Kumar', designation: 'Project Associate' },
  { name: 'Priyanka', designation: 'Project Officer' },
  { name: 'Dr. Divya Bharathi', designation: 'Project Officer' },
  { name: 'Dr. Maripani Hema Bindu', designation: 'Project Officer' },
  { name: 'Dipankar Das', designation: 'Project Officer' },
  { name: 'K. Vijayaraj', designation: 'Sr. Project Officer' },
  { name: 'S. Aneesh Fathima', designation: 'Project Associate' },
  { name: 'Gosu Nagaraj', designation: 'Project Officer' },
  { name: 'Indu', designation: 'Project Officer' },
  { name: 'Kiran', designation: 'Project Officer' },
  { name: 'U. Sri Nivasini', designation: 'Project Officer' },
  { name: 'S. Sathvika', designation: 'Project Associate' },
  { name: 'V. M. Rithis Visakan', designation: 'Project Associate' },
  { name: 'S. Manoj Bharadwaj', designation: 'Project Associate' },
  { name: 'T. Srilaksmi Devi', designation: 'Sr. Project Assistant' },
];

// Synthesis Reports — draft synthesis reports completed by the Centre
export const synthesisReports = [
  {
    category: 'Intelligent Transportation Systems (ITS)',
    reports: [
      { id: 'its-synth', title: 'ITS Synthesis Report', fileUrl: '#' },
      { id: 'bus-pred', title: 'Real Time Bus Arrival Time Prediction System', fileUrl: '#' },
      { id: 'archive-data', title: 'Traffic Archive Data Management System', fileUrl: '#' },
      { id: 'sensors-eval', title: 'Development and Evaluation of Traffic Sensors under Indian Traffic Conditions', fileUrl: '#' },
    ],
  },
  {
    category: 'Urban Traffic Congestion',
    reports: [{ id: 'congestion-report', title: 'Report on Traffic Congestion', fileUrl: '#' }],
  },
  {
    category: 'Urban Transportation Planning',
    reports: [{ id: 'planning-challenges', title: 'Urban Transportation Planning Challenges and Issues', fileUrl: '#' }],
  },
  {
    category: 'Advanced Traveller Information System (ATIS) for Indian Cities',
    reports: [{ id: 'atis-after', title: 'After Study Report', fileUrl: '#' }],
  },
];

export const publicationStats = {
  journalPapers: 22,
  journals: [
    'Journal of the Transportation Research Board',
    'International Journal of Recent Trends in Engineering',
    'ASCE Journal of Transportation Engineering',
    'ASCE Journal of Materials in Civil Engineering',
    'Journal of IRC',
    'Indian Highways',
  ],
  conferencePresentations: 25,
  locations: ['USA', 'China', 'India'],
};

// Skill sets sought by the Centre
export const opportunitySkills = [
  'Traffic modellers',
  'Transportation planners',
  'Transportation engineers',
  'System integrators',
  'Wireless communication experts',
  'Programmers',
  'Web application developers',
];

// Sponsoring Agencies
export const sponsors = [
  {
    id: 'moud',
    name: 'Ministry of Urban Development',
    subtitle: 'Government of India',
    abbr: 'MoUD',
  },
  {
    id: 'meity',
    name: 'Ministry of Electronics and Information Technology',
    subtitle: 'Government of India',
    abbr: 'MeitY',
  },
  {
    id: 'moe',
    name: 'Ministry of Education',
    subtitle: 'Government of India',
    abbr: 'MoE',
  },
];
