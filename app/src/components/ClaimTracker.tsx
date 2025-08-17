import React from "react"

type ClaimStepStatus = "completed" | "active" | "inactive"

interface ClaimStep {
  id: string
  label: string
  status: ClaimStepStatus
}

const ClaimTracker: React.FC = () => {
  const steps: ClaimStep[] = [
    { id: "1", label: "Dikirim", status: "completed" },
    { id: "2", label: "Review", status: "completed" },
    { id: "3", label: "Diterima", status: "active" },
    { id: "4", label: "Ditolak", status: "inactive" },
  ]

  const getCircleColor = (status: ClaimStepStatus) => {
    switch (status) {
      case "completed":
        return "#ECF1FF" 
      case "active":
        return "#0391CE" 
      case "inactive":
        return "#605D64" 
    }
  }

  const getCheckColor = (status: ClaimStepStatus) => {
    switch (status) {
      case "completed":
        return "#0A3977" 
      case "active":
        return "#E4F0FF" 
      case "inactive":
        return "#938F96" 
    }
  }

  return (
    <div className="bg-[#FEF7FF] rounded-[15px] border border-[#003A53] p-6 w-full max-w-md mx-auto">
      <h2 className="text-black text-base font-bold leading-6 tracking-[0.15px] mb-4 font-sans">Claim Tracker</h2>

      <div className="flex items-center justify-between mb-4 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Circle with checkmark */}
            <div
              className="w-[38px] h-[38px] rounded-full flex items-center justify-center relative z-10"
              style={{ backgroundColor: getCircleColor(step.status) }}
            >
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 5.5L5 9.5L14 1"
                  stroke={getCheckColor(step.status)}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Connector line except after last item */}
            {index < steps.length - 1 && <div className="flex-1 h-[1px] bg-gray-300 opacity-20 mx-2" />}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex-1 text-center">
            <span className="text-black text-sm font-medium leading-5 tracking-[0.10px] font-sans">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClaimTracker
