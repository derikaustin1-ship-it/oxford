export interface SchoolUpdate {
  id: string;
  date: string;
  category: "Admissions" | "Events" | "Notice";
  title: string;
  summary: string;
  fullContent: string;
}

export const schoolUpdates: SchoolUpdate[] = [
  {
    id: "update-1",
    date: "October 10, 2026",
    category: "Admissions",
    title: "Admissions Open for Academic Year 2026–27",
    summary: "Applications are now open for Pre-Primary through Grade XII. Schedule a campus visit or enquire online.",
    fullContent: "Oxford International School announces the commencement of admission applications for the academic session 2026–27. Parents and guardians interested in enrolling their children for Pre-Primary to Grade XII can submit an online enquiry form or visit the school admissions office during working hours (Monday to Friday, 8:00 AM – 4:00 PM). Early registration is recommended as seats are limited per section to preserve our 25:1 student-teacher ratio."
  },
  {
    id: "update-2",
    date: "October 18, 2026",
    category: "Events",
    title: "Annual Sports Meet & Athletic Championship",
    summary: "Join us for an exciting day celebrating athletic excellence, sportsmanship, and inter-house teamwork.",
    fullContent: "The Annual Sports Meet of Oxford International School will take place on the main sports ground. Students from Grade I to XII will participate in track and field events, relay races, gymnastics, and drill displays. Parents are cordially invited to cheer for their wards and join the opening ceremony hosted by our Physical Education department."
  },
  {
    id: "update-3",
    date: "November 05, 2026",
    category: "Notice",
    title: "Parent Orientation & Academic Progress Programme",
    summary: "Interactive orientation session discussing student development, digital learning tools, and term evaluation.",
    fullContent: "An interactive Parent Orientation Programme will be conducted to discuss holistic child development, modern learning tools, and upcoming academic evaluation milestones. Teachers will share personalized insights into student growth, and parents will have an opportunity to interact with school leadership and class coordinators."
  }
];
