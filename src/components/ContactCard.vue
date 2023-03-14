<template>
  <dl class="row">
    <dt class="col-3">Tên</dt>
    <dd class="col-9">{{ contact.name }}</dd>

    <dt class="col-3">E-mail</dt>
    <dd class="col-9">{{ contact.email }}</dd>

    <dt class="col-3">Địa chỉ</dt>
    <dd class="col-9">{{ contact.address }}</dd>

    <dt class="col-3">Điện thoại</dt>
    <dd class="col-9">{{ contact.phone }}</dd>

    <dt class="col-3">Liên hệ yêu thích</dt>
    <dd class="col-9">
      <i v-if="!!contact.favorite" class="fa-solid fa-check"></i>
    </dd>
  </dl>
</template>

<script>
import ContactService from '@/services/contact.service'

export default {
  props: ['id'],
  data() {
    return { contact: {} }
  },
  mounted() {
    ContactService.getById(this.id).then((res) => {
      this.contact = res.data
    })
  }
}
</script>
