import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-36 h-36 rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        <div className={`${styles.flexStart} flex-row `}>
          <p className='text-white font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>
              Get
            </span>
          </p>
            <img src={arrowUp} alt="arrow" className='w-6 h-6 object-contain' />
        </div>
        <p className='text-white font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>
            Started
          </span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted