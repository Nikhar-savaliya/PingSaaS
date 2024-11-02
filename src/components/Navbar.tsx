import { SignOutButton } from "@clerk/nextjs"
import { ArrowRightIcon, MoveRightIcon } from "lucide-react"
import Link from "next/link"
import { MaxWidthWrapper } from "./MaxWidthWrapper"
import { Button, buttonVariants } from "./ui/button"
import { currentUser } from "@clerk/nextjs/server"

export const Navbar = async () => {
  const user = await currentUser()
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"} className="flex z-40 font-bold">
            Ping
            <span className="bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
              Foo
            </span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size={"sm"} variant={"ghost"}>
                    Sign Out
                  </Button>
                </SignOutButton>

                <Link
                  href={"/dashboard"}
                  className={buttonVariants({
                    size: "sm",
                    className: "sm:flex items-center gap-1",
                  })}
                >
                  Dashboard <ArrowRightIcon className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/pricing"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Pricing
                </Link>

                <Link
                  href={"/sign-in"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign in
                </Link>

                <div className="h-6 w-px bg-gray-200"></div>

                <Link
                  href={"/sign-up"}
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Sign Up
                  <MoveRightIcon className="size-4 -ml-2.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
