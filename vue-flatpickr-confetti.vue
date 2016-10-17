<template>
	<input type="text" :value='message' @change='inputting' @input='inputting'>
</template>

<script>
import Flatpickr from './assets/flatpickr'

export default {
	props: {
    options: {
      type: Object,
      default: () => {
      	return {}
      }
    },
    message: {
    	type: String,
    	default: () => {
    		return ''
    	}
    }
  },
  watch: {
    'options': {
      handler (val, oldVal) {
        new Flatpickr(this.$el, this.options)
      },
      deep: true
    }
  },
	methods: {
		inputting (e) {
			this.$emit('update', e.target.value)
		}
	},
  mounted () {
    new Flatpickr(this.$el, this.options)
  }
}
</script>

<style scoped>
  @import url('./assets/flatpickr.confetti.min.css');
</style>