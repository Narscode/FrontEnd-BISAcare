"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface SpeechToTextInputProps {
  onTextReceived: (text: string) => void
  placeholder?: string
  disabled?: boolean
}

const SpeechToTextInput: React.FC<SpeechToTextInputProps> = ({
  onTextReceived,
  placeholder = "Tap to start speaking...",
  disabled = false,
}) => {
  const [isListening, setIsListening] = useState(false)
  const [transcribedText, setTranscribedText] = useState("")
  const [recognition, setRecognition] = useState<any | null>(null)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if speech recognition is supported
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition()
        recognitionInstance.continuous = false
        recognitionInstance.interimResults = false
        recognitionInstance.lang = "en-US"

        recognitionInstance.onresult = (event) => {
          const transcript = event.results[0][0].transcript
          setTranscribedText(transcript)
          onTextReceived(transcript)
          setIsListening(false)
        }

        recognitionInstance.onerror = (event) => {
          console.error("Speech recognition error:", event.error)
          setIsListening(false)
        }

        recognitionInstance.onend = () => {
          setIsListening(false)
        }

        setRecognition(recognitionInstance)
        setIsSupported(true)
      }
    }
  }, [onTextReceived])

  const startListening = () => {
    if (disabled || !recognition || !isSupported) return

    setIsListening(true)
    recognition.start()
  }

  const stopListening = () => {
    if (recognition) {
      recognition.stop()
    }
    setIsListening(false)
  }

  if (!isSupported) {
    return (
      <div className="p-4">
        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-xl">
          <span className="text-gray-500">Speech recognition not supported in this browser</span>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <button
        className={`
          flex items-center justify-center w-full p-4 rounded-xl font-semibold text-white transition-all duration-200
          ${
            isListening
              ? "bg-red-500 hover:bg-red-600"
              : disabled
                ? "bg-gray-400 opacity-60 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
          }
        `}
        onClick={isListening ? stopListening : startListening}
        disabled={disabled}
      >
        <span className="text-xl mr-2">{isListening ? "🔴" : "🎤"}</span>
        <span className={disabled ? "text-gray-300" : "text-white"}>
          {isListening ? "Listening... Tap to stop" : placeholder}
        </span>
      </button>

      {transcribedText && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 font-semibold mb-1">Transcribed:</div>
          <div className="text-sm text-gray-800 leading-5">{transcribedText}</div>
        </div>
      )}
    </div>
  )
}

export default SpeechToTextInput
