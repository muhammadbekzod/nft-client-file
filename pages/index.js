import { Icon, Button } from "semantic-ui-react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { symlink } from "fs";

export default function Home() {
  return (
    <div className={styles.mainBg}>
      <div className={styles.textContent}>
        <h1>Discover paint, collect, and sell extraordinary NFTs</h1>
        <p>YU NFT market is made by Yeungnam University students.</p>
        <div className={styles.btnContainer}>
          <div className={styles.btnBox}>
            <div className={styles.btnImg}>
              <img
                src="https://i.pinimg.com/originals/6c/79/ac/6c79ac1ee58b1ab90d7bbc0beab77a1a.jpg"
                alt="content"
                style={{borderRadius: "10px",height: "100%",display: "flex",justifyContent: "center"}}
              />
            </div>
            <Link href="https://testnets.opensea.io/">
              <button className={[styles.btnCustom, styles.btnText1].join(' ')}><span>My NFT</span></button>
            </Link>
          </div>
          <div className={styles.btnBox}>
            <div className={styles.btnImg}>
              <img
                src="https://mobcompany.info/wp-content/uploads/2019/09/02-84.jpg"
                alt="content"
                style={{borderRadius: "10px",height: "100%",display: "flex",justifyContent: "center"}}
              />
            </div>
            <Link href="/draw">
              <button className={[styles.btnCustom, styles.btnText2].join(' ')}><span>Draw NFT</span></button>
            </Link>
          </div>
          <div className={styles.btnBox}>
            <div className={styles.btnImg}>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/224431915/original/d5140f0cac6735519dcc60aa898ebb18a1c8049d/make-10-000-unique-nfts.jfif"
                alt="content"
                style={{borderRadius: "10px",height: "100%",display: "flex",justifyContent: "center"}}
              />
            </div>
            <Link href="/create">
              <button className={[styles.btnCustom, styles.btnText3].join(' ')}><span>Make NFT</span></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
