const people = [
    { key: '00001', name: 'Ala', age: 25 },
    { key: '00002', name: 'Ola', age: 21 },
    { key: '00003', name: 'Ela', age: 28 },
    { key: '00004', name: 'Iza', age: 24 },
]

const arrayToObject = function (array, keyPropertyName = 'id') {
    return array.reduce(
        function (reduced, person, index, array) {
            const key = person[keyPropertyName]
            const value = person

            delete value[keyPropertyName]

            reduced[key] = value

            return reduced
        },
        {}
    )
}

const peopleObject = arrayToObject(people, 'key')

console.log(peopleObject)