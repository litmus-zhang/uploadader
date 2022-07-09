// const removeDuplicate = (data : object[], prop: string) =>
// {
//     console.log(data, prop)
// }

// removeDuplicate([{name: 'litmus', email: 'test@dev.com'}], 'email')

// Remove item with the same email address

export default function removeDuplicate(data : object[], prop: string) {
    const unique = data.filter((obj, pos, arr) => {
        return arr.map((mapObj : any )=> mapObj[prop]).indexOf(obj[prop]) === pos;
    });
    return unique;
}

const data: object[] = [
{name: 'Leigh', email: 'leigh@gmail.com'},
{name: 'Bob', email: 'bob@gmail.com'},
 {name: 'Chris', email: 'Chris@gmail.com'},
 {name: 'Billie', email: 'billie@gmail.com'},
 {name: 'Chris', email: 'Chris@gmail.com'},
 {name: 'Billie', email: 'billie@gmail.com'},
]
