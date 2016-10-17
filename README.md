# vue-flatpickr (for VueJS 2.0)
A Vue component that wraps the [Flatpickr](https://github.com/chmln/flatpickr).

Demo: [https://jrainlau.github.io/vue-flatpickr/](https://jrainlau.github.io/vue-flatpickr/)

> Check out the `master` branch to view the `vue-flatpickr` for VueJS 1.0

## Install
```
npm install vue-flatpickr
```

## Usage
Enter one of your `.vue` file, load the instance `VueFlatpickr-en.vue` (or `VueFlatpickr-zh` for Chinese),  and the stylesheet `flatpickr.min.css`.
> Note that you have set the path correctly. For example, you might set the path as `../node_modules/vue-flatpickr/vue-flatpickr-default.vue` and so on.

```
<template>
  <Flatpickr />
</template>

<script>
import Flatpickr from './vue-flatpickr-default.vue'

export default {
  components: {
    Flatpickr
  }
}
</script>
```

## Options
Use `props` to pass the **options object** to `vue-flatpickr`. The options are same to the [official document](https://chmln.github.io/flatpickr/#options). And you could pass a default message to the instance by the props **message**. Here is an example below:
```
<!-- template -->
<Flatpickr :message='msg' :options='options' />

<!-- script -->
data () {
    return {
      msg: 'Click here to pick a date.',
      options: {
        allowInput: true
      }
    }
  }
```

## Data binding
The  `<Flatpickr />` tag could be use as a normal `<input>` tag, your root component could use `v-on:update='your_methods'` to receive the data comes from `<Flatpickr />`.
```
<!-- template -->
<Flatpickr @update='update'/>

<!-- script -->
data () {
    return {
      msg: 'Click here to pick a date.'
    }
  },
methods: {
    update (val) {
      this.msg = val
    }
  }
```

## Themes
`vue-flatpickr` supports all the offical themes, all you need to do is to pick up the one you like:
- `vue-flatpickr-default.vue`
- `vue-flatpickr-airbnb.vue`
- `vue-flatpickr-base16.vue`
- `vue-flatpickr-confetti.vue`
- `vue-flatpickr-dark.vue`
- `vue-flatpickr-material_blue.vue`
- `vue-flatpickr-material_green.vue`
- `vue-flatpickr-material_orange.vue`
- `vue-flatpickr-material_red.vue`

## Lisense
MIT