
const APIError = ({error}: {error: string}) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4' role='alert'>
        <h1 className='text-4xl font-bold text-center text-red-400 '>Error: {error}</h1>
        </div>
    </div>
  )
}

export default APIError
