import { createRef } from 'react';
import { create } from 'zustand'

const canvasStore = create((set) => ({

  // canvas Ref
  canvasMainRef: createRef(null),
  canvasFlagRef: createRef(null),
  canvasSubmitRef: createRef(null),

  // btn Ref
  numRef: createRef(null),
  tempoRef: createRef(null),
  imageRef: createRef(null),

  // Ctx
  ctxMain: null,
  ctxFlag: null,
  setCtxMain: (value) => set({ ctxMain: value }),
  setCtxFlag: (value) => set({ ctxFlag: value }),

  // SongForm
  listSongform: [],

  // Rotated
  isRotated: false,
  reverseRotated: () => set((state) => ({ isRotated: state.isRotated ? false : true })),

  // Flag
  listFlag: [],
  // flagCavnasDraw에서 쓰임.
  setListFlag: (value) => set({ listFlag: value }),
  setResetListFlag: () => set({ listFlag: []}),
  setDelListFlag: () => set((prev) => ({ listSlide: prev.listSlide.slice(0, -1) })),
  
}))

export default canvasStore;