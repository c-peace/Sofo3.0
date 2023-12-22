import { createRef } from 'react';
import { create } from 'zustand'

const canvasStore = create((set) => ({

  // canvas Ref
  canvasMainRef: createRef(null),
  canvasFlagRef: createRef(null),
  canvasSubmitRef: createRef(null),

  // Ctx
  ctxMain: null,
  ctxFlag: null,
  ctxSubmit: null,
  setCtxMain: (value) => set({ ctxMain: value }),
  setCtxFlag: (value) => set({ ctxFlag: value }),
  setCtxSubmit: (value) => set({ ctxSubmit: value }),

  // Rotated
  isRotated: false,
  reverseRotated: () => set((state) => ({ isRotated: state.isRotated ? false : true })),

  // RotatedCanvas
  canvasRotatedRef: createRef(null),
  ctxRotated: null,
  setCtxRotated: (value) => set({ ctxRotated: value }),

  // btn Ref
  numRef: createRef(null),
  tempoRef: createRef(null),
  imageRef: createRef(null),

  // SongForm
  listSongform: [],

  // Routine
  isColorApplied: false,
  reverseColorApplied: () => set((state) => ({ isColorApplied: state.isColorApplied ? false : true })),
  isTypeApplied: false,
  reverseTypeApplied: () => set((state) => ({ isTypeApplied: state.isTypeApplied ? false : true })),

  // Flag
  listFlag: [],
  
  // flagCavnasDraw에서 쓰임.
  setListFlag: (value) => set({ listFlag: value }),
  setResetListFlag: () => set({ listFlag: [] }),
  setDelListFlag: () => set((prev) => ({ listSlide: prev.listSlide.slice(0, -1) })),

}))

export default canvasStore;