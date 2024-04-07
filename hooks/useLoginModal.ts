import { create } from "zustand";

type LoginModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }

const useLoginModal = create<LoginModalStore>((set) =>({
    isOpen : false,
    onClose : () => set({isOpen : false}),
    onOpen : () => set({isOpen : true})
}))

export default useLoginModal