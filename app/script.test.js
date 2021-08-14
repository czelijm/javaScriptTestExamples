const search = require('./script');

dbMock = [
    'cans.com',
    'can.com',
    'cheese.com',
    'thisBeutifullLonelyWomenNearYouAdWebsite.com',
    'DDXXX.com',
    'awesome.com',
] 


it('this is the test', () => {
    expect('hi').toBe('hi')

})

describe('search',()=>{
    it('this is search test', () => {
        expect(search('test',dbMock)).toEqual([]);
        expect(search('can',dbMock)).toEqual(['cans.com','can.com',]);
    })
    
    it('this is undefined and null test', () => {
        expect(search(null,dbMock)).toEqual([]);
        expect(search(undefined,dbMock)).toEqual([]);
    })
    
    it('does not return more than 3', () => {
        expect(search('.com',dbMock).length).toEqual(3);
    })
})
