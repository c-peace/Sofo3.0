import { create } from 'zustand'
import defaultSheet from "../assets/defaultSheet.png";
import testSheet from "../assets/test.jpg"

const slideStore = create((set) => ({

    // Slide
    listSlide: [{
        id: 0,
        mainImage: testSheet,
        submitImage: testSheet,
        num: 5,
        tempo: 50,
        flagList: [{
            x: Math.floor(Math.random() * 951) + 120,
            y: Math.floor(Math.random() * 100) + 1500,
            width: 50,
            height: 50,
            strokeStyle: "red",
            fillStyle: "white",
            name: 'A',
            isDragging: false
        }],
        edit: true
    }],

    setAddListSlide: (newSlide) => set((prev) => ({ listSlide: [...prev.listSlide, newSlide] })),
    setDelListSlide: () => set((prev) => ({ listSlide: prev.listSlide.slice(0, -1) })),

    nowIndex: 0,
    setNowIndex: (newIndex) => set({nowIndex: newIndex}),


}));

export default slideStore;