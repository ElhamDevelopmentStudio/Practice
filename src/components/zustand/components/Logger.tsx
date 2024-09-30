import useLoggerStore from "../store/useLoggerStore";

const Logger = () => {
    const loggedValue = useLoggerStore((state) => state.loggedValue);
    const increase = useLoggerStore((state) => state.increase);

    return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold text-center'>Logged Value: {loggedValue}</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={increase}>Increase</button>
    </div>
  )
}

export default Logger
