import { create } from 'zustand'

const useStore = create((set) => ({
  hiriOrKata: 'hirigana',
  numberOfQuestions: 0,
  setHiriOrKata: () => set((kanaType) => ({hiriOrKata: kanaType})),
  setNumberOfQuestions: ()=> set((number) => ({numberOfQuestions: number}))
}))