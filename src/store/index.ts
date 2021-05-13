import { reactive, readonly } from 'vue'

export type StoreState = {
  currentComponent: string;
  feedbackType: string;
  message: string;
  apiKey: string;
  fingerprint: string;
  currentPage: string;
}

const initialState: StoreState = {
  currentComponent: 'SelectFeedbackType',
  message: '',
  feedbackType: '',
  fingerprint: '',
  apiKey: '',
  currentPage: ''
}

const state = reactive<StoreState>({ ...initialState })

export function setCurrentComponent (component: string): void {
  state.currentComponent = component
}

export function setMessage (message: string): void {
  state.message = message
}

export function setFeedbackType (feedbackType: string): void {
  state.feedbackType = feedbackType
}

export function setFingerPrint (fingerPrint: string): void {
  state.fingerprint = fingerPrint
}

export function setApiKey (apiKey: string): void {
  state.apiKey = apiKey
}

export function setCurrentPage (currentPage: string): void {
  state.currentPage = currentPage
}

export function resetStore (): void {
  setCurrentComponent(initialState.currentComponent)
  setMessage(initialState.message)
  setFeedbackType(initialState.feedbackType)
  setFingerPrint(initialState.fingerprint)
  setApiKey(initialState.apiKey)
  setCurrentPage(initialState.currentComponent)
}

export default readonly(state)
