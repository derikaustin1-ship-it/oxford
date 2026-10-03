export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string; // School Leadership, Primary, Mathematics, Science, Languages, Social Science, Computer Science, Physical Education
  qualifications: string;
  experience: string;
  image: string;
  bio: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: "ananya-sharma",
    name: "Dr. Ananya Sharma",
    designation: "Principal",
    department: "School Leadership",
    qualifications: "M.Ed., Ph.D. in Educational Leadership",
    experience: "18 Years Experience",
    image: "/images/principal.jpg",
    bio: "Dr. Ananya Sharma brings over 18 years of transformative academic leadership. She is passionate about child-centered pedagogy, innovative curriculum integration, and nurturing an empathetic learning environment."
  },
  {
    id: "rahul-menon",
    name: "Mr. Rahul Menon",
    designation: "Head of Academics",
    department: "School Leadership",
    qualifications: "M.Sc., B.Ed.",
    experience: "15 Years Experience",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    bio: "Mr. Rahul Menon oversees curriculum design, academic standards, and teacher training. He emphasizes experiential learning and interdisciplinary STEM initiatives across middle and senior schools."
  },
  {
    id: "priya-nair",
    name: "Ms. Priya Nair",
    designation: "Senior Mathematics Teacher",
    department: "Mathematics",
    qualifications: "M.Sc. Mathematics, B.Ed.",
    experience: "11 Years Experience",
    image: "/images/priya_nair.jpg",
    bio: "Ms. Priya Nair has more than a decade of experience teaching mathematics and focuses on helping students understand concepts through practical examples, visual proofs, and interactive problem-solving."
  },
  {
    id: "arjun-kumar",
    name: "Mr. Arjun Kumar",
    designation: "Science Teacher (Physics)",
    department: "Science",
    qualifications: "M.Sc. Physics, B.Ed.",
    experience: "9 Years Experience",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    bio: "Mr. Arjun Kumar makes physics engaging through hands-on laboratory experiments and real-world mechanics projects. He mentors students for national science olympiads."
  },
  {
    id: "kavya-iyer",
    name: "Ms. Kavya Iyer",
    designation: "English Educator & Literary Club Coordinator",
    department: "Languages",
    qualifications: "M.A. English Literature, B.Ed.",
    experience: "8 Years Experience",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    bio: "Ms. Kavya Iyer fosters a deep love for literature, public speaking, and creative writing. She leads the school debate club and annual literary festival."
  },
  {
    id: "vivek-raj",
    name: "Mr. Vivek Raj",
    designation: "Computer Science & Robotics Teacher",
    department: "Computer Science",
    qualifications: "M.Tech., B.Ed.",
    experience: "10 Years Experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    bio: "Mr. Vivek Raj introduces students to coding, computational thinking, and AI fundamentals. He guides student teams in building robotics prototypes for inter-school competitions."
  },
  {
    id: "meera-krishnan",
    name: "Ms. Meera Krishnan",
    designation: "Primary School Coordinator",
    department: "Primary",
    qualifications: "M.A. Early Childhood Education, B.Ed.",
    experience: "12 Years Experience",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    bio: "Ms. Meera Krishnan specializes in early childhood development, play-based foundational literacy, and emotional well-being for primary grade learners."
  },
  {
    id: "suresh-anand",
    name: "Mr. Suresh Anand",
    designation: "Social Science Teacher",
    department: "Social Science",
    qualifications: "M.A. History & Civics, B.Ed.",
    experience: "9 Years Experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    bio: "Mr. Suresh Anand brings history and social studies alive through interactive mapping, historical roleplay, and civic awareness projects."
  },
  {
    id: "divya-ramesh",
    name: "Ms. Divya Ramesh",
    designation: "Biology Teacher",
    department: "Science",
    qualifications: "M.Sc. Biology, B.Ed.",
    experience: "7 Years Experience",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
    bio: "Ms. Divya Ramesh leads eco-club initiatives, environmental sustainability programs, and interactive life science laboratory workshops."
  },
  {
    id: "nandita-joseph",
    name: "Ms. Nandita Joseph",
    designation: "Hindi Language Educator",
    department: "Languages",
    qualifications: "M.A. Hindi, B.Ed.",
    experience: "8 Years Experience",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
    bio: "Ms. Nandita Joseph teaches Hindi language, drama, and cultural heritage, focusing on communicative fluency and appreciation of regional art forms."
  },
  {
    id: "karthik-prasad",
    name: "Mr. Karthik Prasad",
    designation: "Physical Education Director",
    department: "Physical Education",
    qualifications: "M.P.Ed. Physical Education",
    experience: "10 Years Experience",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    bio: "Mr. Karthik Prasad promotes sportsmanship, physical wellness, athletics, and team sports coaching across basketball, football, and track events."
  },
  {
    id: "sneha-thomas",
    name: "Ms. Sneha Thomas",
    designation: "Art & Performing Arts Teacher",
    department: "Primary",
    qualifications: "M.F.A. Fine Arts",
    experience: "7 Years Experience",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
    bio: "Ms. Sneha Thomas nurtures creative expression in fine arts, painting, and craft design, guiding students to express their ideas visual arts."
  }
];
