export function getAllUsers() {
    try {
        const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
        return fetch(url)
            .then(data => data.json())
            .then(user => {
            return user.map(item => {
                return {...item,'state': false }})
        })
    } catch (error) {
        return [];
    }
}