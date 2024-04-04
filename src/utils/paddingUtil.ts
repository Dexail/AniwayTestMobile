export default function paddingUtil(a: number, b: number, c: number, d: number): any {
    return {
        paddingTop: a,
        paddingRight: b !== undefined ? b : a,
        paddingBottom: c !== undefined ? c : a,
        paddingLeft: d !== undefined ? d : (b !== undefined ? b : a)
    }
}
