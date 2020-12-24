export default {
    add(state) {
        state.count++;
    },
    sub(state) {
        state.count--;
    },
    sum(state, data) {
        state.count += data
    }
}
