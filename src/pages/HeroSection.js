import { Button } from "@mui/material";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.card1bg} />
        </div>
        <div className={styles.frame2}>
          <div className={styles.logo}>
            <img
              className={styles.carbonfinanceIcon}
              alt=""
              src="/carbonfinance.svg"
            />
            <div className={styles.risefinance}>
              <span className={styles.rise}>Rise</span>
              <b>Finance</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame3}>
        <Button className={styles.frame4}>
          <div className={styles.leftSection}>
            <div className={styles.scaleFintechSafeContainer}>
              <p className={styles.scaleFintech}>
                <span className={styles.scaleFintech1}>
                  <span className={styles.scaleFintech2}>Scale Fintech</span>
                </span>
                <span className={styles.span}>
                  <span className={styles.scaleFintech1}>{` `}</span>
                </span>
              </p>
              <p className={styles.scaleFintech}>
                <span className={styles.span}>
                  <span className={styles.safeAndSecure2}>Safe And Secure</span>
                </span>
              </p>
            </div>
            <div className={styles.shipYourFintechContainer}>
              <span
                className={styles.shipYourFintech}
              >{`Ship your fintech products to your customers with fast and reliable processes. `}</span>
              <span className={styles.secureAndHighly}>
                Secure and highly customizable
              </span>
              <span className={styles.shipYourFintech}>
                . Rise Finance is the best partner for you if you want to scale
                your finance products worldwide.
              </span>
            </div>
            <div className={styles.button}>
              <div className={styles.consultation}>consultation</div>
            </div>
          </div>
        </Button>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.frame5}>
          <div className={styles.rightSection}>
            <div className={styles.cardWithBg}>
              <div className={styles.card1bg1} />
              <div className={styles.card1}>
                <div className={styles.card1bg2} />
                <img
                  className={styles.card1Mask}
                  alt=""
                  src="/card-1-mask.svg"
                />
                <div className={styles.div}>09/25</div>
                <div className={styles.div1}>5282 3456 7890 1289</div>
                <img
                  className={styles.mastercardLogoIcon}
                  alt=""
                  src="/mastercard-logo.svg"
                />
                <div className={styles.div2}>$5,750,20</div>
                <div className={styles.currentBalance}>Current Balance</div>
              </div>
            </div>
            <div className={styles.cardSmWithBg}>
              <div className={styles.card1bg3} />
              <div className={styles.card2}>
                <div className={styles.bg} />
                <img
                  className={styles.card2Mask}
                  alt=""
                  src="/card-2-mask.svg"
                />
                <div className={styles.div3}>09/25</div>
                <div className={styles.div4}>1289</div>
                <div className={styles.card2Child} />
                <div className={styles.card2Item} />
                <div className={styles.card2Inner} />
                <div className={styles.ellipseDiv} />
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <div className={styles.creditCard}>Credit Card</div>
                <img className={styles.logoIcon} alt="" src="/logo.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.burgerMenu}>
            <div className={styles.burgerMenuChild} />
            <div className={styles.burgerMenuItem} />
            <div className={styles.burgerMenuInner} />
          </div>
        </div>
        <div className={styles.card1bg4} />
      </div>
    </div>
  );
};

export default HeroSection;
