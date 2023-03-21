import styles from "./VideoBG.module.css";

function VideoBG() {
  return (
    <>
      <div className={styles.videoContainer}>
        <div className={styles.videoBackground}>
          <div className={styles.videoForeground}>
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qEhhIHjaJWk?autoplay=1?controls=0&amp;start=31"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
              autoPlay
            ></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoBG;
