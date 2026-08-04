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

export const hardwareEquipment = [
  {
    id: "gps-buses",
    name: "GPS in MTC Buses",
    iconType: "Satellite",
    count: "40 Units Procured",
    description: "Global positioning system navigation providing reliable location and time data in all weather conditions. Forms probe-vehicle sensors for real-time speed, latitude, longitude, and travel time monitoring."
  },
  {
    id: "bluetooth-receivers",
    name: "Bluetooth Receivers",
    iconType: "Bluetooth",
    count: "2 Units Procured",
    description: "Detects Bluetooth-enabled vehicles to record travel times between fixed locations, calculating space-mean speed for real-time traffic management."
  },
  {
    id: "video-cameras",
    name: "Video Cameras",
    iconType: "Camera",
    count: "2 Units Procured",
    description: "High-resolution cameras used for traffic data collection, volume counts, headway measurement, and automated incident detection."
  },
  {
    id: "traficam-collect-r",
    name: "Traficam Collect - R",
    iconType: "Video",
    count: "Procured",
    description: "Virtual loop-based video sensor with embedded processing hardware for automatic incident detection, traffic data acquisition, and intersection control."
  },
  {
    id: "tirtl",
    name: "Tirtl (Infra-Red Traffic Logger)",
    iconType: "Scan",
    count: "Procured",
    description: "Multi-purpose infra-red traffic sensor serving as traffic counter, speed sensor, red-light camera trigger, heavy vehicle tracker, and over-height detector."
  },
  {
    id: "wavetronix",
    name: "Wavetronix Smart Sensor",
    iconType: "Radar",
    count: "Procured",
    description: "Radar-based vehicle detection system measuring speed, position, direction, and lane occupancy for moving and stationary vehicles."
  },
  {
    id: "loop-detector",
    name: "Loop Detector for Mixed Traffic",
    iconType: "Cpu",
    count: "Experimental (IIT Madras)",
    description: "Custom electromagnetic inductive loop system designed by an interdisciplinary team at IIT Madras specifically for non-lane-based heterogeneous traffic."
  }
];

export const softwareTools = [
  {
    name: "TRANSYT",
    category: "Traffic Signal & Network Optimization",
    description: "Traffic Network Study Tool used to evaluate and optimize coordinated signal networks by penalizing vehicle stops and delays."
  },
  {
    name: "VISSIM",
    category: "Microscopic Simulation",
    description: "Microscopic multi-modal traffic flow simulation software developed by PTV AG (Germany) for detailed driver behavior and network analysis."
  },
  {
    name: "CORSIM",
    category: "Microscopic Traffic Simulation",
    description: "Comprehensive traffic simulation package for integrated signalized surface streets and freeway corridors."
  },
  {
    name: "TransCAD",
    category: "GIS & Travel Demand Planning",
    description: "GIS-based transportation planning software supporting the traditional 4-step planning process, network routing, and public transit modeling."
  },
  {
    name: "Cube",
    category: "Transportation Forecasting",
    description: "Flexible transportation modeling suite supporting scripting for travel demand forecasting and land-use transport interaction."
  },
  {
    name: "Dynasmart",
    category: "Dynamic Traffic Assignment (DTA)",
    description: "Supports network planning and traffic operations decisions, combining dynamic network assignment and traffic simulation."
  },
  {
    name: "HDM4",
    category: "Pavement Management",
    description: "Highway Development and Management tool for pavement asset maintenance, budget prioritization, and life-cycle economic analysis."
  },
  {
    name: "mxRoad",
    category: "Geometric Road Design",
    description: "Bentley string-based 3D modeling tool for rapid, precise highway alignment design and detailed drafting automation."
  },
  {
    name: "SPSS",
    category: "Statistical Analysis",
    description: "Statistical analysis package for descriptive statistics, multivariate regression, and traveler choice group predictions."
  },
  {
    name: "Gauss",
    category: "Mathematical & Econometric Modeling",
    description: "Matrix programming language for complex statistical estimation, econometrics, constrained optimization, and discrete choice models."
  },
  {
    name: "GAMS",
    category: "Mathematical Programming",
    description: "General Algebraic Modeling System for high-level mathematical programming and large-scale optimization models."
  },
  {
    name: "CPLEX",
    category: "Optimization Engine",
    description: "High-performance mathematical programming solver for linear, mixed-integer, and quadratic optimization problems."
  },
  {
    name: "GPS Tracking Software",
    category: "Spatial Data Processing",
    description: "Custom software for decoding GPS coordinates, filtering speed trajectories, and reconstructing traveler routes."
  },
  {
    name: "AIMSUN",
    category: "Multi-scale Traffic Simulation",
    description: "Traffic modeling software offering integrated microscopic, mesoscopic, and macroscopic traffic simulation with DTA capabilities."
  },
  {
    name: "Dynameq",
    category: "Mesoscopic DTA",
    description: "Equilibrium dynamic traffic assignment software with embedded mesoscopic simulation for large-scale urban networks."
  },
  {
    name: "MCME (Manual Count Made Easy)",
    category: "In-House Video Extraction Tool (IIT Madras)",
    isCustom: true,
    description: "GUI tool developed at IIT Madras using speech-recognition principles to accelerate video-based manual traffic counts.",
    downloads: [
      { title: "MCME User Manual (PDF)", fileUrl: "#" },
      { title: "MCME V2 User Manual (PDF)", fileUrl: "#" }
    ]
  }
];
