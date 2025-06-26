'use client'

import { ChevronDown } from 'lucide-react'

interface LearnMoreButtonProps {
  onClick: () => void;
}

export function LearnMoreButton({ onClick }: LearnMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
    >
      <span className="text-sm font-medium text-purple-700">Learn more</span>
    </button>
  )
}

