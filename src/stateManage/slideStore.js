import { create } from 'zustand'
import defaultSheet from "../assets/defaultSheet.png";

const slideStore = create((set) => ({

    // Slide
    listSlide: [{
        id: 0,
        mainImage: defaultSheet,
        submitImage: defaultSheet,
        num: 1,
        tempo: 110,
        songform: [],
        flagList: [],
        edit: true,
    }],

    setAddListSlide: (newSlide) => set((prev) => ({ listSlide: [...prev.listSlide, newSlide] })),
    setDelListSlide: () => set((prev) => ({ listSlide: prev.listSlide.slice(0, -1) })),

    // nowIndex : edit == true
    nowIndex: 0,
    setNowIndex: (newIndex) => set({ nowIndex: newIndex }),

    // RotatedSlide
    listRotatedSlide: [],
    addListRotatedSlide: (newSlide) => set((prev) => ({ listRotatedSlide: [...prev.listRotatedSlide, newSlide] })),
    setListRotatedSlide: (list) => set({ listRotatedSlide: list }),
    resetListRotatedSlide: () => set({ listRotatedSlide: [] }),

    // selectIndex : select == true
    selectIndex: 0,
    setSelectIndex: (newIndex) => set({ selectIndex: newIndex }),

}));

export default slideStore;