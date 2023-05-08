import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (

    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            الفعالية الشخصية

          </h1>
          <p className="intro__scroll">انتقل للأسفل لبدء الرحلة</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);

            }}
          >
            لتبدأ الرحلة
          </button>
        </div>
      )}

      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text " style={{ alignSelf: "flex-start" }} >اختر مدينة الهبوط </p>

        <div className="team">
          <div className="team-content" style={{ marginTop: "auto" }}>
            <div className="box" >
              <img src="./images/2820.jpg" />
              <a onClick={() => {
                document.location.href = './word/wordinde.html'

              }}>
                <h3 >إدارة الوقت</h3> </a>
            </div>

            <div className="box">
              <img src="./images/3155.jpg" />
              <a onClick={() => {
                document.location.href = './quize/quindex.html'

              }}>
                <h3>مهارات الأتصال </h3></a>

            </div>

            <div className="box">
              <img src="./images/2831.jpg" />
              <a onClick={() => {
                document.location.href = './typing/indexty.html'

              }}>
                <h3> التفكير الإيجابي</h3></a>

            </div>
          </div>
        </div>
      </div>

    </div>


  );
};
