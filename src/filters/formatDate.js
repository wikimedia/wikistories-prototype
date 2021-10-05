import Vue from 'vue';

Vue.filter('formatDate', function(value) {
  if (value) {
    return (new Date(value)).toLocaleString()
  }
  return undefined;
});
