<template>
  <input type="text" :placeholder="placeholder" :value="value" @input="onInput">
</template>

<script>
import Flatpickr from 'flatpickr'

export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      fp: null
    }
  },
  computed: {
    fpOptions () {
      return JSON.stringify(this.options)
    }
  },
  watch: {
    value (val) {
      this.fp.setDate(val)
    },
    fpOptions (newOpt) {
      const option = JSON.parse(newOpt)
      for (let o in option) {
        this.fp.set(o, option[o])
      }
    }
  },
  mounted () {
    this.fp = new Flatpickr(this.$el, this.options)
    this.$emit('FlatpickrRef', this.fp)
  },
  destroyed () {
    this.fp = null
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
      this.$destroy()
    }
  }
}
</script>
