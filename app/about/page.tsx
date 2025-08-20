export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn more about our company, mission, and values.
        </p>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              We are dedicated to delivering exceptional value to our clients through innovative solutions and unwavering commitment to quality.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To become the leading provider of cutting-edge solutions that transform businesses and drive success in the digital age.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
