import { CircularProgress } from '@mui/material'


interface Props {
  isLoading: boolean
  text?: string
}

const LoadingScreen = ({ isLoading, text }: Props) => {
  if (!isLoading) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[2000]'>
      <div className='flex flex-col items-center gap-4'>
        <CircularProgress style={{ color: 'white' }} size={100} />
        <p className={`text-white text-3xl antialiased`}>{text || 'Loading...'}</p>
      </div>
    </div>
  )
}

export default LoadingScreen
