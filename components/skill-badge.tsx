import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300"
      case "Advanced":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300"
      default:
        return ""
    }
  }

  return (
    <Badge variant="outline" className={cn("px-3 py-1 text-sm font-medium", getLevelColor(level))}>
      {name}
    </Badge>
  )
}

