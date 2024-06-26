"use client"
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { SafeUser } from "@/lib/types"
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import Avatar from "../ui/Avatar";
import { APP_NAME } from "@/utils";

type UserMenuProps = {
  currentUser : SafeUser | null
}

function UserMenu({currentUser} : UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const toggleOpen = useCallback(() => setIsOpen((value) => !value), []);

  return (
    <>
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          {APP_NAME}
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu/>
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-xl w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <div onClick={toggleOpen}>
                <MenuItem
                  label="Test1"
                ></MenuItem>
                <MenuItem
                  label="Test2"
                ></MenuItem>
                <MenuItem
                  label="Test3"
                ></MenuItem>
                <MenuItem
                  label="Test 4"
                ></MenuItem>
                <MenuItem
                  label="Home"
                ></MenuItem>
                <MenuItem onClick={signOut} label="Logout"></MenuItem>
              </div>
            ) : (
              <div onClick={toggleOpen}>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </>
  )
}

export default UserMenu