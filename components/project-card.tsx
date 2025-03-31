import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  date: string
  description: string
  image: string
  tags: string[]
  points: string[]
  githubLink?: string
  liveLink?: string
}

export function ProjectCard({ title, date, description, image, tags, points, githubLink, liveLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{date}</CardDescription>
          </div>
          <div className="flex gap-3 ">
            {githubLink && (
              <Button variant="outline" size="icon" asChild>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 " />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            )}
            {liveLink && (
              <Button variant="outline" size="icon" asChild>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 " />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Key Features:</h4>
          <ul className="ml-5 list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

