<template lang="pug">
#scrolls
  .large-space
  h4
    span Scrolls
    a.chip.circle(@click="domain.showSamples(data, '#scrolls .scroll', 'Scrolls', null, 'https://github.com/beercss/beercss/blob/main/docs/HELPERS.md')")
      i code
  .medium-space
  h6.middle-align
    span Chips
  nav.scroll
    a.chip Suggestion
    a.chip Suggestion
    a.chip.fill Selected
    a.chip.fill Selected
    a.chip Suggestion
    a.chip.fill Selected
    a.chip Suggestion
    a.chip Suggestion
    a.chip Suggestion
    a.chip Suggestion
    a.chip Suggestion
    a.chip Suggestion

  .medium-space
  h6.middle-align
    span Images
  .row.scroll
    img.small-width.small-height(v-for="i in ['', '', '', '', '', '', '', '', '', '']", :src="'/favicon.png'", :title="i")
  .medium-space
  h6.middle-align
    span Cards
  .row.scroll
    article.small-width.border(v-for="i in ['', '', '', '', '', '', '', '', '', '']", :title="i")
      h5 Title {{ i }}
      p Some text here
      .space
      nav
        button Button

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
