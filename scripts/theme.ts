import { useTheme, type ThemeInstance } from "vuetify"


export const storageThemeString = 'alexgonzdev-theme'

export const toggleTheme = (theme:ThemeInstance) => {
    const isDark = theme.global.current.value.dark
    const color = isDark ? 'light' : 'dark'
    theme.global.name.value = color
    localStorage.setItem(storageThemeString, color)
}

export const setThemeFromLocalStorage = (theme:ThemeInstance) => {
    const color = localStorage.getItem(storageThemeString) ?? 'light'
    theme.global.name.value = color
}

export const getCurrentTheme = (theme:ThemeInstance):'light' | 'dark' => {
    return theme.global.current.value.dark ? 'dark' : 'light'
}