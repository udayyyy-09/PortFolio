import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Uday Chaudhary
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <Button asChild size="sm">
              <a href="/New_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4 text-white" /> Resume
              </a>
            </Button>
          </div>
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-background">
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Badge variant="outline" className="px-3 py-1 text-sm">
                    Frontend Developer
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Uday Chaudhary
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                    Creative and detail-oriented Frontend Developer specializing
                    in React.js and Tailwind CSS
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#projects">
                      View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/New_Resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                </div>
                <div className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <a
                      href="mailto:udaychaudhary419@gmail.com"
                      className="hover:text-primary"
                    >
                      udaychaudhary419@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <a href="tel:+918057909991" className="hover:text-primary">
                      +91 8057909991
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Greater Noida, India</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 p-1 shadow-2xl">
                <div className="h-full w-full rounded-full bg-white p-6 dark:bg-gray-900">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-50 dark:bg-gray-800">
                    <span className="text-7xl font-bold text-blue-600 dark:text-blue-400">
                      UC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_40%)]"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About Me
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  My background, education, and passion for web development
                </p>
              </div>
              <div className="space-y-6 text-lg">
                <p>
                I'm a Frontend Developer skilled in React.js, JavaScript, and Tailwind CSS, with a strong focus on building responsive, user-friendly web applications. I also have a basic understanding of backend technologies and strong problem-solving skills, enabling me to collaborate on full-stack projects. I'm passionate about delivering impactful solutions, especially in fast-paced environments like hackathons.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science & Engineering
                  at Bennett University (2023-2027), I maintain a strong
                  academic record with a CGPA of 8.69/10. I completed my Senior
                  Secondary (XII) CBSE Science education in 2023 with 91.00%.
                </p>
                <p>
                  I enjoy creating visually appealing and interactive
                  interfaces, utilizing UI animations and modern design
                  principles. My goal is to build applications that not only
                  look great but also provide seamless user experiences.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        B.Tech, Computer Science & Engineering
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Bennett University • 2023-2027
                      </p>
                      <p className="text-sm">CGPA: 8.69/10</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Senior Secondary (XII), CBSE Science
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        2023
                      </p>
                      <p className="text-sm">Percentage: 91.00%</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5" />
                      <a
                        href="https://github.com/udayyyy-09"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Profile
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5" />
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-gray-50 py-16 dark:bg-gray-900 scroll-mt-20"
        >
          <div className="container">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  A showcase of my recent development work
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <ProjectCard
                  title="TripMate - AI-Powered Travel Planner"
                  date="Jan 2025 - Present"
                  description="Designed and implemented a fully responsive landing page using React.js and Tailwind CSS, effectively showcasing TripMate's AI-driven features to attract and engage potential users."
                  image="/TripSS.png?height=400&width=600"
                  tags={[
                    "React.js",
                    "Tailwind CSS",
                    "Vite",
                    "shadcn UI",
                    "UI Animations",
                  ]}
                  points={[
                    "Currently developing the Create-Trip page, emphasizing user-friendly input forms, intuitive navigation, and a seamless user experience",
                    "Leveraged UI animations and modern design principles to create a visually appealing and interactive interface",
                    "Utilized shadcn UI for reusable and customizable components, ensuring consistency and scalability across the application",
                    "Built with Vite for fast development and optimized performance",
                  ]}
                  githubLink="https://github.com/udayyyy-09/tripplanner"
                />
                <ProjectCard
                  title="Supply Link - Supplier Interaction Portal"
                  date="Jan 2025 - Present"
                  description="Hackathon project (Innovate 2025) developed in 48 hours as a Frontend Developer, creating a centralized portal for manufacturing suppliers."
                  image="/portalSS (2).png?height=400&width=600"
                  tags={[
                    "React.js",
                    "Tailwind CSS",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "RESTful API",
                  ]}
                  points={[
                    "Designed and developed the frontend of a centralized portal using React.js and Tailwind CSS, delivering a responsive and intuitive user interface for seamless interaction",
                    "Built a robust backend with Node.js and Express, integrating RESTful APIs for real-time inventory and order status updates, ensuring accurate and dynamic data display",
                    "Leveraged MongoDB for efficient data storage and retrieval, and implemented real-time notifications to enhance user engagement and operational efficiency",
                  ]}
                  githubLink="https://github.com/udayyyy-09/suppLink"
                />
                <ProjectCard
                  title="Interactive Quiz Platform"
                  date="Feb 2025 - Present"
                  description="Built a dynamic quiz platform for users to attempt quizzes, receive instant feedback, and track progress."
                  image="/QuizSS.png?height=400&width=600"
                  tags={["React", "IndexedDB", "Recharts"]}
                  points={[
                    "Features: Quiz creation (MCQ & fill-in-the-blank), timer-based quizzes (30s/question), instant feedback, scoreboard, and attempt history with detailed analysis",
                    "Tech Stack: React, IndexedDB (offline storage), Recharts (analytics)",
                    "Achievement: Implemented IndexedDB for persistent quiz history, enhancing user experience",
                  ]}
                  liveLink="https://interactive-quiz-indol.vercel.app/"
                  githubLink="https://github.com/udayyyy-09/QuizForm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Skills & Technologies
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  The tools and technologies I work with
                </p>
              </div>
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="HTML" level="Advanced" />
                    <SkillBadge name="JavaScript" level="Advanced" />
                    <SkillBadge name="React.js" level="Advanced" />
                    <SkillBadge name="Tailwind CSS" level="Advanced" />
                    <SkillBadge name="UI Animations" level="Intermediate" />
                    <SkillBadge name="Responsive Design" level="Advanced" />
                    <SkillBadge name="shadcn UI" level="Intermediate" />
                    <SkillBadge name="Vite" level="Intermediate" />
                  </div>
                </TabsContent>
                <TabsContent value="backend" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Node.js" level="Intermediate" />
                    <SkillBadge name="Express" level="Intermediate" />
                    <SkillBadge name="IndexedDB" level="Intermediate" />
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Git" level="Intermediate" />
                    <SkillBadge name="GitHub" level="Intermediate" />
                    <SkillBadge name="VS Code" level="Advanced" />
                    <SkillBadge name="Chrome DevTools" level="Intermediate" />
                  </div>
                </TabsContent>
                <TabsContent value="other" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="UI/UX Design" level="Intermediate" />
                    <SkillBadge name="Problem Solving" level="Advanced" />
                    <SkillBadge name="Team Collaboration" level="Advanced" />
                    <SkillBadge name="Hackathons" level="Intermediate" />
                    <SkillBadge name="C++" level="Intermediate" />
                  </div>
                </TabsContent>
              </Tabs>
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
                <h3 className="mb-4 text-xl font-semibold text-blue-700 dark:text-blue-300">
                  My Development Philosophy
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  I believe in creating web applications that are not only
                  visually appealing but also provide exceptional user
                  experiences. I focus on writing clean, maintainable code and
                  staying updated with the latest web technologies and best
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gray-50 py-16 dark:bg-gray-900 scroll-mt-20"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Get In Touch
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Interested in working together? Let's connect!
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Feel free to reach out through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:udaychaudhary419@gmail.com"
                          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                        >
                          udaychaudhary419@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a
                          href="tel:+918057909991"
                          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                        >
                          +91 8057909991
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm">Greater Noida, India</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <a
                          href="https://github.com/udayyyy-09"
                          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github.com/udayyyy-09
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Uday Chaudhary. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/udayyyy-09"
              className="text-gray-500 hover:text-primary dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:udaychaudhary419@gmail.com"
              className="text-gray-500 hover:text-primary dark:text-gray-400"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
