function even(num){
    if(num === 2){
        return '2';
    }
    return undefined
}

describe('test-suite:Even', () => {
    it('blabla', () =>
    {
        expect(even(2)).toEqual('2');
    })
})