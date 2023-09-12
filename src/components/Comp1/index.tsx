// import "./comp1.scss";//全局引入 普通的写法

//模块化引入//修改css文件夹的的名称，module
import styles from "./comp1.module.scss";

const Comp = () => {
  return (
    // <div className="box">
    <div className={styles.box}>
      <p>这是comp1内容</p>
    </div>
  );
};

export default Comp;
