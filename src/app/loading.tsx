import React from "react";
import styles from "./main.module.scss";
import { PiArrowArcRightDuotone } from "react-icons/pi";

const Loading = () => {
  return (
    <div className={styles.mainLoading}>
      <div>
        <PiArrowArcRightDuotone />
        <span>Carregando...</span>
      </div>
    </div>
  );
};

export default Loading;
