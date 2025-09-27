"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, MessageCircle, Shield, Heart, Users, Globe, Lightbulb } from "lucide-react"
import { useEffect, useState } from "react"

const netiquetteRules = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Sé Respetuoso",
    description: "Trata a otros como te gustaría ser tratado",
    dos: ["Usa un lenguaje cortés", "Respeta las opiniones diferentes", "Saluda y despídete apropiadamente"],
    donts: ["No uses lenguaje ofensivo", "Evita los insultos personales", "No grites (MAYÚSCULAS)"],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Protege tu Privacidad",
    description: "Mantén segura tu información personal",
    dos: ["Usa contraseñas seguras", "Verifica antes de compartir", "Configura tu privacidad"],
    donts: ["No compartas datos personales", "Evita información sensible", "No publiques ubicaciones"],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Piensa Antes de Publicar",
    description: "Reflexiona sobre tus palabras",
    dos: ["Lee antes de enviar", "Considera el contexto", "Sé empático"],
    donts: ["No publiques con ira", "Evita contenido hiriente", "No difundas rumores"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Respeta las Comunidades",
    description: "Cada espacio tiene sus propias reglas",
    dos: ["Lee las normas del grupo", "Mantente en el tema", "Contribuye positivamente"],
    donts: ["No hagas spam", "Evita el contenido irrelevante", "No monopolices conversaciones"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Verifica la Información",
    description: "Combate la desinformación",
    dos: ["Verifica las fuentes", "Cita referencias", "Comparte contenido confiable"],
    donts: ["No difundas noticias falsas", "Evita información sin verificar", "No creas todo lo que lees"],
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Sé Constructivo",
    description: "Aporta valor a las conversaciones",
    dos: ["Ofrece ayuda útil", "Comparte conocimiento", "Fomenta el diálogo"],
    donts: ["No seas destructivo", "Evita comentarios vacíos", "No busques solo atención"],
  },
]

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const geometricShapes = [
    // Slow
    { id: 1, size: 200, left: 10, top: 20, speed: 0.1, shape: "circle", color: "bg-primary/5" },
    { id: 2, size: 150, left: 80, top: 60, speed: 0.1, shape: "square", color: "bg-accent/5" },
    { id: 3, size: 100, left: 60, top: 10, speed: 0.1, shape: "triangle", color: "bg-chart-4/5" },

    // Medium
    { id: 4, size: 120, left: 20, top: 70, speed: 0.2, shape: "circle", color: "bg-primary/8" },
    { id: 5, size: 80, left: 70, top: 30, speed: 0.2, shape: "square", color: "bg-accent/8" },
    { id: 6, size: 60, left: 40, top: 80, speed: 0.2, shape: "triangle", color: "bg-chart-4/8" },

    // Fast
    { id: 7, size: 40, left: 85, top: 15, speed: 0.3, shape: "circle", color: "bg-primary/10" },
    { id: 8, size: 30, left: 15, top: 45, speed: 0.3, shape: "square", color: "bg-accent/10" },
    { id: 9, size: 25, left: 90, top: 85, speed: 0.3, shape: "triangle", color: "bg-chart-4/10" },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {geometricShapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.color} transition-transform duration-75 ease-out`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            transform: `translateY(${scrollY * shape.speed}px)`,
            borderRadius: shape.shape === "circle" ? "50%" : shape.shape === "triangle" ? "0" : "8px",
            clipPath: shape.shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
          }}
        />
      ))}

      {/* Deco lines */}
      <div
        className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        style={{
          left: "25%",
          top: "10%",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <div
        className="absolute w-px h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        style={{
          right: "30%",
          top: "40%",
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />
      <div
        className="absolute w-px h-40 bg-gradient-to-b from-transparent via-chart-4/20 to-transparent"
        style={{
          left: "75%",
          top: "70%",
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />
    </div>
  )
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      size: number
      left: number
      top: number
      animationDelay: number
      animationDuration: number
      color: string
    }>
  >([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 4,
      animationDuration: Math.random() * 3 + 4,
      color: i % 3 === 0 ? "bg-primary/40" : i % 3 === 1 ? "bg-accent/40" : "bg-chart-4/40",
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full animate-pulse`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.animationDuration}s ease-in-out infinite`,
            animationDelay: `${particle.animationDelay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default function NetiquetteInfographic() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParallaxBackground />
      <FloatingParticles />

      <div className="fixed inset-0 bg-background/20 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Guía Digital
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="text-primary">net</span>
            <span className="text-foreground">iqueta</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Las reglas esenciales para una convivencia digital respetuosa y constructiva
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {netiquetteRules.map((rule, index) => (
            <Card
              key={index}
              className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">{rule.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm text-primary">Sí hacer</span>
                  </div>
                  <ul className="space-y-1">
                    {rule.dos.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-destructive" />
                    <span className="font-medium text-sm text-destructive">No hacer</span>
                  </div>
                  <ul className="space-y-1">
                    {rule.donts.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-destructive rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-card/40 backdrop-blur-sm border-border/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{"Juntos creamos un internet mejor"}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
              La netiqueta no son solo reglas, son la base para construir comunidades digitales más inclusivas,
              respetuosas y enriquecedoras para todos.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
