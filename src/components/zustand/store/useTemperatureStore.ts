import { create } from "zustand";

interface TempratureState {
    temperature: number;
    setTemperature: (temperature: number) => void;  
}

const useTemperatureStore = create<TempratureState>((set) => ({
    temperature: 20,
    setTemperature: (temp) => set(() => ({ temperature: temp })),
}));

export default useTemperatureStore;
