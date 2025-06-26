'use client'

import { FileText, Mic, BarChart3, Briefcase, MessageSquare, Infinity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const features = [
  {
    title: 'ATS-Friendly Resume Builder',
    description: 'Create a professional, ATS-optimized resume to increase your chances of getting hired.',
    icon: FileText
  },
  {
    title: 'AI-Powered Resume Analysis',
    description: 'Get instant feedback on your resume’s strengths and weaknesses with AI-driven insights.',
    icon: Mic
  },
  {
    title: 'Role-Specific Assessments',
    description: 'Take industry-specific skill assessments to showcase your expertise to recruiters.',
    icon: BarChart3
  },
  {
    title: 'Self-Introduction Preparation',
    description: 'Master the perfect self-introduction to confidently present yourself in interviews.',
    icon: Briefcase
  },
  {
    title: 'Mock AI Interviews',
    description: 'Practice with AI-driven mock interviews, get evaluated, and improve your performance.',
    icon: MessageSquare
  },
  {
    title: 'Upload, Unlimited Opportunities',
    description: 'Upload your resume once and let AI do the rest.',
    icon: Infinity,
    cta: true
  }
]

export default function FeaturesSection() {
  const router = useRouter();
  
  return (
    <section className="py-16 md:py-24 bg-white" id="features-section">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className="text-purple-600 font-medium mb-3 sm:mb-4 tracking-wide text-lg sm:text-2xl">
            Get Job-Ready with AI-Powered Career Tools
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Boost Your Hiring Potential
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl bg-white transition-all duration-300 ${
                feature.cta
                  ? 'bg-gradient-to-br from-pink-50 to-purple-50 shadow-lg hover:shadow-xl'
                  : 'border border-gray-100 shadow-sm hover:shadow-md'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">{feature.description}</p>
              {feature.cta && (
                <Button
                  variant="gradient"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-lg"
                  onClick={() => { router.push("/app/register") }}
                >
                  Upload Resume
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
