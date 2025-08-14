"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Package, BookOpen, ExternalLink, Eye } from "lucide-react"

const culturalApps = [
  {
    id: 1,
    title: "Estadísticas de Asistencia",
    description: "Visualiza y analiza las estadísticas de asistencia a eventos culturales",
    url: "https://asistencia-cultura.vercel.app/estadisticas",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    category: "Reportes",
    preview: "/estad.png",
  },
  {
    id: 2,
    title: "Gráficas de Asistencia",
    description: "Explora gráficas detalladas y reportes visuales de asistencia",
    url: "https://asistencia-cultura.vercel.app/graficas",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    category: "Analisis",
    preview: "/graf.png",
  },
  {
    id: 3,
    title: "Sistema de Inventario",
    description: "Gestiona el inventario de implementos culturales de la Universidad del Valle",
    url: "https://stock-cultura.vercel.app/",
    icon: Package,
    color: "from-green-500 to-emerald-500",
    category: "Bodega",
    preview: "/bod.png",
  },
  {
    id: 4,
    title: "Bitácora Cultural",
    description: "Sistema de gestión y registro de actividades del área de cultura",
    url: "https://bitacora-area-de-cultura-a6w9.vercel.app/",
    icon: BookOpen,
    color: "from-orange-500 to-red-500",
    category: "Tareas",
    preview: "/bit.png",
  },
]

export default function CulturaHub() {
  const [selectedApp, setSelectedApp] = useState<number | null>(null)
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)

  const handleAppClick = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hub Cultural UV
              </h1>
              <p className="text-gray-600 mt-1">Centro de aplicaciones del área de cultura</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Badge variant="secondary" className="text-sm px-3 py-1">
                4 Aplicaciones Activas
              </Badge>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accede a todas las herramientas culturales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora y utiliza las diferentes aplicaciones del sistema cultural de la Universidad del Valle. Cada
            herramienta está diseñada para optimizar la gestión cultural.
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturalApps.map((app, index) => {
            const Icon = app.icon
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onHoverStart={() => setHoveredApp(app.id)}
                onHoverEnd={() => setHoveredApp(null)}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-0">
                    {/* Preview Image */}
                    <motion.div
                      className="relative h-48 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-20`} />
                      <img
                        src={app.preview || "/placeholder.svg"}
                        alt={`Preview de ${app.title}`}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredApp === app.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: hoveredApp === app.id ? 1 : 0.8 }}
                          className="flex gap-3"
                        >
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 hover:bg-white text-gray-800"
                            onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Vista Previa
                          </Button>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleAppClick(app.url)}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Abrir App
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`p-2 rounded-lg bg-gradient-to-br ${app.color}`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-gray-800 text-lg">{app.title}</h3>
                            <Badge variant="outline" className="text-xs mt-1">
                              {app.category}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{app.description}</p>

                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors bg-transparent"
                          onClick={() => handleAppClick(app.url)}
                        >
                          Acceder a la aplicación
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Preview Modal */}
        <AnimatePresence>
          {selectedApp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedApp(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const app = culturalApps.find((a) => a.id === selectedApp)
                  if (!app) return null

                  return (
                    <>
                      <div className="p-6 border-b">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${app.color}`}>
                              <app.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{app.title}</h3>
                              <p className="text-gray-600 text-sm">{app.description}</p>
                            </div>
                          </div>
                          <Button variant="outline" onClick={() => handleAppClick(app.url)}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Abrir App
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <img
                          src={app.preview || "/placeholder.svg"}
                          alt={`Preview de ${app.title}`}
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white/50 backdrop-blur-sm border-t border-white/20 mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-600">Sistema Cultural - Universidad del Valle</p>
            <p className="text-gray-500 text-sm mt-2">Gestión integral de actividades culturales</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
