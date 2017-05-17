class defaultIcon extends  L.Icon.Default {
    constructor() {
        super();
        this.options = {
            iconUrl: 'default-icon.png',
            shadowUrl: 'marker-shadow.png',
        }
    }
}

export default defaultIcon;