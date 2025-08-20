import TextComponent from "@/components/text";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-primary">L&G Corporation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We provide innovative solutions and exceptional services to help your business thrive in the digital age.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/services" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Our Services
            </a>
            <a href="/contact" className="border border-border px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">UI Components Demo</h2>
            <p className="text-muted-foreground">
              Below you can see our shadcn/ui components in action. These are the building blocks for creating beautiful, accessible user interfaces.
            </p>
          </div>
          <TextComponent />
        </div>
      </section>
    </div>
  );
}
