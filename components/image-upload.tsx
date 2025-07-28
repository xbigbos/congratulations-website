"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ImageUploadProps {
  onImageUpload: (imageUrl: string, type: "cousin" | "car") => void
  type: "cousin" | "car"
  currentImage?: string
}

export function ImageUpload({ onImageUpload, type, currentImage }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageUpload(e.target.result as string, type)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative">
      {currentImage ? (
        <div className="relative group">
          <div
            className={`relative overflow-hidden border-4 shadow-2xl ${
              type === "cousin" ? "w-32 h-32 rounded-full border-cyan-400" : "w-48 h-32 rounded-xl border-purple-400"
            }`}
          >
            <Image
              src={currentImage || "/cousin.png"}
              alt={type === "cousin" ? "Your Cousin" : "Cultus Car"}
              fill
              className="object-cover"
            />
          </div>
          <Button
            onClick={() => onImageUpload("", type)}
            className="absolute -top-2 -right-2 w-8 h-8 p-0 bg-red-500 hover:bg-red-600 rounded-full"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`relative cursor-pointer transition-all duration-300 ${
            type === "cousin" ? "w-32 h-32 rounded-full" : "w-48 h-32 rounded-xl"
          } ${
            dragActive
              ? "border-4 border-yellow-400 bg-yellow-400/20"
              : "border-4 border-dashed border-cyan-400/50 bg-cyan-400/10 hover:border-cyan-400 hover:bg-cyan-400/20"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center h-full text-cyan-400">
            <Upload className="w-8 h-8 mb-2" />
            <span className="text-xs text-center px-2">
              Drop {type === "cousin" ? "cousin photo" : "car photo"} here
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
