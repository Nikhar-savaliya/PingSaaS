import {
  CogIcon,
  GiftIcon,
  HeadphonesIcon,
  HelpCircleIcon,
  InboxIcon,
  MenuIcon,
  MicIcon,
  PhoneIcon,
  PinIcon,
  PlusCircleIcon,
  RocketIcon,
  SearchIcon,
  SmileIcon,
  StickerIcon,
  UserCircleIcon,
  VideoIcon,
} from "lucide-react"
import Image from "next/image"
import { PropsWithChildren } from "react"
import { Icons } from "./Icons"

export const MockDiscordUi = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-gray text-white rounded-lg overflow-hidden shadow-xl">
      {/* server list */}
      <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
        <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>
        <div className="w-8 h-[2px] bg-discord-gray rounded-full my-2" />

        {[...Array(5)].map((_, index) => {
          return (
            <div
              key={index}
              className=" select-none size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
            >
              <span className="text-lg font-semibold text-gray-300">
                {String.fromCharCode(65 + index)}
              </span>
            </div>
          )
        })}

        <div className="group mt-auto select-none size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#3ba55c] cursor-not-allowed">
          <PlusCircleIcon className="text-[#3ba55c] group-hover:text-white" />
        </div>
      </div>

      {/* DM list */}
      <div className="hidden md:flex w-60 bg-[#2f3136] flex-col">
        <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
          <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
            Find or start a conversation
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-4">
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <UserCircleIcon className="mr-4 size-6 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <RocketIcon className="mr-4 size-6 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Nitro</span>
            </div>
          </div>
          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-[#8e9297] mb-2 uppercase">
              Direct Messages
            </h3>
            <div className="flex items-center px-2 py-1.5 rounded bg-[#393c43] text-white cursor-pointer">
              <Image
                src={"/brand-asset-profile-picture.png"}
                alt="PingSaaS avatar"
                width={32}
                height={32}
                className="object-cover rounded-full mr-3"
              />
              <span className="font-medium">PingSaaS</span>
            </div>
            <div className="my-1 space-y-px">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed"
                >
                  <div className="size-8 rounded-full bg-discord-gray mr-3" />
                  <span className="font-medium">User {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text-[#b9bbbe] flex items-center">
              @your_account
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <MicIcon className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <HeadphonesIcon className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <CogIcon className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* DM header */}
        <div className="h-16 bg-[#36393f] flex items-center px-4 shadow-sm border-b border-[#202225]">
          <div className="md:hidden mr-4">
            <MenuIcon className="size-6 text-[#b9bbb3] hover:text-white cursor-pointer" />
          </div>
          <div className="flex items-center">
            <div className="relative">
              <Image
                src={"/brand-asset-profile-picture.png"}
                width={40}
                height={40}
                alt="PingSaaS avatar"
                className="object-cover rounded-full mr-3"
              />
              <div className="absolute bottom-0 right-3 size-3 bg-green-500 rounded-full border-2 border-[#36393f]" />
            </div>

            <p className="font-semibold text-white">PingSaaS</p>
          </div>

          <div className="ml-auto flex items-center space-x-4 text-[#b9bbbe]">
            <PhoneIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <VideoIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <PinIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <UserCircleIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <SearchIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <InboxIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <HelpCircleIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
          </div>
        </div>

        {/* messages */}
        <div className="flex-1 min-h-[720px] overflow-y-auto p-4 bg-discord-gray flex flex-col-reverse">
          {children}
        </div>

        {/* message input */}
        <div className="p-4 ">
          <div className="flex items-center bg-[#40444b] rounded-lg p-1">
            <PlusCircleIcon className="mx-3 text-[#b9bbbe] hover:text-white cursor-not-allowed" />
            <input
              type="text"
              readOnly
              placeholder="Message @PingSaaS"
              className="flex-1 bg-transparent py-2.5 px-1 text-white placeholder-[#72767d] focus:outline-none cursor-not-allowed"
            />
            <div className="flex items-center space-x-3 mx-2 text-[#b9bbbe]">
              <GiftIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <StickerIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <SmileIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
