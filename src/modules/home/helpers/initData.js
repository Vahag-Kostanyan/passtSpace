export const initFormData = () => {
    return {
        isSmallScreen: window.innerWidth < 650,
        collections: [],
        selectedCollection: {},
        pastes: [],
        isLoading: false,
        isPastesLoading: false,
        user: null
    };
}