const GUID = () => {
    const _ID = () => {
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }
    return `${_ID()+_ID()}-${_ID()}-${_ID()}-${_ID()}-${_ID()+_ID()+_ID()}`;
}

export default GUID;