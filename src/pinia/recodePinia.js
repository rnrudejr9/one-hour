import { defineStore } from "pinia";

// `defineStore()`의 반환 값(함수)을 할당할 변수의 이름은 원하는 대로 지정할 수 있지만,
// 스토어 이름을 사용하고 `use`와 `Store`로 묶는 것이 가장 좋습니다.
// 예: `useUserStore`, `useCartStore`, `useProductStore`
// 첫 번째 인자는 앱 전체에서 스토어의 고유 ID입니다.
export const useRecodeStore = defineStore("recodeStore", {
  state: () => ({ items: [] }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    addRecode(recode) {
      state.items.push({ id: "1" });
    },
  },
});
