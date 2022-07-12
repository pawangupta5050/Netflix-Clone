import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    ChevronRightIcon,
  } from "@heroicons/react/outline"
  
  import Image from "next/image"
  import HeaderItem from "./HeaderItem"
  import logo from '../Netflix_Logo_PMS.png'
  import styles from '../styles/Header.module.css'
  
  const Header = () => {
    return (
      <header className={styles.app__header}>
      <div className={styles.app__header_navbar}>
      <div className={styles.app__header_img}>
          <Image
            src={logo}
            height={100}
            width={200}
            className={styles.app__header_image}
            alt="Logo"
          />
        </div>
        <div className={styles.app__header_icon}>
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          {/* <HeaderItem title="SEARCH" Icon={SearchIcon} /> */}
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
      </div>
        
        <div className={styles.app__header_banner}>
          <h1>
            Unlimited movies, TV shows and more.
          </h1>
          <div className={styles.app__header_bannerText}>
            <p>Watch anywhere. Cancel anytime.</p>
            <p> Ready to watch? Enter your email to create or restart your membership.</p>
  
          </div>
          <div className={styles.app__header_bannerInput}>
            <input id="search" name="Search" placeholder="Email Address" />
            <button>
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
      </header>
    )
  }
  
  export default Header