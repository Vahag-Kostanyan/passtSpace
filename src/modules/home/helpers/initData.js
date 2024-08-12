export const initFormData = () => {
    return {
        isSmallScreen: window.innerWidth < 650,
        collections: [],
        selectedCollection: {},
        isLoading: false,
        user: null
    };
}