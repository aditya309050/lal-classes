export type UserRole = 'PUBLIC' | 'STUDENT' | 'PARENT' | 'TEACHER' | 'ADMIN';

export type ActiveView = 
  | 'home' 
  | 'about' 
  | 'courses' 
  | 'admissions' 
  | 'results' 
  | 'downloads' 
  | 'notices' 
  | 'gallery' 
  | 'complain' 
  | 'contact' 
  | 'quick-fee'
  | 'student-portal'
  | 'admin-portal';

export interface CourseItem {
  id: string;
  nr: number;
  name: string;
  type: string;
  timing: string;
  classType: string;
  targetExam: string;
  eligibility: string;
  description: string;
  keyFeatures: string[];
}

export interface EntranceResultRecord {
  rollNo: string;
  studentName: string;
  fatherName: string;
  classLevel: string;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  rank: number;
  status: 'QUALIFIED' | 'WAITLISTED' | 'NOT_QUALIFIED';
  testDate: string;
  interviewDate?: string;
  admissionDate?: string;
  remarks: string;
}

export interface GrievanceRecord {
  id: string;
  ticketNo: string;
  fullName: string;
  mobileNo: string;
  subject: string;
  category: 'Academic' | 'Administration' | 'Entrance Test' | 'Hostel & Transport' | 'Other';
  message: string;
  submittedAt: string;
  status: 'SUBMITTED' | 'UNDER_REVIEW' | 'RESOLVED';
  resolutionNotes?: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Admission Form' | 'Entrance Syllabus' | 'Sample Paper' | 'Notice/Brochure';
  fileType: 'PDF' | 'JPG';
  fileSize: string;
  fileUrl: string;
  previewUrl: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Cultural' | 'Celebration' | 'Campus' | 'Leadership';
  imageUrl: string;
  caption: string;
  date?: string;
}

export interface Student {
  id: string;
  admissionNo: string;
  rollNo: string;
  name: string;
  gender: 'Male' | 'Female';
  dob: string;
  grade: string;
  section: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  photo: string;
  bloodGroup: string;
  emergencyContact: string;
  attendanceRate: number;
  feeDue: number;
  feePaid: number;
  status: 'Active' | 'Inactive';
}

export interface Teacher {
  id: string;
  empId: string;
  name: string;
  designation: string;
  subject: string;
  qualification: string;
  experience: string;
  phone: string;
  photo: string;
}

export interface FeeItem {
  id: string;
  studentId: string;
  admissionNo: string;
  studentName: string;
  grade: string;
  term: string;
  title: string;
  amount: number;
  dueDate: string;
  status: 'PAID' | 'PENDING' | 'OVERDUE';
  paidDate?: string;
  receiptNo?: string;
}

export interface PaymentTransaction {
  id: string;
  receiptNo: string;
  orderId: string;
  paymentId: string;
  studentId: string;
  studentName: string;
  admissionNo: string;
  grade: string;
  amount: number;
  paymentMethod: 'UPI' | 'Credit Card' | 'Debit Card' | 'Net Banking';
  date: string;
  status: 'SUCCESS' | 'FAILED';
  feeTitle: string;
}

export interface Notice {
  id: string;
  title: string;
  category: 'ADMISSION' | 'EXAMINATION' | 'ACADEMIC' | 'GENERAL';
  date: string;
  summary: string;
  content: string;
  important: boolean;
  fileUrl?: string;
  attachmentName?: string;
}

export interface AdmissionApplication {
  id: string;
  applicationId: string;
  studentName: string;
  dob: string;
  gender: string;
  gradeApplying: string;
  targetCourse: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  previousSchool: string;
  address: string;
  appliedDate: string;
  status: 'SUBMITTED' | 'VERIFIED' | 'ADMITTED';
}
