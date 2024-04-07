"use client"

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

function Home() {
  
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  return (
    <div>
      <button onClick={loginModal.onOpen}>Login</button>
      <button onClick={registerModal.onOpen}>Register</button>
    </div>
  )
}

export default Home