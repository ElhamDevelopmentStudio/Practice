import { create } from "zustand";
import { devtools } from "zustand/middleware";


interface LoggerState {
    loggedValue:  number;
    increase: () => void;
}

const useLoggerStore = create<LoggerState>()(
    devtools(
      (set) => ({
        loggedValue: 0,
        increase: () => set((state) => ({ loggedValue: state.loggedValue + 1 })),
    })
))

export default useLoggerStore;
