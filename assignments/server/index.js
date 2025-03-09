import express from "express";
import cors from "cors";

const app = express();

const PORT = 8000;

app.use(cors());

app.use(express.json());

app.get("/getOverview", (req, res) => {
  const overview = {
    name: "Karanjeet Josan",
    location: "Toronto, ON",
    email: "josan_karan@ymail.com",
    phone: "778-444-2684",
    github: "https://github.com/Karan0josan",
    linkedin: "https://www.linkedin.com/in/karanjosan/",
    summery:
      "A highly motivated and enthusiastic individual with a passion for learning and a strong desire to succeed. I am a currently pursuing an advanced diploma in Computer Programming and Analysis. I have a strong background in customer service and sales, and I am looking to transition into a career in software development. I am a quick learner and a team player who is eager to contribute to a dynamic team and grow as a developer.",
  };
  res.json(overview);
});

app.get("/getEdu", (req, res) => {
  const education = [
    {
      degree: "Computer programming and analysis",
      qualification: "Advance Diploma",
      institution: "Humber College Institute of Technology & Advanced Learning",
      year: "2023 - 2026",
    },
    {
      degree: "Tourism- travel services management",
      qualification: "Diploma",
      institution: "Humber College Institute of Technology & Advanced Learning",
      year: "2016 - 2018",
    },
  ];
  res.json(education);
});

app.get("/getExp", (req, res) => {
  const experience = [
    {
      title: "Courier",
      company: "Starling Innovations",
      year: "Mar 2022-Present",
      description:
        "Experienced delivery professional with strong communication skills, ensuring seamless coordination with dispatchers, warehouse staff, and customers. Committed to excellent customer service, timely B2B deliveries, and efficient route optimization to maximize productivity. Skilled in inventory management, verifying product quantities for accuracy during loading and unloading.",
    },
    {
      title: "Assistant Manager ",
      company: "Fast Fuel and Needs Convenience",
      year: "Mar 2020- Mar 2022",
      description: "Experienced gas station assistant manager with expertise in operations, staff supervision, and inventory management. Skilled in coordinating marketing initiatives, ensuring compliance with safety regulations, and maintaining accurate financial records. Proficient in conducting performance reviews and implementing process improvements for efficient business operations.",
    },
  ];
  res.json(experience);
});
app.get("/getSkills", (req, res) => {
  const skills = [
    "React",
    "Node.js",
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Oracle SQL",
    "Java",
    "React Native",
    "Express",
    "Statistical Analysis",
  ];
  res.json(skills);
});
app.get("/getProjects", (req, res) => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      link: "",
    },
    {
      title: "Project 1",
      description: "Description of project 1",
      link: "",
    },
  ];
});
app.get("/getCertifications", (req, res) => {
  const certifications = [
    {
      name: "certificate 1",
      provider: "",
      year: "",
    },
    {
      name: "certificate 2",
      provider: "",
      year: "",
    },
  ];
  res.json(certifications);
});
// res.send("Welcome to our server");
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
