import { apple , bill , google } from "../assets"
import styles , {layout} from "../style"

const Billing = () => {
  return (
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="bill" className="w-full h-full relative z-10"/>
        </div>

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Easily control your <br className="sm:block hidden"/> billing & invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi animi adipisci, rem aspernatur magni eveniet? A assumenda est ipsa quidem minima ab placeat. Quasi ex nihil dignissimos atque exercitationem accusantium.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="apple_play" className="w-32 h-11 object-contain mr-5 cursor-pointer"/>
            <img src={google} alt="google_play" className="w-32 h-11 object-contain cursor-pointer"/>
          </div>
        </div>
      </section>
  )
}

export default Billing