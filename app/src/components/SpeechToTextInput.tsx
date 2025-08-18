// App.tsx (React Native / Expo project)

import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native"
import Voice from "@react-native-voice/voice"

export default function HealthInsuranceVoiceApp() {
  const [inputText, setInputText] = useState("Input...")
  const [isListening, setIsListening] = useState(false)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    Voice.onSpeechStart = () => setIsListening(true)
    Voice.onSpeechEnd = () => setIsListening(false)
    Voice.onSpeechResults = (event) => {
      if (event.value && event.value.length > 0) {
        setInputText(event.value[0])
      }
    }
    Voice.onSpeechError = (e) => {
      console.error("Speech error:", e)
      setIsListening(false)
    }

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const startListening = async () => {
    try {
      setInputText("")
      await Voice.start("id-ID") // Indonesian
    } catch (e) {
      console.error("Start error:", e)
    }
  }

  const stopListening = async () => {
    try {
      await Voice.stop()
    } catch (e) {
      console.error("Stop error:", e)
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Apa yang Kamu Rasakan Sekarang?</Text>
        <Text style={styles.subtitle}>
          Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa ditanggung oleh asuransi.
        </Text>
      </View>

      {/* Voice Button */}
      <View style={styles.section}>
        <TouchableOpacity
          style={[styles.button, isListening ? styles.buttonDisabled : null]}
          onPress={isListening ? stopListening : startListening}
          disabled={isListening}
        >
          <Text style={styles.buttonText}>
            {isListening ? "🔴 Sedang Mendengarkan..." : "🎤 Gunakan Voiceover"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input Area */}
      <View style={styles.section}>
        <View style={styles.inputBox}>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            multiline
            placeholder="Input..."
            placeholderTextColor="#888"
            style={styles.textInput}
          />
        </View>
      </View>

      {/* Check Response */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.checkButton} onPress={() => setShowResults(true)}>
          <Text style={styles.checkButtonText}>Cek Tanggapan ➡️</Text>
        </TouchableOpacity>
      </View>

      {/* Results Section */}
      {showResults && (
        <>
          {/* Probability Card */}
          <View style={styles.section}>
            <View style={styles.probabilityCard}>
              <Text style={styles.probabilityText}>80%</Text>
              <Text style={styles.resultHighlight}> Kemungkinan Kondisimu </Text>
              <Text style={styles.claimText}>Dapat Diklaim</Text>
            </View>
          </View>

          {/* Diagnosis Card */}
          <View style={styles.section}>
            <View style={styles.diagnosisCard}>
              <Text style={styles.diagnosisTitle}>Kemungkinan Diagnosis:</Text>
              <Text style={styles.diagnosisText}>Infeksi saluran pernapasan atas / Faringitis</Text>

              <Text style={styles.diagnosisTitle}>📄 Polis Kamu Menanggung:</Text>
              <Text style={styles.bullet}>🟢 Konsultasi Dokter Umum</Text>
              <Text style={styles.bullet}>🟢 Obat demam & batuk</Text>
              <Text style={styles.bullet}>
                🟡 Tes Lab Dasar (ditanggung sebagian, tergantung hasil pemeriksaan dokter)
              </Text>
              <Text style={styles.bullet}>
                🔴 Rawat Inap → Belum bisa diklaim saat ini, kecuali ada rujukan lanjutan
              </Text>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#005D85",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#999",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  inputBox: {
    height: 150,
    backgroundColor: "#F9F6FF",
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#EBE0FF",
  },
  textInput: {
    flex: 1,
    color: "#000",
    fontSize: 14,
    textAlignVertical: "top",
  },
  checkButton: {
    backgroundColor: "#005D85",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  checkButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  probabilityCard: {
    backgroundColor: "#F9F6FF",
    borderWidth: 2,
    borderColor: "#5785FF",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  probabilityText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5785FF",
  },
  resultHighlight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  claimText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5785FF",
  },
  diagnosisCard: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#5785FF",
    borderRadius: 12,
    padding: 20,
  },
  diagnosisTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  diagnosisText: {
    fontSize: 14,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 14,
    marginBottom: 6,
  },
})

}

export default SpeechToTextInput
