<template>
  <div>
    <h3 m="b-3">
      Nested Dialogs
    </h3>

    <label class="flex mb-2">
      <input
        v-model="closeOnBack"
        type="checkbox"
      >
      <span class="font-semibold ml-2">
        Close on Back
      </span>
    </label>

    <div :key="closeOnBack ? '1' : '2'">
      <GDialog
        v-model="dialogs.first"
        max-width="400"
        :close-on-back="closeOnBack"
      >
        <DialogToolbar @close="dialogs.first = false" />

        <div p="x-5 y-4">
          <h3 m="b-4">
            First Dialog
          </h3>

          <p m="b-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas aliquid, voluptates voluptas commodi inventore.
          </p>

          <Btn m="r-2" @click="dialogs.second = true">
            Second
          </Btn>

          <Btn m="r-2" @click="dialogs.third = true">
            Third
          </Btn>
        </div>
      </GDialog>

      <GDialog
        v-model="dialogs.second"
        fullscreen
        :close-on-back="closeOnBack"
      >
        <DialogToolbar @close="dialogs.second = false" />

        <div p="x-5 y-4">
          <h3 m="b-4">
            Second Dialog
          </h3>

          <p m="b-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sit.
          </p>

          <Btn m="r-2" @click="dialogs.third = true">
            Third
          </Btn>
        </div>
      </GDialog>

      <GDialog
        v-model="dialogs.third"
        max-width="500"
        :close-on-back="closeOnBack"
      >
        <DialogToolbar @close="dialogs.third = false" />

        <div p="x-5 y-4">
          <h3 m="b-4">
            Third Dialog
          </h3>
          <p m="b-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto aperiam quasi recusandae nulla officia quibusdam libero et alias minus?
          </p>
        </div>
      </GDialog>
    </div>

    <Btn
      m="r-2"
      @click="dialogs.first = true"
    >
      First
    </Btn>

    <Btn
      m="r-2"
      @click="dialogs.second = true"
    >
      Second
    </Btn>

    <Btn m="r-2" @click="dialogs.third = true">
      Third
    </Btn>
  </div>
</template>

<script lang="ts">
import { GDialog } from 'gitart-vue-dialog'

import DialogToolbar from '@/components/Dialog/DialogToolbar.vue'

import Btn from '@/components/UI/Btn/Btn.vue'

export default defineComponent({
  name: 'DialogLayout',
  components: {
    GDialog,
    DialogToolbar,
    Btn,
  },

  setup() {
    const closeOnBack = ref(false)

    const dialogs = reactive({
      first: false,
      second: false,
      third: false,
    })

    return {
      closeOnBack,
      dialogs,
    }
  },
})
</script>
