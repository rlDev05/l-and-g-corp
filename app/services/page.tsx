import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Discover the comprehensive range of services we offer to help your business grow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Modern, responsive websites and web applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We build cutting-edge web solutions using the latest technologies and best practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mobile Development</CardTitle>
              <CardDescription>Native and cross-platform mobile applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create engaging mobile experiences that users love with our expert development team.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consulting</CardTitle>
              <CardDescription>Strategic technology consulting and planning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get expert guidance on technology decisions and digital transformation strategies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UI/UX Design</CardTitle>
              <CardDescription>User-centered design solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create intuitive and beautiful user experiences that drive engagement and conversion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cloud Solutions</CardTitle>
              <CardDescription>Scalable cloud infrastructure and services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Leverage the power of cloud computing to scale your business efficiently.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support & Maintenance</CardTitle>
              <CardDescription>Ongoing support and system maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Keep your systems running smoothly with our comprehensive support services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
