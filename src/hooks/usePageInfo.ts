
const usePageInfo = () => {
    const getPageHeaderPosition = () => {
        let position: { left: number, top: number, right: number, bottom: number, height: number, width: number, x: number, y: number } = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0,
            x: 0,
            y: 0
        };

        const pageHeader = document.getElementById('page-header');
        if (pageHeader) {
            position = pageHeader.getBoundingClientRect();
        }
        return position

    }

    return getPageHeaderPosition;
}

export default usePageInfo