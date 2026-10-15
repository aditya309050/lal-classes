import { 
  CourseItem, 
  EntranceResultRecord, 
  DownloadItem, 
  GalleryPhoto, 
  Notice, 
  Student, 
  Teacher, 
  FeeItem, 
  PaymentTransaction, 
  AdmissionApplication,
  GrievanceRecord
} from '../types';

export const SCHOOL_INFO = {
  name: 'Lal Classes Concept School',
  tagline: 'A CENTRE OF RESULTS MAKERS......! IIT/PMT FOUNDATION SCHOOL',
  trust: 'Devi Lal Educational & Welfare Trust',
  principal: 'Devendra Prasad (Devi Lal)',
  designation: 'Principal & Director',
  affiliation: 'Affiliated to Education Department of Bihar for Class I – VIII',
  registrationNo: '2291386202194120450',
  udiseCode: '10270311205',
  address: 'Musadpur, Chhoti Pahari Road, Behind Sharm Kalyan Maidan, Bihar Sharif (Nalanda), PIN - 803101, Bihar',
  phone: '+91-9304222662',
  receptionistPhone: '8969940709',
  receptionistPhoneDisplay: '+91-8969940709',
  whatsappNumber: '918969940709',
  email: 'lalclassesbs@gmail.com',
  officialEmail: 'info@lalclasses.com',
  facebook: 'https://www.facebook.com/LalClassesConceptSchool',
  twitter: 'https://twitter.com/Lalclasses',
  established: 2017,
  timings: '07:00 AM to 02:30 PM (Day Classes)',
  website: 'http://www.lalclasses.com'
};

