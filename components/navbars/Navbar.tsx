"use client";
import { SafeUser } from "@/lib/types";
import Container from "../ui/Container";
import UserMenu from "./UserMenu";

type NavbarProps = {
  user: SafeUser | null;
};

function Navbar({ user }: NavbarProps) {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            LOGO
            <UserMenu currentUser={user}/>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
