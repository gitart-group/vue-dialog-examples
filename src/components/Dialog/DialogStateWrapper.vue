<template>
  <div>
    <slot :model="model" :input="onInput" />

    <Btn @click="onInput(true)">
      {{ label }}
    </Btn>
  </div>
</template>

<script lang="ts">
import Btn from '@/components/UI/Btn/Btn.vue'

export default defineComponent({
  name: 'DialogStateWrapper',
  components: {
    Btn,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
  },

  setup() {
    const model = ref(false)

    const onInput = (value: boolean): void => {
      model.value = value
    }

    return {
      model,
      onInput,
    }
  },
})
</script>
