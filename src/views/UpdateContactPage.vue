<template>
  <div class="container pt-4">
    <h2>Hiệu chỉnh liên hệ</h2>

    <contact-form
      v-if="!!contactForm"
      :contact-form="contactForm"
      :show-delete-button="true"
      @submit="handleSubmit"
      @delete="handleDelete"
    ></contact-form>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import ContactService from '@/services/contact.service'

export default {
  components: { ContactForm },
  data() {
    return {
      contactForm: null
    }
  },
  mounted() {
    ContactService.getById(this.$route.params.id).then((res) => {
      this.contactForm = res.data
    })
  },
  methods: {
    async handleSubmit(data) {
      await ContactService.updateById(this.$route.params.id, data)

      this.$router.push('/')
    },
    async handleDelete() {
      if (confirm('Bạn có muốn xóa liên hệ này?')) {
        await ContactService.deleteById(this.$route.params.id)
        this.$router.push('/')
      }
    }
  }
}
</script>
