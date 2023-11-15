import { create } from 'zustand'
import defaultSheet from "../assets/defaultSheet.png";
import testSheet from "../assets/test.jpg"

const slideStore = create((set) => ({

    // Slide
    listSlide: [{
        id: 0,
        mainImage: '',
        submitImage: testSheet,
        flagList: [],
        edit: true
    }],

    setAddListSlide: (newSlide) => set((prev) => ({ listSlide: [...prev.listSlide, newSlide] })),
    setDelListSlide: () => set((prev) => ({ listSlide: prev.listSlide.slice(0, -1) })),


}));

export default slideStore;