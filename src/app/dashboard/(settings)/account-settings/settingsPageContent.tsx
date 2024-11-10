"use client"

import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { client } from "@/lib/client"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
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

  return (
    <Card className="max-w-xl w-full space-y-4">
      <div>
        <Label>Discord ID</Label>
        <Input
          className="mt-1"
          value={discordId}
          onChange={(e) => setDisordId(e.target.value)}
          placeholder="Enter your discord ID"
        />
      </div>
      {/* <ol className="mt-2 text-xs text-gray-600 list-decimal list-inside">
        <span className="text-sm/6 font-semibold">
          Don't know how to get your DiscordID?
        </span>
        <li>On Discord, go to Settings &gt; Advanced</li>
        <li>Scroll down and make sure that Developer Mode is on</li>
        <li>
          Exit your settings and Right-click your profile picture and click
          'Copy User ID'
        </li>
      </ol> */}
      <p className="mt-2 text-sm/6 text-gray-600">
        Don't know how to get your discord ID?{" "}
        <Link
          href={"https://support.playhive.com/discord-user-id/"}
          className="text-brand-600 hover:text-brand-500"
        >
          Learn how to get discord ID here
        </Link>
      </p>

      <div className="pt-4">
        <Button onClick={() => mutate(discordId)} disabled={isPending}>
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Card>
  )
}

export default AccountSettings
