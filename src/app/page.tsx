"use client";

import { Button, Card, Input } from "@/components";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Storybook Component Library</h1>
          <p className="text-lg text-gray-600">Reusable React components built with Next.js and Storybook</p>
        </div>

        {/* Button Component Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Component</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="primary" onClick={() => alert("Primary Button clicked!")}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={() => alert("Secondary Button clicked!")}>
                Secondary Button
              </Button>
              <Button variant="danger" onClick={() => alert("Danger Button clicked!")}>
                Danger Button
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
            <div className="flex gap-4">
              <Button disabled>Disabled Button</Button>
            </div>
          </div>
        </section>

        {/* Input Component Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Input Component</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="Please enter your real name"
              />
              <Input
                label="Email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                state={email && !email.includes("@") ? "error" : "default"}
                errorMessage={email && !email.includes("@") ? "Please enter a valid email" : undefined}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                state="success"
                helperText="This is a secure password"
              />
              <Input label="Phone Number" type="tel" placeholder="010-0000-0000" disabled value="010-1234-5678" />
            </div>
          </div>
        </section>

        {/* Card Component Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Card Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Basic Card" shadow="medium" onClick={() => alert("Card clicked!")}>
              This is a basic card. It can be clicked.
            </Card>

            <Card
              title="Image Card"
              imageUrl="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop"
              imageAlt="Beautiful landscape"
              shadow="large"
            >
              This card includes an image. A beautiful landscape photo is displayed.
            </Card>

            <Card title="Small Padding Card" padding="small" shadow="small">
              A compact card with small padding.
            </Card>

            <Card title="Large Padding Card" padding="large" shadow="none">
              A card with large padding for a spacious feel.
            </Card>

            <Card
              imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              imageAlt="Mountain landscape"
            >
              An image card without a title.
            </Card>

            <Card title="Card without Shadow" shadow="none">
              A simple card design without shadow.
            </Card>
          </div>
        </section>

        {/* Storybook Link */}
        <section className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">See more examples in Storybook</h2>
            <p className="text-gray-600 mb-6">You can explore various states and props of each component in Storybook.</p>
            <Button variant="primary" size="large" onClick={() => window.open("http://localhost:6006", "_blank")}>
              Open Storybook
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
