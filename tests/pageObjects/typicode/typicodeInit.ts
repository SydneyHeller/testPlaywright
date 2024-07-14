export class TypicodeInit {

    async randomUserId() {
        const min = 1
        const max = 10
        const userId = Math.floor(Math.random() * (max - min + 1)) + min
        return userId
    }

    async getUserEmail(userId) {
        const req = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'GET',
        })
        const res = await req.json()
        console.log(`For ${userId} is registered email : ${res.email}`)
    }

    async verifyPosts(userId) {
        const req = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
            method: 'GET',
        })
        const res = await req.json()

        for (let i = 0; i < res.length; i++) {
            if (typeof res[i].id == "number") {
                if (res[i].id < 1 || res[i].id > 100) {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    }

    async createPost(userId) {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const response = await req
        return response.status
    }
}