import React, { ReactNode } from "react"
import { Button } from "./ui/button"
import { Divide, MoveLeftIcon } from "lucide-react"
import { Heading } from "./Headings"

interface DashboardPageProps {
  title: string
  children?: ReactNode
  hideBackButton?: boolean
  cta?: ReactNode
}

const DashboardPage = ({
  title,
  children,
  cta,
  hideBackButton,
}: DashboardPageProps) => {
  return (
    <section className="flex-1 h-full w-full flex flex-col">
      <div className="w-full p-6 sm:p-8 flex justify-between border-b border-gray-200">
        <div className="w-full flex flex-col items-start sm:items-center justify-between sm:flex-row gap-y-6">
          <div className="flex items-center gap-6">
            {hideBackButton ? null : (
              <Button className="w-fit bg-white" variant={"outline"}>
                <MoveLeftIcon className="size-4" />
              </Button>
            )}

            <Heading>{title}</Heading>
          </div>
          {cta ? <div className="max-sm:w-full">{cta}</div> : null}
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  )
}

export default DashboardPage
