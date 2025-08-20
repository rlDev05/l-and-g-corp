"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function TextComponent() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">shadcn/ui Demo</h1>
      
      {/* Button Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>

      {/* Card Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card. You can put any content here.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>Another example card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card demonstrates different styling and layout options.</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="flex-1">Cancel</Button>
              <Button className="flex-1">Save</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Card</CardTitle>
              <CardDescription>Card with form elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Input Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="text-input" className="text-sm font-medium">Text Input</label>
            <Input id="text-input" placeholder="Enter some text" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email-input" className="text-sm font-medium">Email Input</label>
            <Input id="email-input" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password-input" className="text-sm font-medium">Password Input</label>
            <Input id="password-input" type="password" placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <label htmlFor="number-input" className="text-sm font-medium">Number Input</label>
            <Input id="number-input" type="number" placeholder="Enter a number" />
          </div>
        </div>
      </div>
    </div>
  )
}
