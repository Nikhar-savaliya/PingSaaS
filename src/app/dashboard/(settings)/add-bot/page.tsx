import { ShinyButton } from "@/components/ShinyButton"
import { AlertCircle } from "lucide-react"
import Image from "next/image"

const BOT_INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1303231072854868009"

export default function Page() {
  const steps = [
    {
      title: "Add PingFoo to Discord",
      description:
        "Click the button below to open Discord's bot invitation page",
      status: "current",
    },
    {
      title: "Choose Installation Type",
      description:
        "Select either 'Add to Server' to use in a server, or 'Add to My Apps' for direct messages",
      status: "pending",
    },
    {
      title: "All Set!",
      description:
        "Once added, you'll receive notifications for important events directly in Discord",
      status: "pending",
    },
  ]

  return (
    <div className=" bg-brand-25 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/brand-asset-profile-picture.png"
              alt="PingFoo"
              width={128}
              height={128}
              className="w-16 h-16 rounded-xl"
            />
          </div>
          <h1 className="text-3xl font-heading font-bold text-brand-950 flex items-center justify-center gap-2">
            Set Up PingFoo Bot
          </h1>
          <p className="mt-2 text-brand-600">
            Get real-time notifications directly in Discord
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-8 bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-orange-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-orange-700">
                Make sure you're logged into Discord before proceeding. You'll
                see options to add PingFoo to your server or personal apps.
              </p>
            </div>
          </div>
        </div>

        {/* Main Steps */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-8">
            {/* Add Bot Button */}
            <div className="mb-12 text-center">
              <ShinyButton className="z-10 h-14 max-w-sm mx-auto text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <a
                  href={BOT_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Add PingFoo to Discord
                </a>
              </ShinyButton>
            </div>

            {/* Steps List */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-gray-500 bg-gray-50">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Help */}
          <div className="px-8 py-6 bg-gray-50 rounded-b-lg border-t">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Installation Options
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                • <strong>Add to Server:</strong> Install PingFoo in a Discord
                server to receive notifications there
              </li>
              <li>
                • <strong>Add to My Apps:</strong> Add PingFoo to your personal
                apps for direct message notifications
              </li>
              <li>• You can always change these settings later in Discord</li>
              <li>• Need help? Contact our support team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
