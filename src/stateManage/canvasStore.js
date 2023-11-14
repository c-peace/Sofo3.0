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
  setListFlag: (value) => set({ listFlag: value }),
}))

export default canvasStore;