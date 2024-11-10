import CreateEventCategoryModal from "@/components/CreateEventCategoryModal"
import DashboardPage from "@/components/dashboardpage"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"
import DashboardPageContent from "./DashboardPageContent"
import { createCheckoutSession } from "@/lib/stripe"
import PaymentSuccessModal from "@/components/PaymentSuccessModal"

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
const Page = async ({ searchParams }: PageProps) => {
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

  const intent = searchParams.intent

  if (intent == "upgrade") {
    const session = await createCheckoutSession({
      userEmail: user.email,
      userId: user.id,
    })
    if (session.url) {
      redirect(session.url)
    }
  }

  const success = searchParams.success

  return (
    <>
      {success ? <PaymentSuccessModal /> : null}
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
    </>
  )
}

/**
 * [x] dashboard page
 * [ ]api key page
 * [ ] account setting page
 */

export default Page
