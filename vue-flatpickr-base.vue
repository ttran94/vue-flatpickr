<template>
<input type="text" :value='message' @change='inputting' @input='inputting'>
</template>

<script>
import Flatpickr from './assets/flatpickr'

export default {
  data () {
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
    value: {
      type: String,
      default: () => ''
    }
  },
  watch: {
    options (opt) {
      for (let o in opt) {
        this.fp.set(o, opt[o])
      }
    }
  },
  methods: {
    inputting (e) {
      this.$emit('input', e.target.value)
    }
  },
  mounted () {
    this.fp = new Flatpickr(this.$el, this.options)
    this.$emit('FlatpickrRef', this.fp)
  },
  destroyed () {
    this.fp.destroy()
  }
}
</script>
