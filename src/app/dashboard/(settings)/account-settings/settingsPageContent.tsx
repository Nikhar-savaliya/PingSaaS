"use client"

import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { client } from "@/lib/client"
import { useMutation } from "@tanstack/react-query"
import { Copy, Info, Settings, UserCog } from "lucide-react"
import React, { useState } from "react"

const AccountSettings = ({
  discordId: initialDiscordId,
}: {
  discordId: string
}) => {
  const [discordId, setDisordId] = useState(initialDiscordId)

  const { mutate, isPending } = useMutation({
    mutationFn: async (discordId: string) => {
      const res = await client.project.setDiscordID.$post({ discordId })
      return await res.json()
    },
  })

  const steps = [
    {
      title: "Enable Developer Mode",
      icon: <Settings className="w-6 h-6" />,
      content: [
        "Open Discord",
        "Go to User Settings (gear icon)",
        "Scroll down to 'App Settings'",
        "Click on 'Advanced'",
        "Turn on 'Developer Mode'",
      ],
    },
    {
      title: "Get Your User ID",
      icon: <UserCog className="w-6 h-6" />,
      content: [
        "Right-click on your username in any chat",
        "Click 'Copy User ID' at the bottom of the menu",
        "The ID will be copied to your clipboard",
      ],
    },
  ]

  return (
    <div className="flex justify-between max-xl:flex-col">
      <Card className="max-w-xl w-full h-fit space-y-4">
        <div>
          <Label>Discord ID</Label>
          <Input
            className="mt-1"
            value={discordId}
            onChange={(e) => setDisordId(e.target.value)}
            placeholder="Enter your discord ID"
          />
        </div>
        <p className="mt-2 text-sm/6 text-gray-600">
          Don't know how to get your discord ID? user guide included in this
          page
        </p>

        <div className="pt-4">
          <Button onClick={() => mutate(discordId)} disabled={isPending}>
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </Card>

      <div className="w-full max-w-xl py-4 xl:px-4">
        <div className="bg-white rounded-lg border p-6">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold flex items-center gap-2">
              <Info className="w-6 h-6" />
              Set Up Discord Notifications
            </h2>
            <p className="text-gray-600 mt-2">
              Follow these steps to receive notifications for sales, new users,
              and system alerts
            </p>
          </div>

          {/* Warning Banner */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-blue-700">
              Make sure you have Discord installed and are logged in before
              proceeding.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">
                    {index + 1}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    {step.icon}
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.content.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ID Format Note */}
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start">
            <Copy className="w-4 h-4 mr-2 mt-1 text-gray-500" />
            <p className="text-sm text-gray-600">
              Your Discord User ID will be a long number like:
              123456789012345678
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
