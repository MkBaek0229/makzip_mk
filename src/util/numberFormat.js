// 1000단위로 .을써줘서끊어쓰는 숫자표기법사용하기

export const numberFormat = (num) => {
    return new Intl.NumberFormat().format(num)
}