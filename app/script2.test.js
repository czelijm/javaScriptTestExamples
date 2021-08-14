const fetch = require('node-fetch');
const swapi = require('./script2');

describe('fetch',()=>{

    it('calls swqpi to get people 1',(done)=>{
        expect.assertions(1)
        swapi.getPeople(fetch).then(data => {
            expect(data.count).toEqual(82); 
            done();
        });
    })

    it('calls swqpi to get people 2',()=>{
        expect.assertions(1)
        return swapi.getPeople(fetch).then(data => {
            expect(data.count).toEqual(82); 
        });
    })

    it('calls swqpi to get people with a promise',()=>{
        expect.assertions(2)
        return swapi.getPeoplePromise(fetch).then(data => {
          //  console.log(data)
            expect(data.count).toEqual(82)
            expect(data.results.length).toBeGreaterThan(5)

        });
    })
})

describe('mock',()=>{
    it('getPeople count and results',()=>{
        const mockFetch = jest.fn()
            .mockReturnValue(
                Promise.resolve({
                    json:()=> Promise.resolve(
                        {
                            count :87,
                            results: [0,1,2,3,4,5]
                        }
                    )
            }))
        expect.assertions(4);
        return swapi.getPeoplePromise(mockFetch).then(data=>{
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
            expect(data.count).toEqual(87)
            expect(data.results.length).toBeGreaterThan(5)
        })
    })
})

//async 2 fie