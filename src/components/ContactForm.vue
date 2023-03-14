<template>
  <form @submit="handleSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Tên</label>
      <input class="form-control" id="name" v-model="contactFormLocal.name" />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">E-mail</label>
      <input type="email" class="form-control" id="email" v-model="contactFormLocal.email" />
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">Địa chỉ</label>
      <input class="form-control" id="address" v-model="contactFormLocal.address" />
    </div>

    <div class="mb-3">
      <label for="phone" class="form-label">Điện thoại</label>
      <input class="form-control" id="phone" v-model="contactFormLocal.phone" />
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="favorite"
        v-model="contactFormLocal.favorite"
      />
      <label class="form-check-label" for="favorite"> Liên hệ yêu thích </label>
    </div>

    <button class="btn btn-primary" type="submit">
      <i class="fa-solid fa-floppy-disk"></i> Lưu
    </button>

    <button v-if="showDeleteButton" class="btn btn-danger" type="button" @click="handleDelete">
      <i class="fa-solid fa-trash"></i> Xóa
    </button>
  </form>
</template>

<script>
export default {
  props: ['contactForm', 'showDeleteButton'],
  data() {
    return {
      contactFormLocal: this.contactForm
    }
  },
  emits: ['submit', 'delete'],
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      this.$emit('submit', this.contactFormLocal)
    },
    handleDelete() {
      this.$emit('delete')
    }
  }
}
</script>
