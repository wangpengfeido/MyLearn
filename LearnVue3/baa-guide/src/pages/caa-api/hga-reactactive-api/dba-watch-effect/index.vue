<template>
  <div>
    <baa></baa>
    <bba-stop-watch></bba-stop-watch>
    <bca-clear-effect></bca-clear-effect>
    <bda-effect-refresh-opportunity></bda-effect-refresh-opportunity>
    <bea-on-track-on-trigger></bea-on-track-on-trigger>
  </div>
</template>

<script>
import Baa from "./baa.vue";
import BbaStopWatch from "./bba-stop-watch.vue";
import BcaClearEffect from "./bca-clear-effect";
import BdaEffectRefreshOpportunity from "./bda-effect-refresh-opportunity.vue";
import BeaOnTrackOnTrigger from "./bea-on-track-on-trigger.vue";

export default {
  name: "dba-watch-effect",
  components: {
    Baa,
    BbaStopWatch,
    BcaClearEffect,
    BdaEffectRefreshOpportunity,
    BeaOnTrackOnTrigger,
  },
};
</script>

<style>
</style>
