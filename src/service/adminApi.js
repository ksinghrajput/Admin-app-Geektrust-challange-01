export function getAllUsers() {
    try {
        const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
        return fetch(url).then(data => data.json())
    } catch (error) {
        return [];
    }
}