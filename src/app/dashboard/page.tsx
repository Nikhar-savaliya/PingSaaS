import CreateEventCategoryModal from "@/components/CreateEventCategoryModal"
import DashboardPage from "@/components/dashboardpage"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"
import DashboardPageContent from "./DashboardPageContent"

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
          <Button size={"lg"} className="w-full">
            <PlusIcon className="size-4 mr-2" />
            New Category
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
 * [x] dashboard page
 * [ ]api key page
 * [ ] account setting page
 */

export default Page
