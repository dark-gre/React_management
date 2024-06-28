import { useState, useEffect } from "react";
import { Space, Input, Button } from "antd";
import styles from './login.module.scss'
// import initLoginBg from './init.ts'//会报错（红色下划线）需要在vite-env.d.ts声明
const Login = () => {
    //生命周期，，加载完这个函数组件之后，执行
    // passwordVisible
    // const [passwordVisible,setPasswordVisible]= useState('Hide')
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <h1>用户登录</h1>

                    <Input placeholder="请输入登录账户" />
                    <Input.Password placeholder="请输入密码" />

                    <Button type="primary" block onClick={() => { console.log('button') }
                    }>
                        登录
                    </Button>
                </Space>
            </div>

        </div>
    )
}

export default Login;