export const getReceptionistWhatsappUrl = (customMessage?: string): string => {
  const defaultMsg = 'Hello Lal Classes Reception, I have an inquiry regarding admission and courses.';
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/918969940709?text=${msg}`;
};

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'course-1',
    nr: 1,
    name: 'C.B.S.E (Class III To VIII)',
    type: 'FULL TIME',
    timing: '07:00 AM to 02:30 PM',
    classType: 'DAY CLASS',
    targetExam: 'CBSE Board & Foundation Level Competitions',
    eligibility: 'Students from Class 3 to Class 8',
    description: 'Comprehensive schooling adhering strictly to Bihar Education Department and modern NCERT/CBSE curriculum with foundational concepts in Mathematics, Science, and Languages.',
    keyFeatures: [
      'Concept building through practical & lucid shortcut techniques',
      'Subject experts for each distinct discipline',
      'Regular unit tests & weekly continuous evaluation',
      'Personalized doubt resolution counters'
    ]
  },
  {
    id: 'course-2',
    nr: 2,
    name: 'R.K. MISSION Entrance Preparation',
    type: 'FULL TIME',
    timing: '07:00 AM to 02:30 PM',
    classType: 'DAY CLASS',
    targetExam: 'Ramakrishna Mission Vidyapith / Ashrama Entrance Exams',
    eligibility: 'Class 3, 4, 5 aspirants aiming for Deoghar, Purulia, Narendrapur R.K. Mission',
    description: 'Specialized intensive foundation batch preparing students for the premier Ramakrishna Mission entrance exam known for rigorous moral and academic benchmarks.',
    keyFeatures: [
      'Intensive drill in Advanced Mental Math & Arithmetic',
      'Grammar mastery in English & Hindi',
      'Value-based discipline and character-building orientation',
      'Previous 15 years question papers exhaustive practice'
    ]
  },
  {
    id: 'course-3',
    nr: 3,
    name: 'MILITARY SCHOOL (RMS) Entrance',
    type: 'FULL TIME',
    timing: '07:00 AM to 02:30 PM',
    classType: 'DAY CLASS',
    targetExam: 'Rashtriya Military Schools (RMS) CET (Class VI)',
    eligibility: 'Class 4 & 5 students preparing for RMS Chail, Ajmer, Belgaum, Bengaluru & Dholpur',
    description: 'Focused academic and reasoning curriculum designed to secure top ranks in the RMS Common Entrance Test with specialized physical and personality orientation.',
    keyFeatures: [
      'Comprehensive coverage of Intelligence / Reasoning tests',
      'General Knowledge, Current Affairs & General Science',
      'Speed techniques to solve 200 questions in minimum duration',
      'Mock OMR tests mimicking actual RMS examination atmosphere'
    ]
  },
  {
    id: 'course-4',
    nr: 4,
    name: 'SAINIK SCHOOL Entrance Preparation',
    type: 'FULL TIME',
    timing: '07:00 AM to 02:30 PM',
    classType: 'DAY CLASS',
    targetExam: 'All India Sainik Schools Entrance Examination (AISSEE Class VI)',
    eligibility: 'Class 4 & 5 students (Nalanda Sainik School, Gopalganj, Tilaiya, Rewa, etc.)',
    description: 'Our flagship premier program with historic distinction track records in placing Bihar Sharif scholars in Sainik School Nalanda and across India.',
    keyFeatures: [
      'Complete mastery of Mathematics (50 questions - 150 marks)',
      'Language Proficiency (English/Hindi) & Intelligence reasoning',
      'Specialized shortcut formulas developed by Director Devendra Prasad',
      'Daily 2-hour timed test series with instant analysis'
    ]
  },
  {
    id: 'course-5',
    nr: 5,
    name: 'VANASTHALI & Other Prestigious Schools',
    type: 'FULL TIME',
    timing: '07:00 AM to 02:30 PM',
    classType: 'DAY CLASS',
    targetExam: 'Vanasthali Vidyapith, Birla Vidyamandir Nainital, Scindia, etc.',
    eligibility: 'Girls and boys seeking premier national boarding school entries',
    description: 'Customized grooming batch tailoring preparations to prestigious residential school admissions across India with spoken English and interview prep.',
    keyFeatures: [
      'Holistic preparation covering academic syllabi and viva tests',
      'Spoken English fluency and interview grooming sessions',
      'Creative writing and mental agility training',
      'Small batch size for intensive 1-on-1 mentorship'
    ]
  }
];

export const ENTRANCE_RESULTS_2026: EntranceResultRecord[] = [
  {
    rollNo: 'LCCS-2601',
    studentName: 'Adarsh Raj',
    fatherName: 'Sunil Kumar',
    classLevel: 'Class V',
    marksObtained: 288,
    totalMarks: 300,
    percentage: 96.0,
    rank: 1,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '18 Feb 2026',
    admissionDate: '21 Feb 2026',
    remarks: 'Rank 1 Topper - Selected for Target Class V (Sainik/Military Foundation)'
  },
  {
    rollNo: 'LCCS-2602',
    studentName: 'Priya Kumari',
    fatherName: 'Manoj Prasad',
    classLevel: 'Class V',
    marksObtained: 282,
    totalMarks: 300,
    percentage: 94.0,
    rank: 2,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '18 Feb 2026',
    admissionDate: '21 Feb 2026',
    remarks: 'Rank 2 - Exceptional performance in Mathematics & Intelligence'
  },
  {
    rollNo: 'LCCS-2603',
    studentName: 'Rohan Verma',
    fatherName: 'Rakesh Verma',
    classLevel: 'Class IV',
    marksObtained: 279,
    totalMarks: 300,
    percentage: 93.0,
    rank: 1,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '18 Feb 2026',
    admissionDate: '21 Feb 2026',
    remarks: 'Class IV Topper - Selected for Junior Foundation Batch'
  },
  {
    rollNo: 'LCCS-2604',
    studentName: 'Anurag Kashyap',
    fatherName: 'Deepak Kumar',
    classLevel: 'Class IV',
    marksObtained: 274,
    totalMarks: 300,
    percentage: 91.3,
    rank: 2,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '19 Feb 2026',
    admissionDate: '21 Feb 2026',
    remarks: 'Qualified with Distinction in Arithmetic & Reasoning'
  },
  {
    rollNo: 'LCCS-2605',
    studentName: 'Shreya Patel',
    fatherName: 'Santosh Patel',
    classLevel: 'Class III',
    marksObtained: 285,
    totalMarks: 300,
    percentage: 95.0,
    rank: 1,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '19 Feb 2026',
    admissionDate: '22 Feb 2026',
    remarks: 'Class III Topper - Selected for Learner Foundation Batch'
  },
  {
    rollNo: 'LCCS-2606',
    studentName: 'Shivam Anand',
    fatherName: 'Vinod Kumar',
    classLevel: 'Class III',
    marksObtained: 270,
    totalMarks: 300,
    percentage: 90.0,
    rank: 2,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '19 Feb 2026',
    admissionDate: '22 Feb 2026',
    remarks: 'High Aptitude in Mathematics and General EVS'
  },
  {
    rollNo: 'LCCS-2607',
    studentName: 'Manish Kumar',
    fatherName: 'Arvind Singh',
    classLevel: 'Class V',
    marksObtained: 265,
    totalMarks: 300,
    percentage: 88.3,
    rank: 3,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '18 Feb 2026',
    admissionDate: '21 Feb 2026',
    remarks: 'Qualified for R.K. Mission & Sainik Specialized Group'
  },
  {
    rollNo: 'LCCS-2608',
    studentName: 'Kavya Rani',
    fatherName: 'Dharmendra Kumar',
    classLevel: 'Class IV',
    marksObtained: 261,
    totalMarks: 300,
    percentage: 87.0,
    rank: 3,
    status: 'QUALIFIED',
    testDate: '08 Feb 2026',
    interviewDate: '19 Feb 2026',
    admissionDate: '22 Feb 2026',
    remarks: 'Qualified for Junior Foundation Batch'
  },
  {
    rollNo: 'LCCS-2609',
    studentName: 'Aayush Ranjan',
    fatherName: 'Praveen Ranjan',
    classLevel: 'Class V',
    marksObtained: 242,
    totalMarks: 300,
    percentage: 80.6,
    rank: 8,
    status: 'WAITLISTED',
    testDate: '08 Feb 2026',
    admissionDate: '22 Feb 2026',
    remarks: 'Waitlist Category 1 - Subject to seat vacancy confirmation'
  },
  {
    rollNo: 'LCCS-2610',
    studentName: 'Divyanshu Roy',
    fatherName: 'Birendra Roy',
    classLevel: 'Class III',
    marksObtained: 235,
    totalMarks: 300,
    percentage: 78.3,
    rank: 7,
    status: 'WAITLISTED',
    testDate: '08 Feb 2026',
    admissionDate: '22 Feb 2026',
    remarks: 'Waitlist Category 2 - Contact administrative office'
  }
];

export const DOWNLOADS_DATA: DownloadItem[] = [
  {
    id: 'dl-1',
    title: 'Official School Admission Form (Session 2026-27)',
    category: 'Admission Form',
    fileType: 'PDF',
    fileSize: '237 KB',
    fileUrl: '/live-assets/Admission_Form.pdf',
    previewUrl: '/live-assets/AdmissionNotice_2026.jpg',
    description: 'Official printable PDF admission registration application form for Lal Classes Concept School. Download, print, fill, and submit at administrative counter.'
  },
  {
    id: 'dl-2',
    title: 'Syllabus for Entrance Test - Learner Class III',
    category: 'Entrance Syllabus',
    fileType: 'JPG',
    fileSize: '487 KB',
    fileUrl: '/live-assets/CLASS-III.jpg',
    previewUrl: '/live-assets/CLASS-III.jpg',
    description: 'Official comprehensive subject-wise entrance test syllabus and mark distribution for students aspiring for Learner Class III admission.'
  },
  {
    id: 'dl-3',
    title: 'Syllabus for Entrance Test - Junior Foundation Class IV',
    category: 'Entrance Syllabus',
    fileType: 'JPG',
    fileSize: '603 KB',
    fileUrl: '/live-assets/CLASS-IV.jpg',
    previewUrl: '/live-assets/CLASS-IV.jpg',
    description: 'Detailed syllabus covering Mathematics, English, Hindi, and Environmental Studies for Junior Foundation Class IV entrance test.'
  },
  {
    id: 'dl-4',
    title: 'Syllabus for Entrance Test - Target Class V (Sainik & Military)',
    category: 'Entrance Syllabus',
    fileType: 'JPG',
    fileSize: '503 KB',
    fileUrl: '/live-assets/CLASS-V.jpg',
    previewUrl: '/live-assets/CLASS-V.jpg',
    description: 'Complete rigorous syllabus guidelines for Target Class V competitive preparation, designed for Sainik School, Military School (RMS), and R.K. Mission.'
  },
  {
    id: 'dl-5',
    title: 'Official Admission Notification Notice Poster 2026-27',
    category: 'Notice/Brochure',
    fileType: 'JPG',
    fileSize: '665 KB',
    fileUrl: '/live-assets/AdmissionNotice_2026.jpg',
    previewUrl: '/live-assets/AdmissionNotice_2026.jpg',
    description: 'Full official poster notification highlighting entrance dates, admission guidelines, and registration periods.'
  },
  {
    id: 'dl-6',
    title: 'Official Entrance Exam Result Sheet 2026 (Class III, IV, V)',
    category: 'Notice/Brochure',
    fileType: 'JPG',
    fileSize: '611 KB',
    fileUrl: '/live-assets/Results_2026.jpeg',
    previewUrl: '/live-assets/Results_2026.jpeg',
    description: 'Verified official scanned declaration of results for all candidate batches of Entrance Test 2026.'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Annual Cultural Programme Celebration',
    category: 'Cultural',
    imageUrl: '/live-assets/071221032056.jpg',
    caption: 'Students demonstrating vibrant cultural performances and talent at Lal Classes auditorium.',
    date: 'December 2021 / Annual Fest'
  },
  {
    id: 'gal-2',
    title: 'Grand Saraswati Puja & Vedic Hawan',
    category: 'Celebration',
    imageUrl: '/live-assets/271121032743.jpg',
    caption: 'Faculty and students invoking the blessings of Goddess Saraswati for academic excellence and wisdom.',
    date: 'Basant Panchami Festivity'
  },
  {
    id: 'gal-3',
    title: 'Director Sir Devendra Prasad with Merit Achievers',
    category: 'Leadership',
    imageUrl: '/live-assets/271121030029.jpg',
    caption: 'Principal & Director Devendra Prasad (Devi Lal) felicitating top-ranking scholars in the campus.',
    date: 'Merit Award Ceremony'
  },
  {
    id: 'gal-4',
    title: 'Lal Classes Concept School Campus View',
    category: 'Campus',
    imageUrl: '/live-assets/071221031623.jpg',
    caption: 'Clean, spacious, and dedicated academic complex at Musadpur, Chhoti Pahari Road, Bihar Sharif.',
    date: 'Campus Infrastructure'
  },
  {
    id: 'gal-5',
    title: 'Traditional Folk Dance & Drama Performance',
    category: 'Cultural',
    imageUrl: '/live-assets/271121034039.jpg',
    caption: 'Rich traditional cultural showcase fostering appreciation for regional Indian heritage.',
    date: 'Annual Function'
  },
  {
    id: 'gal-6',
    title: 'Classroom & Study Sessions',
    category: 'Campus',
    imageUrl: '/live-assets/271121034423.jpg',
    caption: 'Engaged pupils immersed in conceptual problem-solving under expert faculty guidance.',
    date: 'Academic Hours'
  },
  {
    id: 'gal-7',
    title: 'Patriotic Songs & Group Chorus',
    category: 'Cultural',
    imageUrl: '/live-assets/271121034155.jpg',
    caption: 'Inspiring patriotic melodies performed by Junior Wing choir.',
    date: 'National Celebration'
  },
  {
    id: 'gal-8',
    title: 'Young Performers on Stage',
    category: 'Cultural',
    imageUrl: '/live-assets/271121025859.jpg',
    caption: 'Budding learners shining on stage with confident drama and recitation presentations.',
    date: 'Cultural Event'
  },
  {
    id: 'gal-9',
    title: 'Modern Academic Building & Administrative Block',
    category: 'Campus',
    imageUrl: '/live-assets/040425040242.jpg',
    caption: 'Administrative counter, principal office, and well-equipped concept training classrooms.',
    date: 'Campus Block'
  }
];

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 'not-1',
    title: 'Admission Notification for Class III, IV & V Session 2026-27',
    category: 'ADMISSION',
    date: '02 Jan 2026',
    summary: 'Registrations are open for session 2026-27 for Learner Class III, Junior Foundation Class IV, and Target Class V.',
    content: `Lal Classes Concept School announces admission for Class III, IV & V for the upcoming academic session 2026-27.
    
Important Dates:
• Form Issuing & Submission: 2nd January 2026 to 2nd February 2026
• Entrance Test Performance Date: 8th February 2026
• Declaration of Test Results: 15th February 2026
• Admission Dates for Selected Candidates: 21st and 22nd February 2026

Forms can be downloaded online or collected directly from the school counter at Musadpur, Chhoti Pahari Road, Bihar Sharif.`,
    important: true,
    fileUrl: '/live-assets/AdmissionNotice_2026.jpg',
    attachmentName: 'AdmissionNotice_2026.jpg'
  },
  {
    id: 'not-2',
    title: 'Entrance Exam Result 2026 Declared (Class - III, IV & V)',
    category: 'EXAMINATION',
    date: '15 Feb 2026',
    summary: 'The entrance test result for Session 2026-27 is officially published. Check scorecard and merit rank.',
    content: `The results of the Entrance Examination held on 8th February 2026 for Class III, IV, and V have been officially declared.
    
Parents of selected candidates are requested to complete the admission formalities on 21st and 22nd February 2026 between 08:00 AM and 03:00 PM along with required documentation:
1. Two passport size photographs of candidate
2. Previous school progress report / marksheet
3. Aadhaar card photocopy of student and parent
4. Birth certificate copy

Waitlisted candidates will be notified from 24th February 2026 depending on vacant seat availability.`,
    important: true,
    fileUrl: '/live-assets/Results_2026.jpeg',
    attachmentName: 'Results_2026.jpeg'
  },
  {
    id: 'not-3',
    title: 'Entrance Test Syllabus Released for Class III, IV, and V',
    category: 'ACADEMIC',
    date: '05 Jan 2026',
    summary: 'Detailed subject-wise syllabus guidelines for the upcoming competitive entrance examination are available for download.',
    content: `Students preparing for the entrance examination can download the official syllabi for Class III (Learner batch), Class IV (Junior Foundation batch), and Class V (Target batch). The test assesses conceptual clarity in Mathematics, Language comprehension, Science, and Mental Ability.`,
    important: false,
    fileUrl: '/live-assets/CLASS-III.jpg',
    attachmentName: 'CLASS-III.jpg'
  },
  {
    id: 'not-4',
    title: 'Daily Class Timings Notice: 07:00 AM to 02:30 PM',
    category: 'GENERAL',
    date: '10 Jan 2026',
    summary: 'Full-time regular day classes schedule and routine guidelines for all enrolled students.',
    content: `All parents and guardians are requested to ensure punctuality. Daily classes for CBSE and competitive entrance foundation batches operate from 07:00 AM to 02:30 PM. Parents must arrange pickup promptly after the final revision bell.`,
    important: false
  }
];

export const INITIAL_GRIEVANCES: GrievanceRecord[] = [
  {
    id: 'grv-1',
    ticketNo: 'LCCS-GRV-2026-104',
    fullName: 'Rameshwar Singh',
    mobileNo: '9304222662',
    subject: 'Inquiry regarding bus route coverage for Sohsarai area',
    category: 'Hostel & Transport',
    message: 'Requesting confirmation whether morning bus pickup covers the Sohsarai bypass stop for Class IV student.',
    submittedAt: '10 Feb 2026',
    status: 'RESOLVED',
    resolutionNotes: 'Transport supervisor contacted parent. Route #3 confirmed for morning 06:20 AM pickup at Sohsarai junction.'
  },
  {
    id: 'grv-2',
    ticketNo: 'LCCS-GRV-2026-109',
    fullName: 'Sunita Devi',
    mobileNo: '9431872110',
    subject: 'Request for duplicate entrance test admit card slip',
    category: 'Entrance Test',
    message: 'Misplaced candidate copy of registration slip for Class V Target batch test.',
    submittedAt: '05 Feb 2026',
    status: 'RESOLVED',
    resolutionNotes: 'Duplicate admit card issued at counter after verifying registration number.'
  }
];

export const INITIAL_TEACHERS: Teacher[] = [
  {
    id: 't-1',
    empId: 'LCCS-DIR-01',
    name: 'Devendra Prasad (Devi Lal)',
    designation: 'Principal & Director',
    subject: 'Mathematics & Conceptual Aptitude',
    qualification: 'M.Sc (Mathematics), B.Ed, Veteran Competitive Pedagogue',
    experience: '22+ Years in IIT/PMT Foundation & Sainik/Military Entrance Preparation',
    phone: '+91-9304222662',
    photo: '/live-assets/dir-photo.png'
  },
  {
    id: 't-2',
    empId: 'LCCS-FAC-02',
    name: 'Er. Rajesh Kumar',
    designation: 'Senior Foundation Mentor',
    subject: 'Mental Ability & Reasoning',
    qualification: 'B.Tech, Specialist in RMS & AISSEE Intelligence modules',
    experience: '12 Years Specialized Reasoning Coaching',
    phone: '+91-9835012345',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 't-3',
    empId: 'LCCS-FAC-03',
    name: 'Dr. Alok Verma',
    designation: 'Faculty - Natural Sciences',
    subject: 'General Science & Environmental Studies',
    qualification: 'M.Sc (Physics), Ph.D',
    experience: '14 Years in Elementary Concept Development',
    phone: '+91-9430123456',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 't-4',
    empId: 'LCCS-FAC-04',
    name: 'Smt. Anjali Kumari',
    designation: 'Senior Language Specialist',
    subject: 'English & Hindi Grammar',
    qualification: 'M.A. (English), B.Ed',
    experience: '10 Years in Entrance Test Language Sections',
    phone: '+91-9122345678',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    id: 'std-1',
    admissionNo: 'LCCS/2026/0142',
    rollNo: '5A-01',
    name: 'Adarsh Raj',
    gender: 'Male',
    dob: '2014-06-12',
    grade: 'Class 5',
    section: 'Target Foundation',
    parentName: 'Sunil Kumar',
    parentPhone: '+91 93042 22662',
    parentEmail: 'sunil.kr@gmail.com',
    address: 'Musadpur, Bihar Sharif, Nalanda - 803101',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
    bloodGroup: 'B+',
    emergencyContact: '+91 93042 22662',
    attendanceRate: 98.2,
    feeDue: 0,
    feePaid: 18500,
    status: 'Active'
  },
  {
    id: 'std-2',
    admissionNo: 'LCCS/2026/0158',
    rollNo: '4A-08',
    name: 'Rohan Verma',
    gender: 'Male',
    dob: '2015-08-20',
    grade: 'Class 4',
    section: 'Junior Foundation',
    parentName: 'Rakesh Verma',
    parentPhone: '+91 94318 72110',
    parentEmail: 'rakesh.verma@yahoo.com',
    address: 'Chhoti Pahari, Bihar Sharif, Nalanda - 803101',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    bloodGroup: 'O+',
    emergencyContact: '+91 94318 72110',
    attendanceRate: 95.5,
    feeDue: 2500,
    feePaid: 15000,
    status: 'Active'
  },
  {
    id: 'std-3',
    admissionNo: 'LCCS/2026/0192',
    rollNo: '3A-04',
    name: 'Shreya Patel',
    gender: 'Female',
    dob: '2016-03-15',
    grade: 'Class 3',
    section: 'Learner Batch',
    parentName: 'Santosh Patel',
    parentPhone: '+91 98350 44556',
    parentEmail: 'santosh.patel@gmail.com',
    address: 'Ranchi Road, Bihar Sharif, Nalanda - 803101',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    bloodGroup: 'A+',
    emergencyContact: '+91 98350 44556',
    attendanceRate: 96.8,
    feeDue: 0,
    feePaid: 16000,
    status: 'Active'
  }
];

export const INITIAL_FEES: FeeItem[] = [
  {
    id: 'fee-1',
    studentId: 'std-1',
    admissionNo: 'LCCS/2026/0142',
    studentName: 'Adarsh Raj',
    grade: 'Class 5 Target Foundation',
    term: 'Term 1 (Session 2026-27)',
    title: 'Tuition & Sainik/Military Foundation Material Fee',
    amount: 18500,
    dueDate: '2026-03-31',
    status: 'PAID',
    paidDate: '2026-02-21',
    receiptNo: 'LCCS-RCP-2026-9021'
  },
  {
    id: 'fee-2',
    studentId: 'std-2',
    admissionNo: 'LCCS/2026/0158',
    studentName: 'Rohan Verma',
    grade: 'Class 4 Junior Foundation',
    term: 'Term 1 (Session 2026-27)',
    title: 'Junior Foundation Academic & Test Series Fee',
    amount: 17500,
    dueDate: '2026-03-31',
    status: 'PENDING'
  },
  {
    id: 'fee-3',
    studentId: 'std-3',
    admissionNo: 'LCCS/2026/0192',
    studentName: 'Shreya Patel',
    grade: 'Class 3 Learner Batch',
    term: 'Term 1 (Session 2026-27)',
    title: 'Class 3 Learner Academic & Study Kit Fee',
    amount: 16000,
    dueDate: '2026-03-31',
    status: 'PAID',
    paidDate: '2026-02-22',
    receiptNo: 'LCCS-RCP-2026-9045'
  }
];

export const INITIAL_TRANSACTIONS: PaymentTransaction[] = [
  {
    id: 'tx-1',
    receiptNo: 'LCCS-RCP-2026-9021',
    orderId: 'ORDER_LCCS_8831',
    paymentId: 'pay_LCCS_Live8831',
    studentId: 'std-1',
    studentName: 'Adarsh Raj',
    admissionNo: 'LCCS/2026/0142',
    grade: 'Class 5 Target Foundation',
    amount: 18500,
    paymentMethod: 'UPI',
    date: '2026-02-21 11:30 AM',
    status: 'SUCCESS',
    feeTitle: 'Tuition & Sainik/Military Foundation Material Fee'
  }
];

export const INITIAL_ADMISSIONS: AdmissionApplication[] = [
  {
    id: 'app-1',
    applicationId: 'LCCS-ADM-2026-081',
    studentName: 'Vivek Ranjan',
    dob: '2014-11-10',
    gender: 'Male',
    gradeApplying: 'Class V',
    targetCourse: 'SAINIK SCHOOL Entrance Preparation',
    parentName: 'Binod Kumar',
    parentEmail: 'binod.kumar@gmail.com',
    parentPhone: '+91 9304222662',
    previousSchool: 'DAV Public School, Bihar Sharif',
    address: 'Near Shram Kalyan Maidan, Bihar Sharif, Nalanda',
    appliedDate: '2026-01-15',
    status: 'VERIFIED'
  }
];
