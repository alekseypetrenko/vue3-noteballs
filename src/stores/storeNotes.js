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
    udapteNote(note) {
      this.notes.find((el) => el.id === note.id).content = note.content;
    },
  },
  getters: {
    getNoteText: (state) => (id) => {
      return state.notes.find((el) => el.id === id).content;
    },
    totalNotesCount: (state) => state.notes.length,
    allCharactersCount: (state) =>
      state.notes.reduce((acc, cur) => {
        return acc + cur.content.length;
      }, 0),
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
