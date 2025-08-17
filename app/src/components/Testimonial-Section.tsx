"use client"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/Asset/testimoni.jpg", 
      quote: "Berkat bantuan asuransi, ibu saya berhasil sembuh dari stroke karena layanan operasi yang optimal.",
      author: "Hanifah",
    },
    {
      id: 2,
      image: "/Asset/testimoni.jpg", 
      quote: "Berkat bantuan asuransi, ibu saya berhasil sembuh dari stroke karena layanan operasi yang optimal.",
      author: "Hanifah",
    },
    {
      id: 3,
      image: "/Asset/testimoni.jpg", 
      quote: "Berkat bantuan asuransi, ibu saya berhasil sembuh dari stroke karena layanan operasi yang optimal.",
      author: "Hanifah",
    },
  ]

  return (
    <div className="w-full bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <h1
          className="text-black mb-4"
          style={{
            fontSize: "24px",
            fontFamily: "Roboto",
            fontWeight: 700,
            lineHeight: "32px",
            letterSpacing: "0.5px",
          }}
        >
          Kisah Nyata. Perlindungan Nyata.
        </h1>
        <p
          className="text-gray-700"
          style={{
            fontSize: "16px",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.3px",
          }}
        >
          Di saat sulit, perlindungan bukan cuma janji. Ini buktinya.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 relative"
              style={{
                width: "264px",
                height: "170px",
                boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={`Testimonial from ${testimonial.author}`}
                className="absolute left-0 top-0"
                style={{
                  width: "107px",
                  height: "170px",
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                  border: "1px #D4DFFF solid",
                  borderRight: "none",
                }}
              />

              <div
                className="absolute right-0 top-0 overflow-hidden"
                style={{
                  width: "157px",
                  height: "170px",
                  background: "#F1F5FF",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                  outline: "1px #D4DFFF solid",
                  outlineOffset: "-1px",
                }}
              >
                <div
                  className="absolute text-center"
                  style={{
                    width: "117px",
                    left: "14.88px",
                    top: "25px",
                  }}
                >
                  <span
                    style={{
                      color: "black",
                      fontSize: "12px",
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      lineHeight: "16px",
                      letterSpacing: "0.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    "{testimonial.quote}"
                  </span>
                  <br />
                  <br />
                  <span
                    style={{
                      color: "rgba(34, 34, 34, 0.80)",
                      fontSize: "12px",
                      fontFamily: "Roboto",
                      fontStyle: "italic",
                      fontWeight: 400,
                      lineHeight: "16px",
                      letterSpacing: "0.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    -{testimonial.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
