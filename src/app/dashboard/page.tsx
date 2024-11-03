import DashboardPage from "@/components/dashboardpage"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import DashboardPageContent from "./DashboardPageContent"
import CreateEventCategoryModal from "@/components/CreateEventCategoryModal"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  })

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <DashboardPage
      cta={
        <CreateEventCategoryModal>
          <Button>
            <PlusIcon className="size-4 mr-2" />
            New Event Category
          </Button>
        </CreateEventCategoryModal>
      }
      title="dashboard"
    >
      <DashboardPageContent />
    </DashboardPage>
  )
}

/**
 * dashboard page
 * api key page
 * account setting page
 */

export default Page
