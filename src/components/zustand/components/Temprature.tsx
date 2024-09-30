import useTemperatureStore from '../store/useTemperatureStore';

const Temprature = () => {
    const temperature = useTemperatureStore((state) => state.temperature);
    const setTemperature = useTemperatureStore((state) => state.setTemperature);


    return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold text-center'>Temperature: {temperature}</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => setTemperature(temperature + 1)}>Increase Temperature</button>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => setTemperature(temperature - 1)}>Decrease Temperature</button>
    </div>
  )
}

export default Temprature
