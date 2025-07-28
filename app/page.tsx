"use client"

import { useEffect, useState } from "react"
import { Car, Zap, Sparkles, Rocket, Star, Crown, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function UltimateFuturisticCongratulations() {
  const [showHologram, setShowHologram] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [celebrationMode, setCelebrationMode] = useState(false)
  const [hologramMode, setHologramMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [explosionParticles, setExplosionParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [imageLoaded, setImageLoaded] = useState({ cousin: false, cultus: false })

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 1500)
    const timer2 = setTimeout(() => setShowHologram(true), 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // CELEBRATION MODE ACTIVATION
  const activateCelebration = () => {
    setCelebrationMode(!celebrationMode)

    // Create explosion particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }))
    setExplosionParticles(newParticles)

    // Clear particles after animation
    setTimeout(() => setExplosionParticles([]), 3000)
  }

  // HOLOGRAM MODE ACTIVATION
  const activateHologram = () => {
    setHologramMode(!hologramMode)
  }

  const createMegaParticles = () => {
    return Array.from({ length: celebrationMode ? 200 : 50 }, (_, i) => (
      <div
        key={i}
        className={`absolute rounded-full ${celebrationMode ? "w-3 h-3 animate-ping" : "w-1 h-1 animate-pulse"}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `linear-gradient(45deg, 
            hsl(${Math.random() * 360}, 100%, 50%), 
            hsl(${Math.random() * 360}, 100%, 70%))`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${celebrationMode ? 0.5 + Math.random() * 1 : 2 + Math.random() * 2}s`,
        }}
      />
    ))
  }

  const createHolographicElements = () => {
    if (!hologramMode) return null

    return Array.from({ length: 30 }, (_, i) => (
      <div
        key={i}
        className="absolute border-2 animate-pulse opacity-30"
        style={{
          width: `${20 + Math.random() * 80}px`,
          height: `${20 + Math.random() * 80}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          borderColor: `hsl(${180 + Math.random() * 60}, 100%, 50%)`,
          transform: `rotate(${Math.random() * 360}deg)`,
          animationDelay: `${Math.random() * 2}s`,
          borderRadius: Math.random() > 0.5 ? "50%" : "0%",
        }}
      />
    ))
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
        celebrationMode ? "bg-gradient-to-br from-yellow-500 via-red-500 to-purple-500" : "bg-black"
      }`}
    >
      {/* MEGA CELEBRATION BACKGROUND */}
      {celebrationMode && (
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 animate-spin-slow" />
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-500/20 via-green-500/20 to-blue-500/20 animate-spin-reverse" />
        </div>
      )}

      {/* HOLOGRAM BACKGROUND */}
      {hologramMode && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,255,255,0.1)_49%,rgba(0,255,255,0.1)_51%,transparent_52%)] bg-[length:20px_20px] animate-scan" />
        </div>
      )}

      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          celebrationMode || hologramMode ? "opacity-50" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-cyan-900/50 animate-pulse" />
      </div>

      {/* Enhanced Grid Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${hologramMode ? "opacity-80" : "opacity-30"}`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* MEGA Mouse Follower */}
      <div
        className={`fixed pointer-events-none z-10 transition-all duration-100 ${
          celebrationMode ? "w-[500px] h-[500px] opacity-40" : "w-96 h-96 opacity-20"
        }`}
        style={{
          left: mousePosition.x - (celebrationMode ? 250 : 192),
          top: mousePosition.y - (celebrationMode ? 250 : 192),
          background: celebrationMode
            ? "radial-gradient(circle, rgba(255,255,0,0.5) 0%, rgba(255,0,255,0.3) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)",
        }}
      />

      {/* MEGA PARTICLE SYSTEM */}
      <div className="absolute inset-0 pointer-events-none">{createMegaParticles()}</div>

      {/* HOLOGRAPHIC ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">{createHolographicElements()}</div>

      {/* EXPLOSION PARTICLES */}
      {explosionParticles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-ping pointer-events-none z-30"
          style={{
            left: particle.x,
            top: particle.y,
            animationDuration: "0.5s",
          }}
        />
      ))}

      {/* Floating Geometric Shapes - ENHANCED */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 left-20 border-2 border-cyan-400/30 rotate-45 transition-all duration-1000 ${
            celebrationMode ? "w-48 h-48 animate-spin border-yellow-400" : "w-32 h-32 animate-spin-slow"
          }`}
        />
        <div
          className={`absolute top-40 right-32 border-2 border-purple-400/30 transition-all duration-1000 ${
            hologramMode ? "w-32 h-32 animate-bounce border-cyan-400" : "w-24 h-24 animate-bounce"
          }`}
        />
        <div
          className={`absolute bottom-32 left-16 border-2 border-pink-400/30 rotate-12 transition-all duration-1000 ${
            celebrationMode ? "w-36 h-36 animate-spin-reverse border-green-400" : "w-20 h-20 animate-pulse"
          }`}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <Card
          className={`w-full max-w-5xl backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-1000 ${
            celebrationMode
              ? "bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-purple-500/20 border-4 border-yellow-400 shadow-yellow-500/50"
              : hologramMode
                ? "bg-black/20 border-4 border-cyan-400 shadow-cyan-500/50"
                : "bg-black/40 border-2 border-cyan-400/30 shadow-cyan-500/20"
          }`}
        >
          {/* MEGA Card Effects */}
          {celebrationMode && (
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-purple-500/20 animate-pulse" />
          )}

          {hologramMode && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-scan" />
          )}

          <CardContent className="p-12 text-center relative z-10">
            {/* REAL IMAGES SECTION */}
            <div className="mb-8 flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* COUSIN'S REAL PHOTO */}
              <div
                className={`relative transition-all duration-1000 ${
                  celebrationMode ? "animate-bounce scale-110" : hologramMode ? "animate-pulse" : ""
                }`}
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50">
                  <Image
                    src="/cousin.png"
                    alt="Your Amazing Cousin"
                    fill
                    className="object-cover"
                    onLoad={() => setImageLoaded((prev) => ({ ...prev, cousin: true }))}
                    priority
                  />
                  {/* Holographic overlay */}
                  {hologramMode && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan" />
                  )}
                  {/* Celebration glow */}
                  {celebrationMode && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-red-500/30 animate-pulse" />
                  )}
                </div>

                {/* Floating crown for celebration */}
                {celebrationMode && (
                  <div className="absolute -top-6 -right-6 animate-spin">
                    <Crown className="w-12 h-12 text-yellow-400 drop-shadow-2xl" />
                  </div>
                )}

                {/* Hologram scan lines */}
                {hologramMode && (
                  <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-full animate-pulse" />
                )}

                <div
                  className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-1000 ${
                    celebrationMode ? "bg-yellow-400 text-black text-lg animate-bounce" : "bg-cyan-400 text-black"
                  }`}
                >
                  🌟 THE LEGEND 🌟
                </div>
              </div>

              {/* CULTUS CAR REAL PHOTO */}
              <div
                className={`relative transition-all duration-1000 ${
                  celebrationMode ? "animate-float-3d scale-125" : hologramMode ? "animate-scan" : ""
                }`}
              >
                <div className="relative w-64 h-40 rounded-xl overflow-hidden border-4 border-purple-400 shadow-2xl shadow-purple-500/50">
                  <Image
                    src="/cultus.jpg"
                    alt="Suzuki Cultus 2016 - The Beast"
                    fill
                    className="object-cover"
                    onLoad={() => setImageLoaded((prev) => ({ ...prev, cultus: true }))}
                    priority
                  />
                  {/* Holographic scan effect */}
                  {hologramMode && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scan" />
                  )}
                  {/* Celebration sparkles */}
                  {celebrationMode && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-500/20 animate-pulse" />
                  )}
                </div>

                {/* Floating trophy for celebration */}
                {celebrationMode && (
                  <div className="absolute -top-6 -left-6 animate-bounce">
                    <Trophy className="w-12 h-12 text-gold-400 drop-shadow-2xl" />
                  </div>
                )}

                {/* Speed lines for hologram */}
                {hologramMode && (
                  <>
                    <div className="absolute -left-4 top-1/2 w-8 h-1 bg-cyan-400 animate-pulse" />
                    <div className="absolute -right-4 top-1/2 w-8 h-1 bg-cyan-400 animate-pulse" />
                  </>
                )}

                <div
                  className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-1000 ${
                    celebrationMode ? "bg-purple-400 text-white text-lg animate-pulse" : "bg-purple-400 text-white"
                  }`}
                >
                  🚗 THE MACHINE 🚗
                </div>
              </div>
            </div>

            {/* SUCCESS MESSAGE */}
            {imageLoaded.cousin && imageLoaded.cultus && (
              <div className="mb-6 p-4 bg-green-500/20 border-2 border-green-400 rounded-lg animate-pulse">
                <p className="text-green-300 font-bold text-lg">✅ IMAGES LOADED SUCCESSFULLY! ✅</p>
                <p className="text-green-200 text-sm">
                  Your cousin and the Cultus are now part of this legendary celebration!
                </p>
              </div>
            )}

            {/* Holographic Car Display - ENHANCED */}
            <div className="mb-12 relative">
              <div className="relative inline-block">
                {/* MEGA Hologram Base */}
                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-sm transition-all duration-1000 ${
                    celebrationMode ? "w-64 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" : "w-48"
                  }`}
                />

                {/* Main Car Icon with MEGA Effects */}
                <div
                  className={`relative transition-all duration-2000 ${
                    celebrationMode
                      ? "animate-bounce scale-150"
                      : hologramMode
                        ? "animate-float-3d scale-125"
                        : showHologram
                          ? "animate-float-3d"
                          : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 blur-lg opacity-50 animate-pulse transition-all duration-1000 ${
                      celebrationMode
                        ? "bg-gradient-to-r from-yellow-400 to-red-500"
                        : "bg-gradient-to-r from-cyan-400 to-purple-500"
                    }`}
                  />
                  <Car
                    className={`relative mx-auto filter drop-shadow-2xl transition-all duration-1000 ${
                      celebrationMode ? "w-40 h-40 text-yellow-400" : "w-32 h-32 text-cyan-400"
                    }`}
                  />

                  {/* MEGA Holographic Scan Lines */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transition-all duration-1000 ${
                      hologramMode ? "animate-scan opacity-80" : "animate-scan opacity-40"
                    }`}
                  />
                </div>

                {/* ENHANCED Orbiting Elements */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    celebrationMode ? "animate-spin scale-150" : "animate-spin-slow"
                  }`}
                >
                  <Zap
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 animate-pulse transition-all duration-1000 ${
                      celebrationMode ? "w-12 h-12 text-yellow-400" : "w-8 h-8 text-yellow-400"
                    }`}
                  />
                  <Star
                    className={`absolute top-1/2 -right-8 transform -translate-y-1/2 animate-bounce transition-all duration-1000 ${
                      celebrationMode ? "w-10 h-10 text-pink-400" : "w-6 h-6 text-pink-400"
                    }`}
                  />
                  <Sparkles
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-ping transition-all duration-1000 ${
                      celebrationMode ? "w-12 h-12 text-purple-400" : "w-8 h-8 text-purple-400"
                    }`}
                  />
                  <Crown
                    className={`absolute top-1/2 -left-8 transform -translate-y-1/2 animate-pulse transition-all duration-1000 ${
                      celebrationMode ? "w-10 h-10 text-cyan-400" : "w-6 h-6 text-cyan-400"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* MEGA Futuristic Title */}
            <div
              className={`transition-all duration-2000 ${showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
              <div className="relative mb-8">
                <h1
                  className={`font-black bg-gradient-to-r bg-clip-text text-transparent animate-pulse mb-4 transition-all duration-1000 ${
                    celebrationMode
                      ? "text-8xl md:text-9xl from-yellow-400 via-red-500 to-purple-500"
                      : "text-6xl md:text-8xl from-cyan-400 via-purple-500 to-pink-500"
                  }`}
                >
                  {celebrationMode ? "🎆 LEGENDARY 🎆" : "LEGENDARY"}
                </h1>
                <div
                  className={`font-bold text-white mb-2 transition-all duration-1000 ${
                    celebrationMode ? "text-6xl md:text-8xl animate-bounce" : "text-4xl md:text-6xl animate-glow"
                  }`}
                >
                  🚀 ACHIEVEMENT UNLOCKED 🚀
                </div>
                <div
                  className={`text-cyan-300 font-light tracking-widest transition-all duration-1000 ${
                    celebrationMode ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {celebrationMode ? "🎊 CELEBRATION ACTIVATED 🎊" : "NEXT-GEN MOBILITY ACQUIRED"}
                </div>
              </div>

              {/* ENHANCED Message Panel */}
              <div className="relative mb-8">
                <div
                  className={`absolute inset-0 blur-xl transition-all duration-1000 ${
                    celebrationMode
                      ? "bg-gradient-to-r from-yellow-500/40 to-red-500/40"
                      : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                  }`}
                />
                <div
                  className={`relative backdrop-blur-xl rounded-2xl p-8 transition-all duration-1000 ${
                    celebrationMode
                      ? "bg-gradient-to-r from-yellow-500/20 to-red-500/20 border-4 border-yellow-400"
                      : "bg-black/60 border-2 border-cyan-400/50"
                  }`}
                >
                  <div
                    className={`text-white mb-4 font-light transition-all duration-1000 ${
                      celebrationMode ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                    }`}
                  >
                    <span
                      className={`font-bold transition-all duration-1000 ${
                        celebrationMode ? "text-yellow-400 animate-pulse" : "text-cyan-400"
                      }`}
                    >
                      DEAR CHAMPION,
                    </span>
                  </div>
                  <div
                    className={`text-purple-300 mb-4 transition-all duration-1000 ${
                      celebrationMode ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    Your{" "}
                    <span
                      className={`font-bold animate-pulse transition-all duration-1000 ${
                        celebrationMode ? "text-yellow-400 text-5xl" : "text-yellow-400 text-3xl"
                      }`}
                    >
                      SUZUKI CULTUS 2016
                    </span>
                  </div>
                  <div
                    className={`text-cyan-200 leading-relaxed transition-all duration-1000 ${
                      celebrationMode ? "text-2xl" : "text-lg"
                    }`}
                  >
                    Has been successfully integrated into your life matrix!
                    <br />
                    <span
                      className={`font-semibold transition-all duration-1000 ${
                        celebrationMode ? "text-yellow-400 text-3xl animate-bounce" : "text-pink-400"
                      }`}
                    >
                      {celebrationMode
                        ? "🎆 EPIC CELEBRATION MODE ACTIVE! 🎆"
                        : "Prepare for epic adventures ahead! 🌟"}
                    </span>
                  </div>
                </div>
              </div>

              {/* ENHANCED Stats Display */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Car, label: "VEHICLE", value: "Cultus 2016", color: "cyan" },
                  { icon: Trophy, label: "STATUS", value: "LEGENDARY", color: "purple" },
                  { icon: Rocket, label: "POWER", value: "MAXIMUM", color: "pink" },
                  { icon: Crown, label: "LEVEL", value: "BOSS MODE", color: "yellow" },
                ].map((stat, index) => (
                  <div key={index} className="relative group">
                    <div
                      className={`absolute inset-0 blur-lg opacity-30 group-hover:opacity-60 transition-all duration-1000 ${
                        celebrationMode
                          ? "bg-gradient-to-r from-yellow-500 to-red-500"
                          : `bg-gradient-to-r from-${stat.color}-500 to-${stat.color === "cyan" ? "blue" : stat.color === "purple" ? "pink" : stat.color === "pink" ? "yellow" : "green"}-500`
                      }`}
                    />
                    <div
                      className={`relative backdrop-blur-sm rounded-xl p-6 transition-all duration-1000 ${
                        celebrationMode
                          ? "bg-yellow-500/20 border-2 border-yellow-400 hover:border-yellow-300 scale-110"
                          : `bg-black/70 border border-${stat.color}-400/50 hover:border-${stat.color}-400`
                      }`}
                    >
                      <stat.icon
                        className={`mx-auto mb-3 transition-all duration-1000 ${
                          celebrationMode
                            ? "w-16 h-16 text-yellow-400 animate-spin"
                            : `w-12 h-12 text-${stat.color}-400 ${index === 0 ? "animate-bounce" : index === 1 ? "animate-pulse" : index === 2 ? "animate-bounce" : "animate-spin-slow"}`
                        }`}
                      />
                      <div
                        className={`font-bold transition-all duration-1000 ${
                          celebrationMode ? "text-yellow-300 text-xl" : `text-${stat.color}-300 text-lg`
                        }`}
                      >
                        {stat.label}
                      </div>
                      <div
                        className={`text-white transition-all duration-1000 ${
                          celebrationMode ? "text-lg font-bold" : "text-sm"
                        }`}
                      >
                        {stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MEGA ACTION BUTTONS */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <Button
                  onClick={activateCelebration}
                  className={`relative group font-bold py-6 px-16 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 ${
                    celebrationMode
                      ? "bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-300 hover:to-red-400 text-black border-yellow-300 text-2xl animate-bounce"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-cyan-400/50 text-xl"
                  }`}
                >
                  <div
                    className={`absolute inset-0 blur-lg opacity-30 group-hover:opacity-60 transition-opacity rounded-full ${
                      celebrationMode
                        ? "bg-gradient-to-r from-yellow-400 to-red-500"
                        : "bg-gradient-to-r from-cyan-400 to-purple-500"
                    }`}
                  />
                  <span className="relative flex items-center gap-4">
                    <Zap
                      className={`animate-pulse transition-all duration-1000 ${
                        celebrationMode ? "w-8 h-8" : "w-6 h-6"
                      }`}
                    />
                    {celebrationMode ? "🎆 MEGA CELEBRATION 🎆" : "ACTIVATE CELEBRATION"}
                    <Sparkles
                      className={`animate-spin transition-all duration-1000 ${celebrationMode ? "w-8 h-8" : "w-6 h-6"}`}
                    />
                  </span>
                </Button>

                <Button
                  onClick={activateHologram}
                  className={`relative group font-bold py-6 px-16 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 ${
                    hologramMode
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black border-cyan-300 text-2xl animate-pulse"
                      : "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-400 hover:to-yellow-400 text-white border-pink-400/50 text-xl"
                  }`}
                >
                  <div
                    className={`absolute inset-0 blur-lg opacity-30 group-hover:opacity-60 transition-opacity rounded-full ${
                      hologramMode
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                        : "bg-gradient-to-r from-pink-400 to-yellow-400"
                    }`}
                  />
                  <span className="relative flex items-center gap-4">
                    <Star
                      className={`animate-bounce transition-all duration-1000 ${hologramMode ? "w-8 h-8" : "w-6 h-6"}`}
                    />
                    {hologramMode ? "🌀 HOLOGRAM ACTIVE 🌀" : "HOLOGRAM MODE"}
                    <Rocket
                      className={`animate-pulse transition-all duration-1000 ${hologramMode ? "w-8 h-8" : "w-6 h-6"}`}
                    />
                  </span>
                </Button>
              </div>

              {/* Final Message - ENHANCED */}
              <div className="relative">
                <div
                  className={`absolute inset-0 blur-2xl transition-all duration-1000 ${
                    celebrationMode
                      ? "bg-gradient-to-r from-yellow-500/40 to-red-500/40"
                      : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                  }`}
                />
                <div
                  className={`relative text-transparent bg-gradient-to-r bg-clip-text font-bold animate-pulse transition-all duration-1000 ${
                    celebrationMode
                      ? "text-4xl from-yellow-400 via-red-400 to-purple-400"
                      : "text-2xl from-cyan-400 via-purple-400 to-pink-400"
                  }`}
                >
                  🌟 FROM YOUR COUSIN WITH INFINITE LOVE 🌟
                </div>
                <div
                  className={`text-cyan-300 mt-4 font-light tracking-wide transition-all duration-1000 ${
                    celebrationMode ? "text-2xl" : "text-lg"
                  }`}
                >
                  {celebrationMode
                    ? "🎆 LEGENDARY STATUS ACHIEVED! 🎆"
                    : "May your journey be as legendary as you are! 🚀✨"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* MEGA Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-10 left-10 animate-float-3d transition-all duration-1000 ${
            celebrationMode ? "text-8xl" : "text-6xl"
          }`}
        >
          🚗
        </div>
        <div
          className={`absolute top-20 right-20 animate-float-delayed transition-all duration-1000 ${
            celebrationMode ? "text-7xl" : "text-5xl"
          }`}
        >
          🎉
        </div>
        <div
          className={`absolute bottom-32 left-20 animate-bounce transition-all duration-1000 ${
            celebrationMode ? "text-6xl" : "text-4xl"
          }`}
        >
          ⚡
        </div>
        <div
          className={`absolute bottom-20 right-32 animate-spin-slow transition-all duration-1000 ${
            celebrationMode ? "text-8xl" : "text-6xl"
          }`}
        >
          🌟
        </div>
        <div
          className={`absolute top-1/2 left-10 animate-pulse transition-all duration-1000 ${
            celebrationMode ? "text-6xl" : "text-4xl"
          }`}
        >
          🚀
        </div>
        <div
          className={`absolute top-1/3 right-10 animate-float-3d transition-all duration-1000 ${
            celebrationMode ? "text-7xl" : "text-5xl"
          }`}
        >
          👑
        </div>

        {/* EXTRA CELEBRATION EMOJIS */}
        {celebrationMode && (
          <>
            <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce">🎆</div>
            <div className="absolute top-3/4 right-1/4 text-6xl animate-spin">🎊</div>
            <div className="absolute bottom-1/4 left-1/3 text-5xl animate-pulse">🏆</div>
            <div className="absolute top-1/3 right-1/3 text-7xl animate-float-3d">💫</div>
          </>
        )}
      </div>
    </div>
  )
}
