import { useRef } from 'react';
import { create } from 'zustand'

const canvasStore = create((set) => ({

  // Ref
  canvasMainRef: null,
  canvasFlagRef: null,
  canvasSubmitRef: null,
  setCanvasMainRef: (value) => set({ canvasMainRef: value }),
  setCanavsFlagRef: (value) => set({canvasFlagRef: value }),
  setCanvasSubmitRef: (value) => set({ canvasSubmitRef: value }),

  // Ctx
  ctxMain: null,
  ctxFlag: null,
  setCtxMain: (value) => set({ ctxMain: value }),
  setCtxFlag: (value) => set({ ctxFlag: value }),

  // Rotated
  isRotated: false,
  reverseRotated: () => set((state) => ({ isRotated: state.isRotated ? false : true })),

  // Flag
  listFlag: [],
  setListFlag: (value) => set({ listFlag: value }),
  addListFlag: (newFlag) => set((state) => ({ listFlag: [...state.listFlag, newFlag] })),

}))

export default canvasStore;