'use client'

import { LightbulbIcon, FileTextIcon, PenSquareIcon, Users } from 'lucide-react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"
import { CustomAccordionTrigger } from "@/components/ui/custom-accordion-trigger"
import Hiringprocess from "@/assets/companies/Hiring-Process.webp"

const processSteps = [
  {
    icon: LightbulbIcon,
    title: 'Enhance Your Talent Acquisition',
    description: 'Utilize our AI-driven platform to identify the best candidates effortlessly, saving time and resources.'
  },
  {
    icon: FileTextIcon,
    title: 'Automate Resume Screening',
    description: 'Quickly filter through resumes and shortlist candidates based on your specified criteria, ensuring you focus on the right talent.'
  },
  {
    icon: PenSquareIcon,
    title: 'Seamless Interview Management',
    description: 'Schedule and conduct interviews effortlessly while utilizing our AI tools to evaluate candidates and track their performance.'
  },
  {
    icon: Users,
    title: 'Collaborative Hiring Decisions',
    description: 'Facilitate team collaboration for faster and more informed hiring decisions.'
  }
]

export function ProcessSection() {
  return (
    <section className="py-16 md:py-22 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-900 leading-tight tracking-tight text-center">
          Why Qualifit?
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start justify-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {processSteps.map((step, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <CustomAccordionTrigger className="w-full text-left hover:no-underline focus:outline-none group">
                    <div className="flex items-center w-full p-4 bg-white transition-colors duration-300">
                      <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-5">
                        <step.icon className="w-6 h-6 text-violet-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-data-[state=open]:text-violet-600 transition-colors duration-300 flex-grow">
                        {step.title}
                      </h3>
                    </div>
                  </CustomAccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed pl-[4.25rem]">
                      {step.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative lg:justify-self-end lg:max-w-[580px]">
            <div className="bg-gradient-to-br from-pink-200 via-violet-200 to-violet-300 rounded-3xl p-5 md:p-8">
              <Image
                src={Hiringprocess}
                alt="Platform Interface"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

