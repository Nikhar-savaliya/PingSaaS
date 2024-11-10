import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { client } from "../../lib/client"

const DashboardEmptyState = () => {
  const queryClient = useQueryClient()

  const { mutate: insertQuickStartCategories, isPending } = useMutation({
    mutationFn: async () => {
      await client.category.insertQuickstartCategories.$post()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-event-categories"] })
    },
  })

  return (
    <Card className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6">
      <div className="flex justify-center w-full">
        <img
          src="/brand-asset-wave.png"
          alt="no categories"
          className="size-48 -mt-24"
        />
      </div>
      <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
        No Event Categories Yet
      </h1>
      <p className="text-sm/6 text-pretty text-gray-600 max-w-sm mt-2 mb-8">
        Start tracking events by creating your first category. Use Quickstart to
        get default Event Categories
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          variant={"outline"}
          className="flex items-center space-x-2 w-full sm:w-auto"
          onClick={() => {
            insertQuickStartCategories()
          }}
        >
          <span className="size-5">🚀</span>
          <span>{isPending ? "Creating... " : "Quickstart"}</span>
        </Button>

        {/* <CreateEventCategoryModal>
          <Button className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="size-5">⭐</span>
            <span>Add Category</span>
          </Button>
        </CreateEventCategoryModal> */}
      </div>
    </Card>
  )
}

export default DashboardEmptyState
