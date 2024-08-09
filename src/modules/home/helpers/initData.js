export const initFormData = () => {
    return {
        isSmallScreen: window.innerWidth < 650,
        collections: [],
        selectedCollection: {},
        user: null
    };
}