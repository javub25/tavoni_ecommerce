export const getOrderDate = () => {
    const today = new Date();
    
    const currentDate = {
        day: today.getDate().toString().padStart(2, '0'),
        month: (today.getMonth() + 1).toString().padStart(2, '0'),
        year: today.getFullYear().toString().slice(-2)
    }
    return {currentDate};
}