<template>
  <div class="modal is-active p-5">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">Are you sure want to delete?</section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const modalCardRef = ref(null);

const storeNotes = useStoreNotes();

const closeModal = () => {
  emit("update:modelValue");
};

onClickOutside(modalCardRef, closeModal);

// Keyboard control
const handleKeyBoard = (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
};
onMounted(() => {
  document.addEventListener("keyup", handleKeyBoard);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyBoard);
});
</script>
