import { defineStore, acceptHMRUpdate } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "lorem we q w rw  fsd cvf gfd sfdfdkfsxmgl kdsngzskfnls dznf s rs f",
        },
        {
          id: "id2",
          content:
            "533 s2111112222 lorem we q w rw  fsd cvf gfd sfdfdkfsxmgl kdsngzskfnls dznf s rs f",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      console.log(newNoteContent);
      let id = new Date().getTime().toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((el) => el.id !== idToDelete);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
