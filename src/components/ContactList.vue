<template>
  <ul class="list-group mt-2">
    <li
      v-for="contactItem in contactList"
      class="list-group-item list-group-item-action"
      :class="{
        active: activeId == contactItem._id
      }"
      :key="contactItem._id"
      @click="changeActiveId(contactItem._id)"
    >
      {{ contactItem.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['contactList', 'activeId'],
  emits: ['update:activeId'],
  methods: {
    changeActiveId(id) {
      this.$emit('update:activeId', id)
    }
  }
}
</script>
