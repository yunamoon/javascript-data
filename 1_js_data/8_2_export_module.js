// export keyword로 내보내기 가능.
export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8)
}

export function getRendom() {
    return Math.floor(Math.random()*10);
}

export const user = {
    name : '문유나',
    age : 29
}