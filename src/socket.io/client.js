let instance;
class SIOClient{
    constructor() {
        if(instance)  {
            return this;
        }
        this.socket = null;
        instance = this;
    }

    init() {
        let self = this;
        return new Promise(
            (resolve, reject) => {
                this.socket = io.connect('http://localhost:8089/', {reconnect: true});
                this.socket.on('connect', function () {
                    resolve();
                });
            });
    }
}

export default SIOClient;