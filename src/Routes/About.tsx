"use client"

import { Mail, Github, Heart } from "lucide-react"

const techStack = [
  { name: "Next.js", description: "React framework for production" },
  { name: "TypeScript", description: "Type-safe JavaScript" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework" },
  { name: "shadcn/ui", description: "Beautiful UI components" },
  { name: "Lucide React", description: "Beautiful icons" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-white/50  mt-[4rem]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">What is SkillSwap ?

          </h1>
          <p className="text-xl  max-w-2xl mx-auto">
            A platform designed to connect people through skill sharing and collaborative learning.
          </p>
        </div>

        {/* About the Project */}
        <section className="mb-8 border rounded-lg  shadow-sm">
          <header className="flex items-center gap-2 px-6 py-4 border-b">
            <Heart className="h-5 w-5 text-red-500" />
            <h2 className="text-lg font-semibold">About the Project</h2>
          </header>
          <div className="px-6 py-4 text-sm space-y-4 text-white/60">
            <p>
              SkillSwap was created with the vision of building a community where knowledge and skills are freely
              shared. Whether you're a beginner looking to learn something new or an expert wanting to share your
              expertise, SkillSwap provides the platform to connect with like-minded individuals.
            </p>
            <p>
              The platform focuses on creating meaningful connections between learners and teachers, fostering an
              environment where everyone can both teach and learn. From technical skills like programming and design to
              creative pursuits like music and art, SkillSwap welcomes all types of knowledge sharing.
            </p>
            <p>
              This is a demonstration project showcasing modern web development practices and user experience design.
              All skill requests are simulated for demo purposes, but the concept represents a real-world application
              that could facilitate genuine skill exchanges.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-8 border rounded-lg  shadow-sm">
          <header className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Tech Stack</h2>
            <p className="text-sm text-white/60 mt-1">
              Built with modern web technologies for optimal performance and user experience
            </p>
          </header>
          <div className="grid md:grid-cols-2 gap-4 p-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-start gap-3 p-3 rounded-lg ">
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full ring-2 ring-white/10 bg-yellow-400/50 text-white/50">
                  {tech.name}
                </span>
                <p className="text-sm text-white/60">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-8 border rounded-lg shadow-sm">
          <header className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Key Features</h2>
          </header>
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div>
              <h3 className="font-semibold mb-2">For Learners</h3>
              <ul className="space-y-1 text-sm text-white/60 list-disc list-inside">
                <li>Browse skills by category and difficulty level</li>
                <li>Search for specific skills or topics</li>
                <li>View detailed skill descriptions and instructor info</li>
                <li>Request skills from community members</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Teachers</h3>
              <ul className="space-y-1 text-sm text-white/60 list-disc list-inside">
                <li>Create detailed skill offerings</li>
                <li>Manage your skill portfolio</li>
                <li>Set skill levels and session durations</li>
                <li>Connect with eager learners</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border rounded-lg  shadow-sm">
          <header className="flex items-center gap-2 px-6 py-4 border-b">
            <Mail className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Get in Touch</h2>
          </header>
          <div className="p-6">
            <p className="mb-4 text-white/60">
              Have questions, suggestions, or want to contribute to the project? We'd love to hear from you!
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-white/10 transition text-white/60"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
              <a
                href="mailto:hello@skillswap.com"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-white/10 transition text-white/60"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-yellow-400/50 text-white rounded-lg text-lg font-semibold  transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
