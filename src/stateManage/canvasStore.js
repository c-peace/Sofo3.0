import { createRef } from 'react';
import { create } from 'zustand'

const canvasStore = create((set) => ({

  // Ref
  canvasMainRef: createRef(null),
  canvasFlagRef: createRef(null),
  canvasSubmitRef: createRef(null),

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
}))

export default canvasStore;