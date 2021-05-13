<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedBackType"
    @next="next"
  />
</template>

<script lang="ts">
import useNavigation, { Navigation } from '@/hooks/navigation'
import { defineComponent } from 'vue'
import useStore from '../../hooks/store'
import { StoreState, setFeedbackType } from '../../store'
import Success from './Success.vue'
import ErrorState from './Error.vue'
import SelectFeedbackType from './SelectFeedbackType.vue'
import WriteAFeedback from './WriteAFeedback.vue'

interface SetupReturn {
  store: StoreState;
  handleSelectFeedBackType(type: string): void;
  next: Navigation['next']
}
export default defineComponent({
  components: { SelectFeedbackType, WriteAFeedback, ErrorState, Success },

  setup (): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedBackType (type: string): void {
      setFeedbackType(type)
    }

    return {
      store,
      handleSelectFeedBackType,
      next
    }
  }

})
</script>
