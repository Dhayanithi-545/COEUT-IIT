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
} from 'lucide-react';

/**
 * Navigation item shape:
 * { id, label, path?, hash?, icon?, description?, children?, sections? }
 *
 * - sections: top-level mega menu columns (level 2)
 * - children: nested flyout items (level 3+)
 */
export const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/about',
    icon: Home,
    description:
      'Centre overview, partner institutes, governance, industry engagement, and contact information.',
    sections: [
      {
        id: 'about-centre',
        label: 'About the Centre',
        icon: Target,
        children: [
          { id: 'overview', label: 'Overview & Mission', path: '/about', hash: 'overview', icon: Target },
          { id: 'partners', label: 'Partner Institutes', path: '/about', hash: 'partners', icon: Building2 },
          { id: 'council', label: 'Governing Council', path: '/about', hash: 'council', icon: ShieldCheck },
        ],
      },
      {
        id: 'stakeholders',
        label: 'For Stakeholders',
        icon: Briefcase,
        children: [
          { id: 'industry', label: 'Industry & Government', path: '/about', hash: 'industry', icon: Briefcase },
          { id: 'students', label: 'Information for Students', path: '/about', hash: 'students', icon: GraduationCap },
        ],
      },
      {
        id: 'news-contact',
        label: 'News & Contact',
        icon: Mail,
        children: [
          { id: 'newsletters', label: 'News & Events', path: '/about', hash: 'newsletters', icon: Newspaper },
          { id: 'contacts', label: 'Contacts & Office', path: '/about', hash: 'contacts', icon: Mail },
        ],
      },
    ],
  },
  {
    id: 'research',
    label: 'Research & Corridors',
    path: '/research',
    icon: FlaskConical,
    description:
      'Sponsored R&D projects, synthesis reports, study corridors, ATIS systems, and research opportunities.',
    sections: [
      {
        id: 'research-programs',
        label: 'Research Programs',
        icon: FlaskConical,
        children: [
          { id: 'projects', label: 'Sponsored Projects', path: '/research', hash: 'projects', icon: FlaskConical },
          { id: 'reports', label: 'Reports & Technical Docs', path: '/research', hash: 'reports', icon: FileText },
          {
            id: 'corridors',
            label: 'Study Corridors',
            path: '/research',
            hash: 'corridors',
            icon: Navigation,
            children: [
              { id: 'chennai-corridors', label: 'Chennai Arterial Corridors', path: '/research', hash: 'corridors' },
              { id: 'national-corridors', label: 'National Corridor Studies', path: '/research', hash: 'corridors' },
              { id: 'corridor-data', label: 'Corridor Data & Reports', path: '/research', hash: 'reports' },
            ],
          },
        ],
      },
      {
        id: 'systems-events',
        label: 'Systems & Events',
        icon: Radio,
        children: [
          {
            id: 'atis',
            label: 'ATIS System',
            path: '/research',
            hash: 'atis',
            icon: Radio,
            children: [
              { id: 'atis-overview', label: 'System Overview', path: '/research', hash: 'atis' },
              { id: 'atis-tools', label: 'Traveler Information Tools', path: '/research', hash: 'atis' },
              { id: 'atis-data', label: 'Real-Time Data Feeds', path: '/research', hash: 'atis' },
            ],
          },
          { id: 'events', label: 'Events & Workshops', path: '/research', hash: 'events', icon: CalendarDays },
          { id: 'opportunities', label: 'Research Opportunities', path: '/research', hash: 'opportunities', icon: Briefcase },
        ],
      },
    ],
  },
  {
    id: 'labs',
    label: 'Laboratories',
    path: '/labs',
    icon: Cpu,
    description:
      'National research facilities for ITS, driving simulation, connected autonomous vehicles, and freight logistics.',
    sections: [
      {
        id: 'its-lab',
        label: 'ITS & Traffic Monitoring Lab',
        icon: Cpu,
        children: [
          { id: 'its-overview', label: 'Overview & Capabilities', path: '/labs', hash: 'its-lab', subHash: 'overview' },
          { id: 'its-hardware', label: 'Hardware Equipment', path: '/labs', hash: 'its-lab', subHash: 'hardware' },
          { id: 'its-software', label: 'Software Suite', path: '/labs', hash: 'its-lab', subHash: 'software' },
        ],
      },
      {
        id: 'simulator-lab',
        label: 'Driving Simulator Lab',
        icon: Gamepad2,
        children: [
          { id: 'sim-overview', label: 'Lab Overview', path: '/labs', hash: 'simulator-lab' },
          {
            id: 'sim-research',
            label: 'Research Areas',
            path: '/labs',
            hash: 'simulator-lab',
            children: [
              { id: 'sim-traffic', label: 'Traffic Flow & Control', path: '/labs', hash: 'simulator-lab' },
              { id: 'sim-behavior', label: 'Driver Behavior Studies', path: '/labs', hash: 'simulator-lab' },
              { id: 'sim-freight', label: 'Freight & Logistics', path: '/labs', hash: 'simulator-lab' },
            ],
          },
        ],
      },
      {
        id: 'caev-lab',
        label: 'CAEV Lab',
        icon: CarFront,
        children: [
          { id: 'caev-overview', label: 'Connected & Autonomous Vehicles', path: '/labs', hash: 'caev-lab' },
          { id: 'caev-v2x', label: 'V2X Communication Systems', path: '/labs', hash: 'caev-lab' },
        ],
      },
      {
        id: 'logniti-lab',
        label: 'LogNiti Freight Lab',
        icon: Truck,
        children: [
          { id: 'logniti-overview', label: 'Freight Logistics Research', path: '/labs', hash: 'logniti-lab' },
          { id: 'logniti-fleet', label: 'Fleet Management Systems', path: '/labs', hash: 'logniti-lab' },
        ],
      },
    ],
  },
  {
    id: 'people',
    label: 'People',
    path: '/people',
    icon: Users,
    description:
      'Faculty coordinators, research scholars, project engineers, and administrative staff at COE-UT.',
    sections: [
      {
        id: 'directory',
        label: 'Directory',
        icon: Users,
        children: [
          { id: 'faculty', label: 'Faculty Members', path: '/people', hash: 'faculty', icon: GraduationCap },
          {
            id: 'students',
            label: 'Research Students',
            path: '/people',
            hash: 'students',
            icon: Users,
            children: [
              { id: 'phd-students', label: 'PhD Research Scholars', path: '/people', hash: 'students' },
              { id: 'mtech-students', label: 'M.Tech & Project Students', path: '/people', hash: 'students' },
            ],
          },
          { id: 'staff', label: 'Technical & Project Staff', path: '/people', hash: 'staff', icon: Briefcase },
        ],
      },
    ],
  },
  {
    id: 'downloads',
    label: 'Downloads & Tools',
    path: '/downloads',
    icon: Download,
    description:
      'Open research datasets, Cyclo Help software tools, and laboratory photo galleries.',
    sections: [
      {
        id: 'resources',
        label: 'Resources',
        icon: Database,
        children: [
          { id: 'datasets', label: 'Data Repositories', path: '/downloads', hash: 'datasets', icon: Database },
          {
            id: 'software',
            label: 'Cyclo Help Software',
            path: '/downloads',
            hash: 'software',
            icon: Code2,
            children: [
              { id: 'cyclo-desktop', label: 'Desktop Application', path: '/downloads', hash: 'software' },
              { id: 'cyclo-docs', label: 'User Documentation', path: '/downloads', hash: 'software' },
              { id: 'cyclo-api', label: 'Analysis API Tools', path: '/downloads', hash: 'software' },
            ],
          },
          { id: 'gallery', label: 'Photo Gallery', path: '/downloads', hash: 'gallery', icon: Images },
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
