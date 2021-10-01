import React, { FC, useContext, memo } from 'react'
import styles from './Profile.module.css'
import { Descriptions, Image, Empty } from 'antd'
import { MainContentWrapper } from 'components/mainContentWrapper'
import { CurrentUserContext } from 'pages/Layout'
import { StarOutlined, UserOutlined } from '@ant-design/icons'

export const Profile: FC = memo(() => {

    const userInfo = useContext(CurrentUserContext);

    if (!userInfo) {
        return <Empty />
    }

    return (
        <MainContentWrapper>
            <div className={styles.wrapper}>
                <div className={styles.preview}>
                    <Image width={300} src={userInfo.avatar_url} onError={() => alert("Image loading error!")} />
                    <div className={styles.info}>
                        <UserOutlined />
                        <span> · {userInfo.followers} followers · {userInfo.following} following</span>
                    </div>
                </div>
                <div className={styles.description}>
                    <Descriptions title={userInfo.login} bordered>
                        <Descriptions.Item label="UserName">{userInfo.name}</Descriptions.Item>
                        <Descriptions.Item label="Location">{userInfo.location}</Descriptions.Item>
                        <Descriptions.Item label="Bio">{userInfo.bio}</Descriptions.Item>
                        <Descriptions.Item label="Company">{userInfo.company}</Descriptions.Item>
                        <Descriptions.Item label="Disk usage">{userInfo.disk_usage}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </MainContentWrapper>
    )
})