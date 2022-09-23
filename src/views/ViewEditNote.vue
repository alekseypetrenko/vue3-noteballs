<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
    >
      <template #buttons>
        <RouterLink class="button is-link is-light mr-3" to="/"
          >Cancel</RouterLink
        >

        <button
          :disabled="!noteContent"
          class="button is-link has-background-link"
          @click="handleSave"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
    {{ noteContent }}
  </div>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const noteId = route.params.id;

const storeNotes = useStoreNotes();
const noteContent = ref(storeNotes.getNoteText(noteId));
const handleSave = () => {
  storeNotes.udapteNote({ id: noteId, content: noteContent.value });
  router.push("/");
};
</script>
