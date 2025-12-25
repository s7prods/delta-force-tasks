import { markRaw, defineAsyncComponent } from 'vue'

// 活动配置映射表
export const activities = {
    event1: {
        id: 'event1',
        name: '突击行动',
        title: '突击行动 - 精英模式',
        desc: '参与高强度突击任务，赢取限定皮肤与武器。',
        hero: '/assets/covers/battle1.jpg',
        preview: '/assets/covers/1724062863299.jpg',
        musicStrategy: 'force',
        music: [
            {
                title: 'Ave Mujica-Crucifix X instrumental',
                audio: '/assets/audio/Ave Mujica-Crucifix X instrumental.mp3',
                cover: '/assets/cover/Ave Mujica-Crucifix X.jpg'
            },
            {
                title: 'Ave Mujica-Imprisoned XII instrumental',
                audio: '/assets/audio/Ave Mujica-Imprisoned XII instrumental.mp3',
                cover: '/assets/cover/Ave Mujica-Imprisoned XII.jpg'
            },  
            {
                title: 'Ave Mujica-天球 (そら) のMúsica instrumental',
                audio: '/assets/audio/Ave Mujica-天球 (そら) のMúsica instrumental.mp3',
                cover: '/assets/cover/Ave Mujica-天球 (そら) のMúsica.jpg'
            },
        ],
        component: markRaw(defineAsyncComponent(() => import('./Event1.vue')))
    },
    event2: {
        id: 'event2',
        name: '生存挑战',
        title: '生存挑战',
        desc: '在极端环境下坚持最久，登上排行榜！',
        hero: 'https://picsum.photos/1920/1080?random=2',
        preview: 'https://picsum.photos/300/200?random=2',
        musicStrategy: 'keep',
        component: markRaw(defineAsyncComponent(() => import('./Event2.vue')))
    },
    event3: {
        id: 'event3',
        name: '特别活动',
        title: '限时特别活动',
        desc: '神秘活动开启，奖励丰厚，先到先得！',
        hero: 'https://picsum.photos/1920/1080?random=3',
        preview: 'https://picsum.photos/300/200?random=3',
        musicStrategy: 'stop',
        component: markRaw(defineAsyncComponent(() => import('./Event3.vue')))
    },
}

// 按需获取活动配置
export const getActivityConfig = (id) => {
    return activities[id] || null
}

// 获取所有活动ID
export const getAllActivityIds = () => {
    return Object.keys(activities)
}

// 获取活动组件
export const getActivityComponent = (id) => {
    return activities[id]?.component || null
}