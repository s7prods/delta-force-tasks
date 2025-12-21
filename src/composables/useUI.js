import { inject, onUnmounted } from 'vue'

export const useUI = () => {
    const ui = inject('ui', {
        setTitle: () => console.warn('UI上下文未提供'),
        setDesc: () => console.warn('UI上下文未提供'),
        setHero: () => console.warn('UI上下文未提供'),
        playVideo: () => console.warn('UI上下文未提供'),
        stopVideo: () => console.warn('UI上下文未提供'),
        showTextPanel: () => console.warn('UI上下文未提供'),
        addClaimButton: () => console.warn('UI上下文未提供'),
        clearDynamic: () => console.warn('UI上下文未提供')
    })

    // 可以在这里添加一些辅助函数
    const showTemporaryMessage = (message, duration = 3000) => {
        return ui.showTextPanel(`<p>${message}</p>`, duration)
    }

    const addMultipleButtons = (buttons) => {
        buttons.forEach(btn => {
            ui.addClaimButton(btn.id, btn.text)
        })
    }

    return {
        ...ui,
        showTemporaryMessage,
        addMultipleButtons
    }
}