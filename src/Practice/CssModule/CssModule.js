import React from 'react';
import styles from './CssModule.module.scss';

const CssModule = () => {
  return (
    <>
      <h1 className={styles.h1}>Module 테스트입니다.</h1>
      <h1 className="no-module">저는 module이 없는 클래스에요</h1>
    </>
  )
}

export default CssModule;