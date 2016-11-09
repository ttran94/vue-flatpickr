<template>
	<input type="text" :value='message' @change='inputting' @input='inputting'>
</template>

<script>
import Flatpickr from './assets/flatpickr'

export default {
  data() {
    return {
      fp: null
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    message: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    inputting (e) {
      this.$emit('update', e.target.value)
    }
  },
  mounted () {
    this.fp = new Flatpickr(this.$el, this.options)
  },
  destroyed() {
    this.fp.destroy()
  }
}
</script>

<style scoped>
  @import url('./assets/flatpickr.min.css');
</style>
