<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark `">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          :placeholder="placeholder"
          ref="textAreaRef"
          v-autofocus
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Add a new note",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textAreaRef = ref(null);

const focusTextArea = () => {
  textAreaRef.value.focus();
};

defineExpose({
  focusTextArea,
});

const vAutofocus = {
  mounted: (el) => el.focus(),
};
</script>
