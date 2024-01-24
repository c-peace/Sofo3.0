import { create } from 'zustand'

const modalStore = create((set) => ({

    // modal view control
    isAbleModal: true,
    setAbleModal: () => set((prev) => ({isAbleModal: prev.isAbleModal ? false : true})),
    
}));

export default modalStore;